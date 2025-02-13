// function sayMyName() {
//     console.log("Z");
//     console.log("O");
//     console.log("H");
//     console.log("A");
//     console.log("I");
//     console.log("B");
// }
// sayMyName();

// function add(num1, num2) {  //(num1, num2) --> Parameter
//     console.log(num1 + num2);
// }
// add(5, 5); // 10
// add(5, "5"); // 55
// add(5, "a"); // 5a
// add(5, null); //5 //(5, null) --> Argument
// const res = add(5, 6); // 11
// console.log("Result: ", res); // undefined

// function add(a, b) {
//     let res = a + b;
//     return res;
// }
// const res = add(10, 7);
// console.log("Result: ", res);

function sub(a, b) {
    return a - b;
}
const res = sub(10, 7);
console.log("Result: ", res);


function loginUserMsg(userName) {
    return `${userName} just logged in`
}

// const log = loginUserMsg("Zohaib");
// console.log(log);
console.log(loginUserMsg("Zohaib"));
console.log(loginUserMsg()); //undefined

// Empty string, undefined is always false value

// function calcPrice(...price){ // .... rest
//     return price
// }

// console.log(calcPrice (200, 400, 600, 80));  // [200, 400, 600, 800]

function calcPrice(val1, val2, ...price) { // val1 = 200, val2 = 400
    return price
}

console.log(calcPrice(200, 400, 600, 800)); // [600, 800]

const user = {
    name: "Zohaib",
    age: 22
}


function handleObject(anyObject) {
    console.log(`username is ${anyObject.name} and age is ${anyObject.age}`);
}

// handleObject(user);
handleObject({
    name: "Akhtar",
    age: "33"
})


const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));




// ********** JavaScript Functions Cheat Sheet **********

// Function Declaration (Standard way to define a function)
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Zohaib")); // Output: Hello, Zohaib!

// Function Expression (Storing function in a variable)
const add = function(a, b) {
    return a + b;
};
console.log(add(5, 3)); // Output: 8

// Default Parameters (Providing default values for function arguments)
function greetUser(name = "Guest") {
    return `Welcome, ${name}!`;
}
console.log(greetUser()); // Output: Welcome, Guest!
console.log(greetUser("Zohaib")); // Output: Welcome, Zohaib!

// Rest Parameters (Handling multiple arguments as an array)
function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sum(1, 2, 3, 4)); // Output: 10

// Callback Function (Passing a function as an argument to another function)
function processUserInput(callback) {
    let name = "Zohaib";
    callback(name);
}
processUserInput(function(name) {
    console.log(`Hello, ${name}!`);
}); // Output: Hello, Zohaib!

// Immediately Invoked Function Expression (IIFE - Executes immediately after definition)
(function() {
    console.log("This runs immediately!");
})(); // Output: This runs immediately!

// Higher-Order Function (Function that returns another function)
function createMultiplier(factor) {
    return function(num) {
        return num * factor;
    };
}
const double = createMultiplier(2);
console.log(double(5)); // Output: 10

// Closures (Function remembers its lexical scope even after execution)
function counter() {
    let count = 0;
    return function() {
        count++;
        console.log(count);
    };
}
const increment = counter();
increment(); // Output: 1
increment(); // Output: 2

// Function Currying (Breaking down functions into multiple functions each taking a single argument)
function multiplyCurried(a) {
    return function(b) {
        return a * b;
    };
}
console.log(multiplyCurried(3)(4)); // Output: 12

// Function Composition (Combining multiple functions for a single result)
function addFive(num) {
    return num + 5;
}
function square(num) {
    return num * num;
}
function composedFunction(num) {
    return square(addFive(num));
}
console.log(composedFunction(2)); // Output: 49

// ********** Important Interview Concepts **********

// Pure Function (Always produces the same output for the same input, with no side effects)
function pureFunction(a, b) {
    return a + b;
}
console.log(pureFunction(2, 3)); // Output: 5 (Same output for same input)

// First-Class Function (Functions treated as values and can be assigned to variables)
function firstClassFunction(func) {
    return func(10);
}
console.log(firstClassFunction(function(x) { return x * 2; })); // Output: 20

// Debouncing (Limits function execution by delaying execution after the last event)
function debounce(func, delay) {
    let timer;
    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => func(...args), delay);
    };
}
const logMessage = debounce(() => console.log("Debounced!"), 1000);
logMessage();

// Throttling (Limits the number of function calls within a time period)
function throttle(func, limit) {
    let lastFunc;
    let lastRan;
    return function(...args) {
        if (!lastRan) {
            func(...args);
            lastRan = Date.now();
        } else {
            clearTimeout(lastFunc);
            lastFunc = setTimeout(() => {
                if (Date.now() - lastRan >= limit) {
                    func(...args);
                    lastRan = Date.now();
                }
            }, limit - (Date.now() - lastRan));
        }
    };
}
const throttledLog = throttle(() => console.log("Throttled!"), 1000);
throttledLog();

// Recursive Function (A function that calls itself)
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5)); // Output: 120

// Memoization (Optimization technique to cache previous results)
function memoize(fn) {
    let cache = {};
    return function(...args) {
        let key = JSON.stringify(args);
        if (!cache[key]) {
            cache[key] = fn(...args);
        }
        return cache[key];
    };
}
const memoizedFactorial = memoize(factorial);
console.log(memoizedFactorial(5)); // Output: 120

// ********** End of Cheat Sheet **********
