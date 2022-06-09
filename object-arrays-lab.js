// // const personInfo = {
// //     firstName: 'Stephanie',
// //     age: 31,
// //     isHungry: false,
// // }

// // personInfo.age = 30
// // personInfo.lastName = 'Sadowski'
// // personInfo.cat = 'Vader'
// // personInfo.dog = 'Jacksie'

// // delete personInfo.firstName
// // let {cat, dog, lastName} = personInfo
// // let renderResult = personInfo

// // //console.log(renderResult)

// // const lottoNumbers = [
// //     [4, 15, 17, 22, 87],
// //     [5, 16, 18, 23, 88],
// //     [6, 17, 19, 24, 89],
// // ]

// // const lottoWinners = [{
// //     name: 'Louis',
// //     location: 'NY'
// // },
// // {
// //     name: 'Siena',
// //     location: 'GA'
// // },
// // {   name: 'Cheech',
// //     location: 'FL'
// // },
// // ]

// // let renderAnswer = lottoNumbers[1][0]

// // console.log(renderAnswer)

// // Question - Bonus 2. Destructure your properties and console.log all three

// // 1.  Create an object called personInfo with the keys and values
// // ==> firstName, age, isHungry (string, number, boolean)
// const personInfo = {
//     firstName: 'Stephanie',
//     age: 31,
//     isHungry: 'false',
// }

// // a. console.log your firstName using dot notation
// console.log(personInfo.firstName)

// //  b. change your age, and console.log it using bracket notation
// personInfo.age = 30
// console.log(personInfo['age'])

// //  c. add the property lastName to the object, lastName is a string.
// personInfo.lastName = 'Sadowski'
// console.log(personInfo['lastName'])

// //  d. remove your firstName from the object
// delete personInfo.firstName
// console.log(personInfo)

// // Bonus. add an object pets of strings to the personInfo object
// //                              For example cat: 'tom',
// //                                          mouse: 'jerry'
// personInfo.cat = 'Vader'
// personInfo.dog = 'Jacksie'

// //  Bonus 2. Destructure your properties and console.log all three
// let {cat, dog, lastName} = personInfo
// console.log(cat, dog, lastName)

// // 1.  Create an array of numbers
// //    a. console.log the last element of this array
// const houseNumber = [2610, 2612, 2614]
// console.log(houseNumber[2])

// // 2.  Create an array of strings
// //    a. console.log the second element of this array
// const cities = ['Ellijay', 'Atlanta', 'Blue Ridge']
// console.log(cities[1])

// // 3. Create an array of objects
// //    a. console.log the first object in this array
// const flavors = [
//     {vanilla: 'white',
//     chocolate: 'brown',
//     strawberry: 'pink',
//     },
//     {cookies: 'black',
//     brownie: 'darkbrown',
//     monster: 'rainbow',}]

//     console.log(flavors[0])

// // Bonus. Create an array of arrays of numbers.
// //    a. console.log the first number of the second array
// const employeeNumbers = [[1, 2, 3, 4, 5], [11, 12, 13, 14, 15], [21, 22, 23, 24, 25]]
// console.log(employeeNumbers[1][0])

const driversLicense = {
  name: "Stephanie Sadowski",
  dob: "January 17, 1991",
  cityState: "Palm Harbor, FL",
};
const info = ['Here', 'is your', driversLicense, [1, 2, 3, 4]];

console.log(info[2])    // {object}
console.log(info[3])    // [array]

