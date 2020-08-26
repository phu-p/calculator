//ignore extra credit objectives and special operators like factorial and exponent
let buttons = document.querySelectorAll(".button");
let screenText = document.getElementsByClassName("screen")[0];
let userInput = {
    mathOperator: [],
    num1: [],
    num2: [],
    solution: []
};

const operate = (operator, a, b) => {
    const addition = (num1, num2) => {return num1 + num2;};

    const subtraction = (num1, num2) => {return num1 - num2;};

    const multiplication = (num1, num2) => {return num1 * num2;};

    const division = (num1, num2) => {return num1 / num2;};
    
    const operators = {
        addition: addition(a, b),
        subtraction: subtraction(a, b),
        multiplication: multiplication(a, b),
        division: division(a, b),
        default: "Syntax Error"
    };
    let solution = operators[operator];
    let storedSolution = userInput.solution.push(solution);
    return storedSolution || console.log(operators.default);
};

const sendNums = value => {
    if(userInput.mathOperator.length === 0) {
        userInput.num1.push(value);
    } else {
        userInput.num2.push(value);
    };
};

const sendOperator = value => {
    userInput.mathOperator.push(value);
};

const joinNumbers = () => {
    if(userInput.mathOperator.length === 2){
        let num1Joined = userInput.num1.join("");
        let number1 = Number(num1Joined);
        let num2Joined = userInput.num2.join("");
        let number2 = Number(num2Joined);
        let operator = userInput.mathOperator.shift();
        operate(operator, number1, number2);
        checkConditions();
    }
};

const checkSolution = () => {
    if(userInput.solution.length === 1) {
        //reset num1 and num2
        userInput.num1 = [];
        userInput.num2 = [];
        //push the solution into num1 to let the calculator ready to accept the next number
        let solution = userInput.solution;
        userInput.num1.push(solution);
        userInput.solution = [];
    };
};

const checkConditions = () => {
    if(userInput.num1.length !== 0 && userInput.num2.length !== 0 && userInput.mathOperator.length !== 0) {
        checkSolution();
        joinNumbers();
    }
};

const storeInputs = elementValue => {
    switch(elementValue) {
        case "addition":
            sendOperator(elementValue);
            break;
        case "subtraction":
            sendOperator(elementValue);
            break;
        case "division":
            sendOperator(elementValue);
            break;
        case "multiplication":
            sendOperator(elementValue);
            break;
        case "equal":
            sendOperator(elementValue);
            break;
        default:
            sendNums(elementValue);
            break;
    }
};

const turnOn = element => {
    let textButton = element.target.textContent;
    screenText.textContent = textButton;
    let buttonValue = element.target.value;
    storeInputs(buttonValue);
    checkConditions();
};

buttons.forEach(element => element.addEventListener("click", turnOn));