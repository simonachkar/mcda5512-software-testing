const sum = (a, b) => a + b
const substract = (a, b) => a - b

// Test sum function
console.log(`Testing sum()`)
let result = sum(2, 3)
let expected = 5
if (result !== expected) {
    throw new Error(`Testing Failed: ${result} is not equal to ${expected}`)
} else {
    console.log(`Testing Passed`)
}

// Test substract function



// Write a test function with a callback
function test(title, callback) {

}

// Call the test function



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