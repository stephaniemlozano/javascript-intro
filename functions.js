// function myFirstFunction(x){
//     console.log('running my first fn,', x)
// }

// // myFirstFunction('woohoo!')
// // myFirstFunction('hello')
// // myFirstFunction(8 + 9)

// function addSum(num1, num2){
//     console.log(num1 + num2)
//     return num1 + num2    // using return allows us to reuse this code through out the code base
// }
// //addSum(2,5)
// // console.log(addSum(5,9))

// const total = addSum(30,10)
// //console.log(total)

// // Advanced function

// function addThree(x, y, t){
//     const totalAddition = x + y + t
//     return totalAddition
//         //or
//     return x + y + t
// }

// const totalThree = addThree(2, 5, 7) // assigning return value from function
// //console.log(totalThree)

// // Celsius to Farenheit Converter
// function toCelsius(farenheit){
//    const subTotal = farenheit - 32
//    console.log('this is my subTotal', subTotal)
//    if(farenheit > 100){
//        console.log('do not go outside for risk of melting')
//    } else if (farenheit === 110){
//        console.log('that sounds about right')
//    } else {
//        console.log('you are not hot enough for FL')
//    }

//    return subTotal * 5/9
// }

// const convert = toCelsius(110)
//console.log(convert.toFixed(2))

// create a sales tax calculator
// write 1 function that takes 2 parameters
// 1 parameter is the total, the 2 parameter is the taxRate
// return the calculation

// function salesTax(total, taxRate){
//     console.log((total*taxRate)+(total))
//     return (total*taxRate) + total
// }

// const price = salesTax(10, .07)
// let amount = {
//     total: 10,
//     tax: .07,
// }

// console.log(`The total for your purchase today is $ ${price.toFixed(2)}.
// This is because the result of $ ${amount.total} multiplied by $ ${amount.tax}
// plus the amount, $ ${amount.total} gives you $ ${price.toFixed(2)}.`)

// A function that calculates the sales tax in any given city or state
// Input: bill tota, and tax rate

// function calculateSalesTax(total, taxRate){
//     //NOTE: - Assuming tax rate is passed in % (i.e if 7%, must pay 0.07)
//     const tax = total * taxRate
//     const totalAfterTax = total + tax
//     return {priceAfterTax: totalAfterTax, originalPrice: total, tax: tax.toFixed()}
// }

// const monitorPriceAfterTax =  calculateSalesTax(100, 0.07)
// console.log(monitorPriceAfterTax)

/*
function calculateNetIncome(annualIncome){
    const result = {annualIncome}
    if (annualIncome < 100_000){
        result.taxRate = '18%'
        result.tax = annualIncome * 0.18
        result.netIncome = annualIncome - result.tax
    } else if (annualIncome >= 100_000 && annualIncome < 180_000) {
        result.taxRate = '22%'
        result.tax = annualIncome * 0.22
        result.netIncome = annualIncome - result.tax
    } else if (annualIncome >= 180_000 && annualIncome < 250_000) {
        result.taxRate = '25%'
        result.tax = annualIncome * 0.25
        result.netIncome = annualIncome - result.tax
    } else if (annualIncome >= 250_000 && annualIncome < 450_000) {
        result.taxRate = '32%'
        result.tax = annualIncome * 0.32
        result.netIncome = annualIncome - result.tax
    }
    return result
}
const softwareEngineerIncome = calculateNetIncome(300_000)
console.log(softwareEngineerIncome)

const result = {annualIncome}
switch(annualIncome > 10_000){
    case annualIncome <100_000:
        result.taxRate = '18%'
        result.tax = annualIncome * 0.18
        result.netIncome = annualIncome - result.tax
        break
    case annualIncome >= 100_000 && annualIncome < 180_000: 
        result.taxRate = '22%'
        result.tax = annualIncome * 0.22
        result.netIncome = annualIncome - result.tax
        break
    case annualIncome >= 180_000 && annualIncome < 250_000:
        result.taxRate = '25%'
        result.tax = annualIncome * 0.25
        result.netIncome = annualIncome - result.tax
        break
    case annualIncome >= 250_000 && annualIncome < 450_000:
        result.taxRate = '32%'
        result.tax = annualIncome * 0.32
        result.netIncome = annualIncome - result.tax
        break
    }  
        return result
    


const softwareEngineerIncome2 = calculateNetSwitch(300_000)
console.log(softwareEngineerIncome2) */

/* How do we write anonymous functions

// Normal function
function nameOfFunction(parameters){
    console.log('normal function')
}

// Anonymous function with a value
const nameOfFunction2 = function (parameters){
    console.log('anonymous function')
}

nameOfFunction()
nameOfFunction2()

//Anonymous arrow functions
const arrowAnonFunction = (parameters) => {
    console.log('arrow anonymous functions')
}

arrowAnonFunction()
*/

/* Ternary statement aka one line if state
   if CONDITION then (?) valueA or else (:) then valueB

const time = 14
const skyColor = time >= 20 ? 'black' : 'blue'

console.log(skyColor)
*/

/* Implement a function that takes in the following parameters:
 * - Weather
 * - Is Raining or Not
 * - Time (24hr system, i.e 12, 14.. etc)
 *
 * based on the passed arguments, return true if it's a good time to go for a run;
 * otherwise return false.
 */
/*
const currentWeather = {
    weather: 'sunny',
    isRaining: true,
    timeNow: 15,
}

function runTime(paramWeather, paramRain, paramTime){
    // if the weather is sunny then today weather is sunny
    // if its raining then today its raining
    return (paramWeather === 'sunny' ? 'today weather is sunny' : 'today its     raining') + (paramTime <= 15 ? 'go for a run' : 'its too hot') + (paramRain === true ? 'take a rain jacket' : 'put on sunblock')
    //return `${paramWeather} ${paramRain} ${paramTime}`
}

const isItTimeToRun = runTime(currentWeather.weather, currentWeather.isRaining, currentWeather.timeNow)
// //function runTime(weather, isRaining, time){
//     return (time > 12 && isRaining ? 'not a good time to run' : 'go for a run')
// }
// const isItTimeToRun = runTime('sunny', true, 15)

console.log(isItTimeToRun)
*/

const weatherNow = {
  weather: "sunny",
  isNotRaining: true,
  timeNow: 14,
};

function runTime(p1, p2, p3) {
  if (p1 === "sunny" && p2 && p3 >= 14) {
    console.log("time for run");
  } else {
    p1 === "rainy" && p2 === false && p3 < 14;
    console.log("run later");
  }
}

const goRun = runTime(
  weatherNow.weather,
  weatherNow.isNotRaining,
  weatherNow.timeNow
);
console.log(goRun);



function addFunction(x, y) {
    let answer = x + y
    console.log(answer)
}
addFunction(1,2)