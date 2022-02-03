// Two simple methods: sum & substract
const sum = (a, b) => a + b
const substract = (a, b) => a - b

// Test sum function
let result = sum(2, 3)
let expected = 5
if (result !== expected) {
    throw new Error(`Testing Failed: ${result} is not equal to ${expected}`)
} else {
    console.log(`Testing Passed: Testing sum()`)
}

// Test substract function



// Write a test function with a callback
function test(title, callback) {

}

// Call the test function 
// and wrap it around the code that tests the substract function



// Write a function called expect() containing some assertions (claims)
function expect(actual) {
    return {
        toBe(expected) {
            if (actual !== expected) {
                throw new Error(`Testing Failed: ${result} is not equal to ${expected}`)
            }
        }
    }
}

// Call the test function, with expect()