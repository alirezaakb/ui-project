const data1 = {
    labels: ['مورد 1', 'مورد 2', 'مورد 3', 'مورد 4', 'مورد 5'],
    datasets: [

        {
            label: 'برنده',
            backgroundColor: '#4ac4a0',
            borderColor: '#4ac4a0',
            data: [10, 0, 0, 0, 0],
            stack: 'Stack 0',
            categoryPercentage: 0.5,
        },

        {
            label: 'پیشنهاد قیمت',
            backgroundColor: '#3f80e9',
            borderColor: '#3f80e9',
            data: [5, 15, 12, 8, 14],
            stack: 'Stack 0',
            categoryPercentage: 0.5,
        },

        {
            label: 'قرارداد',
            backgroundColor: '#66bbf8',
            borderColor: '#66bbf8',
            data: [20, 10, 12, 14, 8],
            stack: 'Stack 0',
            categoryPercentage: 0.5,
        },


        {
            label: 'لبه',
            backgroundColor: '#334297',
            borderColor: '#334297',
            data: [20, 20, 8, 10, 17],
            borderRadius: {
                topLeft: 8, // تغییر border radius بالای چپ
                topRight: 8, // تغییر border radius بالای راست
                bottomLeft: 0, // حفظ شکل مستطیلی در پایین چپ
                bottomRight: 0, // حفظ شکل مستطیلی در پایین راست
            },
            stack: 'Stack 0',
            categoryPercentage: 0.5,
        },

        {
            label: 'هدف',
            backgroundColor: '#f7cc6d',
            borderColor: '#f7cc6d',
            data: [40, 50, 10, 70, 30],
            borderRadius: {
                topLeft: 8, // تغییر border radius بالای چپ
                topRight: 8, // تغییر border radius بالای راست
                bottomLeft: 0, // حفظ شکل مستطیلی در پایین چپ
                bottomRight: 0, // حفظ شکل مستطیلی در پایین راست
            },
            barPercentage: 0.5,
        }


    ]
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
                border: {
                    display: false,
                }

            },
            y: {
                max: 80,
                beginAtZero: true,
                grid: {
                    drawTicks: false,
                },
                ticks: {
                    padding: 8,
                },
                border: {
                    display: false,
                }
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
    plugins: [htmlLegendPlugin2],
};

const ctx1 = document.getElementById('barChart1').getContext('2d');
const chart1 = new Chart(ctx1, config1);
