const jwt = require("jsonwebtoken");

const Client = require('../model/client.model');
const Advocate = require("../model/advocate.model");

const authClient = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        // getting token from headers 
        const token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            if (err) {
                res.status(403).json("Token is invalid");
            }
            req.user = user;
            next();
        })
    }
    else {
        res.status(401).json("You are not autherized");
    }

}


const authAdvocate = (req, res, next) => {
    authClient(req, res, () => {
        if (req.user.isAdvocate) {
            next();
        }
        else {
            res.status(403).json("You are not allowed.")
        }
    })
}







// const authAdvocate = async (req, res, next) => {
//     let token;
//     if (req.headers.authorization) {
//         try {
//             // getting token from headers 
//             token = req.headers.authorization.split(" ")[1];
//             const decoded = jwt.verify(token, process.env.JWT_SECRET);
//             req.advocate = await Advocate.findById(decoded.id);
//             next();

//         } catch (error) {
//             res.statusCode = 500;
//             res.json(error);
//         }
//     }
//     if (!token) {
//         res.statusCode = 401;
//         res.json("Not autherized, no token found");
//     }
// }



module.exports = { authClient, authAdvocate }