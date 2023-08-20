const data4 = {
    labels: [
        'Red',
        'Blue',
        'Yellow'
    ],
    datasets: [{
        label: 'My First Dataset',
        data: [300, 50, 100],
        backgroundColor: [
            'rgb(63,128,233)',
            'rgb(51,66,151)',
            'rgb(74,196,160)'
        ],
        hoverOffset: 4
    }]
};
// Configuration for the chart
const config4 = {
    type: 'pie',
    data: data4,
    options: {
        plugins: {
            htmlLegend: {
                // ID of the container to put the legend in
                containerID: 'legend-container4',
            },
            legend: {
                display: false,
            },
        },
    },
};

// Create the chart
const chart44 = document.getElementById('chart4').getContext('2d');
const chart4 = new Chart(chart44, config4);