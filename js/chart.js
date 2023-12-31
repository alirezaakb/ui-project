const labelss = [];
let c = 1;

for (let i = 0; i < 11; i++) {
    labelss[i] = `${c} مرداد `;
    c = c + 3;
}

const data = {
    labels: labelss,
    datasets: [
        {
            label: 'داده 1',
            data: [5, 10, 8, 15, 20, 10, 14, 10, 10, 15, 15],
            backgroundColor: 'rgb(51,65,150)',
            borderColor: 'rgb(50,65,149)',
            borderWidth: 1,
            fill: true,
            tension: 0, // Set tension to 0 for straight lines
            pointRadius: 0,
        },
        {
            label: 'داده 2',
            data: [10, 20, 15, 25, 30, 20, 15, 18, 25, 30, 20],
            backgroundColor: 'rgb(243,201,107)',
            borderColor: 'rgb(243,201,107)',
            borderWidth: 1,
            fill: true,
            tension: 0, // Set tension to 0 for straight lines
            pointRadius: 0,
        },

        {
            label: 'داده 3',
            data: [60, 54, 52, 45, 40, 40, 50, 60, 50, 35, 40],
            backgroundColor: 'rgb(102,187,248)',
            borderColor: 'rgb(102,187,248)',
            borderWidth: 1,
            fill: true,
            tension: 0, // Set tension to 0 for straight lines
            pointRadius: 0,
        }
    ]
};

// Configuration for the chart
const config = {
    type: 'line',
    data: data,
    options: {
        scales: {
            x: {
                beginAtZero: true,
                grid: {
                    display: false, // Remove vertical grid lines
                },
            },
            y: {
                beginAtZero: true,
                grid: {
                    drawTicks: false,
                },
                ticks: {
                    padding: 8,
                },
            },
        },
        plugins: {
            htmlLegend: {
                // ID of the container to put the legend in
                containerID: 'legend-container',
            },
            legend: {
                display: false,
            },
        },
    },
    plugins: [htmlLegendPlugin],
};

// Create the chart
const ctx = document.getElementById('chart').getContext('2d');
const chart = new Chart(ctx, config);




