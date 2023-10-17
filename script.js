const display = document.getElementById('display');
const buttons = document.querySelector('.buttons');

buttons.addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON') {
        const buttonValue = event.target.textContent;
        if (buttonValue === '=') {
            try {
                display.value = eval(display.value);
            } catch (error) {
                display.value = 'Error';
            }
        } else if (buttonValue === 'C') {
            display.value = '';
        } else {
            display.value += buttonValue;
        }
    }
});
