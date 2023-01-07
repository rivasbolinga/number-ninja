const currentOperation = document.querySelector('.current-operand');
const previousOperation = document.querySelector('.previous-operand');
const numbers = document.querySelectorAll('.number');
const operations = document.querySelectorAll('.ope');
const equalBtn = document.querySelector('.equal');
const resetBtn = document.querySelector('.clear');
const deleteBtn = document.querySelector('.delet');

let prevNum = '';
let secondNum = '';
let currOperator = null;

// Operations functions

function add(a, b) {
  return (a + b);
}

function substract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function division(a, b) {
  return a / b;
}

// Round big decimals

function roundResult(number) {
  return Math.round(number * 1000) / 1000;
}

const compute = function (operator, a, b) {
  a = Number(a);
  b = Number(b);
  // if (isNaN(prev) || isNaN(curr)) return;
  switch (operator) {
    case '+':
      return add(a, b);
    case '-':
      return substract(a, b);
    case 'x':
      return multiply(a, b);
    case '/':
      return division(a, b);
    default:
      return null;
  }
};

// Evaluate function

const evaluate = function () {
  if (currOperator === null) return;
  if (currOperator === '/' && currentOperation.textContent === '0') {
    currOperator.textContent = 'null';
    return;
  }
  secondNum = currentOperation.textContent;
  currentOperation.textContent = roundResult(compute(currOperator, prevNum, secondNum));
  previousOperation.textContent = `${prevNum} ${currOperator} ${secondNum}`;
  currOperator = null;
};

const resetScreen = function () {
  currentOperation.textContent = '';
};

const appendDot = function () {
  if (currentOperation.textContent === '') {
    currentOperation.textContent = '0';
  }
  if (currentOperation.textContent.includes('.')) return;
  currentOperation.textContent += '.';
};

// Function to set the number
const setNumber = function (num) {
  if (num === '.') {
    appendDot();
  } else {
    if (currentOperation.textContent === '0') resetScreen();
    currentOperation.textContent += num;
  }
};

// Function to set the operation
const setOperation = function (operator) {
  if (previousOperation.textContent.includes(operator)) {
    evaluate();
  }
  if (currOperator !== null) evaluate();
  prevNum = currentOperation.textContent;
  currOperator = operator;
  previousOperation.textContent = `${prevNum} ${currOperator}`;
  resetScreen();
};

// delete a number

const deleteNum = function () {
  currentOperation.textContent = currentOperation.textContent.toString().slice(0, -1);
};

// clear everything
const clear = function () {
  prevNum = '';
  secondNum = '';
  currOperator = null;
  currentOperation.textContent = '0';
  previousOperation.textContent = '';
};

/// //// EVENT LISTENERS

// Event listeners for number buttons

numbers.forEach((button) => {
  button.addEventListener('click', () => {
    setNumber(button.textContent);
  });
});

// Event listener for Operation buttons

operations.forEach((button) => {
  button.addEventListener('click', () => {
    setOperation(button.textContent);
  });
});

equalBtn.addEventListener('click', evaluate);
resetBtn.addEventListener('click', clear);
deleteBtn.addEventListener('click', deleteNum);
