import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import io from 'socket.io-client';
import { moveMessagePortToContext } from 'worker_threads';
import { getMessage, IGetMsg } from '../redux/ChatRedux/ChatActions';
import { IChatState } from '../redux/ChatRedux/ChatReducer';
import { IMsg } from '../types/interfaces';

export const socket = io('http://localhost:7001');

export const connectToSocket = () => {
  socket.on('connect', () => {
    console.log('user connected with id msg from client', socket.id);
  });
};

export const sendMsgToAll = async (msg: IMsg) => {
  console.log('send msg from client', msg);
  await socket.emit('send-msg', msg);
};

export const recieveMsg =
  (): ThunkAction<void, IChatState, unknown, IGetMsg> =>
  (dispatch: ThunkDispatch<IChatState, unknown, IGetMsg>) =>
    socket.on('recieve-msg', (msg) => {
      console.log('recieve from servver', msg);
      dispatch(getMessage(msg));
    });
