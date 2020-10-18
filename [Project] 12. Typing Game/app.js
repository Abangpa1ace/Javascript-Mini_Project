'use strict';

//Selectors
let limit = 10;
let point = 0;
const wordList = ['apple', 'banana', 'chocolate', 'diamond', 'eternal', 'fuckin', 'grandmother', 'hovercraft', 'initialD'];
const header = document.querySelector('.header')
const select = document.querySelector('.difficulty-select')
const gameBoard = document.getElementById('container')
const time = document.querySelector('.time')
const score = document.querySelector('.score')
const word = document.querySelector('.word')
const input = document.querySelector('.input-word')
const diffBtn = document.querySelector('.difficulty-btn')
const reloadBtn = document.querySelector('.end-btn')

//Event Listeners
countDown();
select.addEventListener('change', () => {       //selected는 localStorage로 구현.
    const sl = select.options;
    for (let i=0 ; i<sl.length ; i++) {
        if (sl[i].value === select.value) {
            sl[i].selected = true;
        }
    }
})
input.addEventListener('input', wordCheck)
diffBtn.addEventListener('click', () => {
    header.classList.toggle('hidden')
})


//Functions
function wordCheck() {
    if (input.value === word.innerText) {
        word.innerText = wordList[Math.floor(Math.random() * wordList.length)]
        point++;
        score.innerText = point;
        limit += Number(select.value);
        time.innerText = limit;
        input.value = '';
    }
}

function countDown() {
    word.innerText = wordList[Math.floor(Math.random() * wordList.length)]
    setInterval(() => {
        limit--
        time.innerText = limit;
        if (limit === 0) {
            gameOver();
        }
    }, 1000)
}

function gameOver() {
    gameBoard.innerHTML = `
        <h1>Time ran out</h1>
        <p class='end-info'>Your final score is ${point}</p>
        <button class='end-btn' onclick="location.reload()">Reload</button>`
}
