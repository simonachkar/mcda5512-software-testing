const sum = (a, b) => a + b
const substract = (a, b) => a - b

// Testing sum function
let result = sum(2, 3)
let expected = 5
if (result !== expected) {
    throw new Error(`Testing Failed: ${result} is not equal to ${expected}`)
} else {
    console.log(`Testing Passed: Testing sum()`)
}

// Testing substract function
result = substract(3, 1)
expected = 2
if (result !== expected) {
    throw new Error(`Testing Failed: ${result} is not equal to ${expected}`)
} else {
    console.log(`Testing Passed: Testing substract()`)
}

// Write a test function with a callback
function test(title, callback) {
    try {
        callback()
        console.log(`Testing Passed: ${title}`)
    } catch (error) {
        console.log(`Testing Failed: ${title}`, error)
    }
}

// Call the test function
test('Test sum()', () => {
    let result = sum(2, 3)
    let expected = 5
    if (result !== expected) {
        throw new Error(`Testing Failed: ${result} is not equal to ${expected}`)
    }
})

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
test('Test substract()', () => {
    expect(substract(3, 2)).toBe(1)
    // expect(substract(5, 2)).toBe(2) // This will fail
})