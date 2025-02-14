// --------- Advanced Loops in JavaScript ---------

// 1. forEach() - Iterates over an array but doesn't return anything.
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((num, index) => {
    console.log(`Index: ${index}, Value: ${num}`);
});
// Output:
// Index: 0, Value: 1
// Index: 1, Value: 2
// Index: 2, Value: 3
// Index: 3, Value: 4
// Index: 4, Value: 5

// Interview Tip: forEach cannot break out of the loop using 'break' or 'continue'.

// 2. map() - Returns a new array after applying a function.
const squaredNumbers = numbers.map(num => num ** 2);
console.log(squaredNumbers); // [1, 4, 9, 16, 25]

// 3. filter() - Filters elements based on a condition.
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4]

// 4. reduce() - Accumulates values into a single result.
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 15

// 5. find() - Returns the first element that satisfies a condition.
const firstEven = numbers.find(num => num % 2 === 0);
console.log(firstEven); // 2

// 6. some() - Checks if at least one element satisfies a condition.
const hasNegative = numbers.some(num => num < 0);
console.log(hasNegative); // false

// 7. every() - Checks if all elements satisfy a condition.
const allPositive = numbers.every(num => num > 0);
console.log(allPositive); // true

// 8. flatMap() - Maps and flattens an array.
const nestedArray = [[1, 2], [3, 4], [5, 6]];
const flatMapped = nestedArray.flatMap(arr => arr);
console.log(flatMapped); // [1, 2, 3, 4, 5, 6]

// 9. for...of - Used for iterating over iterable objects (like arrays, strings).
for (const num of numbers) {
    console.log(num);
}

// 10. for...in - Iterates over object keys (not recommended for arrays).
const obj = { a: 1, b: 2, c: 3 };
for (const key in obj) {
    console.log(`${key}: ${obj[key]}`);
}

// 11. entries(), keys(), values() - Used to iterate over objects
const people = { Zohaib: 22, Akash: 25, Sana: 20 };
console.log(Object.entries(people)); // [['Zohaib', 22], ['Akash', 25], ['Sana', 20]]
console.log(Object.keys(people)); // ['Zohaib', 'Akash', 'Sana']
console.log(Object.values(people)); // [22, 25, 20]

// 12. Object.entries() with forEach - Iterating over objects easily
Object.entries(people).forEach(([key, value]) => {
    console.log(`${key} is ${value} years old`);
});

// 13. Using reduce to flatten an array
const complexArray = [[1, 2], [3, [4, 5]], 6];
const flattened = complexArray.reduce((acc, val) => acc.concat(val), []);
console.log(flattened); // [1, 2, 3, [4, 5], 6]

// 14. Chaining map(), filter(), and reduce()
const chainedResult = numbers
  .map(num => num * 2)
  .filter(num => num > 5)
  .reduce((acc, num) => acc + num, 0);
console.log(chainedResult); // 18

// ---------------- Interview Questions ----------------
// Q1: Difference between forEach and map?
// Ans: forEach doesn't return a new array, map does.

// Q2: When to use reduce over map?
// Ans: When you need a single accumulated result (sum, average, etc.).

// Q3: What’s the difference between find and filter?
// Ans: find returns the first matching element, filter returns all matching elements.

// Q4: What is the output of the following?
console.log([1, 2, 3, 4].map(num => num > 2)); 
// Output: [false, false, true, true]

// Q5: Why should you avoid using for...in with arrays?
// Ans: for...in iterates over all enumerable properties, including prototype properties.

// Q6: What’s the difference between Object.entries(), Object.keys(), and Object.values()?
// Ans: 
// - Object.entries() returns key-value pairs.
// - Object.keys() returns only keys.
// - Object.values() returns only values.

// Q7: What is the output of this reduce function?
console.log([1, 2, 3, 4].reduce((acc, num) => acc + num, 5));
// Output: 15
