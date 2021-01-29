
const display = document.getElementById('output');
function displayShow(value) {

    display.value = display.value + value;
    console.log(value);
}

function clearAll() {
    display.value = '';
}

function deleteLastElement() {
    let displayValue = display.value;
    displayValue = displayValue.substr(0, displayValue.length - 1);
    display.value = displayValue;
}

function calculate(value) {
    display.value = eval(value);
}