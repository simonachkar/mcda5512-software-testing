var express = require("express");
const bcrypt = require("bcryptjs");

const auth = require("./middleware/auth");
const signJWT = require("./helpers/sign-jwt");
const initdb = require("./helpers/initdb");
const generateData = require("./helpers/generate-data");

const app = express();

app.use(express.json());

app.listen(3001, () => {
    console.log("Server running on port 3001");
});

app.get('/ping', (req, res) => {
    return res.status(200).json("Server running on port 3001");
})

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
        const data = generateData();

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
        return res.status(201).json({ email: email });
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

app.get('/data', auth, async (req, res) => {
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
