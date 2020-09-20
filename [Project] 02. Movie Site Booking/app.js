'use strict';

//Selector
const movieFilter = document.querySelector('.movie-filter');
const movieSeat = document.querySelector('.movie-seat');
const occupiedSeatArray = [[2,3], [3,5], [4,8], [4,9]];
const movieCheck = document.querySelector('.movie-check');

//Event Listener
seatMaker(6,9,2,7);
occupiedSeat(occupiedSeatArray);
movieSeat.addEventListener('click', (e) => {e.target.classList.toggle('sl')})
window.addEventListener('load', checkPrice);
movieFilter.addEventListener('change', checkPrice);

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


function checkPrice() {
    const cnt = document.querySelector('.cnt');
    const cntPrice = document.querySelector('.cnt-price');
    let seats = 1;
    cnt.innerText = seats;
    cntPrice.innerText = `$${seats * movieFilter.value}`;
}
