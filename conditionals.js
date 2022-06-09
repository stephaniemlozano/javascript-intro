// If Else Statements
// let animal = 'dog'
// animal = 'cow'

// if(animal === 'dog') {
//     console.log('woof')
// } else if (animal === 'cat'){
//     console.log ('meow')
// } else if(animal === 'cow'){
//     console.log('mooo')
// } else {
//     console.log('not a cat or dog')
// }

// if (animal === ' dog') console.log('woof!')


// JS Scope
// Block scope -  x only exists within code block

// {
//     let x = 2
//     console.log(x)
// }

// // Function Scope - variable cannot be used outside of the function

// function myFirstFunction(){
//     let y=5
//     console.log(y)
// }

// myFirstFunction() // this calling the function

// Global Scope

// let t = 8
// {
//     console.log(t)
// }
// function mySecondFunction(){
//     console.log(t)
// }
// mySecondFunction


// Ternary

const date = new Date()
const fullYear = date.getFullYear()
// console.log(fullYear)

//const hours = date.getHours()
//console.log(hours)

const day = date.getDay()
// console.log(day) // 1 = Monday

// hours > 12 ? console.log('Good Afternoon'): console.log ('Good Morning') // ternary - shortened if else statement

// fullYear === 2021 ?console.log('hi 2021') : console.log('dude, youre 2022 late') 
// day + 2 >= 7 ? console.log('is Sunday') : console.log('its not sunday')

// if(day === 1){
//     const dayOfWeek = 'is Monday'
//     console.log(dayOfWeek)
//     } else { 
//     const dayOfWeek = 'is not Monday'
//     console.log(dayOfWeek)
//     }

//         //or

// const dayOfWeek = day === 1 ? 'Monday' : 'is not Monday'
//  console.log(dayOfWeek)

const dayOfWeek = day === 1 ? 'is monday' : 'is not monday'

//console.log(`hi there today is ${dayOfWeek}`)

const hours = date.getHours()
const message = `Good ${hours > 12 ? 'afternoon' : ' morning'}`

//console.log(message)

const goldenState = 100
const mavericks = 80

const winnerMessage = `${mavericks < goldenState ? 'GSW is killing the Mavericks' : 'Mavericks are beating GSW'}`

//console.log(winnerMessage)

