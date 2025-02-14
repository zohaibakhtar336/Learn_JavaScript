// if
const isUserloggedIn = true
const temperature = 41

// if ( temperature === 40 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

// console.log("Execute");
// <, >, <=, >=, ==, !=, ===, !==

// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);


// const balance = 1000

// if (balance > 500) console.log("test"),console.log("test2");

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");

// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}



// ********** JavaScript Control Statements - Important **********

// ✅ if Statement (Executes a block of code if condition is true)
let age = 20;
if (age >= 18) {
    console.log("You are an adult.");
} 
// Output: You are an adult.

// ✅ if-else Statement (Executes either if or else block based on condition)
let score = 45;
if (score >= 50) {
    console.log("You passed!");
} else {
    console.log("You failed!");
}
// Output: You failed!

// ✅ if-else if-else Ladder (Multiple conditions checking)
let marks = 75;
if (marks >= 90) {
    console.log("Grade: A");
} else if (marks >= 75) {
    console.log("Grade: B");
} else {
    console.log("Grade: C");
}
// Output: Grade: B

// ✅ Ternary Operator (Short form of if-else)
let number = 10;
let result = (number % 2 === 0) ? "Even" : "Odd";
console.log(result);
// Output: Even

// ✅ break Statement (Terminates loop execution completely)
for (let i = 1; i <= 5; i++) {
    if (i === 3) break;
    console.log(i);
}
// Output: 1, 2

// ✅ continue Statement (Skips the current iteration and moves to the next one)
for (let i = 1; i <= 5; i++) {
    if (i === 3) continue;
    console.log(i);
}
// Output: 1, 2, 4, 5

// ✅ return Statement (Stops function execution and returns a value)
function checkNumber(num) {
    if (num > 0) return "Positive";
    return "Non-positive";
}
console.log(checkNumber(10));
// Output: Positive

// ********** Important Interview Questions **********

// Q1: What is the difference between == and ===?
console.log("5" == 5);  // true (loose comparison, type coercion happens)
console.log("5" === 5); // false (strict comparison, checks both value and type)

// Q2: What is the difference between break and continue?
// ✅ break exits the loop completely.
// ✅ continue skips the current iteration and moves to the next one.

// Q3: What is the use of the return statement?
// ✅ It stops function execution and returns a value.
// ✅ If no value is returned, the function returns undefined.

// Q4: How does the ternary operator work?
// ✅ It is a short-hand way of writing if-else statements.
// ✅ Syntax: condition ? "if true" : "if false";
let ageCheck = 20;
let status = (ageCheck >= 18) ? "Adult" : "Minor";
console.log(status);
// Output: Adult
