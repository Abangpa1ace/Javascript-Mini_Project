'use strict';

fetch ('http://data.fixer.io/api/latest?access_key=be47f79a012d8a21c92eef4d28122da7&format=1', {method: 'GET'})
    .then(res => res.json())
    .then(data => {
    //Selector
    const beforeSelect = document.querySelector('.before-select')
    const beforeInput = document.querySelector('.before-input')
    const upBtn = document.querySelector('.up')
    const downBtn = document.querySelector('.down')
    const afterSelect = document.querySelector('.after-select')
    const afterInput = document.querySelector('.after-input')
    const swapBtn = document.querySelector('.swap-btn')
    const calRate = document.querySelector('.calculate-rate')
    const obj = data.rates;
    const keys = Object.keys(obj);

    //Event Listener
    window.addEventListener('change', rateCalculate)
    swapBtn.addEventListener('click', swapSelect)
    upBtn.addEventListener('click', () => {
        beforeInput.value = parseInt(beforeInput.value) + 1;
        rateCalculate();
    })
    downBtn.addEventListener('click', () => {
        beforeInput.value -= 1;
        rateCalculate();
    })

    //Function
    addOption();
    rateCalculate();

    //func: select list 만들기
    function addOption() {
        for (let i=0 ; i<keys.length ; i++) {
            let selAdd = document.createElement('option');
            selAdd.text = keys[i];
            selAdd.value = obj[keys[i]];
            if (selAdd.text === 'KRW') {
                selAdd.selected = true;
            }
            beforeSelect.appendChild(selAdd)
            let selAdd2 = document.createElement('option');
            selAdd2.text = keys[i];
            selAdd2.value = obj[keys[i]];
            afterSelect.appendChild(selAdd2)
            if (selAdd2.text === 'USD') {
                selAdd2.selected = true;
            }
        }
    }

    //func: rate 계산
    function rateCalculate() {
        let rate = (afterSelect.options[afterSelect.selectedIndex].value / beforeSelect.options[beforeSelect.selectedIndex].value).toFixed(6);
        calRate.innerText = `1${beforeSelect.options[beforeSelect.selectedIndex].text} = ${rate} ${afterSelect.options[afterSelect.selectedIndex].text}`
        afterInput.value = (beforeInput.value * rate).toFixed(3);
    }

    //func: swap 동작
    function swapSelect() {
        const beforeValue = beforeSelect.value;
        beforeSelect.value = afterSelect.value;
        afterSelect.value = beforeValue;
        rateCalculate();
    }
})
