const data1 = {
    labels: ['مورد 1', 'مورد 2', 'مورد 3', 'مورد 4', 'مورد 5'],
    datasets: [{
        label: 'داده‌ها 1',
        backgroundColor: '#007bff',
        borderColor: '#007bff',
        data: [80, 60, 40, 90, 50],
    }]
};

const config1 = {
    type: 'bar',
    data: data1,
    options: {
        scales: {
            x: {
                grid: {
                    display: false, // Remove vertical grid lines
                },
            },
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            htmlLegend: {
                // ID of the container to put the legend in
                containerID: 'legend-container3',
            },
            legend: {
                display: false,
            },
        },
    },
};

const ctx1 = document.getElementById('barChart1').getContext('2d');
const chart1 = new Chart(ctx1, config1);