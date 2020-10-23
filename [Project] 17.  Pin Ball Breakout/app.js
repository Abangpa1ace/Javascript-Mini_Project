'use strict';

//Selectors
const canvas = document.getElementById('pin-ball')
const ctx = canvas.getContext('2d')

const symbolColor = "#19a3ff"
let initX = 45;
let initY = 60;
const rows = 5;
const columns = 9;
const blockWidth = 70;
const blockHeight = 20;
const blockGap = 10;

let barX = 365;
const barY = 580;
const barWidth = 80;
const barHeight = 10;
let isPressed = false;

const ballRadius = 10;

//Event Listeners



movingBar();
drawBlocks(columns, rows)
drawBall(symbolColor, 400, 300, ballRadius)



//Functions
function singleBlock(color, x, y, w, h) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, w, h)
}

function drawBlocks(c, r) {
    for (let j=0 ; j<r ; j++) {
        for (let i=0 ; i<c ; i++) {
            singleBlock(symbolColor, initX, initY, blockWidth, blockHeight)
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
    ctx.beginPath();
    ctx.lineWidth = "10"
    ctx.strokeStyle = symbolColor;
    ctx.moveTo(barX, barY);
    ctx.lineTo(barX+barWidth, barY);
    ctx.stroke();
    ctx.closePath();

    window.addEventListener('keydown', () => {
        const key = event.keyCode
        let isPressed = true;
        window.addEventListener('keyup', () =>{
            isPressed = false;
        });

        if (barX > 0 && isPressed && key === 37) {
            const movingLeft = setInterval(() => {
                ctx.clearRect(barX, barY-5, barWidth, 10);
                barX -= 1;
                ctx.beginPath();
                ctx.lineWidth = "10"
                ctx.strokeStyle = symbolColor;
                ctx.moveTo(barX, barY);
                ctx.lineTo(barX+barWidth, barY);
                ctx.stroke();
                ctx.closePath();
                if (barX < 0 || !isPressed) {
                    clearInterval(movingLeft);
                }
            }, 1)
        }

        if (barX < (800-barWidth) && isPressed && key === 39) {
            const movingRight = setInterval(() => {
                ctx.clearRect(barX, barY-5, barWidth, 10);
                barX += 1;
                ctx.beginPath();
                ctx.lineWidth = "10"
                ctx.strokeStyle = symbolColor;
                ctx.moveTo(barX, barY);
                ctx.lineTo(barX+barWidth, barY);
                ctx.stroke();
                ctx.closePath();
                if (barX > (800-barWidth) || !isPressed) {
                    clearInterval(movingRight);
                }
            }, 1)
        }
    })
};
