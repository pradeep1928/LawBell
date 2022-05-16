const bcrypt = require("bcryptjs");

const generateToken = require("../config/generateToken");
const Client = require("../model/client.model");


// Register route for Clients
const registerClient = async (req, res, next) => {
    const { name, email, password, profilePic } = req.body;
    try {
        const existingClient = await Client.findOne({ email });
        if (existingClient) {
            console.log("Client already exists");
            return res.status(400).json({ message: "Client already exists" });
        }
        const client = await Client.create({
            name, email, password, profilePic
        })
        if (client) {
            res.status(201)
                .json({
                    _id: client._id,
                    name: client.name,
                    email: client.email,
                    password: client.password,
                    profilePic: client.profilePic,
                    token: generateToken(client._id)
                })
        }
    } catch (error) {
        res.status(500).send(error);
        console.log(error)
    }
}


// Login route for client 
const loginClient = async (req, res, next) => {
    const { email, password } = req.body;

    try {
        const client = await Client.findOne({ email });
        if (!client) {
            console.log("User not found");
            return res.status(404).json({ message: "User not found" });
        }
        const isPasswordCorrect = await bcrypt.compare(
            password, client.password
        )
        if (!isPasswordCorrect) {
            return res.status(400).json({ message: "Invalid credential" })
        }
        res.status(200).json({
            client,
            token: generateToken(client._id)
        })
    } catch (error) {
        res.status(500).send(error);
    }
}

// Get all clients 
const getClients = async (req, res, next) => {
    try {
        const client = await Client.find();
        res.status(200).json(client);
    } catch (error) {
        res.status(500).json(error);
    }
}

// Update clients 
const updateClient = async (req, res, next) => {
    try {
        const updatedClient = await Client.findByIdAndUpdate(req.params.id,
            {
                $set: req.body
            },
            { new: true }
        )
        res.status(200).json(updatedClient)
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = { registerClient, loginClient, getClients, updateClient }