// Data
const universities = [
    {
        name: '서울대',
        logo: 'images/snu.png',
        values: [
            ...Array(38).fill(0),
            ...Array(13).fill(1),
            ...Array(8).fill(2),
            ...Array(4).fill(3),
            ...Array(6).fill(4),
            ...Array(2).fill(5),
            ...Array(3).fill(6)
        ].sort(() => Math.random() - 0.5)
    },
    {
        name: '연세대',
        logo: 'images/yu.png',
        values: [
            ...Array(32).fill(0),
            ...Array(11).fill(1),
            ...Array(16).fill(2),
            ...Array(11).fill(3),
            ...Array(3).fill(4),
            ...Array(1).fill(6)
        ].sort(() => Math.random() - 0.5)
    },
    {
        name: '고려대',
        logo: 'images/ku.png',
        values: [
            ...Array(28).fill(0),
            ...Array(19).fill(1),
            ...Array(11).fill(2),
            ...Array(13).fill(3),
            ...Array(3).fill(4)
        ].sort(() => Math.random() - 0.5)
    },
    {
        name: '이화여대',
        logo: 'images/ewu.png',
        values: [
            ...Array(24).fill(0),
            ...Array(23).fill(1),
            ...Array(14).fill(2),
            ...Array(10).fill(3),
            ...Array(2).fill(4),
            ...Array(1).fill(5)
        ].sort(() => Math.random() - 0.5)
    },
    {
        name: '과기대',
        logo: 'images/stech.png',
        values: [
            ...Array(43).fill(0),
            ...Array(9).fill(1),
            ...Array(10).fill(2),
            ...Array(8).fill(3),
            ...Array(3).fill(4),
            ...Array(1).fill(5)
        ].sort(() => Math.random() - 0.5)
    }
];

// Define triangle sizes and colors
const triangleSizes = [25, 40, 70, 130, 250, 500, 750];
const triangleColors = ['#FFBEBE', '#A1CBF2', '#A5E380', '#F1FF9D', '#C6C8FF', '#F2BEFF', '#FFDE9D'];

const svgWidth = 3800;  // 충분히 큰 너비 설정
const svgHeight = 700;  // 높이를 조정하여 여백 최소화
const triangleHeight = 100;
const margin = { top: 20, right: 50, bottom: 20, left: 20 }; // 왼쪽 여백을 줄이기 위해 left 값을 조정

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
});

// Append logo for each university
universities.forEach((uni, i) => {
    const label = d3.select(".labels").append("div")
        .attr("class", "label")
        .append("img")
        .attr("src", uni.logo)
        .style("height", "100px")  // 로고 이미지의 크기 조정
        .style("width", "auto");
});