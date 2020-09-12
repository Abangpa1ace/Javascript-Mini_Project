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
    if (num==="-") {    // -1 backspace 시 NaN : -를 숫자가 아닌것으로 인식
        return "";
    }
    let n = Number(num);
    let value = n.toLocaleString("en");
    return value;
}

// function : format change(text -> number), /,/지움
function reverseNumFormat(num) {
    return Number(num.replace(/,/g,''));
}

const operator = document.getElementsByClassName("operator");
for (let i=0 ; i < operator.length ; i++) {
    operator[i].addEventListener('click', () => {       //arrow func.은 this 지원않함(익명)
        if (operator[i].id === "clear") {
                printHistory("");
                printOutput("");
        } else if (operator[i].id === "backspace") {
            let output = reverseNumFormat(getOutput()).toString();
            if (output) {
                output = output.substr(0, output.length-1);
                printOutput(output);
            } 
        } else {
            let output = getOutput();
            let history = getHistory();
            if (output === "" && history !== "" ) {
                if (isNaN(history[history.length-1])) {
                    history = history.substr(0, history.length-1);
                }
            }
            if (output !== "" || history !== "") {
                // output이 비었으면 그대로, 있으면 숫자형 (조건문 ? true : false)
                output = output === "" ? output : reverseNumFormat(output);
                history = history + output;
                if(operator[i].id === "=") {
                    let result = eval(history);
                    printOutput(result);
                    printHistory("");
                } else {
                    history = history + operator[i].id;
                    printHistory(history);
                    printOutput("");
                }
            } 
        }
    }
    )};

const number = document.getElementsByClassName("number");
for (let i=0 ; i < number.length ; i++) {
    number[i].addEventListener('click', () => {
        let output = reverseNumFormat(getOutput());
        if (output != NaN) {
            //if output is a number
            output = output + number[i].id;
            printOutput(output);
        } 
    });
}
