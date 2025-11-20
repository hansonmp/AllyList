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
        [-width * 0.5, -height * 0.5], 
        [width * 1.5, height * 1.5]
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
    
    if (relationship.startsWith('CURRENT_HEAD_CHEF')) {
        return { label: 'Current Chef 👨🏻‍🍳', isChef: true };
    } else if (relationship.includes('MICHELIN_STAR')) {
        return { label: 'Awarded to 🍽️', isAward: true, isPlace: true };
    } else if (relationship.startsWith('NOMINATED_FOR_AWARD')) {
        return { label: 'Nominated for 🏆', isAward: true };
    } else if (relationship.startsWith('WON_AWARD')) {
        return { label: 'Winner of 🏆', isAward: true };
    } else if (relationship.startsWith('COMPETED_ON')) {
        return { label: 'Competitor on 📺', isCompetition: true };
    }
    
    // Fallback for unexpected relationships
    return { label: relationship.replace(/_/g, ' '), isUnknown: true };
}


function filterGraph(relationshipType) {
    let filteredData;

    if (relationshipType === "ALL") {
        // Show all nodes and links
        filteredData = globalGraphData;
    } else {
        // Filter links to only include the selected relationship
        const filteredLinks = globalGraphData.links.filter(link => 
            link.Relationship === relationshipType
        );

        // Identify all nodes connected to the filtered links
        const connectedNodeIds = new Set();
        filteredLinks.forEach(link => {
            connectedNodeIds.add(link.Source);
            connectedNodeIds.add(link.Target);
        });

        // Filter nodes to include only the connected ones
        const filteredNodes = globalGraphData.nodes.filter(node => 
            connectedNodeIds.has(node.ID)
        );

        filteredData = {
            nodes: filteredNodes,
            links: filteredLinks
        };
    }
    
    // Redraw the graph with the filtered data
    drawGraph(filteredData);
    
    // Clear the detail panel on filter change
    d3.select("#detail-panel").html('<h2 id="detail-title">Select a Node to View Details</h2>');
}

// --- Main Visualization Function ---
function drawGraph(filteredData) {
    // Clear the previous drawing
    g.selectAll("*").remove();

    // D3 force simulation initialization
    // The forceLink function will now correctly find all node IDs from the loaded data
    const simulation = d3.forceSimulation(filteredData.nodes)
        .force("link", d3.forceLink(filteredData.links).id(d => d.ID).distance(50))
        .force("charge", d3.forceManyBody().strength(-300))
        .force("center", d3.forceCenter(width / 2, height / 2));

    // --- Links ---
    const link = g.append("g")
        .attr("class", "links")
        .selectAll("line")
        .data(filteredData.links)
        .enter().append("line")
        .attr("class", "link");

    // --- Nodes ---
    const node = g.append("g")
        .attr("class", "nodes")
        .selectAll(".node")
        .data(filteredData.nodes)
        .enter().append("g")
        .attr("class", d => `node ${d['Role/Primary']}`) // Add Role/Primary as CSS class
        .on("click", (event, d) => {
            // Highlight the clicked node and its immediate links
            g.selectAll(".node").classed("active", false);
            d3.select(event.currentTarget).classed("active", true);
            
            link.classed("highlighted", l => l.source.ID === d.ID || l.target.ID === d.ID);

            // Populate the detail panel
            d3.select("#detail-panel").html(generateDetailPanelContent(d));
        });

    // Node Circles
    node.append("circle")
        .attr("r", 15)
        .attr("fill", d => {
            if (d['Role/Primary'] === 'Place') return '#4CAF50';
            if (d['Role/Primary'] === 'Person') return '#2196F3';
            // Award and Competition nodes are hidden via CSS, so this color is irrelevant, but good practice.
            if (d['Role/Primary'] === 'Award' || d['Role/Primary'] === 'Competition') return 'transparent'; 
            return '#FF9800';
        });

    // Node Labels (Emojis)
    node.append("text")
        .attr("dy", 5)
        .text(d => d.Emoji);
        
    // Node Labels (Name/City) - Added a small label for context
    node.append("text")
        .attr("dy", 25) 
        .attr("font-size", "10px")
        .text(d => {
             // Only show the name label for visible nodes (Places/People)
             if (d['Role/Primary'] === 'Place' || d['Role/Primary'] === 'Person') {
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


// --- Detail Panel Generation (Cleaned up) ---
function generateDetailPanelContent(d) {
    let content = `
        <h2 class="detail-name">${d.Emoji} ${d.Name}</h2>
    `;
    
    // --- Standard Content (For Place and Person Nodes) ---
    if (d['Role/Primary'] === 'Place' || d['Role/Primary'] === 'Person') {
        content += `
            <p><strong>Type:</strong> ${d['Role/Primary']}</p>
            <p><strong>Cuisine/Role:</strong> ${d.Cuisine || 'N/A'} ${d.Flags}</p>
            <p><strong>Location:</strong> ${d.City}, ${d.State || 'N/A'}</p>
            ${d.Price && d.Price !== 'NA' ? `<p><strong>Price Range:</strong> ${d.Price}</p>` : ''}
            ${d.Rating ? `<p><strong>Rating:</strong> ${d.Rating} (${d.Reviews || 0} reviews)</p>` : ''}
            ${d.MapLink && d.MapLink !== 'NA' ? `<p class="detail-link"><a href="${d.MapLink}" target="_blank">View on Google Maps 🗺️</a></p>` : ''}
        `;
    }
    
    // --- Award/Competition Content (Simplified and cleaned) ---
    if (d['Role/Primary'] === 'Award' || d['Role/Primary'] === 'Competition') {
        content += `
            <p><strong>Type:</strong> ${d['Role/Primary']}</p>
            ${d.Year ? `<p><strong>Year:</strong> ${d.Year}</p>` : ''}
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

                let displayLabel;
                let displayTargetName = connectedNode.Name;
                let displayEmoji = connectedNode.Emoji;

                if (d['Role/Primary'] === 'Award' || d['Role/Primary'] === 'Competition') {
                    // Current node is an Award/Competition: Show WHO/WHAT received it.
                    if (connectedNode['Role/Primary'] === 'Award' || connectedNode['Role/Primary'] === 'Competition') return;
                    
                    displayLabel = ''; 
                    listItemContent = `${displayEmoji} ${displayTargetName}`;

                } else if (link.Source === d.ID) {
                    // Current node (d) is the Source (e.g., Chef -> Award)
                    displayLabel = relationshipDetails.label;
                    listItemContent = `<strong>${displayLabel}</strong> - ${displayEmoji} ${displayTargetName}`;
                } else {
                    // Current node (d) is the Target (e.g., Restaurant <- Chef)
                    // Reverse the label logic for inbound links
                    if (relationshipDetails.isChef) {
                        displayLabel = 'Features Chef 👨🏻‍🍳';
                    } else if (relationshipDetails.isAward) {
                        displayLabel = 'Won Award 🏆';
                    } else if (relationshipDetails.isCompetition) {
                        displayLabel = 'Participated in 📺';
                    } else {
                         displayLabel = 'Connected to'; // Fallback
                    }
                    listItemContent = `<strong>${displayLabel}</strong> - ${displayEmoji} ${displayTargetName}`;
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
    // Use D3 to fetch the external JSON file
    d3.json("data.json").then(data => {
        if (!data) {
            console.error("Failed to load data.json or file is empty.");
            // Set error message in detail panel for user visibility
            d3.select("#detail-panel").html('<h2>Error: Failed to load graph data. Check browser console for network errors.</h2>');
            return;
        }
        
        // Store the loaded data globally
        globalGraphData = data;
        
        // 1. Populate the filter dropdown
        const relationships = getAllRelationshipTypes(globalGraphData);
        const filterSelect = d3.select("#relationship-filter");
        
        // Add "ALL" option first
        filterSelect.append("option")
            .attr("value", "ALL")
            .text("ALL Relationships");

        relationships.forEach(rel => {
            // Use the friendly name for the label, but the raw relationship for the value
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
