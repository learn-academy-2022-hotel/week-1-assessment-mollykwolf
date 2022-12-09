// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
console.log(colors.push("indigo"))

// a) Your answer: 5
// b) Verify and explain: The output of the method itself is the length of the new array.

// --------------------1) What will this log?
//
const cohort = "LEARN 2022"
console.log(cohort.length)

// a) Your answer: 10
// b) Verify and explain: The output is the length of the string. It counts each character including spaces.

// --------------------2) What will this log?
//
const greeting = "Hello World!"
console.log(greeting[4])

// a) Your answer:o
// b) Verify and explain: Arrays are zero indexed and increase by one for each new element. "o" is the in the fourth index in the string of "hello world!"

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
console.log(languages[index])

// a) Your answer: Ruby
// b) Verify and explain: Arrays are zero indexed and increase by one for each new element. Ruby is in index 1.

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: SATURDAY, SUNDAY
// b) Verify and explain: .toUpperCase() works on strings. It will work on one of the values in the array but not the entire array.

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
console.log(typeof dataTypes.length)

// a) Your answer: 4
// b) Verify and explain: .length is an informational command that returns the number of elements in an array. Arrays are zero index, so the length is always the last index plus one. 
//The typeof operator returns a string indicating the type of the value. I am unsure why the return is number. 

