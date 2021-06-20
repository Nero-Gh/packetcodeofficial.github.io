setinterval(setClock , 1000);
const hourHand  = document.querySelector('[data-hours-hand]');
const minHand  = document.querySelector('[data-minutes-hand]');
const secHand  = document.querySelector('[data-seconds-hand]');

function setClock() {
    const currentDate =  new Date();
    const secRatio = currentDate.getSeconds()/60;
    const minRatio =  (secRatio + currentDate.getMinutes()) /60;
    const hourRatio =( minRatio + currentDate.getHours()) /12;
     setRotation(secHand, secRatio);
     setRotation(minHand, minRatio);
     setRotation(hourHand, hourRatio);
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360);
}
setClock();