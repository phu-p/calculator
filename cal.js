const addition = (a, b) => {return a + b;};

const subtraction = (a, b) => {return a - b;};

const multiplication = (a, b) => {return a * b;};

const division = (a, b) => {return a / b;};

const power = (a, b) => {return Math.pow(a, b)};

function factorial(number) {
	var accumulator = 1;
	var limit = 0
	for (var i = number; i > limit; --i) {
		accumulator *= i;
	};
	return accumulator;
};

const operate = (operator, a, b) => {
    switch(operator) {
        case '+':
            addition(a, b);
            break;
        case '-':
            subtraction(a, b);
            break;
        case '*':
            multiplication(a, b);
            break;
        case '÷':
            division(a, b);
            break;
        case 'x<sup>n</sup>':
            power(a, b);
            break;
        case 'n!':
            factorial(a);
            break;
        default:
            return "SYNTAX ERROR";
    };
};

let calculator = document.getElementsByClassName("calculator");
let screen = document.getElementsByClassName("screen");
let button = document.getElementsByClassName("button");

let displayValue = (element) => {
    let userInput = element.target.value;
    switch(userInput) {
        case "delete":
            break;
        case "clear":
            break;
        case "x^n":
            break;
        case "n!":
            break;
        case "=":
            break;
        default:
            screen[0].textContent += userInput;
            storeInput(userInput);
    };
};

let storeInput = (input) => {storingValues.push(input);};

for(let i = 0; i < button.length; ++i) {
    button[i].addEventListener("click", displayValue);
}