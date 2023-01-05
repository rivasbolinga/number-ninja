'use strict'

const currentOperation = document.querySelector('.current-operand');
const previousOperation = document.querySelector('.previous-operand');
const numbers= document.querySelectorAll('.number');
const operations = document.querySelectorAll('.ope');
const sum = document.querySelector('.sum');
const equalBtn = document.querySelector('.equal');
const resetBtn = document.querySelector('.clear');

let displaValue = "";
let prevNum = "";
let currNum = "";
let currOperator = null;
// set number

const setNumber = function(num) {
  if(num === '.' && currNum.includes('.')) return
    currNum = currNum.toString() + num.toString();
}


const setOperation = function (operator){
  if(currNum === "") return
  if(prevNum !== "") {
    compute(operator);
  }
 operator = operator;
 prevNum = currNum;
 currNum = "";
}



// display operations



const compute = function() {
  let computation;
  const prev = parseFloat(prevNum);
  const curr = parseFloat(currNum);
  if (isNaN(prev) || isNaN(curr)) return;
  switch(operator) {
    case '+':
      computation = prev + curr;
      break
    case '-':
      computation = prev - curr;
        break
    case 'x':
      computation = prev * curr;
        break
    case '/':
      computation = prev / curr;
        break
    default:
      return
  }
  
  currNum = computation;

  prevNum = "";
 
}

//update display
const updateDisplay = function() {
  currentOperation.textContent = currNum;
  previousOperation.textContent = prevNum;
}


// equal button

equalBtn.addEventListener('click', button => {
  compute();
})

//display numbers
numbers.forEach(function(button) {
  button.addEventListener('click',() => {
    setNumber(button.textContent);
    updateDisplay();
  })
});

operations.forEach(function(button) {
  button.addEventListener('click', () => {
    setOperation(button.textContent);
    updateDisplay();
  })
});
