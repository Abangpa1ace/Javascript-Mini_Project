'use strict';

//Selectors
const modalBtn = document.querySelector('.btn-modal')
const meunBtn = document.querySelector('.btn-menu')
const menuSlider = document.querySelector('#slider')
const loginDiv = document.querySelector('#login')
const inputMail = document.querySelector('.input-mail')
const submitBtn = document.querySelector('.submit-btn')

//Event Listeners
modalBtn.addEventListener('click', modalEvent)
meunBtn.addEventListener('click', menuEvent)
submitBtn.addEventListener('click', submitInfo)

//Functions
function modalEvent() {
    const filter = document.createElement('div')
    filter.classList.add('filter')
    document.querySelector('body').appendChild(filter);
    loginDiv.style.opacity = "1"
}

function menuEvent() {
    menuSlider.style.width = "50px"
    menuSlider.style.height = "100vh"
}

function submitInfo() {
    let nameInfo = document.querySelector('.input-name').value;
    let mailInfo = document.querySelector('.input-mail').value;
    let pwdInfo = document.querySelector('.input-pwd').value;
    let pwd2Info = document.querySelector('.input-pwd2').value;
    const filter = document.querySelector('.filter')
    const emailFormCheck = /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (emailFormCheck.test(inputMail.value) === false) {
        alert('E-Mail 형식이 올바르지 않습니다!')
    }
    if (pwdInfo !== pwd2Info) {
        alert('비밀번호가 동일하지 않습니다!')
    }
    localStorage.setItem('userInfo', JSON.stringify([nameInfo, mailInfo, pwdInfo]))
    document.querySelector('body').removeChild(filter)
    loginDiv.style.opacity = "0";
}
