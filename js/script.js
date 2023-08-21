'use strict'

const navOpenIcon = document.querySelector(".nav-open-icon")
navOpenIcon.addEventListener("click", function () {
    document.getElementById("mySidenav").classList.toggle('nav-open')

    const navButton = document.querySelector(".nav-buttons").querySelectorAll('.nav-link');
    for (let i = 0; i < navButton.length; i++) {
        navButton[i].classList.toggle('hidden');
    }

    document.querySelector(".img-profile").classList.toggle('hidden');
});

const btnForecast = document.querySelectorAll(".change-chart-btn.btn-forecast");
const tableMonth = document.querySelector('.table-month');
const tableWeek = document.querySelector('.table-week');

btnForecast[0].addEventListener('click', function () {
    btnForecast[1].classList.remove('change-chart-btn-active');
    btnForecast[0].classList.add('change-chart-btn-active');
    tableWeek.classList.remove('hidden');
    tableMonth.classList.add('hidden');

});

btnForecast[1].addEventListener('click', function () {
    btnForecast[0].classList.remove('change-chart-btn-active');
    btnForecast[1].classList.add('change-chart-btn-active');
    tableWeek.classList.add('hidden');
    tableMonth.classList.remove('hidden')
});