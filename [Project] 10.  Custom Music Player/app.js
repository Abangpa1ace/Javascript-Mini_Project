'use strict';

//Selectors
const musicList = [];
const player = document.getElementById('player')
const audio = document.querySelector('.audio')
const cd = document.querySelector('.cd')
const backward = document.querySelector('.backward')
const forward = document.querySelector('.forward')
const play = document.querySelector('.play')
const progressArea = document.querySelector('.progress-area')
const progressBar = document.querySelector('.progress-bar')
const currentBar = document.querySelector('.current-bar')



//Event Listeners
audio.addEventListener('timeupdate', progressBarRun);
play.addEventListener('click', playAudio)

//Functions
function playAudio() {
    player.classList.toggle('playing');
    audio.play();
    if (player.classList.contains('playing')) {
        play.innerHTML = '<i class="fa fa-pause" aria-hidden="true">'
    }
    else {
        play.innerHTML = '<i class="fa fa-play" aria-hidden="true">'
        audio.pause();
    }
}

function progressBarRun() {
    const max = Math.floor(audio.duration);
    let current = Math.floor(audio.currentTime);
    const progressBarWidth = progressBar.offsetWidth;
    let currentBarWidth = progressBarWidth * (current/max);
    console.log(max, current, currentBarWidth)
    currentBar.style.width = `${currentBarWidth}px`
}

