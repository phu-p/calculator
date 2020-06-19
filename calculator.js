const addition = (a, b) => {return a + b;};

const subtraction = (a, b) => {return a - b;};

const multiplication = (a, b) => {return a * b;};

const divison = (a, b) => {return a / b;};

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