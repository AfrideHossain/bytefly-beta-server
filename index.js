//import express and call it
const app = require('express')();

//import http and create server
const http = require('http').Server(app);

//import socket.io and create IO server with http server
const io = require('socket.io')(http, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

const cors = require('cors');

const port = process.env.PORT || 5000;

app.use(cors());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    // socket.broadcast.emit(() => {
    //     io.emit('message', 'HI');
    // });
    socket.on('message', (msg) => {
        io.emit('message', msg);
    });
});

http.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

