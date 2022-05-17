const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");
const Schema = mongoose.Schema;

const clientSchema = new Schema({
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
    }
},  { timestamps: true } 
)


// Hashing the password before saving it 
clientSchema.pre("save", async function (next) {
    if (!this.isModified) {
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
})


const Client = mongoose.model("Client", clientSchema);

module.exports = Client;