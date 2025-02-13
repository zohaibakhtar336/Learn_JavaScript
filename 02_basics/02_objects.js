// Object Literals
const mySym = Symbol("key1");
const jsUser = {
    name: "Zohaib",
    "fullName": "Zohaib Akhtar",
    [mySym]: "mykey1",
    age: 18,
    location: "Bangalore",
    email: "zohaib@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["fullName"]);
console.log(jsUser[mySym]);
console.log(typeof jsUser.mySym);

jsUser.email = "zohaib336@gmail.com";
Object.freeze(jsUser);
jsUser.email = "zohaibakhtar@gmail.com";
console.log(jsUser.email);


jsUser.greeting = function () {
    console.log(`Hello ${this.name}`);
}
// console.log(jsUser.greeting());


const tinderUser = {}

tinderUser.id = "123abc";
tinderUser.name = "Lara";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email: "lara@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Lara",
            lastname: "Datta"
        }
    }
}

console.log(regularUser.fullname); // { userfullname: { firstname: 'Lara', lastname: 'Datta' } }
console.log(regularUser.fullname.userfullname); // { firstname: 'Lara', lastname: 'Datta' }
console.log(regularUser.fullname.userfullname.firstname); // Lara


const object1 = {1: "a", 2: "b"}
const object2 = {3: "a", 4: "b"}
const object4 = {5: "a", 6: "b"}

// const object3 = { object, object }
// const object = Object.assign({}, object1, object2, object4)

const object3 = {...object1, ...object2}
// console.log(object3);



const users = [
    {
        id: 1,
        email: "zohaib@gmail.com"
    },
    {
        id: 1,
        email: "zohaib@gmail.com"
    },
    {
        id: 1,
        email: "zohaib@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "Learn JavaScript",
    price: "199",
    courseInstructor: "Johan"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "John",
//     "coursename": "Learn JavaScript",
//     "price": "free"
// }

[
    {},
    {},
    {}
]





// ********** JavaScript Objects Cheat Sheet **********


console.log("JavaScript Objects Cheat Sheet");

// Creating an Objectcls

let person = {
    name: "Zohaib",
    age: 22,
    isStudent: true,
    address: {
        city: "Bangalore",
        country: "India"
    },
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
};
console.log(person); // Output: Object with properties

// Accessing Object Properties
console.log(person.name); // Output: Zohaib
console.log(person["age"]); // Output: 22
console.log(person.address.city); // Output: Bangalore

// Modifying Properties
person.age = 23;
person["name"] = "Akhtar";
console.log(person); // Output: Updated object

// Adding and Deleting Properties
person.email = "zohaib@example.com";
delete person.isStudent;
console.log(person); // Output: Object with updated properties

// Checking if Property Exists
console.log("age" in person); // Output: true
console.log(person.hasOwnProperty("address")); // Output: true

// Looping Through Object
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}

// Object Methods
person.greet(); // Output: Hello, my name is Akhtar

// ********** Important Interview Concepts **********

// Getting Object Keys, Values, Entries
console.log(Object.keys(person)); // Output: [ 'name', 'age', 'address', 'greet', 'email' ]
console.log(Object.values(person)); // Output: Values of the object properties
console.log(Object.entries(person)); // Output: Array of key-value pairs

// Merging Objects
let obj1 = { a: 1, b: 2 };
let obj2 = { b: 3, c: 4 };
let mergedObj = { ...obj1, ...obj2 }; // Using Spread Operator
console.log(mergedObj); // Output: { a: 1, b: 3, c: 4 }

// Object.assign() for Merging
let combinedObj = Object.assign({}, obj1, obj2);
console.log(combinedObj); // Output: { a: 1, b: 3, c: 4 }

// Shallow Copy vs Deep Copy
let shallowCopy = { ...person }; // Shallow Copy
let deepCopy = JSON.parse(JSON.stringify(person)); // Deep Copy
console.log(shallowCopy); // Output: Copy of person object
console.log(deepCopy); // Output: Deep copy of person object

// Object Destructuring
let { name, age, address: { city } } = person;
console.log(name, age, city); // Output: Akhtar 23 Bangalore

// Freezing & Sealing Objects
let user = { username: "john", role: "admin" };
Object.freeze(user); // Prevents modification
Object.seal(person); // Allows modification but no new properties
console.log(user); // Output: Frozen user object

// Convert Object to Array
let objectToArray = Object.entries(person);
console.log(objectToArray); // Output: Array of key-value pairs

// Convert Array to Object
let arrayToObject = Object.fromEntries(objectToArray);
console.log(arrayToObject); // Output: Object converted back from array

// Checking if Object is Empty
console.log(Object.keys(person).length === 0); // Output: false

// Removing Undefined or Null Values
let sampleObj = { a: 1, b: null, c: undefined, d: "Hello" };
let cleanedObj = Object.fromEntries(
    Object.entries(sampleObj).filter(([_, value]) => value != null)
);
console.log(cleanedObj); // Output: { a: 1, d: 'Hello' }

// Sorting Object by Values
let scores = { A: 90, B: 85, C: 95 };
let sortedScores = Object.fromEntries(
    Object.entries(scores).sort(([, a], [, b]) => b - a)
);
console.log(sortedScores); // Output: { C: 95, A: 90, B: 85 }

// Finding Key with Max Value
let maxKey = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
console.log(maxKey); // Output: C

// ********** End of Cheat Sheet **********
