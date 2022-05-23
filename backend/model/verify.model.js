const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");
const Schema = mongoose.Schema;

const OtpSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    otp: {
        type: String,
        required: true
    },
    createdAt: Date,
    expiresAt: Date

}, { timestamps: true })


const OtpVerify = mongoose.model("OtpVerify", OtpSchema);

module.exports = OtpVerify;