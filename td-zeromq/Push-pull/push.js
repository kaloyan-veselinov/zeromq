const socket = require('zeromq').socket('push');

socket.bindSync("tcp://*:6666");

let counter = 0; 

setInterval(function () {
    const message = `Ping #${counter++}`;
    socket.send(message);
}, 2000);