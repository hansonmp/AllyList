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

// --- NEW STATE MANAGEMENT ---
// Set to track the IDs of nodes that are currently selected/active
let activeNodeIds = new Set(); 
// Array to maintain the stacking order of panels
let panelStack = []; 
// Object to hold the current filter state (for future use)
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

// --- Helper Functions ---

function getNodeById(id) {
    return globalGraphData.nodes.find(node => node.ID === id);
}

// Function to check if a node meets the current filter criteria (Placeholder Logic)
function nodeMatchesFilters(node) {
    if (currentFilters.awards.size === 0) {
        return true; // No filters active, show all
    }

    // Simplified logic: Check if node has a link related to ANY active award type
    const relatedLinks = globalGraphData.links.filter(link => 
        (link.Source === node.ID || link.Target === node.ID)
    );
    
    return relatedLinks.some(link => {
        const relationship = link.Relationship;
        let matchesAward = false;

        currentFilters.awards.forEach(award => {
            if (relationship.includes(award)) {
                matchesAward = true;
            }
        });
        
        // This is where you would implement complex Tier logic if Award/Tier columns were in the Node data
        // For now, we only check for the award type.
        return matchesAward;
    });
}

function parseRelationship(relationship) {
    // Award nodes are hidden, but relationships related to awards still need labels
    if (relationship.startsWith('MICHELIN_STAR')) {
        return { label: 'Awarded Michelin Star 🍽️', isAward: true };
    } else if (relationship.startsWith('JAMES_BEARD_AWARD')) {
        return { label: 'Won James Beard Award 🏆', isAward: true };
    } else if (relationship.startsWith('NOMINATED_FOR_AWARD')) {
        return { label: 'Nominated for 🏆', isAward: true };
    } else if (relationship.startsWith('CURRENT_HEAD_CHEF')) {
        return { label: 'Current Chef 👨🏻‍🍳', isChef: true };
    }
    // Check for Competition Types
    else if (relationship.includes('COMPETED_ON_TOP_CHEF')) {
        return { label: 'Competitor on Top Chef 🔪', isCompetition: true };
    } else if (relationship.includes('COMPETED_ON_MASTERCHEF')) {
        return { label: 'Competitor on MasterChef 🔪', isCompetition: true };
    } else if (relationship.includes('COMPETED_ON')) {
        return { label: 'Competitor on TV 📺', isCompetition: true };
    }
    
    return { label: relationship.replace(/_/g, ' '), isUnknown: true };
}

// --- FILTERING LOGIC (Now attribute-based) ---

function applyVisualStyles(selectionData = globalGraphData) {
    // 1. Update Node Opacity/Size
    g.selectAll(".node")
        .classed("filtered-out", d => !nodeMatchesFilters(d))
        .classed("Person", d => d['Role/Primary'] === 'Person')
        .classed("Place", d => d['Role/Primary'] === 'Place')
        .classed("active", d => activeNodeIds.has(d.ID))
        .style("opacity", d => {
            // Check if node is filtered out or is a dimmable 'Person' node 
            if (!nodeMatchesFilters(d)) return 0;
            if (d['Role/Primary'] === 'Person' && activeNodeIds.size === 0) return 0.5;
            return 1;
        });

    // 2. Update Link Highlighting
    const isNodeActive = id => activeNodeIds.has(id);
    const isLinkHighlighted = l => isNodeActive(l.source.ID) || isNodeActive(l.target.ID);

    g.selectAll(".link")
        .classed("highlighted", isLinkHighlighted)
        .style("opacity", l => {
            // Hide links connected to filtered-out nodes
            if (!nodeMatchesFilters(l.source.ID) || !nodeMatchesFilters(l.target.ID)) return 0;

            // Highlight active links, dim all others
            return isLinkHighlighted(l) ? 1 : 0.3; 
        });
}

// Master filter function called when filter UI changes
function filterGraph() {
    // Re-apply visual styles based on currentFilters state
    applyVisualStyles(globalGraphData);

    // If a node is currently selected and gets filtered out, we should deselect it (and close its panel)
    activeNodeIds.forEach(id => {
        if (!nodeMatchesFilters(getNodeById(id))) {
            handleNodeClick(id, true); // Deselect and close panel
        }
    });
}

// --- INTERACTION LOGIC ---

// NEW FUNCTION: Handles clicking a connection in the side panel to select a new node
function setupConnectionClickHandlers(panelId) {
    d3.select(`#${panelId}`).selectAll(".connection-item")
        .on("click", function(event) {
            event.stopPropagation(); // Stop the click from bubbling up and closing the panel
            const connectedId = d3.select(this).attr("data-connected-id");
            if (connectedId) {
                // Select the new node, which adds it to the panel stack
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
                .each(function(d) { // Setup handlers on creation
                    setupConnectionClickHandlers(this.id);
                }),
            update => update
                .classed("active", (d, i) => i === panelStack.length - 1)
                .on("click", (event, d) => handlePanelClick(d)) 
                .each(function(d) { // Re-apply handlers on update
                    setupConnectionClickHandlers(this.id);
                }),
            exit => exit.remove()
        )
        // Add or update the close button handler for all panels
        .each(function(id) {
            d3.select(this).select(".close-btn").on("click", (event) => {
                event.stopPropagation(); 
                handleNodeClick(id, true); // Use forceDeselect=true
            });
        });

    d3.select("#initial-detail-title").style("display", panelStack.length > 0 ? "none" : "block");
}

function handleNodeClick(nodeId, forceDeselect = false) {
    const node = getNodeById(nodeId);
    
    if (activeNodeIds.has(nodeId) && !forceDeselect) {
        // Node already selected, but not necessarily the active panel. Bring it to front.
        const index = panelStack.indexOf(nodeId);
        if (index !== -1 && index !== panelStack.length - 1) {
            panelStack.splice(index, 1);
            panelStack.push(nodeId);
            updatePanelStack();
        }
        return; // Exit after reordering
    } 
    
    // Toggle selection (Add or Remove)
    if (activeNodeIds.has(nodeId)) {
        activeNodeIds.delete(nodeId);
        panelStack = panelStack.filter(id => id !== nodeId);
    } else if (nodeMatchesFilters(node)) {
        activeNodeIds.add(nodeId);
        panelStack.push(nodeId);
    }


    // Update the simulation for pinning/unpinning
    if (simulation) {
        simulation.nodes().forEach(d => {
            if (activeNodeIds.has(d.ID)) {
                // Pin selected node in place (prevents movement)
                d.fx = d.x;
                d.fy = d.y;
            } else if (d.fx !== null && d.fy !== null && !activeNodeIds.has(d.ID)) {
                // Unpin unselected nodes
                d.fx = null;
                d.fy = null;
            }
        });
        simulation.alpha(0.1).restart(); // Small nudge to update pinned nodes
    }
    
    applyVisualStyles();
    updatePanelStack();
}

function handlePanelClick(nodeId) {
    // Bring this panel to the front of the stack
    const index = panelStack.indexOf(nodeId);
    if (index !== -1 && index !== panelStack.length - 1) {
        panelStack.splice(index, 1);
        panelStack.push(nodeId);
        updatePanelStack();
    }
}

// Event listener for tapping outside panels/nodes to reset
d3.select("body").on("click", function(event) {
    // Check if the click occurred on the SVG (graph background) or BODY (empty space)
    // Also check if the click target is NOT inside the detail-panel-stack, to allow clicks on underlying panels
    if (event.target.id === "network-map" || event.target.tagName === 'BODY') {
        if (activeNodeIds.size > 0) {
            activeNodeIds.clear();
            panelStack = [];
            applyVisualStyles();
            updatePanelStack();
            
            // Unpin all nodes
            if (simulation) {
                simulation.nodes().forEach(d => { d.fx = null; d.fy = null; });
                simulation.alpha(0.1).restart();
            }
        }
    }
}, true); // Use capture phase to check click target before propagation

// --- Main Visualization Function ---
function drawGraph(filteredData) {
    g.selectAll("*").remove();

    const simulationLinks = filteredData.links.map(l => ({
        ...l, 
        source: String(l.Source), 
        target: String(l.Target)
    }));

    // Reuse existing simulation if possible, otherwise create new
    if (simulation) {
        simulation.nodes(filteredData.nodes);
        simulation.force("link").links(simulationLinks);
        simulation.alpha(1).restart();
    } else {
        simulation = d3.forceSimulation(filteredData.nodes)
            .force("link", d3.forceLink(simulationLinks).id(d => d.ID).distance(80))
            .force("charge", d3.forceManyBody().strength(-150)) // Increased repulsion for better spread
            .force("center", d3.forceCenter(width / 2, height / 2))
            .force("x", d3.forceX(width / 2).strength(0.1)) 
            .force("y", d3.forceY(height / 2).strength(0.1)); 
    }
    
    // --- Links ---
    const link = g.append("g")
        .attr("class", "links")
        .selectAll(".link")
        .data(simulationLinks, d => `${d.Source}-${d.Target}`) // Key for data binding
        .enter().append("line")
        .attr("class", "link")
        .style("stroke-width", d => (d.ConfidenceScore || 1) * 0.8 + "px")
        .style("stroke", d => {
            const score = d.ConfidenceScore || 1;
            if (score >= 4) return "#2ecc71"; // High confidence (Green)
            if (score >= 2) return "#f39c12"; // Medium confidence (Orange)
            return "#e74c3c"; // Low confidence (Red)
        });

    // --- Nodes ---
    const node = g.append("g")
        .attr("class", "nodes")
        .selectAll(".node")
        .data(filteredData.nodes, d => d.ID)
        .enter().append("g")
        .attr("class", d => `node ${d['Role/Primary']}`) 
        .on("click", (event, d) => {
            event.stopPropagation(); // Prevent the body click listener from triggering
            handleNodeClick(d.ID);
        });

    // Node Circles
    node.append("circle")
        // Radius handled by CSS .node.Place and .node.Person
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
    
    // Apply initial visual state and check for pinned nodes
    applyVisualStyles(filteredData);
    simulation.stop(); // Freeze the layout after it settles initially
}


// --- Detail Panel Generation (Updated) ---
function generateDetailPanelContent(d) {
    // Panel structure including close button and content
    let content = `
        <span class="close-btn">X</span>
        <h2 class="detail-name">${d.Emoji} ${d.Name}</h2>
    `;
    
    // --- Node Content based on Role ---
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

    // --- Connections Section ---
    const connections = globalGraphData.links.filter(link => 
        link.Source === d.ID || link.Target === d.ID
    );

    if (connections.length > 0) {
        content += `<h3 class="detail-connections-header">Connections:</h3><ul class="detail-connections-list">`;
        
        connections.forEach(link => {
            let connectedNodeId = (link.Source === d.ID) ? link.Target : link.Source;
            let connectedNode = getNodeById(connectedNodeId);
            
            if (connectedNode) {
                const relationshipDetails = parseRelationship(link.Relationship);
                let listItemContent;
                
                const scoreText = link.ConfidenceScore ? `(Score: ${link.ConfidenceScore})` : '';

                // Award nodes are hidden, so we just check for Award relationships
                if (relationshipDetails.isAward || relationshipDetails.isCompetition) {
                    // Node is connected to an Award/Competition
                    listItemContent = `<strong>${relationshipDetails.label}</strong> ${scoreText}`;
                } else if (link.Source === d.ID) {
                    // Current node (d) is the Source (Outbound link)
                    listItemContent = `<strong>${relationshipDetails.label}</strong> - ${connectedNode.Emoji} ${connectedNode.Name} ${scoreText}`;
                } else {
                    // Current node (d) is the Target (Inbound link) - use reversed language
                    let displayLabel;
                    if (relationshipDetails.isChef) { displayLabel = 'Features Chef 👨🏻‍🍳'; }
                    else { displayLabel = 'Connected to'; } 

                    listItemContent = `<strong>${displayLabel}</strong> - ${connectedNode.Emoji} ${connectedNode.Name} ${scoreText}`;
                }

                // IMPORTANT: Added `data-connected-id` for click handling
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
    d3.json("data.json?v=100").then(data => {
        if (!data || data.nodes.length === 0) {
            d3.select("#initial-detail-title").text('Error: Failed to load graph data or data is empty.');
            return;
        }
        
        // Remove Award/Competition nodes before drawing (as per spec)
        globalGraphData.nodes = data.nodes.filter(n => n['Role/Primary'] !== 'Award' && n['Role/Primary'] !== 'Competition');
        globalGraphData.links = data.links;
        
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
