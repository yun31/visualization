// 예: 이미지 로드 후 툴팁 위치 조정
document.addEventListener('DOMContentLoaded', (event) => {
    const tooltip = document.querySelector('.tooltip');
    const image = document.querySelector('.image');
    
    image.addEventListener('mouseover', () => {
        const rect = image.getBoundingClientRect();
        tooltip.style.left = `${rect.width / 2}px`;
    });
});