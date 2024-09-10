const buttons = document.querySelectorAll('.button');
const display = document.querySelector('.display');

buttons.forEach(button => {
    button.addEventListener('click', function () {
        if (this.textContent === 'C') {
            display.textContent = '0';
        } else if (this.textContent === '=') {
            const expression = display.textContent.replaceAll('×', '*').replaceAll('÷', '/');
            display.textContent = eval(expression);
        } else if (display.textContent === '0') {
            display.textContent = this.textContent;
        } else {
            display.textContent += this.textContent;
        }
    });
});
