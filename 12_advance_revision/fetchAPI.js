// async function getData() {
//   let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//   let data = await x.json()
//   console.log(data)
//   return 455
// }

// async function main() {

//   console.log("Loading module");
//   console.log("Do something else");
//   console.log("Load data");

//   let data = await getData();
//   console.log(data);

//   console.log("Process data");
//   console.log("Task 2");

// }
// main()



// function api() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Weather Data");
//       resolve(200)
//     }, 3000)
//   })
// }

// async function getWeatherData() {
//   await api()
// }
// getWeatherData()



// API is getting from json placeholder
// async function getData() {
//   let response = await fetch('https://jsonplaceholder.typicode.com/posts')
//   let data = await response.json()
//   console.log(data)
// }
// getData()




let p = fetch("https://goweather.herokuapp.com/weather/Ny")
p.then((value1) => {
  console.log(value1.status)
  console.log(value1.ok)
  return value1.json()
}).then((value2) => {
  console.log(value2)
})













