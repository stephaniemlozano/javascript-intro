//***Template Literals

// Hey checkout my new nissan I paid total for it!
//price of the car * tax = total
const nissan = 5600
const tax = .07 // 7% / 100 == .07
const total = (nissan * tax) + nissan

//console.log('Hey checkout my new Nissan I paid $', total, 'my taxes were', (tax * nissan).toFixed(2))
//console.log(`Hey checkout my new Ride I paid $ ${total}, my taxes were ${(tax * nissan).toFixed(2)}`)

//***Tp Uppercase and Lowercase

//const firstName = 'JONATHAN'
//const nameInLower = firstName.toLowerCase()
//const nameInUpper = nameInLower.toUpperCase()

//console.log(`My Name in lowercase ${nameInLower}`)
//console.log(`My Name in uppercase ${nameInUpper}`)

//*** Trim = spaces around 

const lastName = '     Sanchez     '
const trimmedLN = lastName.trim()

//console.log(trimmedLN)
//console.log(lastName)

//*** Replace

//const school = 'Boca Code is cool!'
//const replaceWith = school.replace('is cool','Rocks')        // Boca Code Rocks! const replaceWith = school.replace('1 what to replace','2 replace by') 

//console.log(replaceWith)

//*** Substring returns part of a string

const motto = 'Trust the process'
const oneWord = motto.substring('10','17')      //= motto.substring('1 where the substring starts','2 where the substring ends')
const twoWord = motto.substring('0','5')

//console.log(oneWord)
//console.log(twoWord)

//***Index of - locates where the character falls in ordinal

// const wordIndex = motto.indexOf('the')      // 6 index
// const wordFound = motto.substring(wordIndex,9)      //finding the word
// const upCaseWordFound = wordFound.toUpperCase()

//console.log(wordFound)      // index 6
//console.log(wordIndex)      // the
//console.log(upCaseWordFound)    //THE

//*** Starts with & Ends with

const str = 'Hello Level Up students!'
const startsWord = str.startsWith('Level')
const startsWithHello = str.startsWith('Hello')
const startsWithAny = str.startsWith()

// console.log(startsWord)         //false
// console.log(startsWithHello)    //true
// console.log(startsWithAny)

const endsWithUp = str.endsWith('Up')
const endsWithStudents = str.endsWith('students!')

// console.log(endsWithUp)
// console.log(endsWithStudents)

//*** Includes

const phrase = 'We are becoming fullstack engineers!'
const hasFS = phrase.includes('fullstack')  //returns true/false
const hasEng = phrase.includes('engine')

// console.log(`this sentence has fullstack ====> ${hasFS}!`)
// console.log(hasFS)
// console.log(hasEng)



