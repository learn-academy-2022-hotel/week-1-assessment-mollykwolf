// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.

// Pseudo code:
//Function
//input: string
//output: the vaule with more characterss

//create a function called fruit and put in two inputs. The output will be the fruit with more characters.

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
//Expected outcome: "banana"

const bigFruit = (value1, value2) => {
  if(value1.length > value2.length){
    return value
  } else if(value1.length === value2.length) {
     return `${value1} has the same amount of characters as ${value2}`
   } else {
     return value2
   }
 }
console.log(bigFruit(fruit1, fruit2))
//Expected outcome: "banana"

// // Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"
// Expected outcome: "cherry"

const bigFruit = (value1, value2) => {
if(value1.length > value2.length){
  return value1
  } else if(value1.length === value2.length) {
  return `${value1} has the same amount of characters as ${value2}`
  } else {
  return value2
  }
}
console.log(bigFruit(fruit3, fruit4))
// Expected outcome: "cherry"

// --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Pseudo code:
//Function
//input:number
//output: string indicating if number is below, equal to, or above the boiling point

//create a function called boilingPoint that takes in a number called temp
//if temp is below 212 degrees Fahrenhiet return "number is below boiling point"
//if temp is equal 212 degrees Fahrenhiet return "number is at the boiling point"
////if temp is above 212 degrees Fahrenhiet return "number is above boiling point"

const temp1 = 42
// Expected output: "42 is below boiling point"

const temp2 = 350
// Expected output: "350 is above boiling point"

const temp3 = 212
// Expected output: "212 is at boiling point"

const boilingPoint = (temp) =>{
    if (temp < 212 ) {
        return `${temp} is below boiling point`
    } else if (temp === 212) {
        return `${temp} is at the boiling point`
    } else {
        return `${temp} is above the boiling point`
    }
}
console.log(boilingPoint(temp3))
//output: "212 is at boiling point"

// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Pseudo code:
//input: two arrays
//output: number returning the length of the two conbined arrays

//create a function the combines the two arrays and then outputs the combined length

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
console.log(padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns).length)
// Expected output: 9

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// Pseudo code:
//input: string
//output: reverse string

//create a code that will reserve the letters of a string
const currentCohort = "Hotel 2022"
console.log(currentCohort.split("").reverse().join(""))

// Expected output: "2202 letoH"

// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Pseudo code:
//input: array
//output: number

//Create a code that will input an array and return the last index of the given value

const myNumbers = [13, 34, 42, 5, 5, 10, 27, 42, 10]
const givenValue1 = 42
console.log(myNumbers.lastIndexOf(givenValue1))
// Expected output: 7

const givenValue2 = 10
console.log(myNumbers.lastIndexOf(givenValue2))
// Expected output: 8

// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Pseudo code:
//input: array
//output: array from largest to smallest

// create a code that will input an array that has numbers listed in no order and outputs an array with numbers listed in order from largest to smallest
const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
 sanDiegoSummerTemperatures.sort((a,b) => b-a)
 console.log(sanDiegoSummerTemperatures)
// Expected output: [82, 80, 79, 77, 76, 73, 72]

const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
sanDiegoWinterTemperatures.sort((a,b)=>b-a)
console.log(sanDiegoWinterTemperatures)
// Expected output: [68, 67, 66, 66, 62, 59, 59]
