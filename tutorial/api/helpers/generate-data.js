const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const generateData = () => {
    const data = {
        "g1a": getRandomInt(40, 100), // random integer from 40 to 100
        "g1b": getRandomInt(40, 100),
        "g1c": getRandomInt(40, 100),
        "g1d": getRandomInt(40, 100),
        "g2a": getRandomInt(40, 100),
        "g2b": getRandomInt(40, 100),
        "g2c": getRandomInt(40, 100),
        "g3a": getRandomInt(40, 100),
        "g3b": getRandomInt(40, 100),
        "g4a": getRandomInt(40, 100),
        "g4b": getRandomInt(40, 100),
    }
    return data
}

module.exports = generateData;
