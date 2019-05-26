import express = require('express');

const app:express.Application = express();
const port:Number = 3000;
const http = require('http').Server(app);
const io = require('socket.io')(http)

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket:any){
    console.log('a player connected');
});

http.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
});