// Configuration
const width = 1000;
const height = 700;
const nodeRadius = 10;

const svg = d3.select("#chart-container")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .call(d3.zoom().on("zoom", function ({ transform }) {
        g.attr("transform", transform);
    }))
    .on("dblclick", clearHighlighting); // Clear highlight on background double-click

const g = svg.append("g");
const tooltip = d3.select("#tooltip");

// --- Data Loading and Initialization ---
const baseURL = "https://hansonmp.github.io/AllyList/";
Promise.all([
    d3.csv(baseURL + "nodes.csv"),
    d3.csv(baseURL + "edges.csv")
]).then(([nodeData, edgeData]) => {
    // 1. Process Node Data
    const nodes = nodeData.map(d => ({
        ...d,
        id: d.ID,
        group: d.Type.replace('NODE,', ''), // Clean up Type
        type: d.Type.replace('NODE,', ''),
        r: nodeRadius,
        class: d.Type.replace('NODE,', '').toLowerCase() // For CSS classes
    }));

    // 2. Process Edge Data
    // Ensure all edge source/target IDs match a node ID
    const nodeIds = new Set(nodes.map(d => d.ID));
    const links = edgeData.filter(d => nodeIds.has(d.Start_ID) && nodeIds.has(d.End_ID)).map(d => ({
        ...d,
        source: d.Start_ID,
        target: d.End_ID,
        label: d.Relationship_Type // Use Relationship Type as link label
    }));

    // 3. Create the Force Simulation
    const simulation = d3.forceSimulation(nodes)
        .force("link", d3.forceLink(links).id(d => d.id).distance(100))
        .force("charge", d3.forceManyBody().strength(-300))
        .force("center", d3.forceCenter(width / 2, height / 2));

    // --- Visualization Setup ---
    
    // Draw Links
    const link = g.append("g")
        .attr("class", "links")
        .selectAll("line")
        .data(links)
        .join("line")
        .attr("class", "link");

    // Draw Nodes
    const node = g.append("g")
        .attr("class", "nodes")
        .selectAll("g")
        .data(nodes)
        .join("g")
        .attr("class", d => `node ${d.class}`)
        .call(drag(simulation))
        .on("mouseover", showTooltip)
        .on("mouseout", hideTooltip)
        .on("dblclick", highlightConnections); // Highlight on double-click

    node.append("circle")
        .attr("r", d => d.r)
        .attr("class", d => d.class);

    // Optional: Add text labels to nodes (only for Awards to reduce clutter)
    node.append("text")
        .attr("dx", 12)
        .attr("dy", ".35em")
        .text(d => d.type === 'Award' ? d.Name.split(':')[0] : "")
        .style("font-size", "10px")
        .clone(true).lower()
        .attr("stroke", "white");
        
    // --- Tick Function (Animation) ---
    simulation.on("tick", () => {
        link
            .attr("x1", d => d.source.x)
            .attr("y1", d => d.source.y)
            .attr("x2", d => d.target.x)
            .attr("y2", d => d.target.y);

        node.attr("transform", d => `translate(${d.x},${d.y})`);
    });

    // --- Interactivity Functions ---

    // Drag Functionality
    function drag(simulation) {
        function dragstarted(event) {
            if (!event.active) simulation.alphaTarget(0.3).restart();
            event.subject.fx = event.subject.x;
            event.subject.fy = event.subject.y;
        }

        function dragged(event) {
            event.subject.fx = event.x;
            event.subject.fy = event.y;
        }

        function dragended(event) {
            if (!event.active) simulation.alphaTarget(0);
            event.subject.fx = null;
            event.subject.fy = null;
        }

        return d3.drag()
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended);
    }

    // Tooltip Functionality
    function showTooltip(event, d) {
        let content = `
            <strong>ID:</strong> ${d.ID}<br>
            <strong>Type:</strong> ${d.Type.replace('NODE,', '')}<br>
            <strong>Name:</strong> ${d.Name}<br>
            <strong>Location:</strong> ${d.City ? `${d.City}, ${d.State}` : 'N/A'}<br>
            <strong>Cuisine:</strong> ${d.Cuisine || 'N/A'}
        `;
        
        tooltip.html(content)
            .style("left", (event.pageX + 15) + "px")
            .style("top", (event.pageY - 28) + "px")
            .style("opacity", 1);
    }

    function hideTooltip() {
        tooltip.style("opacity", 0);
    }
    
    // Highlighting Functionality
    let linkedByIndex = {};
    links.forEach(d => {
        linkedByIndex[`${d.source.id},${d.target.id}`] = 1;
        linkedByIndex[`${d.target.id},${d.source.id}`] = 1;
    });

    function isConnected(a, b) {
        return linkedByIndex[`${a.ID},${b.ID}`] || a.ID === b.ID;
    }

    function highlightConnections(event, d) {
        event.stopPropagation(); // Prevent background double-click
        
        node.classed("inactive", function(o) {
            return !isConnected(d, o);
        }).classed("highlighted", function(o) {
            return isConnected(d, o);
        });

        link.classed("inactive", function(o) {
            return o.source.id !== d.ID && o.target.id !== d.ID;
        }).classed("highlighted-link", function(o) {
            return o.source.id === d.ID || o.target.id === d.ID;
        });
    }

    function clearHighlighting() {
        node.classed("inactive", false).classed("highlighted", false);
        link.classed("inactive", false).classed("highlighted-link", false);
    }

}).catch(error => {
    console.error("Error loading data:", error);
    d3.select("#chart-container").html("<p style='color: red;'>Error loading CSV files. Make sure 'nodes.csv' and 'edges.csv' are in the same directory.</p>");

});
