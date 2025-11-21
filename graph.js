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
    
    // Check for Competition Types
    if (relationship.includes('COMPETED_ON_TOP_CHEF')) {
        return { label: 'Competitor on Top Chef 🔪', isCompetition: true };
    } else if (relationship.includes('COMPETED_ON_MASTERCHEF')) {
        return { label: 'Competitor on MasterChef 🔪', isCompetition: true };
    } else if (relationship.includes('COMPETED_ON')) {
        return { label: 'Competitor on TV 📺', isCompetition: true };
    }

    // Check for Award Types
    else if (relationship.startsWith('MICHELIN_STAR')) {
        return { label: 'Award Winning Restaurant 🍽️', isAward: true, isPlace: true, displayLabel: 'Award Winning Restaurant' };
    } else if (relationship.startsWith('JAMES_BEARD_AWARD')) {
        return { label: 'James Beard Nominee/Winner 🏆', isAward: true };
    } else if (relationship.startsWith('NOMINATED_FOR_AWARD')) {
        return { label: 'Nominated for 🏆', isAward: true };
    } else if (relationship.startsWith('WON_AWARD')) {
        return { label: 'Winner of 🏆', isAward: true };
    }

    // Check for Employment
    else if (relationship.startsWith('CURRENT_HEAD_CHEF')) {
        return { label: 'Current Chef 👨🏻‍🍳', isChef: true };
    } else if (relationship.startsWith('HAS_AWARD_2024')) {
         return { label: 'Has Award 2024 🎖️', isAward: true };
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
    
    // Reset zoom to initial state on filter change
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
        .force("charge", d3.forceManyBody().strength(-50)) 
        .force("center", d3.forceCenter(width / 2, height / 2))
        .force("x", d3.forceX(width / 2).strength(0.1)) 
        .force("y", d3.forceY(height / 2).strength(0.1)); 

    // --- Links ---
    const link = g.append("g")
        .attr("class", "links")
        .selectAll("line")
        // Use link Confidence Score to set stroke width/color (assuming a score column exists)
        .data(simulationLinks)
        .enter().append("line")
        .attr("class", "link")
        .style("stroke-width", d => {
            // Placeholder: Adjust width based on confidence score (1-5)
            // Assuming d.ConfidenceScore is 1, 2, 3, 4, or 5
            return (d.ConfidenceScore || 1) * 0.8 + "px"; 
        })
        .style("stroke", d => {
            // Placeholder: Adjust color based on confidence score
            const score = d.ConfidenceScore || 1;
            if (score >= 4) return "#2ecc71"; // High confidence (Green)
            if (score >= 2) return "#f39c12"; // Medium confidence (Orange)
            return "#e74c3c"; // Low confidence (Red)
        });


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
        
    // Node Labels (Name/City)
    node.append("text")
        .attr("dy", 25) 
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
}


// --- Detail Panel Generation ---
function generateDetailPanelContent(d) {
    let content = `
        <h2 class="detail-name">${d.Emoji} ${d.Name}</h2>
    `;
    
    // --- Place Node Content ---
    if (d['Role/Primary'] === 'Place') {
        content += `
            <p><strong>Cuisine:</strong> ${d.Cuisine || 'N/A'} ${d.Flags || ''}</p>
            <p><strong>Location:</strong> ${d.City}, ${d.State || 'N/A'}</p>
            ${d.Price && d.Price !== 'NA' ? `<p><strong>Price Range:</strong> ${d.Price}</p>` : ''}
            ${d.Rating ? `<p><strong>Rating:</strong> ${d.Rating} (${d.Reviews || 0} total)</p>` : ''}
            ${d.MapLink && d.MapLink !== 'NA' ? `<p class="detail-link"><a href="${d.MapLink}" target="_blank">View on Google Maps</a></p>` : ''}
        `;
    }
    
    // --- Person Node Content ---
    if (d['Role/Primary'] === 'Person') {
        content += `
            <p><strong>Role:</strong> ${d.Cuisine || 'N/A'} ${d.Flags || ''}</p>
            <p><strong>Location:</strong> ${d.City}, ${d.State || 'N/A'}</p>
        `;
    }
    
    // --- Award/Competition Content ---
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
                let listItemContent;
                
                // Add Confidence Score to the connection detail
                const scoreText = link.ConfidenceScore ? `(Score: ${link.ConfidenceScore})` : '';

                // Logic for display in the Connections list
                if (connectedNode['Role/Primary'] === 'Award' || connectedNode['Role/Primary'] === 'Competition') {
                    // Current node (d) -> Award/Competition (connectedNode)
                    listItemContent = `<strong>${relationshipDetails.label}</strong> - ${connectedNode.Emoji} ${connectedNode.Name} ${scoreText}`;

                } else if (d['Role/Primary'] === 'Award' || d['Role/Primary'] === 'Competition') {
                     // Current node is an Award/Competition -> linked to a Person/Place
                    const reverseLabel = relationshipDetails.displayLabel || relationshipDetails.label.replace('Awarded to 🍽️', 'Awarded To');
                    listItemContent = `<strong>${reverseLabel}</strong> - ${connectedNode.Emoji} ${connectedNode.Name} ${scoreText}`;

                } else if (link.Source === d.ID) {
                    // Current node (d) is the Source 
                    listItemContent = `<strong>${relationshipDetails.label}</strong> - ${connectedNode.Emoji} ${connectedNode.Name} ${scoreText}`;
                } else {
                    // Current node (d) is the Target (Inbound link)
                    let displayLabel = relationshipDetails.label;

                    if (relationshipDetails.isChef) { displayLabel = 'Features Chef 👨🏻‍🍳'; }
                    else if (relationshipDetails.isAward) { displayLabel = 'Won Award 🏆'; }
                    else if (relationshipDetails.isCompetition) { displayLabel = 'Participated in 📺'; }
                    else { displayLabel = 'Connected to'; } 

                    listItemContent = `<strong>${displayLabel}</strong> - ${connectedNode.Emoji} ${connectedNode.Name} ${scoreText}`;
                }

                content += `<li>${listItemContent}</li>`;
            }
        });
        content += `</ul>`;
    }

    return content;
}

// --- Confidence Score Legend Function ---
function drawLegend() {
    const legendData = [
        { color: "#2ecc71", label: "High Confidence (4-5)" },
        { color: "#f39c12", label: "Medium Confidence (2-3)" },
        { color: "#e74c3c", label: "Low Confidence (1)" }
    ];

    // Create a group for the legend (fixed position)
    const legend = svg.append("g")
        .attr("class", "confidence-legend")
        .attr("transform", `translate(10, ${height - 110})`); // Position near bottom left

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


// --- Initialization & Event Binding (Data Fetch) ---
document.addEventListener('DOMContentLoaded', () => {
    // Using v=100 to mitigate CDN cache issues
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
        
        // Add "Show All Relationships" option
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
        
        // 4. Draw the Confidence Score Legend
        drawLegend();
        
    }).catch(error => {
        console.error("Error fetching data.json:", error);
        d3.select("#detail-panel").html('<h2>Network Error: Could not retrieve data.json. Check file path and deployment.</h2>');
    });
});
