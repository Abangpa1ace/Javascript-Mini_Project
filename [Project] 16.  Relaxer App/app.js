'use strict';

//Selectors
const circle = document.querySelector('.circle')
const circleTxt = document.querySelector('.circle-text')
const pointer = document.querySelector('.pointer')
let angle = 0;

//Event Listeners
sizingCircle();
rotateCircle();
setInterval(sizingCircle, 10000);


//Functions
function sizingCircle() {
    circle.className = 'circle in'
    circleTxt.innerText = 'Breath In!'
    setTimeout(() => {
        circle.className = 'circle hold'
        circleTxt.innerText = 'Hold!'
        setTimeout(() => {
            circle.className = 'circle out'
            circleTxt.innerText = 'Breath Out!'
        }, 2000);
    }, 4000);
}

function rotateCircle() {
    setInterval(() => {
        let radius = (circle.offsetWidth / 2) + 20;
        let xVal = radius * Math.sin(angle*Math.PI/180)
        let yVal = radius * -Math.cos(angle*Math.PI/180)
        pointer.style.transform = `translate(${xVal}px, ${yVal}px)`
        angle += 0.572958;
    }, 15)
}