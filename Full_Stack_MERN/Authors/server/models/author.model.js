const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');


const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "*Author name is required."],
        minLength: [3, "*Author name must be at least 3 characters long"],
        trim: true,
        unique: true
    }
}, 
{timestamps: true }
)

AuthorSchema.plugin(uniqueValidator, { message: '*Sorry, {VALUE} is already in our database.'});

const Author = mongoose.model("Author", AuthorSchema)

module.exports = Author;