/**
 * This will returns the winning player
 * 
 * Pretend it's not using Math.random(), but instead is making 
 * a call to some 3rd party API that has a testing environment
 * we don't control, maybe it's unreliable so we want to mock 
 * it out to test our code.
 * 
 * */

function getWinner(boxer1, boxer2) {
    // get a random number between 1 and 10
    const number = Math.floor(Math.random() * 10) + 1;
    return number % 2 == 0 ? boxer2 : boxer1
}

module.exports = { getWinner }

