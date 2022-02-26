//import express and call it
const express = require('express')
const app = express()

//import http and create server
const http = require('http');
const server = http.Server(app);

//import socket.io and create IO server with http server
const io = require('socket.io')(server);

const cors = require('cors');
const port = process.env.PORT || 5000


/*
const server = require('http').createServer(app);
const Websocket = require('ws');
const wss = new Websocket.Server({ server: server });

wss.on("connection", function connection(ws) {
    console.log("A new client connected");
    ws.send("Welcome new client");
});

wss.on("message", function incoming(message) {
    console.log("received %s", message);
})
*/
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.sendFile(__dirname + './index.html');
});

io.on('connection', (socket) => {
    socket.on('message', (msg) => {
        io.emit('message', msg);
    });
});

http.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

