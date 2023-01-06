'use strict'

const currentOperation = document.querySelector('.current-operand');
const previousOperation = document.querySelector('.previous-operand');
const numbers= document.querySelectorAll('.number');
const operations = document.querySelectorAll('.ope');
const sum = document.querySelector('.sum');
const equalBtn = document.querySelector('.equal');
const resetBtn = document.querySelector('.clear');
const deleteBtn = document.querySelector('.delet');


let prevNum = "";
let secondNum = "";
let currOperator = null;


// Operations functions

function add(a, b) {
  return (a + b);
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
  if( currOperator === null) return
  if (currOperator === '/' && currentOperation.textContent === "0"){
    currOperator.textContent = 'null'
    return
  }
  secondNum = currentOperation.textContent;
  currentOperation.textContent = compute(currOperator, prevNum, secondNum);
  previousOperation.textContent = `${prevNum} ${currOperator} ${secondNum}`
  currOperator = null
  }


const compute = function(operator,a,b) {
   a = Number(a);
   b = Number(b);
  //if (isNaN(prev) || isNaN(curr)) return;
  switch(operator) {
    case '+':
     add(a, b)
    case '-':
      return substract(a,b)
    case 'x':
      return multiply(a,b)
    case '/':
      return division(a,b)
    default:
      return null
  }
}

const resetScreen = function () {
  currentOperation.textContent = "";
}

//Function to set the number
const setNumber = function(num){
  if(currentOperation.textContent === '0')
  resetScreen();
  currentOperation.textContent += num;
  if (currentOperation.textContent.includes('.')) return
}

//Function to set the operation
 const setOperation = function (operator) {
  if (currOperator !== null) evaluate();
  prevNum = currentOperation.textContent;
  currOperator = operator;
  previousOperation.textContent = `${prevNum} ${currOperator}`
  resetScreen();
 }

//delete a number
const deleteNum = function(){
  currentOperation.textContent = currentOperation.textContent.toString().slice(0,-1);
}
// clear 
const clear = function() {
   prevNum = "";
   secondNum = "";
   currOperator = null;
   currentOperation.textContent = "0";
   previousOperation.textContent = ""
}


/////// EVENT LISTENERS

// Event listeners for number buttons

 numbers.forEach(function(button) {
   button.addEventListener('click',() => {
     setNumber(button.textContent);
   }) 
  });

// Event listener for Operation buttons

operations.forEach(function(button) {
    button.addEventListener('click', () => {
    setOperation(button.textContent);
    });
  });

// equal button

 equalBtn.addEventListener('click', evaluate);

resetBtn.addEventListener('click', clear);
deleteBtn.addEventListener('click', deleteNum);
// dotBtn.addEventListener('click', appendDot)