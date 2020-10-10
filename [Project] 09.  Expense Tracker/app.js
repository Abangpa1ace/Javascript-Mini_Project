'use strict';
// localStorage.clear()
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
showHistory();
transaction.addEventListener('submit', newTransaction)

//Functions

function showHistory() {
    const historyList = JSON.parse(localStorage.getItem('historylist'))
    if (historyList !== null && historyList.length > 0) {
        for (let i=0 ; i<historyList.length ; i++) {
            addHistory(historyList[i]['text'], historyList[i]['cash']);
        }
    }
    cashCount(historyList)
}

function newTransaction(e) {
    e.preventDefault();

    const textVal = textInput.value;
    const cashVal = cashInput.value;
    addHistory(textVal, cashVal)

    const historyAll = document.querySelectorAll('.history')
    const historyList = [...historyAll].map(function(history) {
        let obj = new Object();
        obj['text'] = history.querySelector('p').innerText;
        obj['cash'] = history.querySelector('span').innerText;
        return obj;
    })
    cashCount(historyList)
    localStorage.setItem('historylist', JSON.stringify(historyList))
    
    textInput.value = "";
    cashInput.value = "";
}

function addHistory(text, cash) {
    const history = document.createElement('div');
    history.className = 'history'
    historyArea.appendChild(history);
    history.innerHTML = `<button class="history-btn">X</button><p>${text}</p><span>${cash}</span>`;
    if (cash >= 0) {
        history.classList.add('plus')
    }
    else {
        history.classList.add('minus')
    }
    const historyBtn = document.querySelectorAll('.history-btn')
    for (const btn of historyBtn) {
        btn.addEventListener('click', deleteHistory)
    }
}

function deleteHistory(e) {
    e.target.parentNode.remove()
    
    const historyAll = document.querySelectorAll('.history')
    const historyList = [...historyAll].map(function(history) {
        let obj = new Object();
        obj['text'] = history.querySelector('p').innerText;
        obj['cash'] = history.querySelector('span').innerText;
        return obj;
    })
    cashCount(historyList)
    localStorage.setItem('historylist', JSON.stringify(historyList))
}

function cashCount(array) {
    let inVal = 0.00;
    let outVal = 0.00;
    if (array !== null) {
        for (let i=0 ; i<array.length ; i++) {
            let cashVal = Number(array[i]['cash'])
            if (cashVal > 0) {
                inVal += cashVal
            }
            else {
                outVal+= cashVal
            }
        }
    }
    totalCash.innerText = `$${(inVal+outVal).toFixed(2)}`
    inCash.innerText = `$${inVal.toFixed(2)}`
    outCash.innerText = `$${Math.abs(outVal).toFixed(2)}`
}
