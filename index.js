//import express and call it
const app = require('express')();

//import http and create server
const http = require('http').Server(app);

//import socket.io and create IO server with http server
const io = require('socket.io')(http);

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    socket.on('message', (msg) => {
        io.emit('message', msg);
    });
});

http.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

