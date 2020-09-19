'use strict';

//Selector
const movieSeat = document.querySelector('.movie-seat');

//Event Listener

seatMaker(6,9,1,6);
occupiedSeat([[2,3], [3,5], [4,8], [4,9]]);

//Function

//좌석 만들기 함수 : 가로개수, 세로개수, 복도 간격띄우기
function seatMaker(x, y, aisle1, aisle2) {
    for (let j=0 ; j<x ; j++) {
        const addSeats = document.createElement('div');
        addSeats.classList.add(`seat-row${j+1}`);
        movieSeat.appendChild(addSeats);
        for (let i=0 ; i<y ; i++) {
            const addSeat = document.createElement('div');
            addSeat.classList.add('seat', `seat-column${i+1}`);
            addSeats.appendChild(addSeat);
            if (i===aisle1 || i===aisle2) {
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
        let seatRow = document.querySelector(`.seat-row${x}`);
        let seatColumn = seatRow.querySelector(`.seat-column${y}`);
        seatColumn.classList.add('oc');
    }
}
