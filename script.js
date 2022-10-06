const displayContainer = document.querySelector(".display");
let num = "";
let num1;
let num2;
let op1;
let op2;

const add = function (a, b) {
    let result = a + b;
    return Math.round(result);
};

const subtract = function (a, b) {
    let result = a - b;
    return result.toFixed(3);
};

const multiply = function (a, b) {
    let result = a * b;
    return result.toFixed(3);
};

const divide = function (a, b) {
    let result = a / b;
    return result.toFixed(3);
};

function operateFromEquals(a, b, op) {
    let result;
    if (op === '+') {
        result = add(a, b);
    } else if (op === '-') {
        result = subtract(a, b);
    } else if (op === '*') {
        result = multiply(a, b);
    } else if (op === '/') {
        result = divide(a, b);
    }
    let displayResult = document.createElement('div');
    displayResult.textContent = result;
    displayContainer.appendChild(displayResult);
}

function operateFromSymbol(a, b, op) {
    let result;
    if (op === '+') {
        result = add(a, b);
    } else if (op === '-') {
        result = subtract(a, b);
    } else if (op === '*') {
        result = multiply(a, b);
    } else if (op === '/') {
        result = divide(a, b);
    }
    num1 = result;
    num2 = undefined;
    num = "";
}

function composeNum(e) {
    let digit = document.createElement('div');
    num = num.concat(e.target.innerText);
    digit.textContent = e.target.innerText;
    displayContainer.appendChild(digit);
}

function emptyNum(e) {
    let btn = e.target.innerText;
    if (btn === 'AC') {
        num = "";
        displayContainer.innerHTML = "";
        num1 = undefined;
        num2 = undefined;
        op1 = undefined;
        op2 = undefined;
    } 
    
    else if (btn === '-') {
        if (op1 === undefined) {
            op1 = "-";
        } else if (op1 != undefined && op2 === undefined) {
            op2 = "-";
        } else if (op1 != undefined && op2 != undefined) {
            op1 = op2;
            op2 = '-';
        }
        displayContainer.innerHTML = "";
        if (num1 === undefined) {
            if (num.indexOf(".") != -1) {
                num1 = parseFloat(num);
            } else {
                num1 = parseInt(num);
            }
        } else {
            if (num.indexOf(".") != -1) {
                num2 = parseFloat(num);
            } else {
                num2 = parseInt(num);
            }
            operateFromSymbol(num1, num2, op1);
        }
        num = "";
    } 
    
    else if (btn === '+') {
        if (op1 === undefined) {
            op1 = "+";
        } else if (op1 != undefined && op2 === undefined) {
            op2 = "+";
        } else if (op1 != undefined && op2 != undefined) {
            op1 = op2;
            op2 = '+';
        }
        displayContainer.innerHTML = "";
        if (num1 === undefined) {
            if (num.indexOf(".") != -1) {
                num1 = parseFloat(num);
            } else {
                num1 = parseInt(num);
            }
        } else {
            if (num.indexOf(".") != -1) {
                num2 = parseFloat(num);
            } else {
                num2 = parseInt(num);
            }
            operateFromSymbol(num1, num2, op1);
        }
        num = "";
    } 
    
    else if (btn === '×') {
        if (op1 === undefined) {
            op1 = "*";
        } else if (op1 != undefined && op2 === undefined) {
            op2 = "*";
        } else if (op1 != undefined && op2 != undefined) {
            op1 = op2;
            op2 = '*';
        }
        displayContainer.innerHTML = "";
        if (num1 === undefined) {
            if (num.indexOf(".") != -1) {
                num1 = parseFloat(num);
            } else {
                num1 = parseInt(num);
            }
        } else {
            if (num.indexOf(".") != -1) {
                num2 = parseFloat(num);
            } else {
                num2 = parseInt(num);
            }
            operateFromSymbol(num1, num2, op1);
        }
        num = "";
    } 
    
    else if (btn === '÷') {
        if (op1 === undefined) {
            op1 = "/";
        } else if (op1 != undefined && op2 === undefined) {
            op2 = "/";
        } else if (op1 != undefined && op2 != undefined) {
            op1 = op2;
            op2 = '/';
        }
        displayContainer.innerHTML = "";
        if (num1 === undefined) {
            if (num.indexOf(".") != -1) {
                num1 = parseFloat(num);
            } else {
                num1 = parseInt(num);
            }
        } else {
            if (num.indexOf(".") != -1) {
                num2 = parseFloat(num);
            } else {
                num2 = parseInt(num);
            }
            operateFromSymbol(num1, num2, op1);
        }
        num = "";
    } else if (btn === '=') {
        num2 = parseInt(num);
        num = "";
        displayContainer.innerHTML = "";
        if (op2 === undefined) {
            op2 = op1;
        }
        operateFromEquals(num1, num2, op2);

    }


}

const sevenBtn = document.getElementById('seven');
sevenBtn.addEventListener('click', composeNum);
const eightBtn = document.getElementById('eight');
eightBtn.addEventListener('click', composeNum);
const nineBtn = document.getElementById('nine');
nineBtn.addEventListener('click', composeNum);
const fourBtn = document.getElementById('four');
fourBtn.addEventListener('click', composeNum);
const fiveBtn = document.getElementById('five');
fiveBtn.addEventListener('click', composeNum);
const sixBtn = document.getElementById('six');
sixBtn.addEventListener('click', composeNum);
const oneBtn = document.getElementById('one');
oneBtn.addEventListener('click', composeNum);
const twoBtn = document.getElementById('two');
twoBtn.addEventListener('click', composeNum);
const threeBtn = document.getElementById('three');
threeBtn.addEventListener('click', composeNum);
const zeroBtn = document.getElementById('zero');
zeroBtn.addEventListener('click', composeNum);
const decimalBtn = document.getElementById('decimal');
decimalBtn.addEventListener('click', composeNum);

const clearBtn = document.getElementById('clear');
clearBtn.addEventListener('click', emptyNum);
const equalsBtn = document.getElementById('equals');
equalsBtn.addEventListener('click', emptyNum);

const minusBtn = document.getElementById('minus');
minusBtn.addEventListener('click', emptyNum);
const plusBtn = document.getElementById('plus');
plusBtn.addEventListener('click', emptyNum);
const timesBtn = document.getElementById('times');
timesBtn.addEventListener('click', emptyNum);
const divideBtn = document.getElementById('divide');
divideBtn.addEventListener('click', emptyNum);