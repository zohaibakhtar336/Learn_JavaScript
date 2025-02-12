/*+++++++++++++++ Numbers +++++++++++++++ */
 
const  score = 500;
console.log(score);


const balance = new Number(180);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNum = 100.356;
console.log(otherNum.toPrecision(2));

const hundreds = 10000000;
console.log(hundreds.toLocaleString()); // US standard
console.log(hundreds.toLocaleString('en-IN')); // IND standard  


/*+++++++++++++++ Maths +++++++++++++++ */

console.log(Math);

console.log(Math.abs(-4)); // -ve to +ve but not vice versa
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(9, 3, 2, 8));
// console.log(Math.max(9, 3, 2, 8));

console.log(Math.random()); // 0 to 1
console.log((Math.random()*10) + 1); // 1 to 10
console.log(Math.floor(Math.random()*10) + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // 10 to 20



// ********** JavaScript Numbers & Math Cheat Sheet **********

// Number Types
let intNum = 42; // Integer
let floatNum = 3.14; // Floating-point number
let expNum = 5e3; // Exponential notation (5000)
let hexNum = 0xff; // Hexadecimal (255)
let binNum = 0b1010; // Binary (10)
let octNum = 0o52; // Octal (42)

// Checking Number Type
console.log(typeof intNum); // "number"
console.log(Number.isInteger(floatNum)); // false
console.log(Number.isFinite(100)); // true
console.log(Number.isNaN(NaN)); // true

// Number Conversion
let strNum = "42";
console.log(Number(strNum)); // Convert string to number
console.log(parseInt("42.99")); // 42 (integer part only)
console.log(parseFloat("42.99")); // 42.99 (preserves decimal)

// Rounding Numbers
let num = 5.67;
console.log(Math.round(num)); // 6 (round to nearest)
console.log(Math.floor(num)); // 5 (round down)
console.log(Math.ceil(num)); // 6 (round up)
console.log(num.toFixed(2)); // "5.67" (fixed decimals)
console.log(num.toPrecision(3)); // "5.67" (total digits)

// Math Operations
console.log(2 + 3); // Addition
console.log(5 - 2); // Subtraction
console.log(4 * 3); // Multiplication
console.log(10 / 2); // Division
console.log(10 % 3); // Modulus (remainder)
console.log(2 ** 3); // Exponentiation (2^3 = 8)

// Math Methods
console.log(Math.abs(-10)); // 10 (absolute value)
console.log(Math.sqrt(25)); // 5 (square root)
console.log(Math.pow(2, 3)); // 8 (2^3)
console.log(Math.min(10, 5, 8)); // 5 (minimum value)
console.log(Math.max(10, 5, 8)); // 10 (maximum value)
console.log(Math.random()); // Random number (0 to 1)
console.log(Math.floor(Math.random() * 10) + 1); // Random 1-10

// Infinity & NaN
console.log(1 / 0); // Infinity
console.log(-1 / 0); // -Infinity
console.log(0 / 0); // NaN (Not a Number)

// Important for Interviews
// - Number conversions: Number(), parseInt(), parseFloat()
// - Rounding methods: round(), floor(), ceil(), toFixed()
// - Math functions: sqrt(), pow(), min(), max(), random()
// - Handling NaN & Infinity
