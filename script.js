let currentValue = "";
let previousValue = "";
let currentOperator = "";

function appendToDisplay(value) {
    currentValue += value;
    updateDisplay();
}

function clearDisplay() {
    currentValue = "";
    previousValue = "";
    currentOperator = "";
    updateDisplay();
}

function deleteDigit() {
    currentValue = currentValue.slice(0, -1);
    updateDisplay();
}

function updateDisplay() {
    document.getElementById("result").value = currentValue;
}

function operate(operator) {
    if (currentValue === "") return;
    if (previousValue !== "") {
        calculate();
    }
    currentOperator = operator;
    previousValue = currentValue;
    currentValue = "";
}

function calculate() {
    if (previousValue === "" || currentOperator === "") return;

    const num1 = parseFloat(previousValue);
    const num2 = parseFloat(currentValue);

    switch (currentOperator) {
        case "+":
            currentValue = (num1 + num2).toString();
            break;
        case "-":
            currentValue = (num1 - num2).toString();
            break;
        case "*":
            currentValue = (num1 * num2).toString();
            break;
        case "/":
            currentValue = (num2 !== 0 ? (num1 / num2).toString() : "Error");
            break;
        case "%":
            currentValue = (num1 % num2).toString();
            break;
    }

    currentOperator = "";
    previousValue = "";
    updateDisplay();
}
