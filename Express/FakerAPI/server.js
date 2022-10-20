const { faker } = require('@faker-js/faker');
const express = require('express');
const app = express();
const port = 8000;

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const users = []
const companies = []

// Create 2 functions: createUser, createCompany that return an object 

const createUser = () => {
    const newFakeUser = {
        _id: faker.datatype.uuid(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        phoneNumber: faker.phone.number(),
        email: faker.internet.email(),
        password:faker.internet.password()
    };
    return newFakeUser;
};

const createCompany = () => {
    const newFakeCompany = {
        _id: faker.datatype.uuid(),
        name: faker.company.name(),
        address: {
            street: faker.address.streetAddress(),
            city: faker.address.cityName(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    };
    return newFakeCompany;
};

// Create an api route "/api/users/new" that returns a new user

// Create 
app.post("/api/users/new", (req, res) => {
    const newUser = createUser()
    users.push(newUser)
    res.json( {users: users} );
});

// Read
app.get('/api/users', (req, res) => {
    res.json({ users: users })
})

// Create an api route "/api/companies/new" that returns a new company

// Create
app.post("/api/companies/new", (req, res) => {
    const newCompany = createCompany()
    companies.push(newCompany)
    res.json( {companies: companies} );
});

// Read
app.get('/api/companies', (req, res) => {
    res.json({ companies: companies })
})

// Create an api route "/api/user/company" that returns both a new user and a new company

// Create
app.post("/api/user/company", (req, res) => {
    let newUser = createUser()
    let newCompany = createCompany()
    users.push(newUser)
    companies.push(newCompany)
    res.json( {
        users: users,
        companies: companies}
    );
});

// Read
app.get('/api/user/company', (req, res) => {
    res.json({ 
        users: users,
        companies: companies 
    })
})


app.listen(port, () => { console.log(`Locked and Loaded on Port: ${port}`) })