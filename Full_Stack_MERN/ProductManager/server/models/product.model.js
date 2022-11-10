const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "*Title is required."],
        minLength: [3, "*Title must be at least 3 characters long."],
        trim: true,
        unique: true
    },
    price: {
        type: Number,
        required: [true, "*Price is required."],
        min: [0, "*Minimum price is $0.00."]
    },
    description: {
        type: String,
        required: [true, "*Description is required."],
        minLength: [5, "*Description must be at least 5 characters long."],
        trim: true
    },
    favorite: {
        type: Boolean,
    }
}, 
{timestamps: true }
)

const Product = mongoose.model("Product", ProductSchema)

ProductSchema.plugin(uniqueValidator, { message: '*Sorry, there is already a product titled, "{VALUE}".' });

module.exports = Product;


