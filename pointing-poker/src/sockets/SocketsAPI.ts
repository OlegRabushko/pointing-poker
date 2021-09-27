import { io } from 'socket.io-client';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { setMessage } from '../redux/ChatRedux/ChatActions';
import { IChatState } from '../redux/ChatRedux/ChatReducer';
import { IActionSetMsg } from '../redux/ChatRedux/ChatTypes';
import { setUser } from '../redux/InitialRedux/InitialActions';
import { IActionSetUser, InitialState } from '../redux/InitialRedux/InitialTypes';
import { IMsg, IUserInfo } from '../types/interfaces';

export const socket = io('http://localhost:7001');

export const connectToSocket = (roomId: string) => {
  socket.emit('join-game', roomId);
};

export const sendMsgToAll = async (msg: IMsg) => {
  console.log('send msg from client', msg);
  socket.emit('send-msg', msg);
};

export const recieveMsg =
  (): ThunkAction<void, IChatState, unknown, IActionSetMsg> =>
  (dispatch: ThunkDispatch<IChatState, unknown, IActionSetMsg>) =>
    socket.on('recieve-msg', (msg) => {
      console.log('recieve from servver', msg);
      dispatch(setMessage(msg));
    });

export const jonedNotification = (
  dispatch: ThunkDispatch<InitialState, unknown, IActionSetUser>,
) => {
  socket.on('joined', (users, socketId) => {
    console.log('joined', socketId, users);
    users.map((user: IUserInfo) => dispatch(setUser(user)));
  });
};
