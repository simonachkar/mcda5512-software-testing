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