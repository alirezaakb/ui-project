const labelsss = [];
let cc = 1;

for (let i = 0; i < 9; i++) {
    labelsss[i] = `هفته ${i + 1}`;
}

const data2 = {
    labels: labelsss,
    datasets: [
        {
            label: 'داده 1',
            data: [2.4, 4.8, 2, 3.5, 4, 2, 3, 4, 5],
            backgroundColor: 'rgba(51,65,150,0)',
            borderColor: 'rgb(0,147,46)',
            borderWidth: 2,
            fill: true,
            tension: 0, // Set tension to 0 for straight lines
            pointRadius: 0,
        },
        {
            label: 'داده 2',
            data: [3.6, 3, 4.3, 2, 3, 4, 2, 3, 3],
            backgroundColor: 'rgba(243,201,107,0)',
            borderColor: 'rgb(139,0,155)',
            borderWidth: 2,
            fill: true,
            tension: 0, // Set tension to 0 for straight lines
            pointRadius: 0,
        },

        {
            label: 'داده 3',
            data: [1.8, 2.1, 4, 3, 2, 3.2, 4.4, 4.2, 4],
            backgroundColor: 'rgba(0,72,121,0.05)',
            borderColor: 'rgb(0,72,121)',
            borderWidth: 2,
            fill: true,
            tension: 0, // Set tension to 0 for straight lines
            pointRadius: 0,
        }
    ]
};

// Configuration for the chart
const config2 = {
    type: 'line',
    data: data2,
    options: {
        scales: {
            x: {
                beginAtZero: true,
                grid: {
                    display: false, // Remove vertical grid lines
                },
            },
            y: {
                min: 1,
                ticks: {
                    stepSize: 1,
                    padding: 20,
                },
                grid: {
                    drawTicks: false,
                },
            },
        },
        plugins: {
            htmlLegend: {
                // ID of the container to put the legend in
                containerID: 'legend-container2',
            },
            legend: {
                display: false,
            },
        },
    },
    plugins: [htmlLegendPlugin],
};

// Create the chart
const chart22 = document.getElementById('chart2').getContext('2d');
const chart2 = new Chart(chart22, config2);