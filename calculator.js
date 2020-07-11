const addition = (a, b) => {return a + b;};

const subtraction = (a, b) => {return a - b;};

const multiplication = (a, b) => {return a * b;};

const divison = (a, b) => {return a / b;};

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
        case '/':
            divison(a, b);
            break;
        default:
            return "SYNTAX ERROR";
    };
};