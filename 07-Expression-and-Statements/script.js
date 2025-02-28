let a = 5 + 10; // Expresion (5 + 10 evaluates to 15)

console.log(a); // Statement (performs an action). In other words, statements executes expressions.

// Types of Expressions

// 1. Arithmetic Expressions: + - x /

// Any math operation that produces a value.

let sum = 9 + 8; // Expression -> return 17.

global(6 + 8)

console.log(7 + 8);

let product = sum * 2 // Expression -> returns 34.

// Your own examples come here.

// 2. Logical Expressions: AND, OR, NOT.

// These one return true or false.

let isLoggedIn = true && false // AND Logical Expression -> returns false;

let isAdmin = !isLoggedIn; // NOT Logical Expression -> returns true;

// 3. Function Expressions.

// Creates a function and assigns it to a variable making it an expression.

const greet = function() {
    return "Hi there, I love JavaScript.";
}

// A Function Expression can be used inside another expression
const executeGreetFunction = greet();

console.log(executeGreetFunction);


// Function Declaration (or statement);

// A Function Statement cannot be used inside another expression
function goHome() {
    return "Going home";
}

// How JavaScript Executes Code Under the Hood.

// 1. JavaScript Reads Top to Bottom.

// 2. Expressions are Evaluated first.

// 3. Statements are Executed after.

// Example:

let mathematicalExpression = 9 * 7 / (4.66 + 8) - 2**6;

console.log(mathematicalExpression);

// Common Pitfalls when using Expressions and Statements.

// Using Expressions inside Statements.

let y = 16; // Expressions

let x = y - 4; // Expression

console.log(y);

console.log(x);

// Don't expressions in statements and don't use statements in expressions