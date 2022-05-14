const express = require('express');
const http = require('http');
const dotenv = require("dotenv");

const connectDB = require('./config/db');
const clientRouter = require('./routes/client.route')

// Configurations
dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
connectDB()                       // connection to mongodb


// Routes and endpoints 
app.get("/", (req, res) => {
    console.log("Welcome to LawBell");
    res.send("<h1>Welcome to LawBell</h1>");
})

app.use('/client', clientRouter);


// creating server instance using http 
const server = http.createServer(app);

// listening the server at port 5000
const port = process.env.PORT || 5000;
server.listen(port, () => {
    console.log(`server is running at port ${port}`);
})