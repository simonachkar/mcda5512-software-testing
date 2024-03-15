/* with test() function */

// Define two simple math functions
const sum = (a, b) => a + b;
const subtract = (a, b) => a - b;

// Define a reusable test function
function test(title, callback) {
  try {
    callback();
    console.log(`Testing Passed: ${title}`);
  } catch (error) {
    console.log(`Testing Failed: ${title} - ${error.message}`);
  }
}

// Use the test function to refactor previous tests

test("sum adds numbers correctly", () => {
  const result = sum(2, 3);
  const expected = 5;
  if (result !== expected) {
    throw new Error(`Expected ${result} to be ${expected}`);
  }
});

test("subtract subtracts numbers correctly", () => {
  const result = subtract(3, 1);
  const expected = 2;
  if (result !== expected) {
    throw new Error(`Expected ${result} to be ${expected}`);
  }
});
