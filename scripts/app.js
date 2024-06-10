// Data for universities
const universities = [
    {
        name: 'snu',
        logo: 'images/snu.png',
        values: [
            ...Array(38).fill(0),
            ...Array(13).fill(1),
            ...Array(8).fill(2),
            ...Array(4).fill(3),
            ...Array(6).fill(4),
            ...Array(2).fill(5),
            ...Array(3).fill(6)
        ].sort(() => Math.random() - 0.5),
    },
    {
        name: 'yu',
        logo: 'images/yu.png',
        values: [
            ...Array(32).fill(0),
            ...Array(11).fill(1),
            ...Array(16).fill(2),
            ...Array(11).fill(3),
            ...Array(3).fill(4),
            ...Array(1).fill(6)
        ].sort(() => Math.random() - 0.5),
    },
    {
        name: 'ku',
        logo: 'images/ku.png',
        values: [
            ...Array(28).fill(0),
            ...Array(19).fill(1),
            ...Array(11).fill(2),
            ...Array(13).fill(3),
            ...Array(3).fill(4)
        ].sort(() => Math.random() - 0.5),
    },
    {
        name: 'ewu',
        logo: 'images/ewu.png',
        values: [
            ...Array(24).fill(0),
            ...Array(23).fill(1),
            ...Array(14).fill(2),
            ...Array(10).fill(3),
            ...Array(2).fill(4),
            ...Array(1).fill(5)
        ].sort(() => Math.random() - 0.5),
    },
    {
        name: 'stech',
        logo: 'images/stech.png',
        values: [
            ...Array(43).fill(0),
            ...Array(9).fill(1),
            ...Array(10).fill(2),
            ...Array(8).fill(3),
            ...Array(3).fill(4),
            ...Array(1).fill(5)
        ].sort(() => Math.random() - 0.5),
    }
];

// Define triangle sizes and colors
const triangleSizes = [25, 40, 70, 130, 250, 500, 750];
const triangleColors = ['#5874C7', '#D4E9FE', '#32386A', '#FFE0E6', '#A0B1FF', '#FFBDFE', '#A8FFCA'];

const svgWidth = 3800;  // Sufficient width
const svgHeight = 700;  // Adjust height to minimize margin
const triangleHeight = 100;
const margin = { top: 20, right: 50, bottom: 20, left: 20 }; // Adjust left margin to reduce space

// Create SVG
const svg = d3.select("#triangle-graph")
    .attr("width", svgWidth + margin.left + margin.right)
    .attr("height", svgHeight + margin.top + margin.bottom)
    .attr("viewBox", `0 0 ${svgWidth + margin.left + margin.right} ${svgHeight + margin.top + margin.bottom}`)
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

// Draw triangles for each university
universities.forEach((uni, i) => {
    const group = svg.append("g").attr("transform", `translate(0, ${i * 150})`);
    
    group.selectAll("polygon")
        .data(uni.values)
        .enter()
        .append("polygon")
        .attr("class", "triangle")
        .attr("points", (d, j) => {
            const size = triangleSizes[d];
            const direction = j % 2 === 0 ? 'up' : 'down';
            const x = (j > 0 ? d3.sum(uni.values.slice(0, j).map(val => triangleSizes[val])) : 0);  // Calculate cumulative width
            if (direction === 'up') {
                return `${x},${triangleHeight} ${x},0 ${x + size},0`;
            } else {
                return `${x},0 ${x},${triangleHeight} ${x + size},${triangleHeight}`;
            }
        })
        .attr("fill", d => triangleColors[d])
        .style("animation-delay", (d, j) => `${j * 0.1}s`);  // Set animation delay for triangles
});

// Append logo for each university
universities.forEach((uni, i) => {
    d3.select(".labels").append("div")
        .attr("class", `label ${uni.name}`)  // Add unique class for each university
        .append("img")
        .attr("src", uni.logo)
        .attr("alt", `${uni.name} logo`)  // Add alt attribute for accessibility
        .style("height", "100px")  // Adjust logo image size
        .style("width", "auto");
});