'use strict'

const navLink = document.querySelectorAll(".nav-link-title");

document.querySelector(".nav-open-icon").addEventListener("click", function () {
    document.getElementById("mySidenav").classList.toggle('nav-open')

    const navButton = document.querySelector(".nav-buttons").querySelectorAll('.nav-link');
    for (let i = 0; i < navButton.length; i++) {
        navButton[i].classList.toggle('hidden');
    }

    document.querySelector(".img-profile").classList.toggle('hidden');
});

document.getElementById('health-link').addEventListener('click', function () {
    document.getElementById('dashboard').classList.add('hidden');
    document.getElementById('health').classList.remove('hidden');
    document.getElementById('dashboard-link').classList.remove('nav-link-hover');
    document.getElementById('dashboard-icon').classList.remove('nav-icon-hover');

});

document.getElementById('dashboard-link').addEventListener('click', function () {
    document.getElementById('dashboard').classList.remove('hidden');
    document.getElementById('health').classList.add('hidden');
    document.getElementById('health-link').classList.remove('nav-link-hover');
    document.getElementById('health-icon-icon').classList.remove('nav-icon-hover');
});

if (!document.getElementById('dashboard').classList.contains('hidden') && document.getElementById('health').classList.contains('hidden')) {
    document.getElementById('dashboard-link').classList.add('nav-link-hover');
    document.getElementById('dashboard-icon').classList.add('nav-icon-hover');
}

if (!document.getElementById('health').classList.contains('hidden') && document.getElementById('dashboard').classList.contains('hidden')) {
    document.getElementById('health-link').classList.add('nav-link-hover');
    document.getElementById('health-icon-icon').classList.add('nav-icon-hover');
}

const btnForecast = document.querySelectorAll(".change-chart-btn.btn-forecast");


btnForecast[0].addEventListener('click', function () {
    btnForecast[1].classList.remove('change-chart-btn-active');
    btnForecast[0].classList.add('change-chart-btn-active');
});

btnForecast[1].addEventListener('click', function () {
    btnForecast[0].classList.remove('change-chart-btn-active');
    btnForecast[1].classList.add('change-chart-btn-active');
});