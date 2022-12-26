'use strict'

const display = document.querySelector('.display');
const numbers= document.querySelectorAll('.number');
const operations = document.querySelectorAll('.ope');
const sum = document.querySelector('.sum');
const equalBtn = document.querySelector('.equal');
const resetBtn = document.querySelector('.clear');

let displaValue = "";
let prevNum = "";
let secondNum = "";
let operator = "";

//display numbers
numbers.forEach(function(e){
  e.addEventListener('click',function(e){
    if(operator === ""){
      prevNum += e.target.textContent;
      display.textContent = prevNum;
      console.log(prevNum);
  } else {
    secondNum += e.target.textContent;
    display.textContent += secondNum;
    console.log(secondNum);
  }
})
})

// display operations

operations.forEach(function(op) {
  op.addEventListener('click', function (e) {
    operator = e.target.textContent
    display.textContent += operator;
  })
  return operator;
})

// equal button

equalBtn.addEventListener('click', function (e){
switch(operator) {
  case "+":
    add(prevNum, secondNum);
    break;
  case "-":
    substract(prevNum, secondNum);
    break;
  case "x":
    multip(prevNum, secondNum);
    break;
  case "/":
    division(prevNum, secondNum);
    break;
  default:
    break;
}
})
//operations

const add = function(a,b){
   const result = (parseInt(a)+ parseInt(b));
   display.textContent = result;
}

const substract = function(a,b){
  const result = (parseInt(a)- parseInt(b));
  display.textContent = result;
}

const division = function(a,b){
  const result = (parseInt(a) / parseInt(b));
  display.textContent = result;
}
const multip = function(a,b){
  const result = (parseInt(a) * parseInt(b));
   display.textContent = result;
}

// clear

resetBtn.addEventListener('click', function() {
  display.textContent = 0;
  displaValue = "";
  prevNum = "";
  secondNum = "";
  operator = "";
})