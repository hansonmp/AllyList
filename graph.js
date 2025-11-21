// --- Global Variables ---
const width = window.innerWidth;
const height = window.innerHeight;
const svg = d3.select("#network-map")
    .attr("width", width)
    .attr("height", height);

// Create a group for the main content that will be zoomed and panned
const g = svg.append("g");

let globalGraphData = { nodes: [], links: [] }; // Storage for the loaded data

// --- Zoom and Pan Setup ---
const zoom = d3.zoom()
    .scaleExtent([0.5, 8]) // Zoom limits: 0.5x minimum, 8x maximum
    .translateExtent([
        // Expanded translation limits for full canvas panning
        [-width, -height], 
        [width * 2, height * 2]
    ])
    .on("zoom", (event) => {
        g.attr("transform", event.transform);
    });

svg.call(zoom);

// --- Helper Functions ---

function getAllRelationshipTypes(data) {
    const relationships = new Set();
    data.links.forEach(link => {
        relationships.add(link.Relationship);
    });
    return Array.from(relationships).sort();
}

function getNodeById(id) {
    return globalGraphData.nodes.find(node => node.ID === id);
}

function parseRelationship(relationship) {
    // This function provides the clean, friendly label for the link
    // We need to expand this for full resolution later (Stage 2)
    
    if (relationship.startsWith('CURRENT_HEAD_CHEF')) {
        return { label: 'Current Chef 👨🏻‍🍳', isChef: true };
    } else if (relationship.includes('MICHELIN_STAR')) {
        // Will need to adjust this to handle specific star levels
        return { label: 'Awarded to 🍽️', isAward: true, isPlace: true };
    } else if (relationship.startsWith('NOMINATED_FOR_AWARD')) {
        return { label: 'Nominated for 🏆', isAward: true };
    } else if (relationship.startsWith('WON_AWARD')) {
        return { label: 'Winner of 🏆', isAward: true };
    } else if (relationship.startsWith('COMPETED_ON')) {
        // Must be expanded to handle different show names later (Stage 2)
        return { label: 'Competitor on 📺', isCompetition: true };
    }
    
    // Fallback for unexpected relationships
    return { label: relationship.replace(/_/g, ' '), isUnknown: true };
}


function filterGraph(relationshipType) {
    let filteredData;

    if (relationshipType === "ALL") {
        filteredData = globalGraphData;
    } else {
        const filteredLinks = globalGraphData.links.filter(link => 
            link.Relationship === relationshipType
        );

        const connectedNodeIds = new Set();
        filteredLinks.forEach(link => {
            connectedNodeIds.add(link.Source);
            connectedNodeIds.add(link.Target);
        });

        const filteredNodes = globalGraphData.nodes.filter(node => 
            connectedNodeIds.has(node.ID)
        );

        filteredData = {
            nodes: filteredNodes,
            links: filteredLinks
        };
    }
    
    // Fix for Issue 4: Reset zoom to initial state on filter change
    svg.transition().duration(500).call(zoom.transform, d3.zoomIdentity);
    
    // Redraw the graph with the filtered data
    drawGraph(filteredData);
    
    // Clear the detail panel on filter change
    d3.select("#detail-panel").html('<h2 id="detail-title">Select a Node to View Details</h2>');
}

// --- Main Visualization Function ---
function drawGraph(filteredData) {
    // Clear the previous drawing
    g.selectAll("*").remove();

    // CRITICAL FIX: Explicitly map links to ensure D3 resolves node IDs correctly.
    const simulationLinks = filteredData.links.map(l => ({
        ...l, 
        source: String(l.Source), 
        target: String(l.Target)
    }));

    // D3 force simulation initialization
    const simulation = d3.forceSimulation(filteredData.nodes)
        .force("link", d3.forceLink(simulationLinks).id(d => d.ID).distance(50))
        // Adjusted charge strength for tighter clustering and better visibility (Issue 3)
        .force("charge", d3.forceManyBody().strength(-400)) 
        .force("center", d3.forceCenter(width / 2, height / 2));

    // --- Links ---
    // Use the fixed simulationLinks array for data binding
    const link = g.append("g")
        .attr("class", "links")
        .selectAll("line")
        .data(simulationLinks)
        .enter().append("line")
        .attr("class", "link");

    // --- Nodes ---
    const node = g.append("g")
        .attr("class", "nodes")
        .selectAll(".node")
        .data(filteredData.nodes)
        .enter().append("g")
        .attr("class", d => `node ${d['Role/Primary']}`) 
        .on("click", (event, d) => {
            g.selectAll(".node").classed("active", false);
            d3.select(event.currentTarget).classed("active", true);
            
            link.classed("highlighted", l => l.source.ID === d.ID || l.target.ID === d.ID);

            d3.select("#detail-panel").html(generateDetailPanelContent(d));
        });

    // Node Circles
    node.append("circle")
        .attr("r", 15)
        .attr("fill", d => {
            if (d['Role/Primary'] === 'Place') return '#4CAF50';
            if (d['Role/Primary'] === 'Person') return '#2196F3';
            if (d['Role/Primary'] === 'Award' || d['Role/Primary'] === 'Competition') return 'transparent'; 
            return '#FF9800';
        });

    // Node Labels (Emojis)
    node.append("text")
        .attr("dy", 5)
        .attr("text-anchor", "middle")
        .text(d => d.Emoji);
        
    // Node Labels (Name/City) - FIX: Remove redundant Name label for cleaner view
    node.append("text")
        .attr("dy", 25) 
        .attr("font-size", "10px")
        .attr("text-anchor", "middle") 
        .text(d => {
             // Show name only for Place/Person nodes, only if not filtered down to a small number
             if (filteredData.nodes.length < 50 && (d['Role/Primary'] === 'Place' || d['Role/Primary'] === 'Person')) {
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
}


// --- Detail Panel Generation (Stage 3 Fixes for Issue 6) ---
function generateDetailPanelContent(d) {
    let content = `
        <h2 class="detail-name">${d.Emoji} ${d.Name}</h2>
    `;
    
    // --- Place Node Content (Issue 6: Simplified Profile) ---
    if (d['Role/Primary'] === 'Place') {
        content += `
            <p><strong>Cuisine:</strong> ${d.Cuisine || 'N/A'} ${d.Flags || ''}</p>
            <p><strong>Location:</strong> ${d.City}, ${d.State || 'N/A'}</p>
            ${d.Price && d.Price !== 'NA' ? `<p><strong>Price Range:</strong> ${d.Price}</p>` : ''}
            ${d.Rating ? `<p><strong>Rating:</strong> ${d.Rating} (${d.Reviews || 0} reviews)</p>` : ''}
            ${d.MapLink && d.MapLink !== 'NA' ? `<p class="detail-link"><a href="${d.MapLink}" target="_blank">View on Google Maps</a></p>` : ''}
        `;
    }
    
    // --- Person Node Content (Issue 6: Simplified Profile) ---
    if (d['Role/Primary'] === 'Person') {
        content += `
            <p><strong>Role:</strong> ${d.Cuisine || 'N/A'} ${d.Flags || ''}</p>
            <p><strong>Location:</strong> ${d.City}, ${d.State || 'N/A'}</p>
        `;
    }
    
    // --- Award/Competition Content (Simplified and cleaned) ---
    if (d['Role/Primary'] === 'Award' || d['Role/Primary'] === 'Competition') {
        content += `
            <p><strong>Type:</strong> ${d['Role/Primary']}</p>
            ${d.Year ? `<p><strong>Year:</strong> ${d.Year}</p>` : ''}
        `;
    }

    // --- Connections Section (Issue 6: Remove extra line break) ---
    const connections = globalGraphData.links.filter(link => 
        link.Source === d.ID || link.Target === d.ID
    );

    if (connections.length > 0) {
        // Removed extra line break here
        content += `<h3 class="detail-connections-header">Connections:</h3><ul class="detail-connections-list">`;
        
        connections.forEach(link => {
            let connectedNodeId = (link.Source === d.ID) ? link.Target : link.Source;
            let connectedNode = getNodeById(connectedNodeId);
            
            if (connectedNode) {
                const relationshipDetails = parseRelationship(link.Relationship);
                let listItemContent;

                // FIX for Issue 8 (Partial): Displaying the connected Award/Competition Name
                if (connectedNode['Role/Primary'] === 'Award' || connectedNode['Role/Primary'] === 'Competition') {
                    // Current node (d) -> Award (connectedNode)
                    listItemContent = `<strong>${relationshipDetails.label}</strong> - ${connectedNode.Emoji} ${connectedNode.Name} (${connectedNode.Year || 'N/A'})`;

                } else if (d['Role/Primary'] === 'Award' || d['Role/Primary'] === 'Competition') {
                     // Current node is an Award/Competition -> linked to a Person/Place
                    // This block is used when viewing an award profile (image_6741fb.png)
                    const reverseLabel = relationshipDetails.label.replace('Awarded to 🍽️', 'Received Award');
                    listItemContent = `<strong>${reverseLabel}</strong> - ${connectedNode.Emoji} ${connectedNode.Name}`;

                } else if (link.Source === d.ID) {
                    // Current node (d) is the Source (e.g., Chef -> Restaurant/Award)
                    listItemContent = `<strong>${relationshipDetails.label}</strong> - ${connectedNode.Emoji} ${connectedNode.Name}`;
                } else {
                    // Current node (d) is the Target (e.g., Restaurant <- Chef/Award)
                    // Reverse the label logic for inbound links
                    let displayLabel = relationshipDetails.label;

                    if (relationshipDetails.isChef) { displayLabel = 'Features Chef 👨🏻‍🍳'; }
                    else if (relationshipDetails.isAward) { displayLabel = 'Won Award 🏆'; }
                    else if (relationshipDetails.isCompetition) { displayLabel = 'Participated in 📺'; }
                    else { displayLabel = 'Connected to'; } // Fallback

                    listItemContent = `<strong>${displayLabel}</strong> - ${connectedNode.Emoji} ${connectedNode.Name}`;
                }

                content += `<li>${listItemContent}</li>`;
            }
        });
        content += `</ul>`;
    }

    return content;
}

// --- Initialization & Event Binding (Data Fetch) ---
document.addEventListener('DOMContentLoaded', () => {
    // Adding v=100 to the data.json URL to bypass the stubborn GitHub CDN cache
    d3.json("data.json?v=100").then(data => {
        if (!data || data.nodes.length === 0) {
            console.error("Failed to load data.json or file is empty.");
            d3.select("#detail-panel").html('<h2>Error: Failed to load graph data or data is empty.</h2>');
            return;
        }
        
        globalGraphData = data;
        
        // 1. Populate the filter dropdown
        const relationships = getAllRelationshipTypes(globalGraphData);
        const filterSelect = d3.select("#relationship-filter");
        
        // Add "ALL" option first (Image 72a323: Renamed to match the image)
        filterSelect.append("option")
            .attr("value", "ALL")
            .text("Show All Relationships"); 

        relationships.forEach(rel => {
            const friendlyLabel = parseRelationship(rel).label;
            filterSelect.append("option")
                .attr("value", rel)
                .text(friendlyLabel);
        });

        // 2. Add the event listener to trigger the filter logic
        filterSelect.on("change", function() {
            const selectedRelationship = this.value;
            filterGraph(selectedRelationship);
        });

        // 3. Draw the initial graph with all data
        drawGraph(globalGraphData);
    }).catch(error => {
        console.error("Error fetching data.json:", error);
        d3.select("#detail-panel").html('<h2>Network Error: Could not retrieve data.json. Check file path and deployment.</h2>');
    });
});
