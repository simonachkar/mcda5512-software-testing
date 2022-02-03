const fight = require("./fight");
const utils = require("./utils")

// Mock ./utils and make getWinner always return boxer1
jest.mock('./utils', () => {
    return {
        getWinner: jest.fn((b1, b2) => b1)
    }
})

test('Winner is Elon Musk', () => {
    const winner = fight('Elon Musk', 'Jeff Bezos')
    expect(winner).toBe('Elon Musk')

    // Test getWinner
    // - been called
    // - been called with the right args
    // - been called 5 time

    expect(utils.getWinner).toHaveBeenCalled()
    expect(utils.getWinner).toHaveBeenCalledWith('Elon Musk', 'Jeff Bezos')
    expect(utils.getWinner).toHaveBeenCalledTimes(5)

    // cleanup
    utils.getWinner.mockReset()
})