/* 1.  Prime Number

let num = 17;
let isPrime = true;
if (num <= 1) {
  isPrime = false;
} else {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }
}

if (isPrime) {
  console.log(`${num} is a Prime Number`);
} else {
  console.log(`${num} is NOT a Prime Number`);
}*/


/*  2. Fibonacci Series

let n = 10;
let a = 0;
let b = 1;
console.log("Fibonacci Series: ");

for (let i = 1; i <= n; i++) {
  console.log(a);
  let next = a + b;
  a = b;
  b = next;
}
  */


/* 3. Multiplication Table

let num = 10
console.log(`Multiplication Table of ${num}:`);
for (let i = 1; i <= 10; i++) {
  console.log(`${num} X ${i} = ${num * i}`);
}
*/


/* 4. Leap Year

let year = 2023;
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
  console.log(`${year} is a Leap Year`);
} else {
  console.log(`${year} is not a Leap Year`);
}
*/


/* 5. Sum of Natural Numbers

let n = 10;
let sum = 0;
for (let i = 1; i <= n; i++) {
  sum += i;
}
console.log(`Sum of first ${n} natural numbers is ${sum}`);
*/


/* 6. Factorial Series

let num = 5;
let fact = 1;
for (let i = 1; i <= num; i++) {
  fact *= i
}
console.log(`Factorial of ${num} is ${fact}`);
*/


/* 7. Find the Largest Number / Smallest Number in an Array 

let arr = [10, 52, 30, 89, 6]

let max = arr[0];
let min = arr[0];

// Largest no.
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}

// Smallest no.
for (let i = 1; i < arr.length; i++) {
  if (arr[i] < min) {
    min = arr[i];
  }
}
console.log(`Largest number is ${max}`);
console.log(`Smallest number is ${min}`);
*/


/* 8. Find the Day

let dateInput = new Date("2024-04-08");
let dayNumber = dateInput.getDay();

let dayName = "";

switch(dayNumber) {
  case 0:
    dayName = "Sunday";
    break;
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
    dayName = "Saturday";
    break;
  default:
    dayName = "Invalid day";
}

console.log(`The day is: ${dayName}`);
*/


/* 9. Arithmetic Operations
let a = 20, b = 5;

console.log(`Addition: ${a + b}`);
console.log(`Subtraction: ${a - b}`);
console.log(`Multiplication: ${a * b}`);
console.log(`Division: ${a / b}`);
console.log(`Modulus (Remainder): ${a % b}`);
*/


/* 10. Check Even or Odd
let num = 27;

if (num % 2 === 0) {
  console.log(`${num} is Even`);
} else {
  console.log(`${num} is Odd`);
}
*/


/* 11. Find the Largest Among Three Numbers 

let a = 12, b = 45, c = 3;
if (a >= b && b >= c) {
  console.log(`${a} is the largest`);
} else if (b >= a && b >= c) {
  console.log(`${b} is the largest`);
} else {
  console.log(`${c} is the largest`);
}
*/


/* 12. Find Grade Using Marks

let marks = 78;
if (marks >= 90) {
  console.log("Grade: A+");
} else if (marks >= 80) {
  console.log("Grade: A");
} else if (marks >= 70) {
  console.log("Grade: B");
} else if (marks >= 60) {
  console.log("Grade: C");
} else if (marks >= 50) {
  console.log("Grade: D");
} else {
  console.log("Grade: F (Fail)");
}
*/


/* 13. Sum of Even and Odd Numbers

let start = 1;
let end = 10;
let evenSum = 0;
let oddSum = 0;

for (let i = start; i <= end; i++) {
  if (i % 2 === 0) {
    evenSum += i;
  } else {
    oddSum += i;
  }
}

console.log(`Sum of Even Numbers: ${evenSum}`);
console.log(`Sum of Odd Numbers: ${oddSum}`);
*/


/* 14. Count Number of Digits in a Number

let num = 12356;
let count = 0;
while (num > 0) {
  num = Math.floor(num / 10);
  count++;
}
console.log(`Total digits: ${count}`);
*/


/* 15. Sum of even number and sum of odd numbers in given number

let num = 123456;
let evenSum = 0;
let oddSum = 0;

while (num > 0) {
  let digit = num % 10; // Extract last digit
  if (digit % 2 === 0) {
    evenSum += digit;
  } else {
    oddSum += digit;
  }
  num = Math.floor(num / 10); // Remove last digit
}

console.log(`Sum of Even Digits: ${evenSum}`);
console.log(`Sum of Odd Digits: ${oddSum}`);
*/


/* 16. Sum of Squares of Each Digit 

let num = 123;
let sum = 0;
while (num > 0) {
  let digit = num % 10;
  sum += digit * digit;
  num = Math.floor(num / 10);
}
console.log(`Sum of squares of digits: ${sum}`);
*/


/* 17. LCM of Two Numbers
let a = 12;
let b = 18;
let lcm = a > b ? a : b;

while (true) {
  if (lcm % a === 0 && lcm % b === 0) {
    console.log(`LCM of ${a} and ${b} is ${lcm}`);
    break;
  }
  lcm++;
}
*/


/* 18. HCF of Two Numbers
let a = 12;
let b = 18;

while (b !== 0) {
  let temp = b;
  b = a % b;
  a = temp;
}
console.log(`HCF is ${a}`);
*/


/* 19. Perfect Number

let num = 28;
let sum = 0;

for (let i = 1; i < num; i++) {
  if (num % i === 0) {
    sum += i;
  }
}

if (sum === num) {
  console.log(`${num} is a Perfect Number`);
} else {
  console.log(`${num} is NOT a Perfect Number`);
}
Perfect Number */

