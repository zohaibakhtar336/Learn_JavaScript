const promiseOne = new Promise(function (resolve, reject) {
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function () {
        console.log("Async task is compelete");
        resolve()
    }, 1000)
})

promiseOne.then(function () {
    console.log("Promise consumed");
})

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function () {
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "zohaib", email: "zohaib@example.com" })
    }, 1000)
})

promiseThree.then(function (user) {
    console.log(user);
})

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ username: "zohaib", password: "12345" })
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

promiseFour
    .then((user) => {
        console.log(user);
        return user.username
    }).then((username) => {
        console.log(username);
    }).catch(function (error) {
        console.log(error);
    }).finally(() => console.log("The promise is either resolved or rejected"))



const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ username: "javascript", password: "12345" })
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => console.log(error))



// **JavaScript Promises Cheat Sheet with Interview Q&A**

// **1. What is a Promise?**
// A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation.
// It has three states:
// - Pending: Initial state, not yet resolved or rejected.
// - Fulfilled: Operation completed successfully.
// - Rejected: Operation failed.

// **Interview Question: What are the states of a Promise?**
// Answer: The three states of a Promise are Pending, Fulfilled, and Rejected.

// **2. Creating a Promise**
const myPromise = new Promise((resolve, reject) => {
    let success = true; // Change this to false to see rejection
    setTimeout(() => {
        if (success) {
            resolve("Promise resolved successfully!");
        } else {
            reject("Promise rejected!");
        }
    }, 2000);
});

// **3. Handling a Promise with .then() and .catch()**
myPromise
    .then(response => console.log("Success:", response))
    .catch(error => console.log("Error:", error));

// **Interview Question: What is the difference between .then() and .catch()?**
// Answer: .then() handles resolved Promises, whereas .catch() handles rejected Promises.

// **4. Promise Chaining**
new Promise((resolve) => resolve(10))
    .then(num => num * 2)
    .then(num => num + 5)
    .then(num => console.log("Final Result:", num))
    .catch(error => console.log("Error:", error));

// **Interview Question: What is Promise Chaining?**
// Answer: Promise chaining allows multiple .then() calls to execute sequentially.

// **5. Using Promise.all()**
const p1 = Promise.resolve("One");
const p2 = new Promise((resolve) => setTimeout(() => resolve("Two"), 1000));
const p3 = new Promise((resolve, reject) => setTimeout(() => reject("Three failed"), 2000));

Promise.all([p1, p2])
    .then(values => console.log("All resolved:", values))
    .catch(error => console.log("One promise failed:", error));

// **Interview Question: What happens if one promise in Promise.all() fails?**
// Answer: The entire Promise.all() operation fails and moves to the .catch() block.

// **6. Using Promise.race()**
Promise.race([p1, p2, p3])
    .then(result => console.log("Race Winner:", result))
    .catch(error => console.log("Race Failed:", error));

// **Interview Question: What is the difference between Promise.all() and Promise.race()?**
// Answer: Promise.all() waits for all Promises, while Promise.race() resolves/rejects as soon as one Promise settles.

// **7. Using Promise.allSettled()**
Promise.allSettled([p1, p2, p3])
    .then(results => console.log("All Settled:", results));

// **Interview Question: When should we use Promise.allSettled()?**
// Answer: Use Promise.allSettled() when you want results of all promises, whether they resolve or reject.

// **8. Using Promise.any()**
Promise.any([p3, p2, p1])
    .then(result => console.log("Any Resolved:", result))
    .catch(error => console.log("All Rejected:", error));

// **Interview Question: What is Promise.any() used for?**
// Answer: It returns the first fulfilled Promise or fails if all are rejected.

// **9. Async/Await (Syntactic Sugar for Promises)**
async function fetchData() {
    try {
        let data = await myPromise;
        console.log("Fetched Data:", data);
    } catch (error) {
        console.log("Error:", error);
    }
}
fetchData();

// **Interview Question: Why use async/await instead of .then()?**
// Answer: async/await makes the code cleaner and more readable than .then() chaining.

// **10. Error Handling with Async/Await**
async function getData() {
    try {
        let result = await new Promise((resolve, reject) => setTimeout(() => reject("Error occurred!"), 1000));
        console.log(result);
    } catch (error) {
        console.log("Caught Error:", error);
    }
}
getData();

// **Interview Question: How do you handle errors in async/await?**
// Answer: Use a try...catch block to catch and handle errors.

// **Conclusion:**
// - Promises handle asynchronous operations efficiently.
// - .then() and .catch() manage promise resolution and rejection.
// - async/await improves code readability.
// - Promise.all(), Promise.race(), Promise.allSettled(), and Promise.any() manage multiple promises effectively.
// - Common interview questions on Promises have been included for quick revision.
