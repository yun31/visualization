// scroll.js

// Add an event listener for the scroll event
document.addEventListener('scroll', function() {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (window.scrollY > 0) {
        scrollIndicator.style.display = 'none';
    } else {
        scrollIndicator.style.display = 'flex';
    }
});

// Intersection Observer for animating chart1
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add a class to trigger the animation
            document.querySelectorAll('#triangle-graph .triangle').forEach(triangle => {
                triangle.classList.add('animate');
            });
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1  // Adjust the threshold as needed
});

// Observe the chart1 container
const chart1Container = document.getElementById('chart1-container');
if (chart1Container) {
    observer.observe(chart1Container);
}
