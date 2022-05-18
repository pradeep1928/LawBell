const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");
const otpGenerator = require('otp-generator')

const generateToken = require("../config/generateToken");
const Advocate = require("../model/advocate.model");
const OtpVerify = require("../model/verify.model");


// Register route for Advocate
const registerAdvocate = async (req, res, next) => {
    const { name, email, phoneNo, password, profilePic } = req.body;
    try {
        const existingAdvocate = await Advocate.findOne({ email });
        if (existingAdvocate) {
            console.log("Advocate already exists");
            return res.status(400).json({ message: "This Advocate already exists" });
        }

        const advocate = await Advocate.create({
            name, email, phoneNo, password, profilePic
        })

        if (advocate) {
            sendOtpToVerifyEmail(advocate, res)
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
                    await Advocate.updateOne({ email: email }, { isVerified: true });
                    const advocate = await Advocate.findOne({ email });
                    await OtpVerify.deleteMany({ email });
                    res.status(200).json({
                        status: "Verified",
                        message: "Advocate Email verified successfully.",
                        _id: advocate._id,
                        name: advocate.name,
                        email: advocate.email,
                        phoneNo: advocate.phoneNo,
                        profilePic: advocate.profilePic,
                        token: generateToken(advocate._id)

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


// Login route for advocate 
const loginAdvocate = async (req, res, next) => {
    const { email, password } = req.body;

    try {
        const advocate = await Advocate.findOne({ email });
        if (!advocate) {
            console.log("User not found");
            return res.status(404).json({ message: "Advocate not found" });
        }
        const isPasswordCorrect = await bcrypt.compare(
            password, advocate.password
        )
        if (!isPasswordCorrect) {
            return res.status(400).json({ message: "Invalid credential" })
        }
        res.status(200).json({
            advocate,
            token: generateToken(advocate._id)
        })
    } catch (error) {
        res.status(500).send(error);
    }
}

// Get all advocates 
const getAdvocate = async (req, res, next) => {
    try {
        const advocate = await Advocate.find().select("-password");
        res.status(200).json(advocate);
    } catch (error) {
        res.status(500).json(error);
    }
}

// Update advocates 
const updateAdvocate = async (req, res, next) => {
    try {
        const updatedAdvocate = await Advocate.findByIdAndUpdate(req.params.id,
            {
                $set: req.body
            },
            { new: true }
        ).select("-password");
        res.status(200).json(updatedAdvocate)
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
                advocateId: _id,
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



module.exports = { registerAdvocate, loginAdvocate, getAdvocate, updateAdvocate, verifyOtp }