let calculator = document.getElementsByClassName("calculator");
let screen = document.getElementsByClassName("screen");
let button = document.getElementsByClassName("button");
let storeValues = [];
let userInput = {
    mathValues: "",
    nonMathValues: "",
};

const addition = (a, b) => {return a + b;};

const subtraction = (a, b) => {return a - b;};

const multiplication = (a, b) => {return a * b;};

const division = (a, b) => {return a / b;};

const power = (a, b) => {return Math.pow(a, b)};

const factorial = (number) => {
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
        case 'x^n':
            power(a, b);
            break;
        case 'n!':
            factorial(a);
            break;
        default:
            return "SYNTAX ERROR";
    };
};


let displayValue = (element) => {
    let userInput = element.target.value;
    switch(userInput) {
        case "delete":
            storeInput(userInput);
            break;
        case "clear":
            storeInput(userInput);
            break;
        case "x^n":
            screen[0].textContent += "^";
            storeInput(userInput);
            // checkOperators();
            break;
        case "n!":
            screen[0].textContent += "!";
            storeInput(userInput);
            // checkOperators();
            break;
        case "=":
            storeInput(userInput);
            break;
        default:
            screen[0].textContent += userInput;
            storeInput(userInput);
            // checkOperators();
    };
};

let storeInput = (input) => {
    switch(input) {
        case "delete":
            //need a function that delete
            break;
        case "clear":
            //need a function that clear
            break;
        case "=":
            storeValues = userInput.mathValues.split(" ");
            break;
        case "x^n":
            userInput.mathValues += " ^ ";
            storeValues = userInput.mathValues.split(" ");
            break;
        case "n!":
            userInput.mathValues += " ! ";
            storeValues = userInput.mathValues.split(" ");
            break;
        case "+":
            userInput.mathValues += " + ";
            storeValues = userInput.mathValues.split(" ");
            break;
        case "-":
            userInput.mathValues += " - ";
            storeValues = userInput.mathValues.split(" ");
            break;
        case "÷":
            userInput.mathValues += " ÷ ";
            storeValues = userInput.mathValues.split(" ");
            break;
        case "*":
            userInput.mathValues += " * ";
            storeValues = userInput.mathValues.split(" ");
            break;
        default:
            userInput.mathValues += input;
            break;
        };
    };

let storeInput = (input) => {storingValues.push(input);};

for(let i = 0; i < button.length; ++i) {
    button[i].addEventListener("click", displayValue);
}