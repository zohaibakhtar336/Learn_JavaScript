// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }


// ********** JavaScript Switch Statement - Important **********

// ✅ Basic Switch Statement (Evaluates expression and executes matching case)
let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}
// Output: Wednesday

// ✅ Switch Statement Without Break (Executes all cases after a match is found)
let fruit = "apple";
switch (fruit) {
    case "apple":
        console.log("Apple is red.");
    case "banana":
        console.log("Banana is yellow.");
    case "grapes":
        console.log("Grapes are green or purple.");
        break;
    default:
        console.log("Unknown fruit.");
}
// Output: Apple is red.
//         Banana is yellow.
//         Grapes are green or purple.

// ✅ Using Switch with Multiple Cases (Group cases with same execution)
let grade = 'B';
switch (grade) {
    case 'A':
    case 'B':
    case 'C':
        console.log("You passed!");
        break;
    case 'D':
    case 'F':
        console.log("You failed!");
        break;
    default:
        console.log("Invalid grade");
}
// Output: You passed!

// ✅ Switch with Boolean Expression (Switch can work with boolean values)
let isRaining = true;
switch (isRaining) {
    case true:
        console.log("Take an umbrella.");
        break;
    case false:
        console.log("Enjoy the weather!");
        break;
    default:
        console.log("Unknown weather condition");
}
// Output: Take an umbrella.

// ✅ Nested Switch Statement (Switch inside another switch)
let category = "electronics";
let product = "mobile";

switch (category) {
    case "electronics":
        switch (product) {
            case "laptop":
                console.log("Laptop selected.");
                break;
            case "mobile":
                console.log("Mobile selected.");
                break;
            default:
                console.log("Unknown electronics product.");
        }
        break;
    case "clothing":
        console.log("Clothing category selected.");
        break;
    default:
        console.log("Unknown category.");
}
// Output: Mobile selected.

// ********** Important Interview Questions **********

// Q1: How does a switch statement work?
// ✅ It evaluates an expression and executes the matching case.
// ✅ If a break statement is not used, execution continues to the next case.

// Q2: What happens if break is omitted?
// ✅ All cases after the matching case will be executed (fall-through behavior).

// Q3: Can switch work with strings?
// ✅ Yes, switch can work with strings, numbers, and even boolean values.

// Q4: When should we use a switch instead of if-else?
// ✅ Use switch when there are multiple possible values for a single variable.
// ✅ Use if-else when conditions involve complex expressions.

// Q5: Can switch statements handle ranges (e.g., case x > 5)?
// ❌ No, switch only compares discrete values, not conditions like greater than or less than.

// Q6: How to use switch for range-based conditions?
// ✅ Use if-else before switch to classify ranges.

let marks = 85;
let gradeCategory;
if (marks >= 90) gradeCategory = "A";
else if (marks >= 75) gradeCategory = "B";
else if (marks >= 60) gradeCategory = "C";
else gradeCategory = "F";

switch (gradeCategory) {
    case "A":
        console.log("Excellent");
        break;
    case "B":
        console.log("Very Good");
        break;
    case "C":
        console.log("Good");
        break;
    case "F":
        console.log("Fail");
        break;
    default:
        console.log("Invalid grade");
}
// Output: Very Good
