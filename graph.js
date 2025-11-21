// --- Global Variables ---
const width = window.innerWidth;
const height = window.innerHeight;
const svg = d3.select("#network-map")
    .attr("width", width)
    .attr("height", height);

// Create a group for the main content that will be zoomed and panned
const g = svg.append("g");

let globalGraphData = { nodes: [], links: [] }; // Storage for the loaded data
let simulation = null; // Store simulation instance globally
let map = null; // Leaflet map instance
let markersLayer = new L.LayerGroup(); // Layer for holding all markers

// --- NEW STATE MANAGEMENT ---
let activeNodeIds = new Set(); 
let panelStack = []; 
let currentFilters = {
    awards: new Set(),
    tier: 'ALL'
};

// --- Zoom and Pan Setup ---
const zoom = d3.zoom()
    .scaleExtent([0.5, 8]) 
    .translateExtent([
        [-width * 2, -height * 2], 
        [width * 3, height * 3]
    ])
    .on("zoom", (event) => {
        g.attr("transform", event.transform);
    });

svg.call(zoom);

// --- MAP FUNCTIONS ---

function initializeMap() {
    if (map) return; 

    // Initialize the map on the 'map-overlay' div
    map = L.map('map-overlay', { 
        zoomControl: false 
    }).setView([40.7128, -74.0060], 5); 

    // Add a basic tile layer (OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 18
    }).addTo(map);

    markersLayer.addTo(map);
}

function updateMapLayer() {
    markersLayer.clearLayers(); 
    
    let activeNodes = [];
    activeNodeIds.forEach(id => {
        const node = getNodeById(id);
        if (node && node.Latitude && node.Longitude) {
            activeNodes.push(node);
        }
    });

    if (activeNodes.length === 0) {
        map.setView([40.7128, -74.0060], 5, { animate: true });
        return;
    }

    activeNodes.forEach(node => {
        const lat = parseFloat(node.Latitude);
        const lon = parseFloat(node.Longitude);

        if (!isNaN(lat) && !isNaN(lon)) {
            L.marker([lat, lon])
                .addTo(markersLayer)
                .bindPopup(`<strong>${node.Emoji} ${node.Name}</strong><br>${node.City}, ${node.State}`)
                .openPopup(); 
        }
    });

    if (activeNodes.length === 1) {
        const node = activeNodes[0];
        map.flyTo([parseFloat(node.Latitude), parseFloat(node.Longitude)], 14, { duration: 0.8 });
    } else {
        const bounds = activeNodes.map(n => [parseFloat(n.Latitude), parseFloat(n.Longitude)]);
        if (bounds.length > 0) {
            map.flyToBounds(bounds, {
                padding: L.point(100, 100),
                maxZoom: 12,
                duration: 0.8
            });
        }
    }
}

// --- Helper Functions ---

function getNodeById(id) {
    // Ensure the ID being looked up is treated as a string, matching the stored node IDs
    const strId = String(id);
    return globalGraphData.nodes.find(node => String(node.ID) === strId);
}

function nodeMatchesFilters(node) {
    if (currentFilters.awards.size === 0) {
        return true; 
    }

    // Use String() conversion for consistency
    const nodeIdString = String(node.ID);
    
    const relatedLinks = globalGraphData.links.filter(link => 
        (String(link.Source) === nodeIdString || String(link.Target) === nodeIdString)
    );
    
    return relatedLinks.some(link => {
        const relationship = link.Relationship;
        let matchesAward = false;

        currentFilters.awards.forEach(award => {
            if (relationship.includes(award)) {
                matchesAward = true;
            }
        });
        
        return matchesAward;
    });
}

function parseRelationship(relationship) {
    if (relationship.startsWith('MICHELIN_STAR')) {
        return { label: 'Awarded Michelin Star 🍽️', isAward: true };
    } else if (relationship.startsWith('JAMES_BEARD_AWARD')) {
        return { label: 'Won James Beard Award 🏆', isAward: true };
    } else if (relationship.startsWith('NOMINATED_FOR_AWARD')) {
        return { label: 'Nominated for 🏆', isAward: true };
    } else if (relationship.startsWith('CURRENT_HEAD_CHEF')) {
        return { label: 'Current Chef 👨🏻‍🍳', isChef: true };
    }
    else if (relationship.includes('COMPETED_ON_TOP_CHEF')) {
        return { label: 'Competitor on Top Chef 🔪', isCompetition: true };
    } else if (relationship.includes('COMPETED_ON_MASTERCHEF')) {
        return { label: 'Competitor on MasterChef 🔪', isCompetition: true };
    } else if (relationship.includes('COMPETED_ON')) {
        return { label: 'Competitor on TV 📺', isCompetition: true };
    }
    
    return { label: relationship.replace(/_/g, ' '), isUnknown: true };
}

// --- FILTERING LOGIC ---

function applyVisualStyles(selectionData = globalGraphData) {
    // 1. Update Node Opacity/Size
    g.selectAll(".node")
        .classed("active", d => activeNodeIds.has(String(d.ID)))
        .style("opacity", d => {
            const isMatch = nodeMatchesFilters(d);
            
            if (!isMatch) return 0; 
            
            if (d['Role/Primary'] === 'Person' && activeNodeIds.size === 0) {
                return 0.5; 
            }
            return 1; 
        });

    // 2. Update Link Highlighting and Opacity
    const isNodeActive = id => activeNodeIds.has(String(id));
    const isLinkHighlighted = l => isNodeActive(l.source.ID) || isNodeActive(l.target.ID);

    g.selectAll(".link")
        .classed("highlighted", isLinkHighlighted)
        .style("opacity", l => {
            const sourceVisible = nodeMatchesFilters(l.source);
            const targetVisible = nodeMatchesFilters(l.target);
            
            if (!sourceVisible || !targetVisible) return 0; 

            return isLinkHighlighted(l) ? 1 : 0.3; 
        });
}

function filterGraph() {
    applyVisualStyles(globalGraphData);

    activeNodeIds.forEach(id => {
        if (!nodeMatchesFilters(getNodeById(id))) {
            handleNodeClick(id, true); // Deselect and close panel
        }
    });

    updateMapLayer();
}

// --- INTERACTION LOGIC ---

function setupConnectionClickHandlers(panelId) {
    d3.select(`#${panelId}`).selectAll(".connection-item")
        .on("click", function(event) {
            // console.log("Connection item clicked!"); // DEBUG
            event.stopPropagation(); 
            const connectedId = d3.select(this).attr("data-connected-id");
            if (connectedId) {
                handleNodeClick(connectedId);
            }
        });
}

function updatePanelStack() {
    d3.select("#detail-panel-stack").selectAll(".detail-panel")
        .data(panelStack, d => d)
        .join(
            enter => enter.append("div")
                .attr("class", "detail-panel")
                .attr("id", d => `panel-${d}`)
                .classed("active", (d, i) => i === panelStack.length - 1)
                .html(d => generateDetailPanelContent(getNodeById(d)))
                .each(function(d) { 
                    setupConnectionClickHandlers(this.id);
                }),
            update => update
                .classed("active", (d, i) => i === panelStack.length - 1)
                .on("click", (event, d) => handlePanelClick(d)) 
                .each(function(d) { 
                    setupConnectionClickHandlers(this.id);
                }),
            exit => exit.remove()
        )
        .each(function(id) {
            d3.select(this).select(".close-btn").on("click", (event) => {
                event.stopPropagation(); 
                handleNodeClick(id, true); 
            });
        });

    d3.select("#initial-detail-title").style("display", panelStack.length > 0 ? "none" : "block");
}

function handleNodeClick(nodeId, forceDeselect = false) {
    const nodeIdStr = String(nodeId); // Use string ID for consistency
    const node = getNodeById(nodeIdStr);
    
    // console.log(`Handle Click: Node ${nodeIdStr}, Active: ${activeNodeIds.has(nodeIdStr)}, Force Deselect: ${forceDeselect}`); // DEBUG

    if (!nodeMatchesFilters(node) && !activeNodeIds.has(nodeIdStr)) {
        return; 
    }

    if (activeNodeIds.has(nodeIdStr) && !forceDeselect) {
        const index = panelStack.indexOf(nodeIdStr);
        if (index !== -1 && index !== panelStack.length - 1) {
            panelStack.splice(index, 1);
            panelStack.push(nodeIdStr);
            updatePanelStack();
        }
        return; 
    } 
    
    // Toggle selection (Add or Remove)
    if (activeNodeIds.has(nodeIdStr)) {
        activeNodeIds.delete(nodeIdStr);
        panelStack = panelStack.filter(id => id !== nodeIdStr);
    } else {
        activeNodeIds.add(nodeIdStr);
        panelStack.push(nodeIdStr);
    }

    if (simulation) {
        simulation.nodes().forEach(d => {
            if (activeNodeIds.has(String(d.ID))) { // Check against string ID
                d.fx = d.x;
                d.fy = d.y;
            } else if (d.fx !== null && d.fy !== null && !activeNodeIds.has(String(d.ID))) {
                d.fx = null;
                d.fy = null;
            }
        });
        simulation.alpha(0.1).restart(); 
    }
    
    applyVisualStyles();
    updatePanelStack();
    updateMapLayer();
}

function handlePanelClick(nodeId) {
    const nodeIdStr = String(nodeId);
    const index = panelStack.indexOf(nodeIdStr);
    if (index !== -1 && index !== panelStack.length - 1) {
        panelStack.splice(index, 1);
        panelStack.push(nodeIdStr);
        updatePanelStack();
        updateMapLayer();
    }
}

// Event listener for tapping outside panels/nodes to reset
d3.select("body").on("click", function(event) {
    // Check if the click target is the map, the SVG, or the body (non-interactive areas)
    if (event.target.id === "network-map" || event.target.tagName === 'BODY' || event.target.id === 'map-overlay') {
        if (activeNodeIds.size > 0) {
            activeNodeIds.clear();
            panelStack = [];
            
            if (simulation) {
                simulation.nodes().forEach(d => { d.fx = null; d.fy = null; });
                simulation.alpha(0.1).restart();
            }

            applyVisualStyles();
            updatePanelStack();
            updateMapLayer();
        }
    }
}, true); 

// --- Main Visualization Function ---
function drawGraph(filteredData) {
    g.selectAll("*").remove();

    // Ensure all links reference string IDs
    const simulationLinks = filteredData.links.map(l => ({
        ...l, 
        source: String(l.Source), 
        target: String(l.Target)
    }));

    if (simulation) {
        simulation.nodes(filteredData.nodes);
        simulation.force("link").links(simulationLinks);
        simulation.alpha(1).restart();
    } else {
        // Ensure nodes have string IDs for force layout to work correctly
        const nodesWithStringIds = filteredData.nodes.map(d => ({ ...d, ID: String(d.ID) }));

        simulation = d3.forceSimulation(nodesWithStringIds)
            .force("link", d3.forceLink(simulationLinks).id(d => String(d.ID)).distance(80))
            .force("charge", d3.forceManyBody().strength(-150)) 
            .force("center", d3.forceCenter(width / 2, height / 2))
            .force("x", d3.forceX(width / 2).strength(0.1)) 
            .force("y", d3.forceY(height / 2).strength(0.1)); 
    }
    
    // --- Links ---
    const link = g.append("g")
        .attr("class", "links")
        .selectAll(".link")
        .data(simulationLinks, d => `${d.source.ID}-${d.target.ID}`) // Use source/target ID from simulation
        .enter().append("line")
        .attr("class", "link")
        .style("stroke-width", d => (d.ConfidenceScore || 1) * 0.8 + "px")
        .style("stroke", d => {
            const score = d.ConfidenceScore || 1;
            if (score >= 4) return "#2ecc71"; 
            if (score >= 2) return "#f39c12"; 
            return "#e74c3c"; 
        });

    // --- Nodes ---
    const node = g.append("g")
        .attr("class", "nodes")
        .selectAll(".node")
        .data(filteredData.nodes, d => String(d.ID)) // Ensure key binding uses string ID
        .enter().append("g")
        .attr("class", d => `node ${d['Role/Primary']}`) 
        .on("click", (event, d) => {
            event.stopPropagation(); 
            handleNodeClick(String(d.ID)); // Pass string ID to handler
        });

    // Node Circles
    node.append("circle")
        .attr("r", d => d['Role/Primary'] === 'Place' ? 18 : 12); 

    // Node Labels (Emojis)
    node.append("text")
        .attr("dy", 5)
        .attr("text-anchor", "middle")
        .text(d => d.Emoji);
        
    // Node Labels (Name/City)
    node.append("text")
        .attr("dy", d => d['Role/Primary'] === 'Place' ? 28 : 22) 
        .attr("font-size", "10px")
        .attr("text-anchor", "middle") 
        .text(d => {
             if (filteredData.nodes.length < 25 && (d['Role/Primary'] === 'Place' || d['Role/Primary'] === 'Person')) {
                 return d.Name;
             }
             return "";
        });

    // Update positions on tick
    simulation.on("tick", () => {
        link
            .attr("x1", d => d.source.x)
            .attr("y1", d => d.source.y)
            .attr("x2", d => d.target.x)
            .attr("y2", d => d.target.y);

        node
            .attr("transform", d => `translate(${d.x},${d.y})`);
    });
    
    applyVisualStyles(filteredData);
    simulation.stop(); 
}


// --- Detail Panel Generation (No change to content logic) ---
function generateDetailPanelContent(d) {
    let content = `
        <span class="close-btn">X</span>
        <h2 class="detail-name">${d.Emoji} ${d.Name}</h2>
    `;
    
    if (d['Role/Primary'] === 'Place') {
        content += `
            <p><strong>Cuisine:</strong> ${d.Cuisine || 'N/A'} ${d.Flags || ''}</p>
            <p><strong>Location:</strong> ${d.City}, ${d.State || 'N/A'}</p>
            ${d.Price && d.Price !== 'NA' ? `<p><strong>Price Range:</strong> ${d.Price}</p>` : ''}
            ${d.Rating ? `<p><strong>Rating:</strong> ${d.Rating} (${d.Reviews || 0} total)</p>` : ''}
            ${d.MapLink && d.MapLink !== 'NA' ? `<p class="detail-link"><a href="${d.MapLink}" target="_blank">View on Google Maps</a></p>` : ''}
        `;
    }
    
    if (d['Role/Primary'] === 'Person') {
        content += `
            <p><strong>Role:</strong> ${d.Cuisine || 'Chef'} ${d.Flags || ''}</p>
            <p><strong>Location:</strong> ${d.City}, ${d.State || 'N/A'}</p>
        `;
    }

    const connections = globalGraphData.links.filter(link => 
        String(link.Source) === String(d.ID) || String(link.Target) === String(d.ID)
    );

    if (connections.length > 0) {
        content += `<h3 class="detail-connections-header">Connections:</h3><ul class="detail-connections-list">`;
        
        connections.forEach(link => {
            let connectedNodeId = (String(link.Source) === String(d.ID)) ? String(link.Target) : String(link.Source);
            let connectedNode = getNodeById(connectedNodeId);
            
            if (connectedNode) {
                const relationshipDetails = parseRelationship(link.Relationship);
                let listItemContent;
                
                const scoreText = link.ConfidenceScore ? `(Score: ${link.ConfidenceScore})` : '';

                if (relationshipDetails.isAward || relationshipDetails.isCompetition) {
                    listItemContent = `<strong>${relationshipDetails.label}</strong> ${scoreText}`;
                } else if (String(link.Source) === String(d.ID)) {
                    listItemContent = `<strong>${relationshipDetails.label}</strong> - ${connectedNode.Emoji} ${connectedNode.Name} ${scoreText}`;
                } else {
                    let displayLabel;
                    if (relationshipDetails.isChef) { displayLabel = 'Features Chef 👨🏻‍🍳'; }
                    else { displayLabel = 'Connected to'; } 

                    listItemContent = `<strong>${displayLabel}</strong> - ${connectedNode.Emoji} ${connectedNode.Name} ${scoreText}`;
                }

                content += `<li class="connection-item" data-connected-id="${connectedNode.ID}">${listItemContent}</li>`;
            }
        });
        content += `</ul>`;
    }

    return `<div id="panel-content-${d.ID}">${content}</div>`;
}


// --- Confidence Score Legend Function (No change) ---
function drawLegend() {
    const legendData = [
        { color: "#2ecc71", label: "High Confidence (4-5)" },
        { color: "#f39c12", label: "Medium Confidence (2-3)" },
        { color: "#e74c3c", label: "Low Confidence (1)" }
    ];

    const legend = svg.append("g")
        .attr("class", "confidence-legend")
        .attr("transform", `translate(10, ${height - 110})`); 

    legend.append("rect")
        .attr("width", 200)
        .attr("height", 100)
        .attr("fill", "white")
        .attr("stroke", "#ccc")
        .attr("rx", 5);

    legend.append("text")
        .attr("x", 10)
        .attr("y", 20)
        .text("Link Confidence Score")
        .style("font-weight", "bold")
        .style("font-size", "12px");

    legend.selectAll(".legend-item")
        .data(legendData)
        .enter()
        .append("g")
        .attr("class", "legend-item")
        .attr("transform", (d, i) => `translate(10, ${35 + i * 20})`)
        .each(function(d) {
            d3.select(this).append("line")
                .attr("x1", 0)
                .attr("x2", 30)
                .attr("y1", 0)
                .attr("y2", 0)
                .style("stroke", d.color)
                .style("stroke-width", "3px");

            d3.select(this).append("text")
                .attr("x", 40)
                .attr("y", 3)
                .text(d.label)
                .style("font-size", "11px");
        });
}


// --- Initialization & Event Binding ---
document.addEventListener('DOMContentLoaded', () => {
    initializeMap();

    d3.json("data.json?v=100").then(data => {
        if (!data || data.nodes.length === 0) {
            d3.select("#initial-detail-title").text('Error: Failed to load graph data or data is empty.');
            return;
        }
        
        globalGraphData.nodes = data.nodes.filter(n => n['Role/Primary'] !== 'Award' && n['Role/Primary'] !== 'Competition');
        globalGraphData.links = data.links;

        // Force all node IDs to be strings at load time for consistency with D3 keys
        globalGraphData.nodes.forEach(n => n.ID = String(n.ID));
        
        // 1. Setup Filters Event Handlers
        d3.selectAll('#award-filters input[type="checkbox"]').on('change', function() {
            const award = this.getAttribute('data-award');
            if (this.checked) {
                currentFilters.awards.add(award);
            } else {
                currentFilters.awards.delete(award);
            }
            filterGraph();
        });

        d3.select('#award-tier-filter').on('change', function() {
            currentFilters.tier = this.value;
            filterGraph();
        });

        // 2. Draw the initial graph and legend
        drawGraph(globalGraphData);
        drawLegend();

    }).catch(error => {
        d3.select("#initial-detail-title").text('Network Error: Could not retrieve data.json. Check file path and deployment.');
    });
});
