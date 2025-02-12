// ******** TYPE CONVERSIONS ********

let score = "Akhtar";
let valueInNumber = Number(score); // Converts to number (NaN if not a valid number)
console.log(typeof valueInNumber, valueInNumber); // "number", NaN

// Examples:
// "33" => 33
// "33abc" => NaN
// true => 1, false => 0

let isLoggedIn = "hitesh";
let booleanIsLoggedIn = Boolean(isLoggedIn); // Non-empty string is true
console.log(booleanIsLoggedIn); // true

// Boolean conversions:
// 1 => true, 0 => false
// "" => false
// "Zohaib" => true (non-empty string is truthy)

let someNumber = 33;
let stringNumber = String(someNumber); // Converts number to string
console.log(typeof stringNumber, stringNumber); // "string", "33"

// ******** OPERATIONS ********

let value = 3;
let negValue = -value; // Negative of 3
console.log(negValue); // -3

// Basic math operations
console.log(2 + 2); // 4
console.log(2 - 2); // 0
console.log(2 * 2); // 4
console.log(2 ** 3); // 8 (2^3)
console.log(2 / 3); // 0.666...
console.log(2 % 3); // 2 (remainder)

// ******** STRING OPERATIONS ********

let str1 = "Hello";
let str2 = " Zohaib";
let str3 = str1 + str2; // Join strings
console.log(str3); // "hello Zohaib"

// Type coercion (automatic conversion)
console.log("1" + 2); // "12" (string)
console.log(1 + "2"); // "12" (string)
console.log("1" + 2 + 2); // "122" (string)
console.log(1 + 2 + "2"); // "32" (first 1+2=3, then string)

// Operator precedence
console.log((3 + 4) * 5 % 3); // 2

// ******** UNARY OPERATIONS ********

console.log(+true); // 1
console.log(+""); // 0

// ******** CHAINED ASSIGNMENTS ********

let num1, num2, num3;
num1 = num2 = num3 = 2 + 2; // All = 4
console.log(num1, num2, num3); // 4, 4, 4

// ******** INCREMENT OPERATION ********

let Counter = 100;
++Counter; // Increases by 1
console.log(Counter); // 101
