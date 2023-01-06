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
    evaluate();
  }
 prevNum = currentOperation.textContent;
 currOperator = operator;
 
 previousOperation.textContent = `${prevNum} ${currentOperation}`
}


function add(a, b) {
  return a + b
}

function substract(a, b) {
  return a - b
}

function multiply(a, b) {
  return a * b
}

function division(a, b) {
  return a / b
}

const evaluate = function(){
  currNum = currOperator.textContent
  currOperator.textContent = compute(currOperator,prevNum, currNum);
  previousOperation.textContent = `${prevNum} ${currOperator}${currNum}`
}



const compute = function(operator,prev,curr) {
   prev = parseFloat(prev);
   curr = parseFloat(curr);
  if (isNaN(prev) || isNaN(curr)) return;
  switch(operator) {
    case '+':
     return add(prev, curr)
     
    case '-':
      return substract(prev,curr)
    case 'x':
      return multply(prev,curr)
    case '/':
      return division(prev,curr)
    default:
      return 
  }
 
}

//update display


//EVENT LISTENRES

// equal button

equalBtn.addEventListener('click', evaluate);

//display numbers
numbers.forEach(function(button) {
  button.addEventListener('click',() => {
    setNumber(button.textContent);
  
  })
});

operations.forEach(function(button) {
  button.addEventListener('click', () => {
    setOperation(button.textContent);
   
  })
});
