const express = require('express');
const app = express();
const cors = require('cors') 
const port = 8000;
const socket = require('socket.io');

app.use(cors({
    origin: "http://localhost:3000"
}))  

app.use(express.json(), express.urlencoded({ extended: true }));

// config
require("./config/mongoose.config");

// routes
require("./routes/author.routes")(app);

const server = app.listen(port, () => console.log(`Listening on port: ${port}`) );

const io = socket(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST'],
        allowedHeaders: ['*'],
        credentials: true,
    }
});

io.on("connection", socket => {
    console.log('socket id: ' + socket.id);
    socket.on("new_author", (data) => {
        socket.broadcast.emit("receive_authors", data)
    });
    socket.on("remove_author", (data) => {
        socket.broadcast.emit("receive_removal", data)
    });
});