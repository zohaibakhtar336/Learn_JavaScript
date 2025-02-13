const user = {
    username: "zohaib",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "zubair";
// user.welcomeMessage()
// console.log(this);



// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "zohaib"
//     console.log(this.username);
// }

const chai = () => {
    let username = "zohaib"
    console.log(this);
}
// chai()

const sum = (a, b) => {
    return a + b;
}
console.log(sum(5, 2));


const sub = (a, b) => a - b
console.log(sub(5, 2));

const mul = (a, b) => (a * b)
console.log(mul(5, 2));




// ********** JavaScript Arrow Functions - Complete Guide **********

// ✅ What is an Arrow Function?
// - Arrow functions provide a concise way to write functions in JavaScript.
// - Introduced in ES6, they automatically bind 'this' to the surrounding scope.
// - Used for cleaner and more readable code.

// ********** Basic Syntax **********
const greet = () => {
    console.log("Hello, World!");
};
greet(); // Output: Hello, World!

// ********** Arrow Function with Parameters **********
const add = (a, b) => {
    return a + b;
};
console.log(add(5, 3)); // Output: 8

// ✅ Implicit Return (No curly braces needed for single expressions)
const multiply = (a, b) => a * b;
console.log(multiply(4, 2)); // Output: 8

// ✅ Single Parameter Arrow Function (No parentheses needed)
const square = x => x * x;
console.log(square(5)); // Output: 25

// ********** Arrow Functions & 'this' Keyword **********
// Arrow functions do not have their own 'this', they inherit from the parent scope.
const person = {
    name: "Zohaib",
    greet: function () {
        setTimeout(() => {
            console.log(`Hello, my name is ${this.name}`);
        }, 1000);
    }
};
person.greet(); // Output: Hello, my name is Zohaib

// ✅ Incorrect use of 'this' in Arrow Function
const user2 = {
    name: "Zohaib",
    greet: () => {
        console.log(`Hello, my name is ${this.name}`); // Undefined (inherits from global scope)
    }
};
user.greet(); // Output: Hello, my name is undefined

// Using Arrow Functions in Array Methods
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // Output: [2, 4, 6, 8, 10]

// Filtering an Array
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // Output: [2, 4]

// Sorting an Array
const sorted = numbers.sort((a, b) => b - a);
console.log(sorted); // Output: [5, 4, 3, 2, 1]

// Finding an Element in an Array
const found = numbers.find(num => num > 3);
console.log(found); // Output: 4

// ********** Important Interview Questions **********

// Q1: What is an arrow function in JavaScript?
// ✅ Arrow functions are a shorter syntax for writing functions, introduced in ES6.
// ✅ They inherit 'this' from their surrounding scope (lexical this).

// Q2: How are arrow functions different from regular functions?
// ✅ Arrow functions do not have their own 'this'.
// ✅ They cannot be used as constructors.
// ✅ They have an implicit return when used with a single expression.

// Q3: When should you avoid using arrow functions?
// ❌ When defining object methods (as 'this' won't refer to the object itself).
// ❌ When defining constructor functions (arrow functions cannot be used with 'new').
// ❌ When you need dynamic 'this' binding (e.g., event listeners in some cases).

// Q4: How does 'this' behave in arrow functions?
// ✅ Arrow functions inherit 'this' from their surrounding scope.
// ✅ Useful in callback functions where maintaining 'this' context is important.

// ********** End of Cheat Sheet **********
