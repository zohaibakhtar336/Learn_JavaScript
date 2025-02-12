// ********** JavaScript String Cheat Sheet **********

// Creating Strings
let singleQuote = 'Hello'; // Single quote
let doubleQuote = "World"; // Double quote
let templateLiteral = `Hello, ${doubleQuote}!`; // Template literal
console.log(templateLiteral); // "Hello, World!"

// String Properties
let text = "JavaScript";
console.log(text.length); // Length of string
console.log(text[0]); // First character
console.log(text.charAt(4)); // Specific character
console.log(text[text.length - 1]); // Last character

// String Methods
let str = "  Hello JavaScript  ";
console.log(str.toUpperCase()); // Uppercase
console.log(str.toLowerCase()); // Lowercase
console.log(str.trim()); // Remove spaces

// Searching in Strings
console.log(str.indexOf("JavaScript")); // Position of substring
console.log(str.includes("Hello")); // Check if substring exists
console.log(str.startsWith("  H")); // Starts with
console.log(str.endsWith("  ")); // Ends with

// Extracting Substrings
console.log(str.slice(2, 7)); // Extract part of string
console.log(str.substring(2, 7)); // Another way to extract
console.log(str.substr(2, 5)); // Older method (use slice/substring)

// Replacing Text
let message = "JavaScript is easy";
console.log(message.replace("easy", "powerful")); // Replace words

// Splitting a String
let csv = "HTML,CSS,JavaScript,React";
console.log(csv.split(",")); // Convert string to array

// String Concatenation
let first = "Hello";
let second = "World";
console.log(first + " " + second); // Using + operator
console.log(`${first} ${second}`); // Using template literals

// Escape Characters
console.log("He said, \"JavaScript is awesome!\""); // Escape quotes
console.log("Line 1\nLine 2"); // New line
console.log("Tab\tSpace"); // Tab space
console.log("Backslash \\"); // Backslash

// String Immutability
let immutableStr = "Hello";
immutableStr[0] = "J"; // No effect
console.log(immutableStr); // "Hello"

// Comparing Strings
console.log("apple" === "apple"); // True (same string)
console.log("Apple" === "apple"); // False (case-sensitive)
console.log("banana" > "apple"); // True (Alphabetical order)

// Important for Interviews
// - String properties: length, charAt
// - Useful methods: trim, toUpperCase, toLowerCase
// - Searching: indexOf, includes
// - Modifying: slice, replace, split
// - Concatenation: + operator, template literals
// - Escape characters: \n, \t, \\
// - String immutability
// - Case-sensitive comparison
