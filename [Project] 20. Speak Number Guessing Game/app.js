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

const container = document.getElementById('container')
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
        if (!isRecognizing) {
            recognition.onresult = function(event) {
                resultValue = event.results[0][0].transcript;
                resultCon.style.display = 'flex';
                result.innerText = resultValue;
                checkValue(resultValue);
        }
    }
}
}

function checkValue(val) {
    if (val == randomNum) {
        recognition.stop();
        container.innerHTML = `
            <h1>Congratulations!</h1>
            <h3>The answer was ${val}!</h3>
            <button class="again-btn">Try again</button>`
            
            const againBtn = document.querySelector('.again-btn')
            againBtn.addEventListener('click', () => {
                location.reload();
            })
    }

    else {
        if(isNaN(val)) {
            resultChk.innerText = 'It is not a valid number!'
        }
        else if (val < randomNum) {
            resultChk.innerText = 'Go Upper'
        }
        else if (val > randomNum) {
            resultChk.innerText = 'Go Lower'
        }
        recording();
    }
}
