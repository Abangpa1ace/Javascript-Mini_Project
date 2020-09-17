'use strict';

//Selector
const inputName = document.querySelector('.input-name');
const inputNameMsg = document.querySelector('.input-name-msg');
const inputMail = document.querySelector('.input-mail');
const inputPwd = document.querySelector('.input-pwd');
const inputPwd2 = document.querySelector('.input-pwd2');
const submitBtn = document.querySelector('.submit-btn')

//Event Listener
submitBtn.addEventListener('click', infoCheck);

//Function
function infoCheck() {
    checkName();
    checkMail();
    checkPwd();
    checkPwdAgain();
};

function checkName() {
    if (inputName.value.length < 3) {
        inputName.parentNode.classList.add('wrong');
        inputName.parentNode.classList.remove('right');
    } else if (inputName.value.length > 25) {
        inputName.parentNode.classList.add('wrong');
        inputName.parentNode.classList.remove('right');
        inputNameMsg.innerText = "Another Error!";
    } else {
        inputName.parentNode.classList.add('right');
        inputName.parentNode.classList.remove('wrong');
    }
}

function checkMail() {
    let emailFormCheck = /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (emailFormCheck.test(inputMail.value) === false) {
        inputMail.parentNode.classList.add('wrong');
        inputMail.parentNode.classList.remove('right');
    } else {
        inputMail.parentNode.classList.add('right');
        inputMail.parentNode.classList.remove('wrong');
    }
}

function checkPwd() {
    if (inputPwd.value.length < 6) {
        inputPwd.parentNode.classList.add('wrong');
        inputPwd.parentNode.classList.remove('right');
    } else {
        inputPwd.parentNode.classList.add('right');
        inputPwd.parentNode.classList.remove('wrong');
    }
}

function checkPwdAgain() {
    if (inputPwd2.value !== inputPwd.value) {
        inputPwd2.parentNode.classList.add('wrong');
        inputPwd2.parentNode.classList.remove('right');
    } else {
        inputPwd2.parentNode.classList.add('right');
        inputPwd2.parentNode.classList.remove('wrong');
    }
}
