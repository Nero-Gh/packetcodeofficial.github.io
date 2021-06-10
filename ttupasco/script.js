var selectQuery = (element) => document.querySelector(element);

var togglebtn = selectQuery('#toggle');
var menubars = selectQuery('#nav-list');
var preloader = selectQuery('#loading-container')
togglebtn.addEventListener('click', () => {
    menubars.classList.toggle('active');
});

window.addEventListener('load', () => {
    setTimeout(function () {
        // preloader.style.transform = 'translateX(-100%)';
        // preloader.style.transition = 'transform 0.5s';
        preloader.style.transform = 'scale(0)';
        preloader.style.transition = 'transform 0.5s';
    }, 100);
});