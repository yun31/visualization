// 페이지 로드 시 맨 위로 스크롤
window.addEventListener('beforeunload', function() {
    window.scrollTo(0, 0);
});

document.addEventListener('scroll', function() {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (window.scrollY > 0) {
        scrollIndicator.style.visibility = 'hidden';
    } else {
        scrollIndicator.style.visibility = 'visible';
    }
});

// Intersection Observer for animating chart1
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelectorAll('#triangle-graph .triangle').forEach(triangle => {
                triangle.classList.add('animate');
            });
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1
});

const chart1Container = document.getElementById('chart1-container');
if (chart1Container) {
    observer.observe(chart1Container);
}
