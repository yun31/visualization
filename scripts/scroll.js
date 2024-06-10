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
            if (entry.target.id === 'chart1-container') {
                document.querySelectorAll('#triangle-graph .triangle').forEach(triangle => {
                    triangle.classList.add('animate');
                });
            } else if (entry.target.id === 'chart2-container') {
                document.querySelectorAll('#triangle-graph2 .triangle2').forEach(triangle2 => {
                    triangle2.classList.add('expanded');
                });
            }
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

const chart2Container = document.getElementById('chart2-container');
if (chart2Container) {
    observer.observe(chart2Container);
}

// Toggle animation button
document.getElementById('toggle-animation').addEventListener('click', () => {
    const triangles2 = document.querySelectorAll('#triangle-graph2 .triangle2');
    triangles2.forEach(triangle2 => {
        triangle2.classList.remove('expanded');
        triangle2.classList.add('compressed');
    });

    setTimeout(() => {
        triangles2.forEach(triangle2 => {
            triangle2.classList.remove('compressed');
            triangle2.classList.add('expanded');
        });
    }, 2000); // 3초 후에 다시 원래 크기로 돌아감
});