
const display = document.getElementById('output');
let dotTracker = true;
let calculated = false;

function displayShow(value) {
    const oparatorList = ['*', '/', '+', '-', '.'];
    let displayValue = display.value;

    if ((!oparatorList.includes(displayValue[displayValue.length - 1]) || !oparatorList.includes(value))) {
        if(calculated){
            clearAll();
            calculated = false;
        }
        display.value = display.value + value;
        if (value == '.') {
            if (!dotTracker) {
                deleteLastElement();
            }
            else{
                dotTracker = false;
            }
        }
        else if (value == '*' || value == '-' || value == '+' || value == '/') {
            dotTracker = true;
        }
    }
}

function clearAll() {
    display.value = '';
    dotTracker = true;
}

function deleteLastElement() {
    let displayValue = display.value;
    displayValue = displayValue.substr(0, displayValue.length - 1);
    display.value = displayValue;
}

function calculate(value) {
    display.value = eval(value);
    calculated = true;
}
