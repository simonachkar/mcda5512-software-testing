const { validateName } = require('./validateName')

const response = validateName(process.argv[2])

if (response) {
    console.log(`✅ This name is valid`)
} else {
    console.log(`❌ This name is NOT valid`)
}

