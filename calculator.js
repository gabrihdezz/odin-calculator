
let digitList = document.querySelectorAll(".buttons > div > .digit");
let operatorList = document.querySelectorAll(".buttons > div > .operator");
let displayContent = document.querySelector(".display > p");
let equalButton = document.querySelector(".equal");
let clearButton = document.querySelector("#clear");
let num1;
let num2;
let operator = ' ';
let nextOperator = ' ';
let clearDisplay = true;
let equalOp = false;
let ops = "+-*/";
const clickEvent = new Event('click');

function resetCalc() {
    num1 = null;
    num2 = null;
    operator = ' ';
}

digitList.forEach((button) => {
    button.addEventListener("click", (event) => {
        
        if (clearDisplay) {
            displayContent.textContent = '';
            clearDisplay = false;
            resetCalc();
        }
        let numInt = event.target.textContent;
        if (operator !== ' ') (isNaN(parseInt(num2))) ? num2 = numInt: num2 += numInt;
        displayContent.textContent += event.target.textContent;

    });
});

operatorList.forEach((button) => {
        button.addEventListener("click", (event) => {
            if (!ops.includes(operator)) {
                clearDisplay = false;
                num1 = +displayContent.textContent;
                displayContent.textContent += " " + event.target.textContent + " ";
                operator = event.target.textContent;

            } else if (!isNaN(parseInt(num2)) && !isNaN(parseInt(num2))) {
                console.log(num2)
                nextOperator = event.target.textContent;
                equalOp = true;
                equalButton.dispatchEvent(clickEvent);
            }
        });
});

equalButton.addEventListener("click", () => {
    let texto = displayContent.textContent;
    if (isNaN(parseInt(num2))) {
        displayContent.textContent = displayContent.textContent;
    } else {
        displayContent.textContent = parseFloat(operate(operator, +num1, +num2).toFixed(4));
        num1 = displayContent.textContent;
        num2 = null;

        if (!equalOp) {
            operator = ' ';
            nextOperator = ' ';
            clearDisplay = true;
        } else {
            operator = nextOperator;
            displayContent.textContent += " " + operator + " ";
        }
        equalOp = false;
    }
});

clearButton.addEventListener("click", () => {
    displayContent.textContent = "0";
    clearDisplay = true;
    resetCalc();
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
    if (b === 0) {
        displayContent.textContent = "...";
        clearDisplay = true;
    } else {
        return a / b;
    }
    
}

function operate(op, a, b) {
    switch(op) {
        case '+':
            return add(a, b);
            break;
        case '-':
            return subtract(a, b);
            break;
        case '*':
            return multiply(a, b);
            break;
        case '/':
            return divide(a, b);
            break;
        default:
            return "Operation not recognized"
    }
}
