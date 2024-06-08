// Data
const universities = [
    { name: '서울대', values: Array.from({length: 70}, () => Math.floor(Math.random() * 7)), color: '#696969' },
    { name: '연세대', values: Array.from({length: 70}, () => Math.floor(Math.random() * 7)), color: '#C0C0C0' },
    { name: '고려대', values: Array.from({length: 70}, () => Math.floor(Math.random() * 7)), color: '#FFB6C1' },
    { name: '이화여대', values: Array.from({length: 70}, () => Math.floor(Math.random() * 7)), color: '#FF6347' },
    { name: '과기대', values: Array.from({length: 70}, () => Math.floor(Math.random() * 7)), color: '#008080' }
];

// Define triangle sizes and colors
const triangleSizes = [20, 30, 40, 50, 60, 70, 80];
const triangleColors = ['#FFBEBE', '#A1CBF2', '#A5E380', '#F1FF9D', '#C6C8FF', '#F2BEFF', '#FFDE9D'];

const svgWidth = 3800;  // 충분히 큰 너비 설정
const svgHeight = 700;  // 높이를 조정하여 여백 최소화
const triangleHeight = 100;
const margin = { top: 10, right: 50, bottom: 20, left: 150 }; 

const svg = d3.select("#triangle-graph")
    .attr("width", svgWidth + margin.left + margin.right)
    .attr("height", svgHeight + margin.top + margin.bottom)
    .attr("viewBox", `0 0 ${svgWidth + margin.left + margin.right} ${svgHeight + margin.top + margin.bottom}`)
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

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
            const x = (j > 0 ? d3.sum(uni.values.slice(0, j).map(val => triangleSizes[val])) : 0);  // 누적 너비 계산
            if (direction === 'up') {
                return `${x},${triangleHeight} ${x},0 ${x + size},0`;
            } else {
                return `${x},0 ${x},${triangleHeight} ${x + size},${triangleHeight}`;
            }
        })
        .attr("fill", d => triangleColors[d])
        .style("animation-delay", (d, j) => `${j * 0.1}s`);  // 삼각형 애니메이션 지연 시간 설정
    
    // Append text for each university name
    const text = group.append("text")
        .attr("class", "university-label")
        .attr("x", -80)
        .attr("y", triangleHeight / 2)
        .attr("text-anchor", "middle")
        .attr("alignment-baseline", "middle")
        .style("font-size", "18px") 
        .style("font-family", "Pretendard")
    
    // Split the university name into multiple lines
    const lines = uni.name.split('\n');
    lines.forEach((line, index) => {
        text.append("tspan")
            .attr("x", -80)
            .attr("dy", index === 0 ? 0 : "1.2em")
            .text(line);
    });
});
