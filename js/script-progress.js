const conversionBtn = document.querySelectorAll('.conversion-btn');
const lostBtn = document.querySelectorAll('.lost-btn');
conversionBtn[0].addEventListener('click', function () {
    conversionBtn[1].classList.toggle('toggle-btn-active');
    conversionBtn[0].classList.toggle('toggle-btn-active');
});

conversionBtn[1].addEventListener('click', function () {
    conversionBtn[0].classList.toggle('toggle-btn-active');
    conversionBtn[1].classList.toggle('toggle-btn-active');
});

lostBtn[0].addEventListener('click', function () {
    lostBtn[1].classList.toggle('toggle-btn-active');
    lostBtn[0].classList.toggle('toggle-btn-active');
});

lostBtn[1].addEventListener('click', function () {
    lostBtn[0].classList.toggle('toggle-btn-active');
    lostBtn[1].classList.toggle('toggle-btn-active');
});