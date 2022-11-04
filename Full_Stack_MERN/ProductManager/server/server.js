const express = require('express');
const app = express();
const cors = require('cors') 
const port = 8000;

app.use(cors({
    origin: "http://localhost:3000"
}))  

app.use(express.json(), express.urlencoded({ extended: true }));

// config
require("./config/mongoose.config");

// routes
require("./routes/product.routes")(app);

app.listen(port, () => console.log(`Listening on port: ${port}`) );