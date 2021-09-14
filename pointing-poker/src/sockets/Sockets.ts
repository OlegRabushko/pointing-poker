import io from 'socket.io-client';

export const connectToSocket = () => {
  const socket = io('http://localhost:7000');
  socket.on('connect', () => {
    // console.log('user connected with id', socket.id);
  });
};
