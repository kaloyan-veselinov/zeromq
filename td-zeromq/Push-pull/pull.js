const socket = require('zeromq').socket('pull');

socket.connect('tcp://localhost:6666');
socket.on('message', function(msg) {
  console.log(`Message ${msg}`);  
});