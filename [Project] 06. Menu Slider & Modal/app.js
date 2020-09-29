'use strict';

//Selectors
const body = document.querySelector('body')
const menuSlider = document.getElementById('slider')
const container = document.getElementById('container')
const modalBtn = document.querySelector('.btn-modal')
const meunBtn = document.querySelector('.btn-menu')
const loginDiv = document.getElementById('login')
const closeBtn = document.querySelector('.login-close')
const inputMail = document.querySelector('.input-mail')
const submitBtn = document.querySelector('.submit-btn')

//Event Listeners
modalBtn.addEventListener('click', modalEvent)
meunBtn.addEventListener('click', menuEvent)
closeBtn.addEventListener('click', () => {
    const filter = document.querySelector('.filter')
    body.removeChild(filter)
    loginDiv.style.opacity = "0";
})
submitBtn.addEventListener('click', submitInfo)

//Functions
function modalEvent() {
    const filter = document.createElement('div')
    filter.classList.add('filter')
    body.appendChild(filter);
    loginDiv.style.display = "block"
    loginDiv.style.opacity = "1"
}

function menuEvent() {
    if (body.classList.contains('show-slide')===true) {
        body.style.transform = "translateX(0px)";
        body.classList.remove('show-slide');
    } 
    else {
        body.style.transform = "translateX(200px)";
        body.classList.add('show-slide');
    }
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
    else if (pwdInfo !== pwd2Info) {
        alert('비밀번호가 동일하지 않습니다!')
    }
    else {  
        localStorage.setItem('userInfo', JSON.stringify([nameInfo, mailInfo, pwdInfo]))
        body.removeChild(filter)
        loginDiv.style.opacity = "0";
    }
}
