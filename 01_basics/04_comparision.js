// Basic comparisons
console.log(2 > 1);   // true
console.log(2 >= 1);  // true
console.log(2 < 1);   // false
console.log(2 == 1);  // false
console.log(2 != 1);  // true

// String vs Number comparison
console.log("2" > 1);   // true ("2" becomes 2)
console.log("02" > 1);  // true (same reason)

// Null comparisons
console.log(null > 0);   // false (null is 0 in comparisons)
console.log(null == 0);  // false (null only equals null & undefined)
console.log(null >= 0);  // true (null is 0)

// Undefined comparisons
console.log(undefined == 0);  // false (undefined ≠ anything)
console.log(undefined > 0);   // false 
console.log(undefined < 0);   // false 

// Strict check (checks type too)
console.log("2" === 2);  // false ("2" is string, 2 is number)
console.log("2" !== 2);  // true (not equal)
