import io from 'socket.io-client';
import { IMsg } from '../types/interfaces';

const socket = io('http://localhost:7001');

export const connectToSocket = () => {
  socket.on('connect', () => {
    // console.log('user connected with id', socket.id);
  });
};

export const sendMsgToAll = (msg: IMsg) => {
  socket.emit('send-msg', msg);
};
