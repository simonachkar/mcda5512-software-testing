function validateName(name) {
    if (!name) {
        return false
    }

    const regex = /^[a-zA-Z]+$/
    if (regex.test(name)) {
        return true
    } else {
        return false
    }
}

module.exports = {
    validateName
}

/**
 * Play around with the regex to break the test
    - example: exclude S -> add [^S]
 *
 * Topics you might like:
 *  - regex -> https://regexone.com/
 *  - regex crash course -> https://www.youtube.com/watch?v=rhzKDrUiJVk
 */