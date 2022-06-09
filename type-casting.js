// Type Casting
const str = '23'    // string of 23
console.log(str)


const toNum = Number(str)   // type casting from string to number
console.log(toNum)

const newNum= 2345
const newNumAsStr = newNum.toString()
console.log(newNumAsStr)

// Type Of
const strType = typeof(str)
console.log(strType)

const toNumType = typeof(toNum)
console.log(toNumType)




// // lab

// /* String */

// [str-1.0]
// • using let and create a variable titled str1. Assign initger of 3000
// • change the value to string using toString()

let str1 = 3000;
str1 = str1.toString()

console.log(str1)


// [str-1.1]
// • run typeof() of the variable str1

console.log(typeof(str1))

// /* Object */
// [Obj-1.0]
// • Create object with the following
//     key labeled key1 with string of value1
//     key labeled key2 with intiger 2
//     key labeled key3 with string of value3
//     key labeled name4 with string of value4

const StrObj = {
    key1: 'value1',
    key2: 2,
    key3: 'value3',
    key4: 'value4',
}

// [Obj-1.1]
// • console log all the keys using keys()

console.log(Object.keys(StrObj))

// [Obj-1.2]
// • console log all the keys using values()

console.log(Object.values(StrObj))

// [Obj-1.2]
// • add a new value with the key labeld newKey5 with string value newVaue5

StrObj.newKey5 = 'newValue5'

// • freeze the object

Object.freeze(StrObj)

// • add a new value with the key labeld newKey6 with string value newVaue6

StrObj.newKey6 = 'newValue6'

// • console log the object

console.log(StrObj)

// /* Array */
// [Ary-1.0]
// • Create array with the following value
//     intiger 100
//     string two hundred
//     initiger 300
//     string four hundred

const Arr1 = [100, 'two hundred', 300, 'four hundred']

// [Ary-1.1]   
// • use length() and console.log the result

let lengthArr = Arr1.length

console.log(lengthArr)

// [Ary-1.2]   
// • use the push() with the initger 500
// • console.log

Arr1.push(500)

console.log(Arr1)

// [Ary-1.3]
// • use the pop() and console.log

Arr1.pop()

console.log(Arr1)

// [Ary-1.4]
// • use shift() and console.log

Arr1.shift()

console.log(Arr1)

// [Ary-1.5]
// • unshift() and add the string zero then console.log

Arr1.unshift('zero')

console.log(Arr1)

// [Ary-1.6]
// • convert array to a string using toString().

console.log(Arr1.toString())

// • add "+++" using join()
// • console.log

console.log(Arr1.join('+++'))

// [Ary-1.7]
// • sort the array using sort()
// • console.log the result

console.log(Arr1.sort())

