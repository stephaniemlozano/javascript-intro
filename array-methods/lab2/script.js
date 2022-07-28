const users = [
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

let htmlUsersList = ''
function listUsers() {
    const usersDiv = document.querySelector('#students')
    users.forEach((user) => {
        const userItemHTML = `
        <p>Name: ${user.name}</p>
        <p>Age: ${user.age}</p>
        <br/>
        `
        htmlUsersList += userItemHTML
    })

    usersDiv.innerHTML = htmlUsersList
}

listUsers()

function searchInput() {
    const usersDiv = document.querySelector('#students')
    const userSearchQuery = document.querySelector('#search_field').value
    const userIndex = searchUserByName(userSearchQuery)
    if (userIndex == -1) {
        usersDiv.innerHTML = htmlUsersList
    } else {
        const user = users[userIndex]
        usersDiv.innerHTML = `<p>${user.name} is ${user.age} years old.</p>`
    }
}

function searchUserByName(name) {
    const index = users.findIndex((user) => {
        return user.name == name
    })

    return index
}

function usersThatCanDrink() {
    const users21orAbove = users.filter((user) => {
        return user.age >= 21
    })

    return users21orAbove
}

function usersAverageAge() {
    // 1. convert the array of objects to array of number (representing age).
    const usersAge = users.map((user) => {
        return user.age
    })

    // 2. Used `reduce` array method to compute/calculate the sum of users age
    const sumOfUsersAge = usersAge.reduce((accumolator, currentlValue) => {
        return accumolator + currentlValue
    })

    // 3. compute the average age
    const averageUsersAge = sumOfUsersAge / users.length

    return averageUsersAge
}






