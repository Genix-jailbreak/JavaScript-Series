// String Methods
let str = "Hello, World!";
console.log(str.toUpperCase()); // Output: HELLO, WORLD!
console.log(str.toLowerCase()); // Output: hello, world!
console.log(str.includes("World")); // Output: true

// Array Methods
let arr = [1, 2, 3, 4, 5];
console.log(arr.push(6)); // Output: 6 (new length of the array)
console.log(arr.pop()); // Output: 6 (removes the last element)
console.log(arr.join(", ")); // Output: 1, 2, 3, 4, 5

// Number Methods
let num = 123.456;
console.log(num.toFixed(2)); // Output: 123.46
console.log(Number.isInteger(num)); // Output: false

// Object Methods
let person = {
    firstName: "John",
    lastName: "Doe"
};
console.log(Object.keys(person)); // Output: ["firstName", "lastName"]
console.log(Object.values(person)); // Output: ["John", "Doe"]

// Boolean Methods (using built-in Boolean function)
let boolValue = Boolean(1);
console.log(boolValue); // Output: true

// Date Methods
let date = new Date();
console.log(date.toDateString()); // Output: (e.g., Wed Jan 09 2025)
console.log(date.getFullYear()); // Output: 2025

// Type Conversion Methods
console.log(parseInt("123")); // Output: 123
console.log(parseFloat("123.45")); // Output: 123.45
console.log(String(123)); // Output: "123"
