const { getWinner } = require("./utils")

const fight = (boxer1, boxer2) => {
    const totalRounds = 5
    let boxer1Wins = 0
    let boxer2Wins = 0

    for (let i = 0; i < totalRounds; i++) {
        const winner = getWinner(boxer1, boxer2)
        if (winner === boxer1) boxer1Wins++
        else boxer2Wins++
    }

    return boxer1Wins > boxer2Wins ? boxer1 : boxer2
}

module.exports = fight

