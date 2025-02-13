/* 
const myArray = [1, 2, 3, 4, 5];
// console.log(myArray[3]); // 4

const myArray2 = new Array(1, 2, 3, 4, 5);
// console.log(myArray2[3]); // 4

myArray.push(6);
myArray.push(7);
myArray.push(8);
myArray.pop();
// console.log(myArray); // [1, 2, 3, 4, 5, 6, 7, 8]


myArray.unshift(0); // [0, 1, 2, 3, 4, 5]
myArray.unshift(8); // [8, 0, 1, 2, 3, 4, 5]
myArray.shift(); // [0, 1, 2, 3, 4, 5]

// console.log(myArray.includes(3)); // true


const newArray = myArray.join()
console.log(myArray); // [1, 2, 3, 4, 5] -->
console.log(newArray); // 1,2,3,4,5 --> I am using typeof it will return string


// Slice and splice
console.log("A ", myArray);
const myn1 = myArray.slice(1, 3);
console.log(myn1); // [2, 3]
console.log("B ", myArray); // [1, 2, 3, 4, 5]

const myn2 = myArray.splice(1, 3);
console.log("C ", myArray); // [1, 5]
console.log(myn2); // [2, 3, 4]

*/


const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const allHeros = [...marvel_heros, ...dc_heros];
// console.log(allHeros);


const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const realAnotherArray = anotherArray.flat(Infinity)
console.log(realAnotherArray);


console.log(Array.isArray("zohaib"))
console.log(Array.from("zohaib"))
console.log(Array.from({name: "zohaib"})) // Interesting for array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));



// ********** JavaScript Arrays Cheat Sheet **********

// Creating Arrays
let fruits = ["Apple", "Banana", "Mango"]; // Simple array
let numbers = new Array(1, 2, 3, 4, 5); // Using constructor
let mixedArray = ["Hello", 42, true, { key: "value" }, [1, 2, 3]]; // Mixed data types

// Accessing Elements
console.log(fruits[0]); // First element
console.log(fruits[fruits.length - 1]); // Last element

// Modifying Elements
fruits[1] = "Orange"; // Change value
console.log(fruits);

// Adding & Removing Elements
fruits.push("Grapes"); // Add to end
fruits.unshift("Pineapple"); // Add to start
console.log(fruits);

fruits.pop(); // Remove last
fruits.shift(); // Remove first
console.log(fruits);

// Finding Elements
console.log(fruits.indexOf("Mango")); // Find index
console.log(fruits.includes("Banana")); // Check existence

// Iterating Through Arrays
fruits.forEach(fruit => console.log(fruit)); // Using forEach

// Transforming Arrays
let upperCaseFruits = fruits.map(fruit => fruit.toUpperCase()); // Convert to uppercase
console.log(upperCaseFruits);

// Filtering Arrays
let filteredFruits = fruits.filter(fruit => fruit.length > 5); // Keep elements with length > 5
console.log(filteredFruits);

// Sorting & Reversing
fruits.sort(); // Sort alphabetically
console.log(fruits);
fruits.reverse(); // Reverse order
console.log(fruits);

// Combining & Slicing Arrays
let moreFruits = ["Peach", "Cherry"];
let allFruits = fruits.concat(moreFruits); // Merge arrays
console.log(allFruits);

console.log(fruits.slice(1, 3)); // Extract portion

// Splicing (Adding/Removing at Specific Position)
fruits.splice(1, 1, "Strawberry", "Blueberry"); // Replace 1 element at index 1
console.log(fruits);

// Reducing an Array
let numbersArr = [10, 20, 30, 40];
let sum = numbersArr.reduce((acc, num) => acc + num, 0); // Sum of numbers
console.log(sum);

// ******************* Important for Interviews *******************

// Using `map`, `filter`, and `reduce`
console.log("Interview - Using map (length of each fruit):", fruits.map(fruit => fruit.length));
console.log("Interview - Using filter (numbers > 20):", numbersArr.filter(num => num > 20));
console.log("Interview - Using reduce (product of numbers):", numbersArr.reduce((acc, num) => acc * num, 1));

// Finding max/min in an array
console.log("Interview - Max Value:", Math.max(...numbersArr));
console.log("Interview - Min Value:", Math.min(...numbersArr));

// Removing duplicates from an array
let duplicateArray = [1, 2, 2, 3, 4, 4, 5];
let uniqueArray = [...new Set(duplicateArray)];
console.log("Interview - Unique Values:", uniqueArray);

// Checking if all elements satisfy a condition
console.log("Interview - All numbers > 5:", numbersArr.every(num => num > 5));

// Checking if at least one element satisfies a condition
console.log("Interview - At least one number > 30:", numbersArr.some(num => num > 30));

// Finding an element using `find`
console.log("Interview - First number > 25:", numbersArr.find(num => num > 25));

// Flattening a nested array
let nestedArray = [1, [2, 3], [4, [5, 6]]];
console.log("Interview - Flattened Array:", nestedArray.flat(2));

// Shallow copy using spread operator
let copiedArray = [...fruits];
console.log("Interview - Copied Array:", copiedArray);
