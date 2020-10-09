'use strict';

//Selectors
const totalCash = document.querySelector('.total-cash')
const inCash = document.querySelector('.income')
const outCash = document.querySelector('.expense')
const historyArea = document.querySelector('.history-area')
const transaction = document.getElementById('transaction')
const textInput = document.getElementById('transaction-text')
const cashInput = document.getElementById('transaction-cash')
const submitBtn = document.querySelector('.transaction-btn')

//Event Listeners
// showHistory();
transaction.addEventListener('submit', newTransaction)

//Functions

// function showHistory() {
//     const historyList = JSON.parse(localStorage.getItem('history'))
//     if (historyList !== null && historyList.length > 0) {
//         alert('hi')
//     }
// }

function newTransaction(e) {
    e.preventDefault();
    const textVal = textInput.value;
    const cashVal = cashInput.value;
    addHistory(textVal, cashVal)

    const historyAll = document.querySelectorAll('.history')
    const historyList = [...historyAll].map(history => history.querySelector('span').innerText)
    console.log(historyList)
}

function addHistory(text, cash) {
    const history = document.createElement('div');
    history.className = 'history'
    historyArea.appendChild(history);
    if (cash >= 0) {
        history.classList.add('plus')
        history.innerHTML = `<span>${text}</span><span>+${cash}</span>`;
    }
    else {
        history.classList.add('minus')
        history.innerHTML = `<span>${text}</span><span>${cash}</span>`;
    }
}
