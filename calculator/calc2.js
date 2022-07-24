const outputScreen = document.querySelector('.output')
const firstNumberEntered = document.querySelector('.first-num')
const secondNumberEntered = document.querySelector('.second-num')
const buttonAC = document.querySelector('.btn-ac')
const buttonDelete = document.querySelector('.btn-del')
const buttonEqual = document.querySelector('#btn-equal')
const buttonPercent = document.querySelector('.btn-percent') 
const buttonNumberKey = document.querySelector('.number-key')
const operation = document.querySelectorAll('.btn-operation')

class Calculator {
   constructor(firstNumberEntered, secondNumberEntered) {
     this.firstNumberEntered = firstNumberEntered
     this.secondNumberEntered = secondNumberEntered
   }
}

function addOperation(x, y)      {return x + y}
function subtractOperation(x, y) {return x - y}
function multiplyOperation(x, y) {return x * y}
function divideOperation(x, y)   {return x / y}

if (operation === '+') {console.log(addOperation(Number(firstNumberEntered)), (Number(secondNumberEntered)))}
if (operation === '-') {console.log(subtractOperation(Number(firstNumberEntered)), (Number(secondNumberEntered)))}
if (operation === '*') {console.log(multiplyOperation(Number(firstNumberEntered)), (Number(secondNumberEntered)))}
if (operation === '/') {console.log(divideOperation(Number(firstNumberEntered)), (Number(secondNumberEntered)))}

buttonEqual.addEventListener('click', (button) => {
   Calculator.?
})

/* Things to figure out:
   Getting the output to display in display area
   Use class contructor? Don't fully understand why. If it's initiating an object what object am I trying to initiate?
   Is it so I can use the addEventListener method for my onlicks?


*/