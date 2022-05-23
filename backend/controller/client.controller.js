const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");
const otpGenerator = require('otp-generator')

const generateToken = require("../config/generateToken");
const Client = require("../model/client.model");
const OtpVerify = require("../model/verify.model");


// Register route for Clients
const registerClient = async (req, res, next) => {
    const { name, email, phoneNo, password, profilePic } = req.body;
    try {
        const existingClient = await Client.findOne({ email });
        if (existingClient) {
            console.log("This Client already exists");
            return res.status(400).json({ message: "This Client already exists" });
        }

        const client = await Client.create({
            name, email, phoneNo, password, profilePic
        })

        if (client) {
            sendOtpToVerifyEmail(client, res)
        }

    } catch (error) {
        res.status(500).send(error);
        console.log(error)
    }
}

// Route to verify email otp 
const verifyOtp = async (req, res, next) => {
    try {
        const { email, otp } = req.body;

        if (!email || !otp) {
            throw new Error("Empty details are not allowed");
        }

        const otpverifyRecord = await OtpVerify.find({ email })

        // if no records found 
        if (otpverifyRecord.length <= 0) {
            throw new Error("Account record doesn't exists or has been verified already. Please signup or login")
        }
        else {
            // if record exists 
            const { expiresAt } = otpverifyRecord[0];
            const hashOtp = otpverifyRecord[0].otp
            if (expiresAt < Date.now()) {
                // If Otp has expired 
                await OtpVerify.deleteMany({ _id });
                throw new Error("Otp has expired, please request again");
            } else {
                const validOtp = await bcrypt.compare(otp, hashOtp);

                if (!validOtp) {
                    throw new Error("Invalid otp passed, please check your inbox.")
                } else {
                    // success 
                    await Client.updateOne({ email: email }, { isVerified: true });
                    const client = await Client.findOne({ email });
                    await OtpVerify.deleteMany({ email });
                    res.status(200).json({
                        status: "Verified",
                        message: "Client Email verified successfully.",
                        _id: client._id,
                        name: client.name,
                        email: client.email,
                        phoneNo: client.phoneNo,
                        profilePic: client.profilePic,
                        token: generateToken(client._id, client.isAdvocate)

                    })
                }
            }
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({
            status: "Failed",
            message: error.message
        })
    }
}


// Login route for client 
const loginClient = async (req, res, next) => {
    const { email, password } = req.body;

    try {
        const client = await Client.findOne({ email });
        if (!client) {
            console.log("This Client not found");
            return res.status(404).json({ message: "This Client not found" });
        }
        const isPasswordCorrect = await bcrypt.compare(
            password, client.password
        )
        if (!isPasswordCorrect) {
            return res.status(400).json({ message: "Invalid credential" })
        }

        // Checking if email of client is verified or not 
        if (client.isVerified) {
            res.status(200).json({
                client,
                token: generateToken(client._id, client.isAdvocate)
            })
        } else {
            res.status(401).json("Please verify your email before login.")
        }

    } catch (error) {
        res.status(500).send(error);
    }
}

// Get all clients 
const getClients = async (req, res, next) => {
    try {
        const client = await Client.find().select("-password");
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
        ).select("-password");
        res.status(200).json(updatedClient)
    } catch (error) {
        res.status(500).json(error)
    }
}



// nodemailer transporter
const transport = nodemailer.createTransport({
    // service: 'gmail',
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: "lawbell135@gmail.com",
        pass: "Lawbell@123"
    }
});
// Email verification 
const sendOtpToVerifyEmail = async ({ _id, email }, res) => {
    try {

        // Generating opt using otp generator module
        const OTP = otpGenerator.generate(4,
            { digits: true, lowerCaseAlphabets: false, upperCaseAlphabets: false, specialChars: false });


        // mail options with otp info 
        const mailOption = {
            from: "lawbell135@gmail.com",
            to: email,
            subject: "Verify Your Email",
            html: `<p>Enter ${OTP} to verify your email and completer the signup process.</p>
            <P>This code will <b>expires in 5 minutes </b>.`
        }

        // Hash the otp 
        const salt = 10;
        const hashOtp = await bcrypt.hash(OTP, salt);
        const newOtpVerification = await new OtpVerify({
            email: email,
            otp: hashOtp,
            createdAt: Date.now(),
            expiresAt: Date.now() + 300000
        })

        await newOtpVerification.save();
        transport.sendMail(mailOption);
        res.status(200).json({
            status: "pending",
            message: "Verification otp sent to email",
            data: {
                clientId: _id,
                email: email
            }
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            error
        })
    }
}



module.exports = { registerClient, loginClient, getClients, updateClient, verifyOtp }