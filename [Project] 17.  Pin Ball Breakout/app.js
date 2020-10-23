'use strict';

//Selectors
const canvas = document.getElementById('pin-ball')
const ctx = canvas.getContext('2d')

const blockColor = "#19a3ff"
let initX = 45;
let initY = 60;
const rows = 5;
const columns = 9;
const blockWidth = 70;
const blockHeight = 20;
const blockGap = 10;
const ballRadius = 10;

//Event Listeners
singleBlock(blockColor, 365, 580, 80, 10)
drawBlocks(columns, rows)
drawBall('red', 400, 300, ballRadius)
window.addEventListener('keydown', movingBar)

//Functions
function singleBlock(color, x, y, w, h) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, w, h)
}

function drawBlocks(c, r) {
    for (let j=0 ; j<r ; j++) {
        for (let i=0 ; i<c ; i++) {
            singleBlock(blockColor, initX, initY, blockWidth, blockHeight)
            initX += blockWidth + blockGap;
        }
        initX = 45;
        initY += blockHeight + blockGap;
    }
}

function drawBall(color, x, y, r) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, (Math.PI/180)* 360, false);
    ctx.closePath();
    ctx.fill();
}

function movingBar() {
    const key = event.keyCode
    if (key === 37) {
        canvas.style.backgroundColor = "red"
    }
    else if (key === 39) {
        canvas.style.backgroundColor = "yellow"
    }
} the 
