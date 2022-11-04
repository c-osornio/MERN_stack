const mongoose = require('mongoose');

const ToppingSchema1 = new mongoose.Schema({
    topping: {
        type: String,
        required: [true, "Non Meat Topping is required"],
        enum: {
            values: [
                'Mushroom',
                'Pineapple',
                'Onion',
                'Pepper'
            ],
            message: '{VALUE} is not supported'
        }
    }
})

const ToppingSchema2 = new mongoose.Schema({
    topping: {
        type: String,
        required: [true, "Meat Topping is required"],
        enum: {
            values: [
                'Chicken',
                'Bacon',
                'Pepperoni',
                'Sausage',
                'Ham'
            ],
            message: '{VALUE} is not supported'
        }
    }
})

const CheeseSchema = new mongoose.Schema({
    cheese: {
        type: String,
        required: [true, "Cheese is required"],
        enum: {
            values: [
                'Provolone',
                'Chedder',
                'Pepper Jack',
                'Mozzarella',
                'Gorgonzola',
                'Feta',
                'Vegan'
            ],
            message: '{VALUE} is not supported'
        }
    }
})


const PizzaSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: [true, "Name is required."],
        minLength: [2, "Pizza name must be at least 2 characters long."]
    },
    crust: {
        type: String,
        required: [true, "Crust is required."],
        enum: {
            values: [
                'Vegan Crust',
                'Stuffed Crust',
                'Garlic Parmasian',
            ],
            message: '{VALUE} is not supported'
        }
    },
    sauce: {
        type: String,
        required: [true, "Sauce is required."],
        enum: {
            values: [
                'Marinara',
                'Buffalo',
                'Alfredo',
                'Garlic Olive Oil',
                'Pesto',
                'BBQ'
            ],
            message: '{VALUE} is not supported'
        }
    },
    cheese: {
        type: [CheeseSchema],
        validate: {
            validator: function(v) {
                if(v.length >= 3) {
                    return false
                }
            },
            message: "Only three cheeses allowed."
        },
        validate: {
            validator: function(v) {
                if(v.length == 0) {
                    return false
                }
            },
            message: "At least one cheese is required."
        }
    },
    toppings1: {
        type: [ToppingSchema1],
        validate: {
            validator: function(v) {
                if(v.length >= 3) {
                    return false
                }
            },
            message: "Only three non-meat toppings allowed."
        }
    },
    toppings2: {
        type: [ToppingSchema2],
        validate: {
            validator: function(v) {
                if(v.length >= 3) {
                    return false
                }
            },
            message: "Only three meat toppings allowed."
        },
    }
}, 
{timestamps: true }
)

const Pizza = mongoose.model("Pizza", PizzaSchema)

module.exports = Pizza;
