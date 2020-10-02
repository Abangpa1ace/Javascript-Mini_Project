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

//Event Listeners
getRandomText();
document.addEventListener('keydown', keydownCheck)

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
    // 기입력 확인
    let keycode = String.fromCharCode(event.keyCode);
    if (allList.includes(keycode)) { 
        errorMsg.classList.add('up')
        
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
    }
}

function loseGame() {
    if (lifeCount === manLifeList.length) {
        const filter = document.createElement('div');
        filter.className = "filter"
        document.body.appendChild(filter);
    }
}
