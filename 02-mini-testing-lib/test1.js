/* Manual Testing */

// Define two simple math functions
const sum = (a, b) => a + b;
const subtract = (a, b) => a - b;

// Manually testing the sum function
let result = sum(2, 3);
let expected = 5;
if (result !== expected) {
  throw new Error(`Testing Failed: Expected ${result} to be ${expected}`);
} else {
  console.log(`Testing Passed: sum() function`);
}

// Manually testing the subtract function
result = subtract(3, 1);
expected = 2;
if (result !== expected) {
  throw new Error(`Testing Failed: Expected ${result} to be ${expected}`);
} else {
  console.log(`Testing Passed: subtract() function`);
}
