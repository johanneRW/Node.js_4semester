const { default: collect } = require("collect.js"); //import of collect.js for exercice 5

// --------------------------------------
// Exercise 3 - Add numbers from string to float

const numberOne = "1.10";
const numberTwo = "2.30";

// add those two numbers and show the result
// you cannot touch line 1 neither line 2

const result = Number(numberOne) + Number(numberTwo)

console.log(result)

// --------------------------------------


// --------------------------------------
// Exercise 4 - Add the numbers and the total with 2 decimals

const anotherNumberOne = "1.10";
const anotherNumberTwo = "2.30";

const anotherResult = Number(anotherNumberOne) + Number(anotherNumberTwo)
const anotherResultWhit2Decimals = anotherResult.toFixed(2)

console.log(anotherResultWhit2Decimals)

// --------------------------------------
// Exercise 5 - Decimals and average

const one = 10;
const two = 45;
const three = 98;

// Show in the console the avg. with 5 decimals

//const avergeNumber=(one + two + three)/3 //alternative solution 
const average = collect([one, two, three]).avg()
const averageWhitFiveDecimals = average.toFixed(5)

console.log(averageWhitFiveDecimals)


// --------------------------------------
// Exercise 6 - Get the character by index

const letters = "abc";
// Get me the character "c"

const char = letters.charAt(2)

console.log(char)

// --------------------------------------
// Exercise 7 - Replace

const fact = "You are learning javascript!";

// capitalize the J in Javascript

const capitalizedFact = fact.replace("j", "J")

console.log(capitalizedFact)
// --------------------------------------



