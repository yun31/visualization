const universities = [
    {
        name: 'snu',
        logo: 'images/snu.png',
        values: [
            { size: 25, category: 'D' }, { size: 25, category: 'D' }, { size: 25, category: 'A' }, 
            { size: 25, category: 'D' }, { size: 25, category: 'D' }, { size: 25, category: 'A' }, 
            { size: 25, category: 'A' }, { size: 25, category: 'A' }, { size: 25, category: 'A' }, 
            { size: 25, category: 'A' }, { size: 25, category: 'A' }, { size: 25, category: 'B' }, 
            { size: 25, category: 'D' }, { size: 25, category: 'A' }, { size: 25, category: 'A' }, 
            { size: 25, category: 'D' }, { size: 25, category: 'E' }, { size: 25, category: 'C' }, 
            { size: 25, category: 'A' }, { size: 25, category: 'D' }, { size: 25, category: 'D' }, 
            { size: 25, category: 'D' }, { size: 25, category: 'D' }, { size: 25, category: 'A' }, 
            { size: 25, category: 'C' }, { size: 25, category: 'E' }, { size: 25, category: 'D' }, 
            { size: 25, category: 'B' }, { size: 25, category: 'D' }, { size: 25, category: 'D' }, 
            { size: 25, category: 'B' }, { size: 25, category: 'A' }, { size: 25, category: 'D' }, 
            { size: 25, category: 'D' }, { size: 25, category: 'B' }, { size: 25, category: 'B' }, 
            { size: 25, category: 'D' }, { size: 25, category: 'D' }, { size: 40, category: 'C' }, 
            { size: 40, category: 'D' }, { size: 40, category: 'C' }, { size: 40, category: 'D' }, 
            { size: 40, category: 'D' }, { size: 40, category: 'D' }, { size: 40, category: 'D' }, 
            { size: 40, category: 'A' }, { size: 40, category: 'A' }, { size: 40, category: 'D' }, 
            { size: 40, category: 'A' }, { size: 40, category: 'D' }, { size: 40, category: 'C' }, 
            { size: 70, category: 'A' }, { size: 70, category: 'D' }, { size: 70, category: 'D' }, 
            { size: 70, category: 'B' }, { size: 70, category: 'D' }, { size: 70, category: 'A' }, 
            { size: 70, category: 'D' }, { size: 70, category: 'D' }, { size: 130, category: 'D' }, 
            { size: 130, category: 'D' }, { size: 130, category: 'D' }, { size: 130, category: 'D' }, 
            { size: 250, category: 'D' }, { size: 250, category: 'D' }, { size: 250, category: 'D' }, 
            { size: 250, category: 'D' }, { size: 250, category: 'D' }, { size: 250, category: 'D' }, 
            { size: 500, category: 'D' }, { size: 500, category: 'D' }, { size: 750, category: 'D' }, 
            { size: 750, category: 'D' }, { size: 750, category: 'D' }
        ].sort(() => Math.random() - 0.5),
    },
    {
        name: 'yu',
        logo: 'images/yu.png',
        values: [
            { size: 25, category: 'A' }, { size: 25, category: 'A' }, { size: 25, category: 'C' }, 
            { size: 25, category: 'B' }, { size: 25, category: 'B' }, { size: 25, category: 'A' }, 
            { size: 25, category: 'A' }, { size: 25, category: 'A' }, { size: 25, category: 'D' }, 
            { size: 25, category: 'A' }, { size: 25, category: 'C' }, { size: 25, category: 'D' }, 
            { size: 25, category: 'A' }, { size: 25, category: 'A' }, { size: 25, category: 'B' }, 
            { size: 25, category: 'A' }, { size: 25, category: 'B' }, { size: 25, category: 'A' }, 
            { size: 25, category: 'A' }, { size: 25, category: 'B' }, { size: 25, category: 'B' }, 
            { size: 25, category: 'D' }, { size: 25, category: 'B' }, { size: 25, category: 'D' }, 
            { size: 25, category: 'B' }, { size: 25, category: 'A' }, { size: 25, category: 'D' }, 
            { size: 25, category: 'C' }, { size: 25, category: 'B' }, { size: 25, category: 'D' }, 
            { size: 25, category: 'A' }, { size: 25, category: 'A' }, { size: 40, category: 'A' }, 
            { size: 40, category: 'C' }, { size: 40, category: 'D' }, { size: 40, category: 'B' }, 
            { size: 40, category: 'B' }, { size: 40, category: 'A' }, { size: 40, category: 'D' }, 
            { size: 40, category: 'B' }, { size: 40, category: 'C' }, { size: 40, category: 'A' }, 
            { size: 40, category: 'B' }, { size: 70, category: 'D' }, { size: 70, category: 'A' }, 
            { size: 70, category: 'B' }, { size: 70, category: 'D' }, { size: 70, category: 'B' }, 
            { size: 70, category: 'C' }, { size: 70, category: 'B' }, { size: 70, category: 'D' }, 
            { size: 70, category: 'D' }, { size: 70, category: 'A' }, { size: 70, category: 'D' }, 
            { size: 70, category: 'C' }, { size: 70, category: 'D' }, { size: 70, category: 'D' }, 
            { size: 70, category: 'A' }, { size: 70, category: 'C' }, { size: 130, category: 'B' }, 
            { size: 130, category: 'A' }, { size: 130, category: 'D' }, { size: 130, category: 'D' }, 
            { size: 130, category: 'B' }, { size: 130, category: 'B' }, { size: 130, category: 'C' }, 
            { size: 130, category: 'C' }, { size: 130, category: 'D' }, { size: 130, category: 'C' }, 
            { size: 130, category: 'D' }, { size: 250, category: 'C' }, { size: 250, category: 'D' }, 
            { size: 250, category: 'B' }, { size: 750, category: 'D' }
        ].sort(() => Math.random() - 0.5),
    },
    {
        name: 'ku',
        logo: 'images/ku.png',
        values: [
            { size: 25, category: 'A' }, { size: 25, category: 'A' }, { size: 25, category: 'A' }, 
            { size: 25, category: 'A' }, { size: 25, category: 'A' }, { size: 25, category: 'A' }, 
            { size: 25, category: 'A' }, { size: 25, category: 'A' }, { size: 25, category: 'A' }, 
            { size: 25, category: 'A' }, { size: 25, category: 'A' }, { size: 25, category: 'A' }, 
            { size: 25, category: 'A' }, { size: 25, category: 'A' }, { size: 25, category: 'A' }, 
            { size: 25, category: 'A' }, { size: 25, category: 'B' }, { size: 25, category: 'A' }, 
            { size: 25, category: 'A' }, { size: 25, category: 'A' }, { size: 25, category: 'A' }, 
            { size: 25, category: 'A' }, { size: 25, category: 'A' }, { size: 25, category: 'A' }, 
            { size: 25, category: 'B' }, { size: 25, category: 'A' }, { size: 25, category: 'A' }, 
            { size: 25, category: 'A' }, { size: 40, category: 'C' }, { size: 40, category: 'D' }, 
            { size: 40, category: 'D' }, { size: 40, category: 'A' }, { size: 40, category: 'D' }, 
            { size: 40, category: 'C' }, { size: 40, category: 'A' }, { size: 40, category: 'D' }, 
            { size: 40, category: 'A' }, { size: 40, category: 'A' }, { size: 40, category: 'C' }, 
            { size: 40, category: 'B' }, { size: 40, category: 'C' }, { size: 40, category: 'B' }, 
            { size: 40, category: 'D' }, { size: 40, category: 'B' }, { size: 40, category: 'B' }, 
            { size: 40, category: 'C' }, { size: 40, category: 'B' }, { size: 70, category: 'C' }, 
            { size: 70, category: 'D' }, { size: 70, category: 'A' }, { size: 70, category: 'E' }, 
            { size: 70, category: 'D' }, { size: 70, category: 'D' }, { size: 70, category: 'D' }, 
            { size: 70, category: 'E' }, { size: 70, category: 'D' }, { size: 70, category: 'D' }, 
            { size: 70, category: 'D' }, { size: 130, category: 'E' }, { size: 130, category: 'D' }, 
            { size: 130, category: 'D' }, { size: 130, category: 'D' }, { size: 130, category: 'D' }, 
            { size: 130, category: 'D' }, { size: 130, category: 'D' }, { size: 130, category: 'D' }, 
            { size: 130, category: 'D' }, { size: 130, category: 'D' }, { size: 130, category: 'D' }, 
            { size: 130, category: 'E' }, { size: 250, category: 'D' }, { size: 250, category: 'D' }, 
            { size: 250, category: 'B' }
        ].sort(() => Math.random() - 0.5),
    },
    {
        name: 'ewu',
        logo: 'images/ewu.png',
        values: [
            { size: 25, category: 'A' }, { size: 25, category: 'A' }, { size: 25, category: 'A' }, 
            { size: 25, category: 'C' }, { size: 25, category: 'A' }, { size: 25, category: 'A' }, 
            { size: 25, category: 'A' }, { size: 25, category: 'B' }, { size: 25, category: 'B' }, 
            { size: 25, category: 'A' }, { size: 25, category: 'D' }, { size: 25, category: 'C' }, 
            { size: 25, category: 'C' }, { size: 25, category: 'A' }, { size: 25, category: 'B' }, 
            { size: 25, category: 'B' }, { size: 25, category: 'C' }, { size: 25, category: 'B' }, 
            { size: 25, category: 'B' }, { size: 25, category: 'A' }, { size: 25, category: 'A' }, 
            { size: 25, category: 'D' }, { size: 25, category: 'C' }, { size: 25, category: 'B' }, 
            { size: 40, category: 'C' }, { size: 40, category: 'A' }, { size: 40, category: 'A' }, 
            { size: 40, category: 'D' }, { size: 40, category: 'D' }, { size: 40, category: 'C' }, 
            { size: 40, category: 'B' }, { size: 40, category: 'D' }, { size: 40, category: 'D' }, 
            { size: 40, category: 'D' }, { size: 40, category: 'B' }, { size: 40, category: 'B' }, 
            { size: 40, category: 'D' }, { size: 40, category: 'D' }, { size: 40, category: 'A' }, 
            { size: 40, category: 'F' }, { size: 40, category: 'B' }, { size: 40, category: 'D' }, 
            { size: 40, category: 'E' }, { size: 40, category: 'A' }, { size: 40, category: 'E' }, 
            { size: 40, category: 'A' }, { size: 40, category: 'E' }, { size: 70, category: 'D' }, 
            { size: 70, category: 'C' }, { size: 70, category: 'D' }, { size: 70, category: 'C' }, 
            { size: 70, category: 'D' }, { size: 70, category: 'D' }, { size: 70, category: 'D' }, 
            { size: 70, category: 'D' }, { size: 70, category: 'C' }, { size: 70, category: 'D' }, 
            { size: 70, category: 'D' }, { size: 70, category: 'D' }, { size: 70, category: 'E' }, 
            { size: 70, category: 'C' }, { size: 130, category: 'D' }, { size: 130, category: 'D' }, 
            { size: 130, category: 'D' }, { size: 130, category: 'D' }, { size: 130, category: 'D' }, 
            { size: 130, category: 'C' }, { size: 130, category: 'D' }, { size: 130, category: 'D' }, 
            { size: 130, category: 'D' }, { size: 130, category: 'E' }, { size: 250, category: 'E' }, 
            { size: 250, category: 'D' }, { size: 500, category: 'E' }
        ].sort(() => Math.random() - 0.5),
    },
    {
        name: 'stech',
        logo: 'images/stech.png',
        values: [
            { size: 25, category: 'A' }, { size: 25, category: 'A' }, { size: 25, category: 'A' }, 
            { size: 25, category: 'A' }, { size: 25, category: 'A' }, { size: 25, category: 'A' }, 
            { size: 25, category: 'A' }, { size: 25, category: 'A' }, { size: 25, category: 'B' }, 
            { size: 25, category: 'A' }, { size: 25, category: 'A' }, { size: 25, category: 'B' }, 
            { size: 25, category: 'A' }, { size: 25, category: 'A' }, { size: 25, category: 'A' }, 
            { size: 25, category: 'B' }, { size: 25, category: 'A' }, { size: 25, category: 'B' },
            { size: 25, category: 'A' }, { size: 25, category: 'C' }, { size: 25, category: 'A' }, 
            { size: 25, category: 'D' }, { size: 25, category: 'A' }, { size: 25, category: 'A' }, 
            { size: 25, category: 'A' }, { size: 25, category: 'B' }, { size: 25, category: 'A' }, 
            { size: 25, category: 'B' }, { size: 25, category: 'A' }, { size: 25, category: 'B' }, 
            { size: 25, category: 'B' }, { size: 25, category: 'B' }, { size: 25, category: 'D' }, 
            { size: 25, category: 'A' }, { size: 25, category: 'B' }, { size: 25, category: 'C' }, 
            { size: 25, category: 'C' }, { size: 25, category: 'A' }, { size: 25, category: 'A' }, 
            { size: 25, category: 'C' }, { size: 25, category: 'A' }, { size: 25, category: 'A' }, 
            { size: 25, category: 'B' }, { size: 40, category: 'B' }, { size: 40, category: 'A' }, 
            { size: 40, category: 'A' }, { size: 40, category: 'C' }, { size: 40, category: 'B' }, 
            { size: 40, category: 'A' }, { size: 40, category: 'A' }, { size: 40, category: 'A' }, 
            { size: 40, category: 'A' }, { size: 70, category: 'C' }, { size: 70, category: 'C' }, 
            { size: 70, category: 'D' }, { size: 70, category: 'B' }, { size: 70, category: 'D' }, 
            { size: 70, category: 'C' }, { size: 70, category: 'D' }, { size: 70, category: 'A' }, 
            { size: 70, category: 'A' }, { size: 70, category: 'B' }, { size: 130, category: 'D' }, 
            { size: 130, category: 'B' }, { size: 130, category: 'B' }, { size: 130, category: 'B' }, 
            { size: 130, category: 'A' }, { size: 130, category: 'C' }, { size: 130, category: 'C' }, 
            { size: 130, category: 'B' }, { size: 250, category: 'D' }, { size: 250, category: 'A' }, 
            { size: 250, category: 'D' }, { size: 500, category: 'E' }
        ].sort(() => Math.random() - 0.5),
    }
];

const triangleColors = {
    25: '#5874C7',
    40: '#D4E9FE',
    70: '#32386A',
    130: '#FFE0E6',
    250: '#A0B1FF',
    500: '#FFBDFE',
    750: '#A8FFCA'
};

const categoryColors = {
    'A': '#E1E2E5',
    'B': '#99A0B3',
    'C': '#656E80',
    'D': 'rgba(248, 23, 62, 0.30)',
    'E': 'rgba(248, 23, 62, 0.60)',
    'F': '#F8173E'
};

const svgWidth = 3400;  // Sufficient width
const svgHeight = 700;  // Adjust height to minimize margin
const triangleHeight = 100;
const margin = { top: 20, right: 50, bottom: 20, left: 20 }; // Adjust left margin to reduce space

// Create first SVG (size-based colors)
const svgSize = d3.select("#triangle-graph")
    .attr("width", svgWidth + margin.left + margin.right)
    .attr("height", svgHeight + margin.top + margin.bottom)
    .attr("viewBox", `0 0 ${svgWidth + margin.left + margin.right} ${svgHeight + margin.top + margin.bottom}`)
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

// Create second SVG (category-based colors)
const svgCategory = d3.select("#triangle-graph2")
    .attr("width", svgWidth + margin.left + margin.right)
    .attr("height", svgHeight + margin.top + margin.bottom)
    .attr("viewBox", `0 0 ${svgWidth + margin.left + margin.right} ${svgHeight + margin.top + margin.bottom}`)
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

// Draw triangles for each university (size-based colors)
universities.forEach((uni, i) => {
    const group = svgSize.append("g").attr("transform", `translate(0, ${i * 150})`);
    
    group.selectAll("polygon")
        .data(uni.values)
        .enter()
        .append("polygon")
        .attr("class", "triangle")
        .attr("points", (d, j) => {
            const size = d.size;
            const direction = j % 2 === 0 ? 'up' : 'down';
            const x = (j > 0 ? d3.sum(uni.values.slice(0, j).map(val => val.size)) : 0);  // Calculate cumulative width
            if (direction === 'up') {
                return `${x},${triangleHeight} ${x},0 ${x + size},0`;
            } else {
                return `${x},0 ${x},${triangleHeight} ${x + size},${triangleHeight}`;
            }
        })
        .attr("fill", d => triangleColors[d.size])
        .style("animation-delay", (d, j) => `${j * 0.1}s`);  // Set animation delay for triangles
});

// Draw triangles for each university (category-based colors)
universities.forEach((uni, i) => {
    const group = svgCategory.append("g")
    .attr("class", "graph-group")
    .attr("transform", `translate(0, ${i * 150})`);
    
    group.selectAll("polygon")
        .data(uni.values)
        .enter()
        .append("polygon")
        .attr("class", "triangle2")
        .attr("points", (d, j) => {
            const size = d.size;
            const direction = j % 2 === 0 ? 'up' : 'down';
            const x = (j > 0 ? d3.sum(uni.values.slice(0, j).map(val => val.size)) : 0);  // Calculate cumulative width
            if (direction === 'up') {
                return `${x},${triangleHeight} ${x},0 ${x + size},0`;
            } else {
                return `${x},0 ${x},${triangleHeight} ${x + size},${triangleHeight}`;
            }
        })
        .attr("fill", d => categoryColors[d.category])
});

// Append logos for each university (for both graphs)
universities.forEach((uni, i) => {
    d3.select("#labels").append("div")
        .attr("class", `label ${uni.name}`)  // Add unique class for each university
        .append("img")
        .attr("src", uni.logo)
        .attr("alt", `${uni.name} logo`)  // Add alt attribute for accessibility
        .style("height", "100px")  // Adjust logo image size
        .style("width", "auto");
});

// Append logos for each university (for both graphs)
universities.forEach((uni, i) => {
    d3.select("#labels2").append("div")
        .attr("class", `label ${uni.name}`)  // Add unique class for each university
        .append("img")
        .attr("src", uni.logo)
        .attr("alt", `${uni.name} logo`)  // Add alt attribute for accessibility
        .style("height", "100px")  // Adjust logo image size
        .style("width", "auto");
});