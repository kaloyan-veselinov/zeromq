let zmq = require('zeromq');
let socket = zmq.socket('req');

socket.connect('tcp://127.0.0.1:6666');
socket.send("This is a message");