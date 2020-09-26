'use strict';
fetch ('http://data.fixer.io/api/latest?access_key=be47f79a012d8a21c92eef4d28122da7&format=1', {method: 'GET'})
    .then(res => res.json())
    .then(data => {
    //Selector
    const beforeSelect = document.querySelector('.before-select')
    const beforeInput = document.querySelector('.before-input')
    const afterSelect = document.querySelector('.after-select')
    const selects = document.getElementsByClassName('.select')
    const calRate = document.querySelector('.calculate-rate')
    const obj = data.rates;
    const keys = Object.keys(obj);

    //Event Listener
    window.addEventListener('DOMContetLoaded', () => {
        console.log('loaded!')
        let rate = (afterSelect.options[afterSelect.selectedIndex].value / beforeSelect.options[beforeSelect.selectedIndex].value).toFixed(5);
        calRate.innerText = `1${beforeSelect.options[beforeSelect.selectedIndex].text} = ${rate} ${afterSelect.options[afterSelect.selectedIndex].text}`
    })
    window.addEventListener('change', () => {
        let rate = (afterSelect.options[afterSelect.selectedIndex].value / beforeSelect.options[beforeSelect.selectedIndex].value).toFixed(5);
        calRate.innerText = `1${beforeSelect.options[beforeSelect.selectedIndex].text} = ${rate} ${afterSelect.options[afterSelect.selectedIndex].text}`
    })


    //Function
    function addOption() {
        for (let i=0 ; i<keys.length ; i++) {
            let selAdd = document.createElement('option');
            selAdd.text = keys[i];
            selAdd.value = obj[keys[i]];
            beforeSelect.appendChild(selAdd)
            let selAdd2 = document.createElement('option');
            selAdd2.text = keys[i];
            selAdd2.value = obj[keys[i]];
            afterSelect.appendChild(selAdd2)
        }
    }
    addOption();

    
})

