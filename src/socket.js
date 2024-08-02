import io from 'socket.io-client';
const apiUrl = import.meta.env.VITE_URL


export const socket = io(apiUrl, {
    path: '/socket.io'
});

socket.on('connect', () => {
    console.log('Connected to server',socket.id);
    localStorage.setItem('socketId',socket.id)
});

socket.on('disconnect', () => {
    console.log('Disconnected from server',socket.id);
});

// socket.on('message', (msg) => {
//     console.log('New message:', msg);
// });
