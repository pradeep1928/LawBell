const jwt = require("jsonwebtoken");

const generateToken = (id, isAdvocate) => {
    return jwt.sign({ id, isAdvocate }, process.env.JWT_SECRET, { expiresIn: "30d" })
};

module.exports = generateToken;