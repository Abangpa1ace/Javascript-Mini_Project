'use strict';

//Selectors
window.SpeechRecognition = 
    window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;
recognition.lang = 'ko-KR';
recognition.maxAlternatives = 1;

let randomNum = Math.floor(Math.random()*100)
console.log(randomNum)
const resultCon = document.querySelector('.result-container')
const result = document.querySelector('.result');
const resultChk = document.querySelector('.result-check');
let resultValue;
let isRecognizing = false;

//Event Listeners
recognition.start();
recording();

//Functions
function recording() {
    isRecognizing = true;

    recognition.onspeechend = function() {
        isRecognizing = false;
        recognition.stop();
        if (!isRecognizing) {
            recognition.onresult = function(event) {
                resultValue = event.results[0][0].transcript;
                resultCon.style.display = 'flex';
                result.innerText = resultValue;
                checkResult(resultValue)
        }
    }
}

function checkResult(val) {
        if (val < randomNum) {
            resultChk.innerText = 'Go Upper'
        }

        else if (val > randomNum) {
            resultChk.innerText = 'Go Lower'
        }

        else if (val === randomNum) {
            resultChk.innerText = 'Correct!'
        }
    }
}