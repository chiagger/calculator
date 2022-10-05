const add = function (a, b) {
    return a + b;
};

const subtract = function (a, b) {
    let result = a - b;
    return result;
};

const multiply = function (a, b) {
    let result = a * b;
    return result;
};

const divide = function (a, b) {
    let result = a / b;
    return result;
};

function operate(a, b, op) {
    if (op === '+') {
        add(a, b);
    } else if (op === '-') {
        subtract(a, b);
    } else if (op === '*') {
        multiply(a, b);
    } else if (op === '/') {
        divide(a, b);
    } 
} 
