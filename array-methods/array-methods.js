const scores = [29, 45, 12, 28, 14]

// sort in ascending order
//console.log(scores.sort())  // equivilent to console.log(scores.sort((x, y) => x - y))

// sort in descending order
//console.log(scores.sort((x, y) => y - x))

// an array of users
const users = [
    {
        name: 'Natalia',
        age: 19,
    },
    {
        name: 'Stephanie',
        age: 18,
    },
    {
        name: 'Elizabeth',
        age: 19.
    },
    {
        name: 'Jiho',
        age: 16,
    },
    {
        name: 'Ahmed',
        age: 23,
    },
]

// sort by descending order by age
// users.sort((userA, userB) => {
//     return userB.age - userA.age
// })

// console.log(users)

// sort by ascending order by age
// users.sort((userA, userB) => {
//     return userA.age - userB.age
// })

// console.log(users)



// filter method
// const filteredUsers = users.filter((users) => {
//     // specify criteria
//     return users.age >= 18
// })
// console.log(filteredUsers)



// find method
// const jshon = users.find((users) => {
//     return users.name == 'Jiho'
// })

//console.log(jshon)

// const under21 = users.find((users) => {
//     return users.age < 21
// })
// console.log(under21)

// const userIndex = users.find((users) => {
//     return users.age < 21
// })
// console.log(userIndex)

// const isAllUser18orAbove = users.every((users) => {
//     return users.age >= 18
// })

// console.log(isAllUser18orAbove)

// forEach loop
// users.forEach((user) => {
//     console.log(user.name)
// })

// .map method
// const studentsDescription = users.map((user) => {
//     return `${user.name} is ${user.age} years old.`
// })
// console.log(studentsDescription)

// const studentsWhoCanDrink = users.map((user) => {
//     if(user.age >= 21) {
//         return `${user.name} can legally drink.`
//     } else {
//         return `${user.name} cannot legally drink.`
//     }
// })

// console.log(studentsWhoCanDrink)


// .reduce method

// const usersAge = users.map((user) => {
//     return user.age
// })
// console.log(usersAge)


// const sumOfUsersAge = usersAge.reduce((accumolator, currentValue) => {
//     return accumolator + currentValue
// })

// const averageUsersAge = sumOfUsersAge / users.length

// console.log(averageUsersAge)

