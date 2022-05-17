const jwt = require("jsonwebtoken");

const Client = require('../model/client.model');

const authClient = async (req, res, next) => {
    let token;
    if (req.headers.authorization) {
        try {
            // getting token from headers 
            token = eq.headers.authorization.split(" ")[1];

            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.client = await Client.findById(decoded.id).select("-password");
            next();

        } catch (error) {
            res.statusCode = 500;
            res.json(error);
        }
    }
    if (!token) {
        res.statusCode = 401;
        res.json("Not autherized, no token found");

    }
}


module.exports = { authClient }