let price = 100;

// let discount = 20;

// The Subtraction Arithmetic Operator.
let finalPrice = price - discount;

console.log(finalPrice);

// Types of Operators

// 1. Arithmetic Operators. Use Case: Calculating total prices in an e-commerce app.

// Addition, Subtraction, Multiplication, Division, e.t.c

let firstNumber = 10;

let secondNumber = 5;

// Addition Operator
console.log(firstNumber + secondNumber);

// Subtraction Operator
console.log(firstNumber - secondNumber);

// Multiplication Operator
console.log(firstNumber * secondNumber);

// Division Operator
console.log(firstNumber / secondNumber);

// Modulus Operator
console.log(firstNumber % secondNumber);

// Exponentiation Operator
console.log(firstNumber ** 2);

// 2. Comparison Operators. Use Case: Checking if a user is eligible to buy a product based on age.
// >, <, >=, <=, ==, ===

let age = 18;

console.log(age >= 18); // They are eligible to vote.

console.log(age == "18");

console.log(age === "18");

// == means comparing the values.
// === means comparing the data types of the values.

// 3. Logical Operator (AND, OR, NOT). Use Case: Checking if a user has access to as paid course.

// AND: An Operator that combines two values as inputs and returns a true value as output only if both inputs are true.

let isLoggedIn = true;

let hasPaidFees = true;

console.log(isLoggedIn && hasPaidFees);

// OR: An Operator that combines two values as inputs and returns true if either of the inputs are true.

console.log(isLoggedIn || hasPaidFees);

// NOT: Negative of a value.

console.log(!isLoggedIn);
console.log(!hasPaidFees);

// 4. Assignment Operators. Use Case: Managing game scores in a leaderboard system.

let status = "Happy";

let score = 10;

console.log(10);

// Increment Assignment Operator.
score += 1;

console.log(score);

// Decrement Assignment Operator.
score -= 3;

console.log(score);

// Real World Example: Simple Cart System that returns the final price of cart items selected by the user after a discount.

// Total Amount of items the user got, User Type, Discount based on the user type.

let cartItemsPrice = 70;

let userType = "premium";

// Apply a discount based on the user type (premium).

var discount;

if (userType == "premium") {
    discount = 20;
} else {
    discount = 5;
}

cartItemsPrice -= discount;

console.log("Final Price for items is: ", cartItemsPrice);