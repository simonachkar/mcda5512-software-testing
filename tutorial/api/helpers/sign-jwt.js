const jwt = require("jsonwebtoken");

const token_key = "ILikePizza";

const signJWT = (email) => {
    const token = jwt.sign(
        { email },
        token_key,
        { expiresIn: "2h" }
    );
    console.log(token);
    return token
};

module.exports = signJWT;
