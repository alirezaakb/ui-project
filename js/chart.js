const getOrCreateLegendList = (chart, id) => {
    const legendContainer = document.getElementById(id);
    let listContainer = legendContainer.querySelector('ul');

    if (!listContainer) {
        listContainer = document.createElement('ul');
        listContainer.style.display = 'flex';
        listContainer.style.flexDirection = 'row';
        listContainer.style.margin = 0;
        listContainer.style.padding = 0;

        legendContainer.appendChild(listContainer);
    }

    return listContainer;
};

const htmlLegendPlugin = {
    id: 'htmlLegend',
    afterUpdate(chart, args, options) {
        const ul = getOrCreateLegendList(chart, options.containerID);

        // Remove old legend items
        while (ul.firstChild) {
            ul.firstChild.remove();
        }

        // Reuse the built-in legendItems generator
        const items = chart.options.plugins.legend.labels.generateLabels(chart);

        items.forEach(item => {
            const li = document.createElement('li');
            li.style.alignItems = 'center';
            li.style.cursor = 'pointer';
            li.style.display = 'flex';
            li.style.flexDirection = 'row';
            li.style.marginLeft = '10px';

            li.onclick = () => {
                const {type} = chart.config;
                if (type === 'pie' || type === 'doughnut') {
                    // Pie and doughnut charts only have a single dataset and visibility is per item
                    chart.toggleDataVisibility(item.index);
                } else {
                    chart.setDatasetVisibility(item.datasetIndex, !chart.isDatasetVisible(item.datasetIndex));
                }
                chart.update();
            };

            // Color box
            const boxSpan = document.createElement('span');
            boxSpan.style.background = item.fillStyle;
            boxSpan.style.borderColor = item.strokeStyle;
            boxSpan.style.borderWidth = item.lineWidth + 'px';
            boxSpan.style.display = 'inline-block';
            boxSpan.style.flexShrink = 0;
            boxSpan.style.height = '1rem';
            boxSpan.style.marginRight = '1rem';
            boxSpan.style.width = '1rem';
            boxSpan.style.borderRadius = '30%';

            // Text
            const textContainer = document.createElement('p');
            textContainer.style.color = item.fontColor;
            textContainer.style.margin = 0;
            textContainer.style.marginRight = '0.5rem';
            textContainer.style.padding = 0;
            textContainer.style.textDecoration = item.hidden ? 'line-through' : '';
            textContainer.style.fontSize = '1rem';

            const text = document.createTextNode(item.text);
            textContainer.appendChild(text);

            li.appendChild(boxSpan);
            li.appendChild(textContainer);
            ul.appendChild(li);
        });
    }
};

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

// --------------------------------------------------------chart2-----------------------------------------------
// --------------------------------------------------------chart2-----------------------------------------------
// --------------------------------------------------------chart2-----------------------------------------------
// --------------------------------------------------------chart2-----------------------------------------------
// --------------------------------------------------------chart2-----------------------------------------------
// --------------------------------------------------------chart2-----------------------------------------------


const getOrCreateLegendList2 = (chart, id) => {
    const legendContainer2 = document.getElementById(id);
    let listContainer = legendContainer2.querySelector('ul');

    if (!listContainer) {
        listContainer = document.createElement('ul');
        listContainer.style.display = 'flex';
        listContainer.style.flexDirection = 'row';
        listContainer.style.margin = 0;
        listContainer.style.padding = 0;

        legendContainer2.appendChild(listContainer);
    }

    return listContainer;
};


const htmlLegendPlugin2 = {
    id: 'htmlLegend',
    afterUpdate(chart, args, options) {
        const ul = getOrCreateLegendList2(chart, options.containerID);

        // Remove old legend items
        while (ul.firstChild) {
            ul.firstChild.remove();
        }

        // Reuse the built-in legendItems generator
        const items = chart.options.plugins.legend.labels.generateLabels(chart);

        items.forEach(item => {
            const li = document.createElement('li');
            li.style.alignItems = 'center';
            li.style.cursor = 'pointer';
            li.style.display = 'flex';
            li.style.flexDirection = 'row';
            li.style.marginLeft = '10px';

            li.onclick = () => {
                const {type} = chart.config;
                if (type === 'pie' || type === 'doughnut') {
                    // Pie and doughnut charts only have a single dataset and visibility is per item
                    chart.toggleDataVisibility(item.index);
                } else {
                    chart.setDatasetVisibility(item.datasetIndex, !chart.isDatasetVisible(item.datasetIndex));
                }
                chart.update();
            };

            // Color box
            const boxSpan = document.createElement('span');
            boxSpan.style.background = item.strokeStyle;
            boxSpan.style.borderColor = item.strokeStyle;
            boxSpan.style.borderWidth = item.lineWidth + 'px';
            boxSpan.style.display = 'inline-block';
            boxSpan.style.flexShrink = 0;
            boxSpan.style.height = '1rem';
            boxSpan.style.marginRight = '1rem';
            boxSpan.style.width = '1rem';
            boxSpan.style.borderRadius = '30%';

            // Text
            const textContainer = document.createElement('p');
            textContainer.style.color = item.fontColor;
            textContainer.style.margin = 0;
            textContainer.style.marginRight = '0.5rem';
            textContainer.style.padding = 0;
            textContainer.style.textDecoration = item.hidden ? 'line-through' : '';
            textContainer.style.fontSize = '1rem';

            const text = document.createTextNode(item.text);
            textContainer.appendChild(text);

            li.appendChild(boxSpan);
            li.appendChild(textContainer);
            ul.appendChild(li);
        });
    }
};


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
    plugins: [htmlLegendPlugin2],
};

// Create the chart
const chart22 = document.getElementById('chart2').getContext('2d');
const chart2 = new Chart(chart22, config2);





