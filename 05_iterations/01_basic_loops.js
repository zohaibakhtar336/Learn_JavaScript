// --------- Basic Loops in JavaScript ---------

// 1. For Loop - Runs a block of code for a specified number of times.
for (let i = 0; i < 5; i++) {
    console.log("Iteration:", i);
}
// Output: 0, 1, 2, 3, 4

// 2. While Loop - Runs a block of code while a condition is true.
let count = 0;
while (count < 3) {
    console.log("While Loop Count:", count);
    count++;
}
// Output: 0, 1, 2

// 3. Do-While Loop - Executes at least once, then repeats while the condition is true.
let num = 0;
do {
    console.log("Do-While Count:", num);
    num++;
} while (num < 3);
// Output: 0, 1, 2

// 4. For...Of Loop - Used for iterating over iterable objects like arrays and strings.
const arr = ["a", "b", "c"];
for (const value of arr) {
    console.log("For...Of Value:", value);
}
// Output: "a", "b", "c"

// 5. For...In Loop - Iterates over properties of an object (not recommended for arrays).
const obj = { name: "Zohaib", age: 22 };
for (const key in obj) {
    console.log("Key:", key, "Value:", obj[key]);
}
// Output: "name: Zohaib", "age: 22"

// 6. Break Statement - Exits the loop immediately.
for (let i = 0; i < 5; i++) {
    if (i === 3) break;
    console.log("Break Example:", i);
}
// Output: 0, 1, 2

// 7. Continue Statement - Skips the current iteration and moves to the next one.
for (let i = 0; i < 5; i++) {
    if (i === 2) continue;
    console.log("Continue Example:", i);
}
// Output: 0, 1, 3, 4

// ---------------- Interview Questions ----------------
// Q1: Difference between for and while loop?
// Ans: For loop is used when the number of iterations is known. While loop is used when the condition is evaluated dynamically.

// Q2: What is the difference between for...in and for...of?
// Ans: for...in iterates over object properties, for...of iterates over iterable values like arrays.

// Q3: What happens if a loop condition is always true?
// Ans: It results in an infinite loop, which should be avoided.

// Q4: What will be the output of the following?
for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1000);
}
// Output: 0, 1, 2 (after 1 sec due to closure in setTimeout)

// Q5: What is the purpose of break and continue?
// Ans: Break exits the loop immediately, continue skips the current iteration.

// Q6: What is the difference between do-while and while loop?
// Ans: do-while executes at least once, while loop checks the condition first.
