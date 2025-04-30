// function add(a, b) { // Simple function
//   return a + b;
// }
// console.log(add(2, 5))

// Async
// console.log("Code1")
// console.log("Code2")

// setTimeout(() => {
//   console.log("Inside timeout")
// }, 2000);

// console.log("The end")

// Callback Function
function add(a, b, cb) {
  let result = a + b;
  cb(result)
}
add(2, 5, function (val) {
  console.log(val)
});

const calculate = (a, b, operation) => {
  return operation(a, b)
}
const result = calculate(3, 4, function (num1, num2) {
  return num1 + num2;
})
console.log(result)










// Arrow Function
// const greet = (count) => {
//   for (let i = 0; i < count; i++) {
//     console.log("Arrow function");
//   }
// }
// // greet(3);

// const square = (num) => num * num;
// console.log(square(5))