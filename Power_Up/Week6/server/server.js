const express = require('express');
const app = express();
const port = 8000;
app.use(express.json(), express.urlencoded({ extended: true }));

const cors = require('cors') 
app.use(cors({
    origin: "http://localhost:3000"
}))  

// config
require("./config/mongoose.config");

// routes
require("./routes/pizza.routes")(app);

app.listen(port, () => console.log(`Listening on port: ${port}`) );