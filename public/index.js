let action;
let prevNumber;
let calculatorValue = document.getElementById('calculator-value');

function onclickAdd() {
    action = "+";
    prevNumber = calculatorValue.innerText;
    calculatorValue.innerHTML = "0";

}
function onclickMinus() {
    action = "-";
    prevNumber = calculatorValue.innerText;
    calculatorValue.innerHTML = "0";

}function onclickMultiply() {
    action = "*";
    prevNumber = calculatorValue.innerText;
    calculatorValue.innerHTML = "0";

}
function onclickDivide() {
    action = "/";
    prevNumber = calculatorValue.innerText;
    calculatorValue.innerHTML = "0";

}

function calculate() {
    if (action === "+") {
        calculatorValue.innerHTML = Number(prevNumber) + Number(calculatorValue.innerHTML);
    }

    if (action === "-") {
        calculatorValue.innerHTML = Number(prevNumber) - Number(calculatorValue.innerHTML);
    }
    if (action === "*") {
        calculatorValue.innerHTML = Number(prevNumber) * Number(calculatorValue.innerHTML);
    }
    if (action === "/") {
        calculatorValue.innerHTML = Number(prevNumber) / Number(calculatorValue.innerHTML);
    }

}


function onclickbuttonSeven() {
    calculatorValue.innerText = "7"
}
function onclickbuttonEight() {
    calculatorValue.innerText = "8"
}
function onclickbuttonNine() {
    calculatorValue.innerText = "9"
}
function onclickbuttonFive() {
    calculatorValue.innerText = "5"
}
function onclickbuttonSix() {
    calculatorValue.innerText = "6"
}

function onclickbuttonFour() {
    calculatorValue.innerText = "4"
}
function onclickbuttonThree() {
    calculatorValue.innerText = "3"
}
function onclickbuttonTwo() {
    calculatorValue.innerText = "2"
}
function onclickbuttonOne() {
    calculatorValue.innerText = "1"
}
function onclickbuttonZero() {
    calculatorValue.innerText = "0"
}

