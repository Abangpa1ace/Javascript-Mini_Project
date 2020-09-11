'use strict';

// function : get History innertext
function getHistory() {
    return document.getElementById('history-val').innerText;
}

// function : print History value
function printHistory(num) {
    document.getElementById('history-val').innerText = num;
}

// function : get Output innertext
function getOutput() {
    return document.getElementById('output-val').innerText;
}

// function : print Output value
function printOutput(num) {
    if (num==="") {     // 기본값 0 -> ""
        document.getElementById('output-val').innerText = num;
    } else {
        document.getElementById('output-val').innerText = getFormattedNum(num);
    }
}

// function : add Comma
function getFormattedNum(num) {
    let n = Number(num);
    let value = n.toLocaleString("en");
    return value;
}

// function : format change(text -> number), /,/지움
function reverseNumFormat(num) {
    return Number(num.replace(/,/g,''));
}
alert(reverseNumFormat(getOutput()))

let operator = document.getElementsByClassName("operator");
console.log(operator);

