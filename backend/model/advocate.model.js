const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");
const Schema = mongoose.Schema;

const advocateSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true 
    }, 
    phoneNo: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true 
    },
    profilePic: {
        type: String
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    isAdvocate: {
        type: Boolean,
        default: true
    }
},  { timestamps: true } 
)


// Hashing the password before saving it 
advocateSchema.pre("save", async function (next) {
    if (!this.isModified) {
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
})


const Advocate = mongoose.model("Advocate", advocateSchema);

module.exports = Advocate;