'use strict';

//Selectors
const modalBtn = document.querySelector('.btn-modal')
const meunBtn = document.querySelector('.btn-menu')
const loginDiv = document.querySelector('#login')

//Event Listeners
modalBtn.addEventListener('click', modalEvent)
//Functions
function modalEvent() {
    const filter = document.createElement('div')
    filter.classList.add('filter')
    document.querySelector('body').appendChild(filter);
    loginDiv.style.opacity = "1"
}