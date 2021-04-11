const path = require('path');
const http = require('http');

const express = require('express');
const socketIO = require('socket.io');

const PORT = process.env.PORT || 3000;

const app = express();

const server = http.createServer(app);
const io = socketIO(server);

io.on('connect', (socket) => {
    console.log('Someone was connected.');

    socket.on('disconnect', () => {
        console.log('Someone was disconnected.');
    })
})
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res, next) => {
    res.json({
        name: 'Heroku app'
    })
})

server.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
})