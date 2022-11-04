const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required."],
        minLength: [2, "Name must be at least 2 characters long"]
        // enum: {
        //     values: ['Coffee', 'Tea'],
        //     message: '{VALUE} is not supported'
        //   }
    },
    email: {
        type: String,
        unique: true,
        trim: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Please enter a valid email address"]
    },
    password: {
        type: String,
        minLength: [8, "Password must be at least 8 characters long."]
    }
}, 
{timestamps: true }
)

const User = mongoose.model("User", UserSchema)

module.exports = User;
