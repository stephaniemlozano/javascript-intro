// Original boolean way
const isBoolean = Boolean(10 > 9)

// console.log(isBoolean)

// Short hand
const isMore = 10 > 9 
const isMore2 = (10 > 9)

// console.log(isMore)
// console.log(isMore2)

let isTrue = Boolean('1000') // true, has value
let isTrue2 = Boolean('') //false, empty no value

//console.log(isTrue)

let isFalse = Boolean(0) // false, because zero has no value
isFalse = Boolean(-15) // true, because -15 is a number value
isFalse = Boolean(' ') // true, because the space within the string is a character

//console.log(isFalse)

let x // false, because x is undefined
x = null
x = 'false' // true, because the string has a value
x = 'string'
let isThisTrue = Boolean(x)

//console.log(isThisTrue)

let y = 'false'
let t = 'true'
const isXandYTrue = (y && t)

//console.log(isXandYTrue)

//console.log( x || 'true')
//console.log( x && 'true')

