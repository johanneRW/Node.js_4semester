// --------------------------------------
// Exercise 3 - Add numbers from string to float

const numberOne = "1.10";
const numberTwo = "2.30";

// add those two numbers and show the result
// you cannot touch line 1 neither line 2
const result=Number(numberOne)+Number(numberTwo)

console.log(result)

// --------------------------------------


// --------------------------------------
// Exercise 4 - Add the numbers and the total with 2 decimals

const anotherNumberOne = "1.10";
const anotherNumberTwo = "2.30";

const resultOne=Number(anotherNumberOne)+Number(anotherNumberTwo)
const resultDeci=resultOne.toFixed(2)

console.log(resultDeci)

// --------------------------------------
// Exercise 5 - Decimals and average

const one = 10;
const two = 45;
const three = 98;

const avgNumber=(one + two + three)/3

console.log(avgNumber.toFixed(5))
// Show in the console the avg. with 5 decimals





// --------------------------------------
// Exercise 6 - Get the character by index

const letters = "abc";
// Get me the character "c"

const char=letters.charAt(2)

console.log(char)

// --------------------------------------
// Exercise 7 - Replace

const fact = "You are learning javascript!";

// capitalize the J in Javascript
const factWhitUpperJ=fact.replace("j","J")
console.log(factWhitUpperJ)
// --------------------------------------



