let buttonList = document.querySelectorAll(".buttons > div > .digit");
let displayContent = document.querySelector(".display > p");
let num1 = 0;
let num2 = 0;
let operator = '';

buttonList.forEach((button) => {
    button.addEventListener("click", (event) => {
        displayContent.textContent += event.target.textContent;
    });
});

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, num1, num2) {
    switch(operator) {
        case '+':
            return add(num1, num2);
            break;
        case '-':
            return subtract(num1, num2);
            break;
        case '*':
            return multiply(num1, num2);
            break;
        case '/':
            return divide(num1, num2);
            break;
        default:
            return "Operation not recognized"
    }
}

console.log(operate('+', 1, 10));