'use strict';

//스크립트 jot-mang! sibal!!!!

//Selectors
let cardIndex = 0;
let cards = [];

const addBtn = document.querySelector('.add-btn')
const clearBtn = document.querySelector('.clear-btn')
const cardCon = document.querySelector('.card-container')
const prevBtn = document.querySelector('.before')
const nextBtn = document.querySelector('.after')
const cardCount = document.querySelector('.card-count')

const newCardCon = document.getElementById('new-card-container')
const closeNewBtn = document.querySelector('.close-new-btn')
const newCardQ = document.querySelector('.new-card-q')
const newCardA = document.querySelector('.new-card-a')
const addNewBtn = document.querySelector('.add-new-btn')

//Event Listeners
addBtn.addEventListener('click', () => {newCardCon.classList.add('show');})
closeNewBtn.addEventListener('click', () => {newCardCon.classList.remove('show');})
addNewBtn.addEventListener('click', () => {
    let qVal = newCardQ.value;
    let aVal = newCardA.value;
    addNewCard(qVal, aVal);
})

//Functions
function addNewCard(qVal, aVal) {
    cardIndex++;
    cards.push({
        index: cardIndex,
        question: qVal,
        answer: aVal,
    })
    newCardCon.classList.remove('show');
    newCardQ.value = newCardA.value = '';
    loadCards(cards);
}

function loadCards(list) {
    cardCon.innerHTML = '';
    if (list !== []) {
        list.forEach(ele => {
            const card = document.createElement('div')
            card.className = 'card';
            cardDrawing(card, ele)
            cardCon.appendChild(card)
        });
        cardCount.innerText = `1/${cardIndex}`
    }
}

function flipAction(e) {
    const card = e.target.parentNode;
    card.classList.toggle('back')
    cardDrawing(card, cards[cardIndex-1])
}

function cardDrawing(card, info) {
    if (!card.classList.contains('back')) {
        card.innerHTML = `${info.question}<span class="flip"><i class="fa fa-reply-all" aria-hidden="true">Flip</i></span>`
        const flip = card.querySelector('.flip')
        flip.addEventListener('click', flipAction)
    }
    else {
        card.innerHTML = `${info.answer}<span class="flip"><i class="fa fa-reply-all" aria-hidden="true">Flip</i></span>`
        const flip = card.querySelector('.flip')
        flip.addEventListener('click', flipAction)
    }
}

