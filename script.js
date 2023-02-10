let operand1, operand2, operator;

const nrButtons = document.getElementsByClassName("btn-nr");
const opButtons = document.getElementsByClassName("btn-op");
const input = document.getElementById("main-input");
const clrButton = document.getElementById("clr-button");
const equalButton = document.getElementById("btn-equal");
const floatButton = document.getElementById("btn-float");
const percButton = document.getElementById("btn-perc");
const signalButton = document.getElementById("btn-signal");

signalButton.addEventListener("click", () => {
    input.value=-input.value
})

percButton.addEventListener("click", () => {
    operand2 = parseFloat(input.value);
    input.value = operand1+operand1*(operand2/100);
})

floatButton.addEventListener("click", () => {
    input.value+=".";
})

equalButton.addEventListener("click", () => {
    operand2 = parseFloat(input.value);
    switch(operator) {
        case "+":
            input.value = operand1+operand2;
            break;
        case "-":
            input.value = operand1-operand2;
            break;
        case "x":
            input.value = operand1*operand2;
            break;
        case "÷":
            if (operand2==0) {
                input.value = "Undefined";
                break;
            }
            input.value = operand1/operand2;
            break;        
    }
})

clrButton.addEventListener("click", () => {
    input.value = "";
})

for (let button of nrButtons) {
    button.addEventListener("click", () => {
        input.value += button.textContent;
    })
}

for (let button of opButtons) {
    button.addEventListener("click", () => {
        operand1 = parseFloat(input.value);
        input.value = "";
        operator = button.textContent;
    })
}
