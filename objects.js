// // Simple object
// // key: value

// const person = {
//     name: 'Ahmed',
//     age: 23,
//     city: 'Boca Raton',
//     state: 'Florida'
// }

// // delete person.age
// // console.log(person)

// // Dot notation
// // console.dog(person.city)

// // Square bracket
// // console.log (person['age'])


// //complex object
// const car = {
//     name: 'Kia',
//     model: 'Soul',
//     year: 2022,
//     seating: {
//         fabric: 'leather',
//         color: 'black'
//     }
// }


// // let name = car.name
// // let model = car.model
// // let year = car.year

// // let {name, model, year, seating: {fabric, color}} = car

// // console.log(fabric)
// // const sentence =`My car is a ${name} ${model} built in ${year} with a ${car.seating.color} ${car.seating.fabric} seating`
// // console.log(sentence)


// // Update car name
// car.name = 'Porsche'
// car.model = 'Macan'
// car.year = 2023
// car.color = 'Miami Blue'
// car.techPackage = {
//     blindSpot: true,
//     laneAssist: true,
//     selfDriving: false
// }

// delete car.color
// console.log(car)

// All Keys
const shoppingList = { dairy: 'milk', fruits: 'pineapple', poultry: 'chicken'}
const allKeys = Object.keys(shoppingList)

const allValues = Object.values(shoppingList)
// console.log(allValues)

shoppingList.car = 'Tesla'  // add a property or key
console.log(shoppingList)

Object.freeze(shoppingList) //prevents from object being edited or modified
shoppingList.truck = 'GMC Denali'

console.log(shoppingList)