'use strict';

//Selectors
let synth = window.speechSynthesis;
let voiceSet;
const textBtn = document.querySelector('.text-btn')
const textContainer = document.querySelector('.text-default')
const textBox = document.querySelector('.text-box')
const quitBtn = document.querySelector('.quit-btn')
const langList = document.querySelector('.lang-list')
const input = document.querySelector('.text-input')
const readBtn = document.querySelector('.read-btn')

//Event Listeners

textBtn.addEventListener('click', () => {
    textBox.classList.toggle('show')
    langSetting();
})
quitBtn.addEventListener('click', () => {
    if (textBox.classList.contains('show')) {
        textBox.classList.remove('show')
    }
})

// langList.addEventListener('change', () => {
//     voiceSet = langList.value;
// })

readBtn.addEventListener('click', () => {
    let inputVal = input.value;
    readText(inputVal)
})
textContainer.addEventListener('click', readWithShadow)

//Functions
function langSetting() {
    let voices = synth.getVoices();
    voiceSet = voices[0];
    for (let i=0 ; i<voices.length ; i++) {
        const newlang = document.createElement('option')
        newlang.text = `${voices[i].name} ${voices[i].lang}`
        newlang.value = voices[i];
        langList.options.add(newlang)
    }
}

function readWithShadow(e) {
    const readTarget = e.target.parentNode;
    readTarget.classList.add('reading')
    setTimeout(() => {
        readTarget.classList.remove('reading')
    }, 2000)
    const readTargetText = readTarget.querySelector('.text-area').innerText;
    readText(readTargetText)
}

function readText(text) {
    const msg = new SpeechSynthesisUtterance(text);
    msg.voice = voiceSet;
    synth.speak(msg)
}
