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

//send the result to userInput.solution, and (2) make the userInput.solution to become userInput.num1
//then the next time the user sends in another number, the calculator will send the values into userInput.num2
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
    if(userInput.mathOperator.length === lengthOfEmptyArray) {
        userInput.num1.push(value);
    } else {
        userInput.num2.push(value);
    };
};

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

const joinNumbers = () => {
    if(userInput.mathOperator.length === lengthOfTwo){
        let num1Joined = userInput.num1.join("");
        let number1 = Number(num1Joined);
        let num2Joined = userInput.num2.join("");
        let number2 = Number(num2Joined);
        let operator = userInput.mathOperator.shift();
        operate(operator, number1, number2);
    }
};

//IMPORTANT: current issue is  when the solution pushes to num1, the next operation, num1 is fine , but num2 is always 0-- creating the same solution
const checkSolution = () => {
    if(userInput.solution.length !== lengthOfEmptyArray) {
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
    if(userInput.num1.length !== lengthOfEmptyArray && userInput.num2.length !== lengthOfEmptyArray && userInput.mathOperator.length !== lengthOfEmptyArray) {
        checkSolution();
        joinNumbers();
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