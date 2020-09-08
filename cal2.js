let buttons = document.querySelectorAll(".button");
let screenText = document.getElementsByClassName("screen")[0];
let userInput = {
    mathOperator: [],
    num1: [],
    num2: [],
    solution: []
};

const resetAllUserInput = () => {
    resetUserInput();
    userInput.solution = [];
};

const resetUserInput = () => {
    userInput.num1 = [];
    userInput.num2 = [];
    userInput.mathOperator = [];
};

const deleteInput = () => {
    let num1Joined = userInput.num1.join("");
    let num2Joined = userInput.num2.join("");

    if(userInput.num1.length !== 0) {
        userInput.num1.pop();
        screenText.textContent = num1Joined;
    } else if(userInput.num2.length !== 0) {
        userInput.num2.pop();
        screenText.textContent = num2Joined;
    }
};

const displaySolution = () => {
    let solution = userInput.num1.join("");

    if(solution === "Infinity") {
        resetAllUserInput();
        screenText.textContent = "Undefined";
    } else if(userInput.solution.length !== 0) {
        screenText.textContent = userInput.solution;
    } else if(userInput.num1.length !== 0) {
        screenText.textContent = userInput.num1;
    };
};

const roundUpSolution = num => {
    let roundUpNum = Math.round(num * 100) / 100;
    return roundUpNum;
};

const operate = (operator, a, b) => {
    const addition = (num1, num2) => {return num1 + num2;};

    const subtraction = (num1, num2) => {return num1 - num2;};

    const multiplication = (num1, num2) => {return num1 * num2;};

    const division = (num1, num2) => {return num1 / num2;}
    
    const power = (a, b) => {
        const mathPower = Math.pow(a, b);
        return mathPower;
    };

    const operators = {
        addition: addition(a, b),
        subtraction: subtraction(a, b),
        multiplication: multiplication(a, b),
        division: division(a, b),
        power: power(a, b),
        default: "Syntax Error"
    };
    let solution = operators[operator];
    let storedSolution = userInput.solution.push(roundUpSolution(solution));
    return storedSolution || console.log(operators.default);
};

const sendNums = value => {
    if(userInput.mathOperator.length === 0) {
        userInput.num1.push(value);
    } else {
        userInput.num2.push(value);
    };
};

const removeDecimals = () => {
    let num1Decimals = userInput.num1.filter(value => value === ".");
    let num2Decimals = userInput.num2.filter(value => value === ".");

    if(num1Decimals.length > 1) {
        userInput.num1.pop();
    } else if(num2Decimals.length > 1) {
        userInput.num2.pop();
    }
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
        if(operator !== "division") {
            operate(operator, number1, number2);
            checkConditions();
        } else if(number2 === 0) {
            userInput.num1 = [];
            userInput.num2 = [];
            userInput.num1.push("Undefined");
        } else {
            operate(operator, number1, number2);
            checkConditions();
        }
    }
};

const checkSolution = () => {
    let error = userInput.num1.join("");

    if(userInput.solution.length === 1) {
        userInput.num1 = [];
        userInput.num2 = [];
        let solution = userInput.solution;
        userInput.num1.push(solution);
        userInput.solution = [];
    } else if(userInput.num1.length === 1 && error === "Undefined" ) {
        resetAllUserInput();
        screenText.textContent = "Syntax Error";
    }
};

const checkConditions = () => {
    if(userInput.num1.length !== 0 && userInput.num2.length !== 0 && userInput.mathOperator.length !== 0) {
        checkSolution();
        joinNumbers();
    } else if((userInput.mathOperator.length >= 2  && userInput.num1.length !== 0) || (userInput.mathOperator.length >= 2 && userInput.num2.length === 0)) {
        resetAllUserInput();
        screenText.textContent = "Syntax Error";
    };
};

const finishCalculation = () => {
    let num1Joined = "";
    let num2Joined = "";
    let operator = "";
    let num1 = "";
    let num2 = "";
    if(userInput.mathOperator.length === 2) {
        num1Joined = userInput.num1.join("");
        num1 = Number(num1Joined);
        num2Joined = userInput.num2.join("");
        num2 = Number(num2Joined);
        operator = userInput.mathOperator.shift();
        operate(operator, num1, num2);
        resetUserInput();
    } else if(userInput.num1.length === 0 || userInput.num2.length === 0) {
        resetAllUserInput();
        return screenText.textContent = "Syntax Error";
    };
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
        case "power":
            sendOperator(elementValue);
            break;
        case "equal":
            sendOperator(elementValue);
            finishCalculation();
            checkSolution();
            displaySolution();
            break;
        default:
            sendNums(elementValue);
            removeDecimals();
            break;
    }
};

const displayValues = (text) => {
    let num1Joined = userInput.num1.join("");
    let num2Joined = userInput.num2.join("");

    if(text === "+" || text === "-" || text === "*" || text === "÷" || text === "^") {
        screenText.textContent = num1Joined + " " + text + " " + num2Joined;
    } else if(text === "CLR") {
        resetAllUserInput();
        screenText.textContent = "";
    } else if(text === "DEL") {
        deleteInput();
    } else if(text !== "=") {
        screenText.textContent += text;
    };
};

const turnOn = element => {
    let textButton = element.target.textContent;
    let buttonValue = element.target.value;
    storeInputs(buttonValue);
    checkConditions();
    displayValues(textButton);
};

const activateButtons = () => {
    buttons.forEach(element => element.addEventListener("click", turnOn));
};

activateButtons();