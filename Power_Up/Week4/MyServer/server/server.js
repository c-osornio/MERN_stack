const { faker } = require('@faker-js/faker');
const express = require('express');
const app = express();
const port = 8000;

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const myArray = []

// Create
app.post('/api', (req, res) => {
    const obj = {
        userId: faker.datatype.uuid(),
        username: faker.internet.userName(),
        email: faker.internet.email(),
        avatar: faker.image.avatar(),
        password: faker.internet.password(),
    }
    myArray.push(obj)
    res.json({ users: myArray })
})

// Read
app.get('/api', (req, res) => {
    res.json({ users: myArray })
})

// Update
app.put('/api', (req, res) => {
    res.json({ msg: "This is my update" })
})

// Delete
app.delete('/api', (req, res) => {
    res.json({ msg: "This is my delete" })
})

app.listen(port, () => { console.log(`Locked and Loaded on Port: ${port}`) })
