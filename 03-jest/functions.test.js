const functions = require('./functions')

// Test add(a, b) function
test('Add 2 + 2 to equal 4', () => {
    expect(functions.add(2, 2)).toBe(4)
    expect(functions.add(2, 2)).not.toBe(5)
})

// Test isNull() function
test('Should be null', () => {
    expect(functions.isNull()).toBeNull()
})

// Test falsy values
test('Should be falsy', () => {
    expect(0).toBeFalsy()
    expect(false).toBeFalsy()
    expect('').toBeFalsy()
    expect(null).toBeFalsy()
    expect(undefined).toBeFalsy()
})

// Test truthy values
test('Should be truthy', () => {
    expect(1).toBeTruthy()
    expect(true).toBeTruthy()
    expect('text').toBeTruthy()
    expect(2).toBeTruthy()
    expect(4.7).toBeTruthy()
})