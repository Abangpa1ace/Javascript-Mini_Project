'use strict';

//Selectors
const rankerList = [ 
    'Jeff Bezos',
    'Bill Gates',
    'Warren Buffett',
    'Bernard Arnault',
    'Carlos Slim Helu',
    'Amancio Ortega',
    'Larry Ellison',
    'Mark Zuckerberg',
    'Michael Bloomberg',
    'Larry Page',]
let randomList = rankerList.slice();

const rankCon = document.querySelector('.rank-container')
let rankers = document.querySelectorAll('.ranker')
let rankerName = document.querySelectorAll('.ranker-name');
const checkBtn = document.querySelector('.check-btn');

//Event Listeners
shuffleList(randomList);
checkBtn.addEventListener('click', checkList);
dragList();

//Functions
function shuffleList(list) {
    for (let i=list.length ; i; i-=1) {
        let j = Math.floor(Math.random() * i);
        let init = list[i-1];
        list[i-1] = list[j];
        list[j] = init;
    }
    loadList(list)
}

function loadList(list) {
    for (let i=0 ; i<list.length ; i++) {
        rankerName[i].innerText = list[i];
    }
}

function dragList() {
    let initX, initY, initVal;
    let draging = false;
    let rankerTarget;
    let rankerDragger;

    rankers.forEach(ranker => {
        ranker.addEventListener('mousedown', (e) => {
            draging = true;
            rankerTarget = ranker;
            initX = e.pageX;
            initY = e.pageY;
            initVal = ranker.innerText;
            rankCon.classList.add('hover');

            rankerDragger = rankerTarget.cloneNode(true);
            rankerDragger.classList.add('ranker-hover')
            document.body.appendChild(rankerDragger);
            rankerDragger.style.left = `${initX}px`
            rankerDragger.style.top = `${initY}px`
            
        })
        ranker.addEventListener('mousemove', (e) => {
            if (draging) {
                let curX = e.pageX;
                let curY = e.pageY;
                let diffX = curX - initX;
                let diffY = curY - initY;
                console.log(diffX, diffY)
                rankerDragger.style.transform = `translate(${diffX}px ${diffY}px)`
            }
        })
        ranker.addEventListener('mouseup', (e) => {
            draging = false;
            let curVal = ranker.innerText;
            let index1 = randomList.indexOf(initVal);
            let index2 = randomList.indexOf(curVal);
            randomList[index1] = curVal;
            randomList[index2] = initVal;
            loadList(randomList)
            rankCon.classList.remove('hover');

            document.body.removeChild(rankerDragger)

        })
    })
}

function checkList() {
    let rankerName = document.querySelectorAll('.ranker-name');
    for (let i=0 ; i<rankerName.length ; i++) {
        rankerName[i].innerText === rankerList[i] 
            ? rankerName[i].style.color = '#0dce27' 
            : rankerName[i].style.color = 'red';
    }
}

