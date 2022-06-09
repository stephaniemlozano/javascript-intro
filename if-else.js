// const receipt1 = {
//     people: 4,
//     total: 200,
//     year: 2021,
//     type: 'lunch',
//     rep: 'Jorge'
// }

// const receipt2 = {
//     people: 2,
//     total: 600,
//     year: 2022,
//     type: 'lunch',
//     rep: 'Peter',
// }

// // let rep = receipt1.rep
// // let year = receipt1.year
// // let people = receipt1.people
// // let total = receipt1.total

// // with destructuring
// const {rep, year, people, total} = receipt2

// if(receipt2.total > 200){
//     const message = `Rep ${rep} on ${year} with ${people} spent ${total}`
//     console.log(message) 
// } else {
//     console.log(`great job ${receipt1.rep} keep it up!`)
// }

// //checking if one is > 250
// if(receipt1.total || receipt2.total > 250){ 
//     console.log('they are spending too much money on lunch')
// }

// //console.log(receipt1.total + receipt2.total)

// if (receipt1.total + receipt2.total >= 800){
//     console.log(`${receipt1.rep} and ${receipt2.rep} should be fired today!`)
// } else {
//     console.log('great job guys!')
// }


// const fruit = 'apple'
// switch(fruit){
//     case 'apple' :
//         console.log('nice apple')
//         break;
//     case 'grapes': 
//         console.log('I love grapes')
//         break;
//     default: 
//         console.log("I don't have this fruit")
// }


// Lab

// const groceryList = {
//     meat: 'ground beef',
//     produce: 'mango',
//     dairy: 'almond milk',
//     frozen: 'ice cream'
// }

// if(groceryList.dairy === 'almond milk'){
//     console.log('We have the milk!')
// } else { if(groceryList.produce === 'mango')
// console.log('We got mangoes')
// }
// //or
// if(groceryList.dairy === 'milk'){
//     console.log('Not the right milk')
// } else { if(groceryList.dairy === 'almond milk')
// console.log('We have the milk!')
// }
// //or
// if (groceryList.produce || 
//     groceryList.meat || 
//     groceryList.dairy || 
//     groceryList.frozen === 'almond milk'){
//     console.log('The milk was purchased.')
// } else {'We forgot the milk.'}




// const GroceryList = {
//     produce: 'mangoes',
//     dairy: 'almond milk',
//     frozen: 'ice cream',
// }

// if(GroceryList.meat && GroceryList.dairy && GroceryList.frozen){
//        console.log('we got the milk!')
//     } else {
//         console.log('we forgot the milk')
//     } 
//     // why is the answer 'we got the milk if 'chocolate' is not listed? 
//     // because the code was looking for the matching key, not value and 
//     //all keys i had listed were in the object



//     if (GroceryList.dairy === 'soda'){
//         console.log('milk is on the list')
//     } else {
//         console.log('we forgot the milk')
//     }

// if and else, ||, &&

// const num = 6

// //if our num is divisible by 2 then it's even otherwise
// //if our num is divisible by 1 then it's odd
// if(num % 2 == 0){
//     console.log(`${num} is even`)
// } else {
//     console.log(`${num} is odd`)
// }
//6 is even

// (true && true) = true
// (true && false) = false
// (false && true) = false
// (false && false) = false

// OR ||
// (true || true) = true
// (true || false) = true
// (false || true) = true
// (false || false) = false

// truthy
// 'something', 1, true, " " 

//falsey
//'', undefined, null, 0, ""

const user = {
    isTeacher: true,
    isStudent: false,
}

if(user.isTeacher && user.isStudent){
    console.log('true')
} else {
    console.log('false')
}