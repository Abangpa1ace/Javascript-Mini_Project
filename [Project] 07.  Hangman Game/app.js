'use strict';

//Selectors
let allList = [];
let rightList = [];
let wrongList = [];
let lifeCount = 0;
const manLifeList = document.getElementsByClassName('life');
const wrongWords = document.querySelector('.wrong-words')
const letter = document.querySelector('.letter')
const errorMsg = document.querySelector('.error-msg')
const endMsg = document.querySelector('.end-msg')
const endMsgLtr = document.querySelector('.end-msg-letter')
const endMsgBtn = document.querySelector('.end-msg-btn')

//Event Listeners
getRandomText();
document.addEventListener('keypress', keydownCheck)
endMsgBtn.addEventListener('click', () => {
    location.reload();
})
//Functions

function getRandomText() {
    const spanList = [4,5,6,7,8,9,10,11]
    const charList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".match(/./g);
    let spanset = spanList[Math.floor(Math.random() * spanList.length)]
    for (let i = 0 ; i < spanset ; i++) {
        let charset = charList[Math.floor(Math.random()*charList.length)]
        rightList.push(charset);
        let charSpan = document.createElement('span')
        charSpan.classList.add(`${charset}`)
        charSpan.innerText = charset;
        letter.appendChild(charSpan);
    }
    console.log(spanset, rightList)
}

function keydownCheck() {
    //문자외 반환
    const key = event.keyCode
    if (key < 97 || key > 122) {return;}
    // 기입력 확인
    const keycode = String.fromCharCode(key);
    if (allList.includes(keycode)) { 
        errorMsg.classList.add('up')
        setTimeout(() => {
            errorMsg.classList.remove('up')
        }, 3000)
        return;
    }

    allList.push(keycode);
        if (rightList.includes(keycode)) {
            let colortarget = document.getElementsByClassName(`${keycode}`);
            for (let i=0 ; i<colortarget.length ; i++) {
                colortarget[i].style.color = "#73ffd5"
                let idx = rightList.indexOf(keycode);
                rightList.splice(idx,1)
            }
            winGame();
        }
        else {
            manLifeList[lifeCount].style.display = "block";
            lifeCount++;
            wrongList.push(keycode);
            wrongWords.innerText = wrongList.join(', ');
            loseGame();
        }
    console.log(allList)
    console.log(rightList)
    console.log(wrongList)
}

function winGame() {
    if (rightList.length === 0) {
        const filter = document.createElement('div');
        filter.className = "filter"
        document.body.appendChild(filter);
        endMsg.style.display = "flex";
        endMsgLtr.innerText = 'Congratulation!'
    }
}

function loseGame() {
    if (lifeCount === manLifeList.length) {
        const filter = document.createElement('div');
        filter.className = "filter"
        document.body.appendChild(filter);
        endMsgLtr.innerText = 'Try again...'
        endMsg.style.display = "flex";
    }
}
