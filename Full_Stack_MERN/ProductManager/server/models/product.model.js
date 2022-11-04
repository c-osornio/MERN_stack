const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "*Title is required."],
        minLength: [2, "Title must be at least 2 characters long"],
        trim: true,
    },
    price: {
        type: Number,
        required: [true, "*Price is required."],
        min: [0, "Minimum price is $0.00."]
    },
    description: {
        type: String,
        required: [true, "*Description is required."],
        minLength: [5, "Description must be at least 5 characters long."],
        trim: true
    }
}, 
{timestamps: true }
)

const Product = mongoose.model("Product", ProductSchema)

module.exports = Product;


