'use strict'

let menuBtn = document.getElementById('btn');
let sidebar = document.querySelector('.sidebar');
let main = document.querySelector('.main');


// close sidebar when max-width is 84 em
function sidebarResponsive(maxWidth) {
    if (maxWidth.matches) {
        sidebar.classList.add('close-sidebar');
        main.classList.add('main-close-sidebar');
    } else {
        sidebar.classList.remove('close-sidebar');
        main.classList.remove('main-close-sidebar');
    }
}

const maxWidth = window.matchMedia("(max-width: 84em)")
sidebarResponsive(maxWidth);
maxWidth.addListener(sidebarResponsive);

// button event for close sidebar
menuBtn.addEventListener('click', function () {
    sidebar.classList.toggle('close-sidebar');
    main.classList.toggle('main-close-sidebar');
});


//  toggle buttons
const btnForecast = document.querySelectorAll(".btn-forecast");
const tableMonth = document.querySelector('.table-month');
const tableWeek = document.querySelector('.table-week');

btnForecast[0].addEventListener('click', function () {
    btnForecast[1].classList.toggle('toggle-btn-active');
    btnForecast[0].classList.toggle('toggle-btn-active');
    tableWeek.classList.toggle('hidden');
    tableMonth.classList.toggle('hidden');

});

btnForecast[1].addEventListener('click', function () {
    btnForecast[0].classList.toggle('toggle-btn-active');
    btnForecast[1].classList.toggle('toggle-btn-active');
    tableWeek.classList.toggle('hidden');
    tableMonth.classList.toggle('hidden')
});


