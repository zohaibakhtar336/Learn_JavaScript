const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20



console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")



// ********** JavaScript Truthy & Falsy Values **********

// ✅ Falsy Values (Considered "false" in a boolean context)
// false, 0, -0, "", null, undefined, NaN

let falsyValues = [false, 0, -0, "", null, undefined, NaN];
falsyValues.forEach(value => console.log(`${value} is`, Boolean(value))); 
// Output: All values print "false"

// ✅ Truthy Values (Considered "true" in a boolean context)
// Everything that is NOT falsy, including:
// "0", "false", [], {}, function(){}

let truthyValues = ["0", "false", [], {}, function(){}];
truthyValues.forEach(value => console.log(`${value} is`, Boolean(value)));
// Output: All values print "true"

// ✅ Example: Checking for truthy/falsy values in a condition
let username = "";  // Empty string is falsy
if (username) {
    console.log("Valid username");
} else {
    console.log("Please enter a username");
}
// Output: Please enter a username

// ✅ Logical OR (||) to provide default value
let user = "" || "Guest";
console.log(user);  // Output: Guest

// ✅ Logical AND (&&) to check truthy values
let loggedIn = true;
loggedIn && console.log("User is logged in");  // Output: User is logged in

// ✅ Nullish Coalescing Operator (??) - Checks for null or undefined only
let name = null ?? "Default Name";
console.log(name);  // Output: Default Name

// ********** Important Interview Questions **********

// Q1: What are truthy and falsy values in JavaScript?
// ✅ Truthy values evaluate to true in a boolean context, while falsy values evaluate to false.

// Q2: What are the 7 falsy values in JavaScript?
// ✅ false, 0, -0, "", null, undefined, NaN

// Q3: Is "0" (string) truthy or falsy?
// ✅ "0" is a truthy value because it is a non-empty string.

// Q4: How to provide a default value when a variable might be falsy?
// ✅ Use the logical OR (||) or nullish coalescing (??) operator.

// Q5: What is the difference between || and ?? operators?
// ✅ || returns the first truthy value, while ?? only checks for null or undefined.
