var express = require("express");
var csvdb = require("csv-database");
const bcrypt = require("bcryptjs");

const auth = require("./middleware/auth");
const signJWT = require("./helpers/sign-jwt");
const getRandomInt = require("./helpers/get-random-int");

const app = express();

app.use(express.json());

// Helper Function: Init DB
/**
 * Data Description:
 * 
 * first_name – User's First Name
 * last_name – User's Last Name
 * email – User's Email
 * password – User's Password (Encrypted)
 * g1a – MCDA5550 Quiz 1
 * g1b – MCDA5550 Quiz 2
 * g1c – MCDA5550 Quiz 3 
 * g1d – MCDA5550 Final Project 
 * g2a – MCDA5560 Assignments
 * g2b – MCDA5560 Project 1
 * g2c – MCDA5560 Project 2
 * g3a – MCDA5570 Project 1
 * g3b – MCDA5570 Project 2
 * g4a – MCDA5580 Project 1
 * g4b – MCDA5580 Project 2
 * 
 */
async function initdb() {
    return await csvdb("users.csv", ["first_name", "last_name", "email", "password", "g1a", "g1b", "g1c", "g1d", "g2a", "g2b", "g2c", "g3a", "g3b", "g4a", "g4b"]);
}

app.listen(3000, async () => {
    console.log("Server running on port 3000");
});

// Register route
app.post("/register", async (req, res) => {
    try {
        // Load db
        const db = await initdb()

        // Get user input
        const { first_name, last_name, email, password } = req.body;

        // Validate user input
        if (!(email && password && first_name && last_name)) {
            res.status(400).send("All inputs are required");
        }

        // Validate if user exist in our database (will return an array)
        const oldUser = await db.get({ email: email });
        if (oldUser.length) {
            return res.status(409).send("User Already Exist. Please Login");
        }

        // Encrypt user password
        encryptedPassword = await bcrypt.hash(password, 10);


        // Generate random data (for the sake of this example)
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

        // Create user in our database
        const user = await db.add({
            first_name,
            last_name,
            email: email.toLowerCase(),
            password: encryptedPassword,
            ...data
        });

        // Create token
        const token = signJWT(email)

        // Save user token
        user.token = token;

        // Return new user
        return res.status(201).json(user);
    } catch (err) {
        console.log(err);
        return res.status(500).send("Server error");
    }
});

// Login route
app.post("/login", async (req, res) => {
    try {
        // Load db
        const db = await initdb()

        // Get user input
        const { email, password } = req.body;

        // Validate user input
        if (!(email && password)) {
            res.status(400).send("All input is required");
        }
        // Validate if user exist in our database
        const userRes = await db.get({ email: email })
        const user = userRes[0]

        // If login info are validated
        if (user && (await bcrypt.compare(password, user.password))) {
            // Create token
            const token = signJWT(email)

            // Save user token
            user.token = token;

            // Delete password and data values before returning user
            const userValue = {
                first_name: user.first_name,
                last_name: user.last_name,
                email: user.email,
                token: user.token
            }

            // Return User
            return res.status(200).json(userValue);
        }
        return res.status(400).send("Invalid Credentials");
    } catch (err) {
        console.log(err);
    }
});

app.post("/welcome", auth, (req, res) => {
    res.status(200).send("Welcome 🙌 ");
});

app.get('/data', async (req, res) => {
    try {
        // Load db
        const db = await initdb()

        // Get user input
        const { email } = req.query

        // Validate user input
        if (!email) {
            res.status(400).send("All input is required");
        }

        // Validate if user exist in our database
        const userRes = await db.get({ email: email })
        const user = userRes[0]

        // If User is found 
        if (user) {
            delete user.password
            return res.status(200).json(user);
        }
        return res.status(404).send("User not found");
    } catch (err) {
        console.log(err);
    }
})
