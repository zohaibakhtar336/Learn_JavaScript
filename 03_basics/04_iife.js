// ********** JavaScript Immediately Invoked Function Expressions (IIFE) - A to Z Guide **********

// ✅ What is an IIFE?
// - An Immediately Invoked Function Expression (IIFE) is a function that executes immediately after its definition.
// - It is used to create a private scope and avoid polluting the global namespace.
// - Commonly used in JavaScript to maintain data privacy and modularity.

// ********** Basic Syntax **********
(function () {
    console.log("IIFE executed immediately!");
})();
// Output: IIFE executed immediately!

// ✅ IIFE with Arrow Function
(() => {
    console.log("Arrow function IIFE executed!");
})();
// Output: Arrow function IIFE executed!

// ✅ IIFE with Parameters
(function (name) {
    console.log(`Hello, ${name}!`);
})("Zohaib");
// Output: Hello, Zohaib!

// ✅ IIFE with Return Value
const result = (function (a, b) {
    return a + b;
})(5, 3);
console.log(result); // Output: 8

// ✅ Named IIFE
(function myIIFE() {
    console.log("Named IIFE executed!");
})();
// Output: Named IIFE executed!

// ********** Use Cases of IIFE **********

// ✅ Avoiding Global Scope Pollution
(function () {
    let message = "This is a private variable";
    console.log(message);
})();
// console.log(message); // ❌ Error: message is not defined

// ✅ Creating a Private Scope
const counter = (function () {
    let count = 0;
    return {
        increment: function () {
            count++;
            console.log(count);
        },
        decrement: function () {
            count--;
            console.log(count);
        }
    };
})();
counter.increment(); // Output: 1
counter.increment(); // Output: 2
counter.decrement(); // Output: 1

// ✅ Using IIFE in Asynchronous Operations
(async function () {
    console.log("Fetching data...");
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log("Data fetched!");
})();
// Output:
// Fetching data...
// (after 2 seconds) Data fetched!

// ********** Important Interview Questions **********

// Q1: What is an IIFE in JavaScript?
// ✅ An IIFE is a function that runs immediately after being defined.
// ✅ It helps to create a private scope and avoid global variable conflicts.

// Q2: Why use an IIFE?
// ✅ To encapsulate variables and prevent accidental modifications.
// ✅ To execute code immediately without waiting for an event.
// ✅ To create a module-like structure.

// Q3: What is the syntax of an IIFE?
// ✅ Standard Syntax: (function () { /* code */ })();
// ✅ Arrow Function Syntax: (() => { /* code */ })();

// Q4: How can you pass arguments to an IIFE?
// ✅ By providing arguments inside the parentheses.
// Example: (function(name) { console.log(name); })("Zohaib");

// Q5: What is the difference between an IIFE and a normal function?
// ✅ IIFE runs immediately, whereas normal functions require an explicit call.
// ✅ IIFE helps create a private scope, while normal functions remain in the global scope.

// Q6: Can an IIFE return a value?
// ✅ Yes, it can return values just like regular functions.
// Example: const sum = (function(a, b) { return a + b; })(4, 5); console.log(sum); // Output: 9

// Q7: Can IIFE be async?
// ✅ Yes, using async/await syntax.
// Example: (async function() { await fetchData(); })();

// ********** End of Cheat Sheet **********
