import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import io from 'socket.io-client';
import { setMessage } from '../redux/ChatRedux/ChatActions';
import { IChatState } from '../redux/ChatRedux/ChatReducer';
import { IActionSetMsg } from '../redux/ChatRedux/ChatTypes';
import { setUser } from '../redux/InitialRedux/InitialActions';
import { IMsg, IUserInfo } from '../types/interfaces';

export const socket = io('http://localhost:7001');

export const connectToSocket = (roomId: string, user: IUserInfo) => {
  socket.emit('room-join', roomId, user);
};

export const sendMsgToAll = async (msg: IMsg) => {
  console.log('send msg from client', msg);
  await socket.emit('send-msg', msg);
};

export const recieveMsg =
  (): ThunkAction<void, IChatState, unknown, IActionSetMsg> =>
  (dispatch: ThunkDispatch<IChatState, unknown, IActionSetMsg>) =>
    socket.on('recieve-msg', (msg) => {
      console.log('recieve from servver', msg);
      dispatch(setMessage(msg));
    });

export const jonedNotification = () => {
  socket.on('joined', (user) => {
    console.log('joined', user);
    setUser(user);
  });
};
