/* with assertions */

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

// Define an expect function for assertions
function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`Expected ${actual} to be ${expected}`);
      }
    },
    toBeGreaterThan(expected) {
      if (actual <= expected) {
        throw new Error(`Expected ${actual} to be greater than ${expected}`);
      }
    },
  };
}

// Use the test function with the expect function for more readable tests

test("sum adds numbers correctly", () => {
  const result = sum(2, 3);
  const expected = 5;
  expect(result).toBe(expected);
  expect(result).toBeGreaterThan(4);
});

test("subtract subtracts numbers correctly", () => {
  const result = subtract(3, 1);
  const expected = 2;
  expect(result).toBe(expected);
});
