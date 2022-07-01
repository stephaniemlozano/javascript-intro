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

console.log("Welcome to my calculator, let's get rolling!")
console.log(prompt('What should I call you? '))


while (askAgain = 'Yes') {
    let operation = 'What do you want to do? Select +, -, * or / '
    console.log(prompt(operation))
    let firstNum = prompt("What's the first number you want to use? ")
    let secondNum = prompt("What's the second number you want to use? ")
    
    function operationAdd(x, y) {return (x + y)}
    function operationSubstract(x, y) {return (x - y)}
    function operationMultiply(x, y) {return (x * y)}
    function operationDivide(x, y) {return (x / y)}

    if (operation == '+'){
    console.log('The answer is: ', operationAdd(Number(firstNum), Number(secondNum)))
    } else if (operation == '-'){
        console.log('The answer is: ', operationSubstract(Number(firstNum), Number(secondNum)))
    } else if (operation == '*'){
        console.log('The answer is: ', operationMultiply(Number(firstNum), Number(secondNum)))
    } else if (operation == '/'){
        console.log('The answer is: ', operationDivide(Number(firstNum), Number(secondNum)))
    } else {
        console.log(askAgain)
    }

    const askAgain = prompt('Do you want continue? Yes or No ')

    if (askAgain == 'Yes') {
        console.clear()
    } else if (askAgain == 'No') {
        console.clear()
        console.log('Thanks, see you later!')
        process.exit()
    }
}




