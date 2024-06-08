const ctx2 = document.getElementById('chart2').getContext('2d');
const ctx3 = document.getElementById('chart3').getContext('2d');

const chart2 = new Chart(ctx2, {
    type: 'line',
    data: {
        labels: Array.from({ length: 50 }, (_, i) => `Point ${i + 1}`),
        datasets: [{
            label: 'Dataset 2',
            data: Array.from({ length: 50 }, () => Math.floor(Math.random() * 100)),
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
            borderColor: 'rgba(153, 102, 255, 1)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            x: {
                beginAtZero: true
            },
            y: {
                beginAtZero: true
            }
        }
    }
});

const chart3 = new Chart(ctx3, {
    type: 'pie',
    data: {
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [{
            label: 'Dataset 3',
            data: [300, 50, 100],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true
    }
});
