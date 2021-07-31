const functions = require('./functions')

// Test add(a, b) function
test('Add 2 + 2 to equal 4', () => {
    // ...
})

// Test isNull() function
test('Should be null', () => {
    // ...
})

// Test falsy values
test('Should be falsy', () => {
    // ...
})

// Test truthy values
test('Should be truthy', () => {
    // ...
})

// Test less and greater than
test('Should be under 10 items nut more than 1 item', () => {
    const qty = 7
    // ...
})

// Test getUser()
test('User should be Joe Doe', () => {
    // expect(functions.getUser()).toBe(
    //     { firstName: 'Joe', lastName: 'Doe' }
    // )
})

// Test Regex
test('There is no I in team', () => {
    // expect('team').not.toMatch(/I/)
})

// Test Arrays
test('asimon should be an admin', () => {
    const admins = ['asimon', 'wneil', 'pdan']
    // ...
})

/** Check API Docs here -> https://jestjs.io/docs/expect */