const express = require('express')
const app = express()
const cors = require('cors');
const port = process.env.PORT || 5000

const eWss = require('express-ws')(app);

app.ws('/', (ws, req) => {
    ws.on("connection", (ws) => {
        console.log("A new client connected");
        ws.send("Welcome new user");
    });

    ws.on("message", function incoming(message) {
        console.log("received %s", message);
    })

})

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

app.use(cors());
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})