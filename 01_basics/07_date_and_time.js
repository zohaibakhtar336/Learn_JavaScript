let myDate = new Date();
console.log(typeof myDate); // object

console.log(myDate.toString());
console.log(myDate);
console.log(myDate.toLocaleString());

let myCreatedDate = new Date('2024-02-23');
console.log(myCreatedDate);

// / let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
// let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})




// ********** JavaScript Date & Time Cheat Sheet **********

// Creating Dates
let now = new Date(); // Current date & time
let specificDate = new Date("2025-02-13"); // Specific date
let customDate = new Date(2025, 1, 13, 10, 30, 0); // Year, Month (0-based), Day, Hour, Min, Sec

// Getting Date Components
console.log("Year:", now.getFullYear()); // Year
console.log("Month:", now.getMonth()); // Month (0-11)
console.log("Day of the Month:", now.getDate()); // Day of the month
console.log("Day of the Week:", now.getDay()); // Day of the week (0-6, Sunday = 0)
console.log("Hours:", now.getHours()); // Hours (0-23)
console.log("Minutes:", now.getMinutes()); // Minutes (0-59)
console.log("Seconds:", now.getSeconds()); // Seconds (0-59)
console.log("Milliseconds:", now.getMilliseconds()); // Milliseconds (0-999)

// Setting Date Components
now.setFullYear(2030); // Set year
now.setMonth(5); // Set month (June)
now.setDate(20); // Set day
now.setHours(15); // Set hours

// Formatting Dates
console.log("Formatted Date:", now.toDateString()); // "Thu Feb 13 2025"
console.log("Formatted Time:", now.toTimeString()); // "10:30:00 GMT+0530"
console.log("ISO Format:", now.toISOString()); // "2025-02-13T10:30:00.000Z"
console.log("Local Date Format:", now.toLocaleDateString()); // Local format
console.log("Local Time Format:", now.toLocaleTimeString()); // Local time format

// Timestamp (Milliseconds since Jan 1, 1970)
console.log("Timestamp:", now.getTime()); // Get timestamp
console.log("Current Timestamp:", Date.now()); // Current timestamp

// Date Math (Adding Time)
let futureDate = new Date();
futureDate.setDate(now.getDate() + 7); // Add 7 days
console.log("Future Date (7 days later):", futureDate);

// Comparing Dates
let date1 = new Date("2025-02-13");
let date2 = new Date("2025-03-01");
console.log("Is date1 > date2?:", date1 > date2); // false
console.log("Is date1 < date2?:", date1 < date2); // true

// Important for Interviews
// Creating & formatting dates
console.log("Interview Tip - Formatted Date:", new Date().toDateString());
console.log("Interview Tip - ISO Format:", new Date().toISOString());

// Getting & setting components
let tempDate = new Date();
tempDate.setFullYear(2028);
console.log("Interview Tip - Modified Year:", tempDate.getFullYear());

// Timestamp handling
console.log("Interview Tip - Current Timestamp:", Date.now());

// Date math (Adding/Subtracting days)
let addedDate = new Date();
addedDate.setDate(addedDate.getDate() + 10);
console.log("Interview Tip - Date After 10 Days:", addedDate);

// Comparing dates
let compareDate1 = new Date("2025-05-01");
let compareDate2 = new Date("2025-06-01");
console.log("Interview Tip - Comparing Dates:", compareDate1 < compareDate2); // true
