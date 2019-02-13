const socket = require(`zeromq`).socket(`sub`);

const topic = 'heartbeat';
socket.connect('tcp://localhost:3000');
socket.subscribe(topic);
socket.on('message', function(msg) {
    console.log(`Message ${msg}`);  
});