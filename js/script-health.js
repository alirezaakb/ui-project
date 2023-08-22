const chartBtn = document.querySelectorAll('.chart-btn');
chartBtn[0].addEventListener('click', function () {
    chartBtn[1].classList.remove('change-chart-btn-active');
    chartBtn[0].classList.add('change-chart-btn-active');
})

chartBtn[1].addEventListener('click', function () {
    chartBtn[0].classList.remove('change-chart-btn-active');
    chartBtn[1].classList.add('change-chart-btn-active');
});