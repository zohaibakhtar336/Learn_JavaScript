// let promise = new promise((resolve, reject) => {
//   console.log("I am the promise");
//   resolve(123);
// })


// let myPromise = new Promise(function (resolve, reject) {
//   let isReady = true;

//   if (isReady) {
//     resolve("Yes, the task is done!");
//   } else {
//     reject("Oops, the task failed.");
//   }
// });

// myPromise
//   .then(function (result) {
//     console.log(result);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });



console.log("This is promises");

let prom1 = new Promise((resolve, reject) => {
  let a = Math.random();
  if (a < 0.5) {
    reject("No random number was supporting you")
  } else {
    setTimeout(() => {
      console.log("Yes I am done");
      resolve("zohaib");
    }, 2000)
  }
});

prom1.then((ele) => {
  console.log(ele);
}).catch((err) => {
  console.log(err)
});

