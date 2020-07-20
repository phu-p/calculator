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

let test = element => console.log(element);

let calculator = document.getElementsByClassName("calculator");
let button = document.getElementsByClassName("button");

for(let i = 0; i < button.length; ++i) {
    button[i].addEventListener("click", test);
}