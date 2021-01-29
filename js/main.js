
const display = document.getElementById('output');
function displayShow(value) {
    const oparatorList = ['*','/','+','-'];
    let displayValue = display.value;
    let lastCharacterIndex = displayValue.length-1;
    if(!oparatorList.includes(displayValue[lastCharacterIndex]) || !oparatorList.includes(value))
    {
        display.value = display.value + value;
    }
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