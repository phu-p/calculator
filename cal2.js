//ignore extra credit objectives and special operators like factorial and exponent
let buttons = document.querySelectorAll(".button");
let screenText = document.getElementsByClassName("screen")[0];
let userInput = {
    mathOperator: [],
    num1: [],
    num2: [],
    solution: []
};
let emptyArray = [];
let lengthOfEmptyArray = emptyArray.length;

//send the result to userInput.solution, (1) then make sure to delete userInput.mathOperator, and (2) make the userInput.solution to become
//userInput.num1
//note i need to join two indexes together before do the math--maybe create a function join.
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
    return operators[operator] || operators.default;
};

const sendNums = value => {
    if(userInput.mathOperator.length === lengthOfEmptyArray) {
        userInput.num1.push(value);
    } else {
        userInput.num2.push(value);
    };
};

//i may not need the if condition because i want to use shift() to do the first operation
const sendOperator = value => {
    if(userInput.mathOperator.length % 2 === 0) {
        userInput.mathOperator = [];
        userInput.mathOperator.push(value);
    } else {
        userInput.mathOperator.push(value);
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

const joinIndex = () => {
    let num1Joined = userInput.num1.join("");
    let number1 = Number(num1Joined);
    let num2Joined = userInput.num2.join("");
    let number2 = Number(num2Joined);
    let operator = userInput.mathOperator.shift();
    operate(operator, number1, number2);
};

//put this function in turnOn()
const checkConditions = () => {
    if(userInput.num1.length !== lengthOfEmptyArray && userInput.num2.length !== lengthOfEmptyArray && userInput.mathOperator.length !== lengthOfEmptyArray) {
        joinIndex();
    }
};

const turnOn = element => {
    let textButton = element.target.textContent;
    screenText.textContent = textButton;
    let buttonValue = element.target.value;
    storeInputs(buttonValue);
    checkConditions()
};

buttons.forEach(element => element.addEventListener("click", turnOn));