'use strict';

//Selectors
let musicIndex = 0;
const musicList = ['hey', 'ukulele', 'summer'];
const player = document.getElementById('player')
const audio = document.querySelector('.audio')
const cd = document.querySelector('.cd')
const backward = document.querySelector('.backward')
const forward = document.querySelector('.forward')
const play = document.querySelector('.play')
const playTitle = document.querySelector('.play-title')
const progressBar = document.querySelector('.progress-bar')
const currentBar = document.querySelector('.current-bar')


//Event Listeners
playSet();
backward.addEventListener('click', playBackward)
forward.addEventListener('click', playForward)
audio.addEventListener('timeupdate', progressBarRun);
audio.addEventListener('ended', playForward);
play.addEventListener('click', playAudio);

//Functions
function playSet() {
    let music = musicList[musicIndex]
    audio.src = `./music/${music}.mp3`
    playTitle.innerText = `${music}`
    cd.style.background = `url(./img/${music}.jpg) no-repeat center`
    cd.style.backgroundSize = 'cover';
}

function playBackward() {
    musicIndex === 0 ? musicIndex = musicList.length - 1 : musicIndex--
    playSet();
    audio.play();
    if (!player.classList.contains('playing')) {
        player.classList.add('playing');
        play.innerHTML = '<i class="fa fa-pause" aria-hidden="true">'
    }
}

function playForward() {
    musicIndex === musicList.length - 1 ? musicIndex = 0 : musicIndex++
    playSet();
    audio.play();
    if (!player.classList.contains('playing')) {
        player.classList.add('playing');
        play.innerHTML = '<i class="fa fa-pause" aria-hidden="true">'
    }
}

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
    currentBar.style.width = `${currentBarWidth}px`
}

