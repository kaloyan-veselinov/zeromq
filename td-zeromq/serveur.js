let zmq = require('zeromq');
let socket = zmq.socket('rep');

socket.on('message', function(request) {
  console.log(request.toString());
})

socket.bindSync('tcp://*:6666'); 
