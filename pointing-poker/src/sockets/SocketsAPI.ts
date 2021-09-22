import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import io from 'socket.io-client';
import { getMessage, IGetMsg } from '../redux/ChatRedux/ChatActions';
import { IChatState } from '../redux/ChatRedux/ChatReducer';
import { IMsg } from '../types/interfaces';

export const socket = io('http://localhost:7001');

export const connectToSocket = (roomId: string) => {
  socket.emit('room-join', roomId);
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

