var mySelect = (element) => document.querySelector(element);

var nav = mySelect('.nav');
var bars = mySelect('.toggle');

bars.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// this helps u to toggle with the button