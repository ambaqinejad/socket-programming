const socket = io();

socket.on('connect', () => {
    console.log('You were connected to server');
})

socket.on('disconnect', () => {
    console.log('You were disconnected from server');
})