const functions = {
    add: (a, b) => { return a + b },
    isNull: () => { return null },

    getUser: () => {
        const user = { firstName: 'Joe', lastName: 'Doe' }
        return user
    }
}

module.exports = functions