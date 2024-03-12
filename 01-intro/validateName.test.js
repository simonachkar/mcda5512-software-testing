const { validateName } = require('./validateName')

// ======== Check true ========
test('checking name: Simon', () => {
    expect(validateName('Simon')).toBe(true)
});

test('checking name: Neil', () => {
    expect(validateName('Neil')).toBe(true)
});

// ======== Check false ======== 
test('checking name: Simon123', () => {
    expect(validateName('Simon123')).toBe(false)
});

test('checking name: Jake-Paul', () => {
    expect(validateName('Jake-Paul')).toBe(false)
});

test('checking name: ', () => {
    expect(validateName('')).toBe(false)
});

test('checking name: Renée', () => {
    expect(validateName('Renée')).toBe(false)
});

test('checking name: Sørina', () => {
    expect(validateName('Sørina')).toBe(false)
});

test('checking name: Юрий', () => {
    expect(validateName('Юрий')).toBe(false)
});

test('checking name: غسان', () => {
    expect(validateName('غسان')).toBe(false)
});