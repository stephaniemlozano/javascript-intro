let users = [
    {
        name: 'natalia',
        age: 19
    },
    {
        name: 'stephanie',
        age: 18
    },
    {
        name: 'elizabeth',
        age: 19
    },
    {
        name: 'ahmed',
        age: 23
    },
    {
        name: 'jiho',
        age: 28
    }
]

// 1. Implement a function to search for a user with a given name (string input) return index.
function findName (name) {
    const index = users.findIndex((user) => {
        return user.name == name
    })
    return index
}

console.log(findName('stephanie'))

// 2. Implement a function that filters users under the age of 21
function usersUnder21 () {
    const usersUnder21 = users.filter((user) => {
      return user.age >= 21
    })
    return usersUnder21
}

console.log(usersUnder21())

// 3. Implement a function that converts the user objects into an array of names
function mapToStringArray () {
    const arrayOfNames = users.map((userName) => {
        return userName.name
    })
    return arrayOfNames
}
console.log(mapToStringArray())


