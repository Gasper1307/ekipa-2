const display = document.getElementById('num-display');
const buttons = document.querySelectorAll('.btn');
let currentOperation = "";

function clearDisplay() {
    currentOperation = "";
    display.value = "";
}

function handleButtonClick(event) {
    const button = event.target;
    const value = button.getAttribute('data-num');

    if (value) {
        currentOperation += value;
        display.value = currentOperation;
    } else if (button.textContent === '=') {
        try {
            display.value = eval(currentOperation);
            currentOperation = display.value;
        } catch {
            display.value = "Napaka";
            currentOperation = "";
        }
    } else if (button.classList.contains('btn-clear')) {
        clearDisplay();
    }
}

buttons.forEach(button => {
    button.addEventListener('click', handleButtonClick);
});
