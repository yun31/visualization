const snuData = [
    { value: 0.2, isTrue: true }, { value: 0.3, isTrue: true }, { value: 0.5, isTrue: false },
    { value: 0.2, isTrue: true }, { value: 0.2, isTrue: true }, { value: 1.2, isTrue: false },
    { value: 0.7, isTrue: false }, { value: 0.7, isTrue: false }, { value: 3.9, isTrue: false },
    { value: 0.6, isTrue: false }, { value: 0.9, isTrue: false }, { value: 0.5, isTrue: false },
    { value: 0.3, isTrue: true }, { value: 0.7, isTrue: false }, { value: 0.9, isTrue: false },
    { value: 0.3, isTrue: true }, { value: 0.2, isTrue: true }, { value: 0.5, isTrue: false },
    { value: 1.4, isTrue: false }, { value: 0.3, isTrue: true }, { value: 0.4, isTrue: true },
    { value: 0.4, isTrue: true }, { value: 0.4, isTrue: true }, { value: 0.9, isTrue: false },
    { value: 0.5, isTrue: false }, { value: 0.2, isTrue: true }, { value: 0.4, isTrue: true },
    { value: 0.7, isTrue: false }, { value: 0.4, isTrue: true }, { value: 0.3, isTrue: true },
    { value: 0.7, isTrue: false }, { value: 1.1, isTrue: false }, { value: 0.4, isTrue: true },
    { value: 0.5, isTrue: true }, { value: 0.7, isTrue: false }, { value: 0.9, isTrue: false },
    { value: 0.4, isTrue: true }, { value: 0.5, isTrue: true }, { value: 0.8, isTrue: false },
    { value: 0.5, isTrue: true }, { value: 0.9, isTrue: false }, { value: 0.7, isTrue: true },
    { value: 0.7, isTrue: true }, { value: 0.6, isTrue: true }, { value: 0.6, isTrue: true },
    { value: 1.8, isTrue: false }, { value: 4.7, isTrue: false }, { value: 0.9, isTrue: true },
    { value: 1.9, isTrue: false }, { value: 0.7, isTrue: true }, { value: 1.3, isTrue: false },
    { value: 5, isTrue: false }, { value: 1.2, isTrue: true }, { value: 1.2, isTrue: true },
    { value: 2.4, isTrue: false }, { value: 1.2, isTrue: true }, { value: 2.7, isTrue: false },
    { value: 1.5, isTrue: false }, { value: 1.1, isTrue: true }, { value: 1.7, isTrue: true },
    { value: 1.6, isTrue: true }, { value: 1.4, isTrue: true }, { value: 1.8, isTrue: true },
    { value: 2.4, isTrue: true }, { value: 2.1, isTrue: true }, { value: 2.7, isTrue: false },
    { value: 2.2, isTrue: true }, { value: 2.4, isTrue: true }, { value: 3.1, isTrue: true },
    { value: 3.5, isTrue: true }, { value: 3.8, isTrue: true }, { value: 4.8, isTrue: true },
    { value: 5.1, isTrue: true }, { value: 4.8, isTrue: false }
];

const yuData = [
    { value: 1, isTrue: false }, { value: 0.4, isTrue: false }, { value: 0.2, isTrue: false },
    { value: 0.3, isTrue: false }, { value: 0.3, isTrue: false }, { value: 0.8, isTrue: false },
    { value: 0.9, isTrue: false }, { value: 1, isTrue: false }, { value: 0.3, isTrue: true },
    { value: 0.8, isTrue: false }, { value: 0.4, isTrue: false }, { value: 0.2, isTrue: true },
    { value: 1.2, isTrue: false }, { value: 1.6, isTrue: false }, { value: 0.7, isTrue: false },
    { value: 1.3, isTrue: false }, { value: 0.5, isTrue: false }, { value: 1.3, isTrue: false },
    { value: 1.2, isTrue: false }, { value: 0.6, isTrue: false }, { value: 0.7, isTrue: false },
    { value: 0.4, isTrue: true }, { value: 0.7, isTrue: false }, { value: 0.5, isTrue: true },
    { value: 0.7, isTrue: false }, { value: 1.2, isTrue: false }, { value: 0.4, isTrue: true },
    { value: 0.7, isTrue: false }, { value: 1, isTrue: false }, { value: 0.6, isTrue: true },
    { value: 1.2, isTrue: false }, { value: 1.4, isTrue: false }, { value: 1.9, isTrue: false },
    { value: 0.9, isTrue: false }, { value: 0.6, isTrue: true }, { value: 1.1, isTrue: false },
    { value: 1.2, isTrue: false }, { value: 1.9, isTrue: false }, { value: 0.9, isTrue: true },
    { value: 1.5, isTrue: false }, { value: 1.2, isTrue: false }, { value: 2.1, isTrue: false },
    { value: 1.6, isTrue: false }, { value: 1, isTrue: true }, { value: 2.3, isTrue: false },
    { value: 1.8, isTrue: false }, { value: 0.9, isTrue: true }, { value: 1.8, isTrue: false },
    { value: 1.4, isTrue: false }, { value: 2.1, isTrue: false }, { value: 1.2, isTrue: true },
    { value: 0.9, isTrue: true }, { value: 2.7, isTrue: false }, { value: 0.9, isTrue: true },
    { value: 1.7, isTrue: false }, { value: 1.2, isTrue: true }, { value: 1.2, isTrue: true },
    { value: 2.6, isTrue: false }, { value: 1.8, isTrue: false }, { value: 2.1, isTrue: false },
    { value: 3.2, isTrue: false }, { value: 1.1, isTrue: true }, { value: 1.1, isTrue: true },
    { value: 1.7, isTrue: false }, { value: 2.4, isTrue: false }, { value: 2, isTrue: false },
    { value: 2.4, isTrue: false }, { value: 1.4, isTrue: true }, { value: 2.2, isTrue: false },
    { value: 1.7, isTrue: true }, { value: 3.2, isTrue: false }, { value: 2.1, isTrue: true },
    { value: 4.4, isTrue: false }, { value: 4.3, isTrue: false }
];

const kuData = [
    { value: 0.7, isTrue: false }, { value: 0.4, isTrue: false }, { value: 0.7, isTrue: false },
    { value: 2, isTrue: false }, { value: 0.4, isTrue: false }, { value: 0.4, isTrue: false },
    { value: 1.2, isTrue: false }, { value: 0.9, isTrue: false }, { value: 1.4, isTrue: false },
    { value: 0.5, isTrue: false }, { value: 0.7, isTrue: false }, { value: 1, isTrue: false },
    { value: 0.5, isTrue: false }, { value: 0.9, isTrue: false }, { value: 3, isTrue: false },
    { value: 2.6, isTrue: false }, { value: 0.7, isTrue: false }, { value: 2.6, isTrue: false },
    { value: 1.6, isTrue: false }, { value: 0.9, isTrue: false }, { value: 1.5, isTrue: false },
    { value: 2.3, isTrue: false }, { value: 1.2, isTrue: false }, { value: 1.5, isTrue: false },
    { value: 1, isTrue: false }, { value: 2.6, isTrue: false }, { value: 1.7, isTrue: false },
    { value: 1.9, isTrue: false }, { value: 0.8, isTrue: false }, { value: 0.5, isTrue: true },
    { value: 0.5, isTrue: true }, { value: 1.6, isTrue: false }, { value: 0.5, isTrue: true },
    { value: 1, isTrue: false }, { value: 3.1, isTrue: false }, { value: 0.8, isTrue: true },
    { value: 1.7, isTrue: false }, { value: 2.4, isTrue: false }, { value: 1, isTrue: false },
    { value: 1.5, isTrue: false }, { value: 1, isTrue: false }, { value: 1.6, isTrue: false },
    { value: 0.6, isTrue: true }, { value: 1.7, isTrue: false }, { value: 1.5, isTrue: false },
    { value: 1.3, isTrue: false }, { value: 1.5, isTrue: false }, { value: 1.3, isTrue: false },
    { value: 0.7, isTrue: true }, { value: 2.1, isTrue: false }, { value: 0.7, isTrue: true },
    { value: 0.8, isTrue: true }, { value: 0.9, isTrue: true }, { value: 1.1, isTrue: true },
    { value: 0.9, isTrue: true }, { value: 1.2, isTrue: true }, { value: 1.2, isTrue: true },
    { value: 1.3, isTrue: true }, { value: 1, isTrue: false }, { value: 1.5, isTrue: true },
    { value: 1.3, isTrue: true }, { value: 1.2, isTrue: true }, { value: 1.9, isTrue: true },
    { value: 1.9, isTrue: true }, { value: 1.3, isTrue: true }, { value: 1.4, isTrue: true },
    { value: 1.6, isTrue: true }, { value: 1.3, isTrue: true }, { value: 1.3, isTrue: true },
    { value: 1.4, isTrue: true }, { value: 1.3, isTrue: true }, { value: 1.4, isTrue: true },
    { value: 2.4, isTrue: true }, { value: 4.3, isTrue: false }
];

const ewuData = [
    { value: 1, isTrue: false }, { value: 0.8, isTrue: false }, { value: 1.1, isTrue: false },
    { value: 0.4, isTrue: false }, { value: 1.3, isTrue: false }, { value: 2.6, isTrue: false },
    { value: 1, isTrue: false }, { value: 0.8, isTrue: false }, { value: 0.7, isTrue: false },
    { value: 1.2, isTrue: false }, { value: 0.4, isTrue: true }, { value: 0.6, isTrue: false },
    { value: 0.6, isTrue: false }, { value: 1.3, isTrue: false }, { value: 0.8, isTrue: false },
    { value: 0.9, isTrue: false }, { value: 0.6, isTrue: false }, { value: 0.9, isTrue: false },
    { value: 1, isTrue: false }, { value: 1.7, isTrue: false }, { value: 1.5, isTrue: false },
    { value: 0.8, isTrue: true }, { value: 1, isTrue: false }, { value: 1.2, isTrue: false },
    { value: 1, isTrue: false }, { value: 2.5, isTrue: false }, { value: 1.8, isTrue: false },
    { value: 0.9, isTrue: true }, { value: 0.9, isTrue: true }, { value: 1.2, isTrue: false },
    { value: 1.3, isTrue: false }, { value: 0.7, isTrue: true }, { value: 0.7, isTrue: true },
    { value: 0.6, isTrue: true }, { value: 1.4, isTrue: false }, { value: 1.4, isTrue: false },
    { value: 1, isTrue: false }, { value: 0.9, isTrue: true }, { value: 2.2, isTrue: false },
    { value: 0.5, isTrue: true }, { value: 1.6, isTrue: false }, { value: 0.8, isTrue: true },
    { value: 0.7, isTrue: true }, { value: 2.7, isTrue: false }, { value: 0.7, isTrue: true },
    { value: 3.5, isTrue: false }, { value: 0.8, isTrue: true }, { value: 1.4, isTrue: true },
    { value: 2, isTrue: false }, { value: 1.3, isTrue: true }, { value: 1.6, isTrue: false },
    { value: 1.4, isTrue: true }, { value: 1.2, isTrue: true }, { value: 1.3, isTrue: true },
    { value: 1.2, isTrue: true }, { value: 2.1, isTrue: false }, { value: 1.7, isTrue: true },
    { value: 1.6, isTrue: true }, { value: 1.7, isTrue: true }, { value: 1, isTrue: false },
    { value: 2, isTrue: false }, { value: 1.6, isTrue: true }, { value: 1.5, isTrue: true },
    { value: 2, isTrue: false }, { value: 1.7, isTrue: true }, { value: 1.3, isTrue: true },
    { value: 2.3, isTrue: false }, { value: 1.5, isTrue: true }, { value: 1.6, isTrue: true },
    { value: 2.1, isTrue: true }, { value: 1.3, isTrue: true }, { value: 2, isTrue: true },
    { value: 3.3, isTrue: false }, { value: 2.4, isTrue: true }
];

const stechData = [
    { value: 0.4, isTrue: true }, { value: 0.4, isTrue: false }, { value: 0.4, isTrue: false },
    { value: 0.5, isTrue: false }, { value: 0.5, isTrue: false }, { value: 0.6, isTrue: false },
    { value: 0.5, isTrue: false }, { value: 0.5, isTrue: false }, { value: 0.4, isTrue: false },
    { value: 0.5, isTrue: false }, { value: 0.7, isTrue: false }, { value: 0.5, isTrue: false },
    { value: 1, isTrue: false }, { value: 0.8, isTrue: false }, { value: 0.9, isTrue: false },
    { value: 0.4, isTrue: false }, { value: 1.6, isTrue: false }, { value: 0.5, isTrue: false },
    { value: 0.6, isTrue: false }, { value: 0.4, isTrue: false }, { value: 0.9, isTrue: false },
    { value: 0.3, isTrue: true }, { value: 0.7, isTrue: false }, { value: 1.7, isTrue: false },
    { value: 0.7, isTrue: false }, { value: 0.5, isTrue: false }, { value: 1, isTrue: false },
    { value: 0.6, isTrue: false }, { value: 0.8, isTrue: false }, { value: 0.6, isTrue: false },
    { value: 0.7, isTrue: false }, { value: 0.6, isTrue: false }, { value: 0.4, isTrue: true },
    { value: 3.4, isTrue: false }, { value: 0.6, isTrue: false }, { value: 0.5, isTrue: false },
    { value: 0.5, isTrue: false }, { value: 1.5, isTrue: false }, { value: 1.4, isTrue: false },
    { value: 0.6, isTrue: false }, { value: 1.7, isTrue: false }, { value: 2.1, isTrue: false },
    { value: 0.7, isTrue: false }, { value: 0.9, isTrue: false }, { value: 1.5, isTrue: false },
    { value: 1.5, isTrue: false }, { value: 1.1, isTrue: false }, { value: 1.3, isTrue: false },
    { value: 2.2, isTrue: false }, { value: 1.7, isTrue: false }, { value: 2.3, isTrue: false },
    { value: 2, isTrue: false }, { value: 1.2, isTrue: false }, { value: 1.2, isTrue: false },
    { value: 1, isTrue: true }, { value: 1.9, isTrue: false }, { value: 1.2, isTrue: true },
    { value: 1.3, isTrue: false }, { value: 1.2, isTrue: true }, { value: 2.7, isTrue: false },
    { value: 4.5, isTrue: false }, { value: 2.5, isTrue: false }, { value: 1.5, isTrue: true },
    { value: 2.4, isTrue: false }, { value: 2.6, isTrue: false }, { value: 2.6, isTrue: false },
    { value: 5.6, isTrue: false }, { value: 1.8, isTrue: false }, { value: 2.4, isTrue: false },
    { value: 2.9, isTrue: false }, { value: 1.7, isTrue: true }, { value: 4.1, isTrue: false },
    { value: 2.2, isTrue: true }, { value: 2.5, isTrue: false }
];

const universitiesData = [
    { name: 'snu', displayName: '서울대학교', data: snuData, diameter: 334*0.8, color: 'rgba(198, 125, 255, 0.2)', borderColor: 'rgba(198, 125, 255, 0.7)', trueColor: 'rgba(198, 125, 255, 0.6)', titleColor: 'rgba(198, 125, 255, 1)' },
    { name: 'yu', displayName: '연세대학교', data: yuData, diameter: 410*0.8, color: 'rgba(120, 150, 255, 0.2)', borderColor: 'rgba(120, 150, 255, 0.7)', trueColor: 'rgba(120, 150, 255, 0.6)', titleColor: 'rgba(120, 150, 255, 1)' },
    { name: 'ku', displayName: '고려대학교', data: kuData, diameter: 402*0.8, color: 'rgba(255, 116, 90, 0.2)', borderColor: 'rgba(255, 116, 90, 0.7)', trueColor: 'rgba(255, 116, 90, 0.6)', titleColor: 'rgba(255, 116, 90, 1)' },
    { name: 'ewu', displayName: '이화여자대학교', data: ewuData, diameter: 314*0.8, color: 'rgba(69, 183, 55, 0.2)', borderColor: 'rgba(69, 183, 55, 0.7)', trueColor: 'rgba(69, 183, 55, 0.6)', titleColor: 'rgba(69, 183, 55, 1)' },
    { name: 'stech', displayName: '서울과학기술대학교', data: stechData, diameter: 402*0.8, color: 'rgba(255, 180, 33, 0.2)', borderColor: 'rgba(255, 180, 33, 0.7)', trueColor: 'rgba(255, 180, 33, 0.6)', titleColor: 'rgba(255, 180, 33, 1)' }
];

const createPieChart = (ctx, data, diameter, color, borderColor, displayName, trueColor, titleColor) => {
    const trueData = data.filter(d => d.isTrue);
    const falseData = data.filter(d => !d.isTrue);

    const chartData = [...trueData, ...falseData].map(d => d.value);
    const backgroundColors = [
        ...trueData.map(() => trueColor), // true인 값들에만 지정된 색상 적용
        ...falseData.map(() => color) // false인 값들에만 지정된 색상 적용
    ];

    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: Array.from({ length: chartData.length }, (_, i) => `Data ${i + 1}`),
            datasets: [{
                data: chartData,
                backgroundColor: backgroundColors,
                borderColor: borderColor, // 학교별 구분선 색상 적용
                borderWidth: 0.2 // 구분선 두께
            }],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false,
                },
                title: {
                    display: true,
                    text: displayName,
                    color: titleColor,
                    font: {
                        size: 18,
                        weight: 500
                    }
                }
            },
            layout: {
                padding: 0,
            },
            animation: {
                duration: 0 // 애니메이션 초기화 (Intersection Observer에서 트리거 시 애니메이션 재생)
            }
        },
    });

    ctx.canvas.style.width = `${diameter}px`;
    ctx.canvas.style.height = `${diameter}px`;
};

document.addEventListener('DOMContentLoaded', () => {
    universitiesData.forEach(uni => {
        const pieChartContainer = document.getElementById(`pie-chart-${uni.name}`);
        if (pieChartContainer) {
            const ctx = pieChartContainer.appendChild(document.createElement('canvas')).getContext('2d');
            createPieChart(ctx, uni.data, uni.diameter, uni.color, uni.borderColor, uni.displayName, uni.trueColor, uni.titleColor);
        }
    });
});