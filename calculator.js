// Helpful link
// https://www.codecademy.com/article/getting-user-input-in-node-js

// Intro
// Ask for user name
// Ask what a operation they want to complete
// Ask user for first number
// Ask user for second number
// complete operation / display output
// ask user if they want to run again or exit
// exit statement

const prompt = require('prompt-sync')()

console.log("Welcome to my Calculator! Let's get calculating! \n")


const name = prompt('What is your name? ')
console.log(`Oh hey, ${name}!`)


let runAgainOrExit = 'Yes'

while (runAgainOrExit == 'Yes') {
  const operation = prompt('Do you want to Add, Subtract, Multiply or Divide? ')
  console.log(`We can do that, ${name}! Let's ${operation}!`)
  
  let firstNumber = prompt(`What is the first number you want to ${operation}? `)
  let secondNumber = prompt(`What is the second number you want to ${operation}? `)
  
  function addOperation(x, y)      {return x + y}
  function subtractOperation(x, y) {return x - y}
  function multiplyOperation(x, y) {return x * y}
  function divideOperation(x, y)   {return x / y}
  
  if (operation === 'Add') {console.log(`The answer is `, addOperation(Number(firstNumber), Number(secondNumber)))}
  if (operation === 'Subtract') {console.log(`The answer is `, subtractOperation(Number(firstNumber), Number(secondNumber)))}
  if (operation === 'Multiply') {console.log(`The answer is `, multiplyOperation(Number(firstNumber), Number(secondNumber)))}  
  if (operation === 'Divide') {console.log(`The answer is `, divideOperation(Number(firstNumber), Number(secondNumber)))}
  
  const runAgainOrExit = prompt('Do you want to continue? Yes or No? ')
        
  if (runAgainOrExit == 'Yes') {
    console.clear()
    
  } else if (runAgainOrExit == 'No') {
    console.clear()
    console.log(`Ok. Let's calculate again soon, ${name}. `)
    process.exit()
  }
}




