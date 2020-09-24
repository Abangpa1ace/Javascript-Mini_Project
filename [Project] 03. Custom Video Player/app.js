'use strict';

//Selector
const video = document.querySelector('.video');
const btnPlay = document.querySelector('.play');
const btnStop = document.querySelector('.stop');
const timeBar = document.querySelector('.timebar')
const timeTracker = document.querySelector('timebar-tracker')
const currentTime = document.querySelector('.current')
const totalTime = document.querySelector('.total')

//Event Listener
video.volume = 1;
video.addEventListener('click', () => {
    video.play();
    btnPlay.classList.add('pause')
})
btnPlay.addEventListener('click', playPause)
btnStop.addEventListener('click', videoStop)

//Function
playTime();

//재생/일시정지
function playPause() {
    if(video.paused) {
        video.play();
        btnPlay.classList.add('pause')
    } else {
        video.pause();
        btnPlay.classList.remove('pause')
    }
}

//정지
function videoStop() {
    video.pause();
    video.currentTime = 0;
    btnPlay.classList.remove('pause')
}

//시간표시
function playTime() {
    //전체
    video.addEventListener('durationchange', () => {
        const totalDuration = video.duration;
        let totalmin = Math.floor(totalDuration/60);
        let totalsec = Math.floor(totalDuration - (totalmin*60));
        if (totalmin < 10) {
            totalmin = "0" + totalmin;
        }
        if (totalsec < 10) {
            totalsec = "0" + totalsec;
        }
        const totalTimeShow = totalmin + ":" + totalsec;
        totalTime.innerHTML = totalTimeShow;
    })
    //현재
    video.addEventListener('timeupdate', () => {
        if (video.duration === video.currentTime) {
            playPause.classList.remove(pause);
        }
        let currentDuration = video.currentTime;
        let currentmin = Math.floor(currentDuration/60);
        let currentsec = Math.floor(currentDuration - (currentmin*60));
        if (currentmin < 10) {
            currentmin = "0" + currentmin;
        }
        if (currentsec < 10) {
            currentsec = "0" + currentsec;
        }
        const currentTimeShow = currentmin + ":" + currentsec;
        currentTime.innerHTML = currentTimeShow;
    })

}

//프로그레스바
