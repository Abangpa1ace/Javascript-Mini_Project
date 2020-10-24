'use strict';

//Selectors
let today = new Date();
let nowYear = today.getFullYear();

const container = document.getElementById('container')
const day = document.querySelector('.day')
const hour = document.querySelector('.hour')
const min = document.querySelector('.min')
const sec = document.querySelector('.sec')
const nextyear = document.querySelector('.next-year')

//Event Listeners
setTimeout(() => {
    container.classList.add('loaded')
}, 2000);


//Functions
setInterval(() => {
    let today = new Date();
    let dday = new Date(nowYear, 11, 31);

    let dayLeft = Math.ceil((dday-today)/(1000*60*60*24))
    let hourLeft = 24 - today.getHours() - 1;
    let minLeft = 60 - today.getMinutes() - 1;
    let secLeft = 60 - today.getSeconds() - 1;

    day.innerText = dayLeft;
    hour.innerText = hourLeft.toString().padStart(2,'0');
    min.innerText = minLeft.toString().padStart(2,'0');
    sec.innerText = secLeft.toString().padStart(2,'0');
}, 1000)

nextyear.innerText = today.getFullYear() + 1;