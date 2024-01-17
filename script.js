let string = "";
let buttons = document.querySelectorAll('.button');
let inputField = document.querySelector('.input');

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        let buttonText = e.target.innerHTML;

        if (buttonText == '=') {
            string = eval(string);
            inputField.value = string;
        } else if (buttonText == 'C') {
            string = string.slice(0, -1);
            inputField.value = string;
        } else if (buttonText == 'AC') {
            string = "";
            inputField.value = string;
        } else {
            // Replace 'X' with '*'
            buttonText = buttonText === 'X' ? '*' : buttonText;

            string = string + buttonText;
            inputField.value = string;
        }
    });
});
