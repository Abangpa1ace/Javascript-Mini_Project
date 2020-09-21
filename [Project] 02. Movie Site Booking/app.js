'use strict';

//Selector
const movieFilter = document.querySelector('.movie-filter');
const movieSeat = document.querySelector('.movie-seat');
const occupiedSeatArray = [[2,3], [3,5], [4,8], [4,9]];
const movieCheck = document.querySelector('.movie-check');
let seats = 0;

//Event Listener
seatMaker(6,9,2,7);
occupiedSeat(occupiedSeatArray);
movieSeat.addEventListener('click', (e) => {e.target.classList.toggle('sl')})
movieSeat.addEventListener('click', selectedSeat);
window.addEventListener('load', selectedSeat);
movieFilter.addEventListener('change', selectedSeat);

//Function

//좌석 만들기 함수 : 가로개수, 세로개수, 복도 간격띄우기 - 편의성을 위해 기준을 1,1로 설정
function seatMaker(x, y, aisle1, aisle2) {
    for (let j=0 ; j<x ; j++) {
        const addSeats = document.createElement('div');
        addSeats.classList.add(`seat-row${j+1}`);
        movieSeat.appendChild(addSeats);
        for (let i=0 ; i<y ; i++) {
            const addSeat = document.createElement('div');
            addSeat.classList.add('seat', `seat-column${i+1}`);
            addSeats.appendChild(addSeat);
            if (i===(aisle1-1) || i===(aisle2-1)) {
                addSeat.style.marginRight = '20px';
            }
        }
    };
    
}

//예약석 표시 : 좌표 array로 변수 받음
function occupiedSeat(array) {
    for (let i=0 ; i<array.length ; i++) {
        let x = array[i][0];
        let y = array[i][1];
        let occupied = document.querySelector(`.seat-row${x}`).querySelector(`.seat-column${y}`);
        occupied.classList.add('oc');
    }
};

//예약신청 토글 + 가격 계산
function selectedSeat() {
    const movieSeats = movieSeat.querySelectorAll('.seat');
    let seats = 0;
    for (let i=0 ; i<movieSeats.length ; i++) {
        if (movieSeats[i].classList.contains('sl')) {
            seats++;
        }
    }
    const cnt = document.querySelector('.cnt');
    cnt.innerText = seats;
    const cntPrice = document.querySelector('.cnt-price');
    cntPrice.innerText = `$${seats * movieFilter.value}`;
}

//Save 동작
function saveMovieInfo(value, seats) {
    let savedInfo;
    if (localStorage.getItem('savedInfo') === null) {
        savedInfo = [];
    } else {
        savedInfo = JSON.parse(localStorage.getItem('savedInfo'));
    }
}
