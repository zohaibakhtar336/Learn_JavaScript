// Primitive Data Types
let name = "Zohaib";    // String
let age = 22;           // Number
let isStudent = true;   // Boolean
let value = null;       // Null
let city;               // Undefined
let bigNumber = 12345678901234567890n; // BigInt
let uniqueId = Symbol("id"); // Symbol

// Non-Primitive (Reference) Data Types
let person = { name: "Zohaib", age: 22 }; // Object
let numbers = [1, 2, 3, 4]; // Array (special type of object)
function greet() { console.log("Hello!"); } // Function

console.log(typeof name, typeof age, typeof isStudent, typeof value, typeof city, typeof bigNumber, typeof uniqueId);
console.log(typeof person, typeof numbers, typeof greet);
