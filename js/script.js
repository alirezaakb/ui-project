'use strict'

let btn = document.getElementById('btn');
let sidebar = document.querySelector('.sidebar');
let main = document.querySelector('.main');

btn.addEventListener('click', function () {
    sidebar.classList.toggle('active');
    main.classList.toggle('main-sidebar-active');
});

const navOpenIcon = document.querySelector(".nav-open-icon");

const btnForecast = document.querySelectorAll(".btn-forecast");
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


