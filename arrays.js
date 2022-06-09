// // Array of arrays of numbers

// const studentGrades = [
//     [100, 100, 100],
//     [85, 88, 86],
//     [95, 97, 99]
// ]

// console.log(studentGrades.length)

// // Array of arrays of objects

// const picture = [
//     [{red: 1, green: 1, blue: 1}, {red: 1, green: 1, blue: 1}],
//     [{red: 1, green: 1, blue: 1}, {red: 1, green: 1, blue: 1}],
//     [{red: 1, green: 1, blue: 1}, {red: 1, green: 1, blue: 1}],
// ]

// //Array of objects

// const studentsInZoomClass = [
//     {
//      name: 'Ty',
//      isMute: true   
//     },
//     {
//     name: 'Juan',
//     isMute: true   
//     },
//     {
//     name: 'Elizabeth',
//     isMute: true   
//     },
//     {
//         name: 'Odette',
//         isMute: true   
//     },
//     {
//         name: 'Justin',
//         isMute: true   
//     },
// ]

// const score = [100, 99, 98, 97, 96, 95]

// console.log(score[score.length-1])

// const length = studentsInZoomClass.length
// const student = studentsInZoomClass[length - 1]
// console.log(student)

// console.log(studentsInZoomClass[0].name)
// console.log(studentsInZoomClass.length)


// // Update existing array - complex
// // 1. access student object
// // 2. access isMute property
// // 3. Update isMute from true to false

// studentsInZoomClass[3].isMute = false
// console.log(studentsInZoomClass[3])

// // Update existing array - simple
// // 1. access student object
// // 2. access isMute property
// // 3. Update isMute from true to false

// studentsInZoomClass[3] = {
//     name: 'Odette Salvoro',
//     isMute: false
// }

// console.log(studentsInZoomClass[3]) 

// // Update score
// score[score.length-1] += 1.5
// console.log(score[score.length-1])

const fruits = ['Bananas', 'Kiwi', 'Grapes', "Cherries"]
const fruitsLength = fruits.length

//console.log(fruitsLength) // amounts of fruits inside the array

const str = 'hey class!'
//console.log(str.length) // counting how long the string is

fruits.push('Pineapple', 'Strawberry', 'Melon')
//console.log(fruits)   // push add string to the end of the array

fruits.pop()   
//console.log(fruits)   //  removes the last element in the array

fruits.shift()
//console.log(fruits)   // removes the first element in the array

fruits.unshift('Grapfruit')
//console.log(fruits)     //adds to the front of the array

const fruitsToStr = fruits.toString()
// console.log(fruitsToStr)       // changes the array to a string
// console.log(typeof(fruitsToStr))    //finding the data type of the variable

const fruitsJoined = fruits.join(' & ')
//console.log(fruitsJoined)     //joins elements in the array by the character identified

fruits.sort()
//console.log(fruits) //sorting by the first letter of each string within the array
