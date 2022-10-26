const express = require('express');
const app = express();
const port = 8000;
const mongoose = require('mongoose');
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

mongoose.connect('mongodb://localhost/MyAwesomeDB')
    .then(() => {
        console.log("Successfully connected to the DB!")
    })
    .catch((err) => {
        console.log(`Error connecting to the DB!: Error: ${err}`)
    })

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required."]
    },
    email: {
        type: String,
        unique: true,
        trim: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Please enter a valid email address"]
    },
    password: {
        type: String
    }
}, 
{timestamps: true }
)

const User = mongoose.model("User", UserSchema)

app.get('/api', (req, res) => {
    res.json({ msg: "Success" })
})

// Create 
app.post('/api/user', (req, res) => {
    User.create(req.body)
        .then((user) => {
            res.json({ user })
        })
        .catch((err) => {
            res.json({ msg: "Error:", err })
        })
})

// Read
app.get('/api/allUsers', (req, res) => {
    User.find({})
        .then((users) => res.json({ users }))
        .catch((err) => console.log(err))
})

// Update
app.put('/api/editUser/:id', (request, response) => {
    User.findOneAndUpdate(
        { _id: request.params.id },
        request.body,
        { new: true, runValidators: true }
    )
        .then((updateUser) => response.json(updateUser))
        .catch((err) => console.log(err))
})

// Delete
app.delete('api/deleteUser/:id', (request, response) => {
    User.remove({_id: request.params.id})
})


app.listen(port, () => { console.log(`Locked and loaded on port: ${port}`) })