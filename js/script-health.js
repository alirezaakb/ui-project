const chartBtn = document.querySelectorAll('.chart-btn');
chartBtn[0].addEventListener('click', function () {
    chartBtn[1].classList.remove('toggle-btn-active');
    chartBtn[0].classList.add('toggle-btn-active');
})

chartBtn[1].addEventListener('click', function () {
    chartBtn[0].classList.remove('toggle-btn-active');
    chartBtn[1].classList.add('toggle-btn-active');
});
