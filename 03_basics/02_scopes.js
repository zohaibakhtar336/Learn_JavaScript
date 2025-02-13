// JavaScript Variables: var, let, const

// VAR: Function-scoped, redeclarable, reassignable
var x = 10;
console.log(x); // 10
var x = 20;
console.log(x); // 20

// LET: Block-scoped, reassignable, not redeclarable
let y = 30;
console.log(y); // 30
y = 40;
console.log(y); // 40

// CONST: Block-scoped, not reassignable or redeclarable
const z = 50;
console.log(z); // 50







function one() {
    const username = "zohaib"

    function two() {
        const website = "youtube"
        console.log(username);
    }
   // console.log(website); // website is not accessible bcoz website is outside from the functio two()
    two()
}
// one()



if (true) {
    const username = "akhtar"
    if (username === "akhtar") {
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);

// ++++++++++++++++++++++ interesting +++++++++++++++++++++


console.log(addone(5))

function addone(num) {
    return num + 1
}



addTwo(5)
const addTwo = function (num) {
    return num + 2
}



// ********** JavaScript Scopes Cheat Sheet **********

// Global Scope (Accessible anywhere in the code)
let globalVar = "I am global";
function globalScopeExample() {
    console.log(globalVar);
}
globalScopeExample(); // Output: I am global

// Local/Function Scope (Accessible only inside the function)
function localScopeExample() {
    let localVar = "I am local";
    console.log(localVar);
}
localScopeExample(); // Output: I am local
// console.log(localVar); // Error: localVar is not defined

// Block Scope (Variables declared with let and const are block-scoped)
if (true) {
    let blockVar = "I am block scoped";
    console.log(blockVar); // Output: I am block scoped
}
// console.log(blockVar); // Error: blockVar is not defined

// Var Scope (Var is function-scoped, not block-scoped)
if (true) {
    var varScoped = "I am function scoped";
}
console.log(varScoped); // Output: I am function scoped (var leaks outside block)

// Lexical Scope (Inner function can access outer function variables)
function outerFunction() {
    let outerVar = "I am outer";
    function innerFunction() {
        console.log(outerVar);
    }
    innerFunction();
}
outerFunction(); // Output: I am outer

// Closure (Function remembers the scope in which it was created)
function closureExample() {
    let count = 0;
    return function () {
        count++;
        console.log(count);
    };
}
const increment = closureExample();
increment(); // Output: 1
increment(); // Output: 2

// Hoisting (Functions and var declarations are hoisted to the top)
console.log(hoistedVar); // Output: undefined (var is hoisted but not assigned)
var hoistedVar = "I am hoisted";

hoistedFunction(); // Output: I am hoisted function (function declarations are fully hoisted)
function hoistedFunction() {
    console.log("I am hoisted function");
}

// let and const are not hoisted like var (They are in the temporal dead zone)
// console.log(notHoisted); // Error: Cannot access 'notHoisted' before initialization
let notHoisted = "I am not hoisted";

// ********** Important Interview Concepts **********

// Q1: Difference between var, let, and const?
// var: Function-scoped, hoisted, allows reassignment, can be redeclared.
// let: Block-scoped, not hoisted like var, allows reassignment.
// const: Block-scoped, cannot be reassigned or redeclared.

// Q2: What is closure in JavaScript?
// Closure is when a function remembers and accesses variables from its outer scope even after the outer function has executed.

// Q3: What is the difference between function scope and block scope?
// Function scope: Variables declared with var are accessible within the entire function.
// Block scope: Variables declared with let and const are only accessible inside the block.

// Q4: Explain lexical scope in JavaScript.
// Lexical scope means a function can access variables from its parent scope where it was originally defined.

// Q5: What is hoisting in JavaScript?
// Hoisting is a JavaScript mechanism where function and variable declarations are moved to the top before execution.

// ********** End of Cheat Sheet **********
