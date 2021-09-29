import { io } from 'socket.io-client';
import { History } from 'history';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { setMessage } from '../redux/ChatRedux/ChatActions';
import { IChatState } from '../redux/ChatRedux/ChatReducer';
import { IActionSetMsg } from '../redux/ChatRedux/ChatTypes';
import { setUser } from '../redux/InitialRedux/InitialActions';
import { IActionSetUser, InitialState } from '../redux/InitialRedux/InitialTypes';
import { TimerStateTypes } from '../redux/TimerRedux/TimerReducer';
import { IMsg, IUserInfo } from '../types/interfaces';
import { ILobbySettingsState } from '../redux/SettingsSectionRedux/SettingsSectionReducer';
import {
  setCardInRoundEnd,
  setCoffeeCard,
  setQuestionCard,
  setScramMasterRole,
  setSequenceType,
  setTimer,
} from '../redux/SettingsSectionRedux/SettingsSectionActions';
import { setStartTime } from '../redux/TimerRedux/TimerActions';

export const socket = io('http://localhost:7001');

export const connectToSocket = (roomId: string) => {
  socket.emit('join-game', roomId);
};

export const sendMsgToAll = async (msg: IMsg) => {
  socket.emit('send-msg', msg);
};

export const recieveMsg =
  (): ThunkAction<void, IChatState, unknown, IActionSetMsg> =>
  (dispatch: ThunkDispatch<IChatState, unknown, IActionSetMsg>) =>
    socket.on('recieve-msg', (msg) => {
      dispatch(setMessage(msg));
    });

export const jonedNotification = (
  dispatch: ThunkDispatch<InitialState, unknown, IActionSetUser>,
) => {
  socket.on('joined', (users) => {
    users.map((user: IUserInfo) => dispatch(setUser(user)));
  });
};

export const sendSettingsToAll = (settings: ILobbySettingsState, id: string) => {
  socket.emit('game-settings', settings, id);
};

export const receivedSettings = (
  dispatch: ThunkDispatch<ILobbySettingsState, unknown, any>,
  history: History,
) => {
  socket.on('received-settings', (settings: ILobbySettingsState) => {
    dispatch(setScramMasterRole(settings.scramMasterAsPlayer));
    dispatch(setCardInRoundEnd(settings.changeCardInRoundEnd));
    dispatch(setTimer(settings.timerNeeded));
    dispatch(setCoffeeCard(settings.coffeeCardNeeded));
    dispatch(setQuestionCard(settings.questionCardNeeded));
    dispatch(setSequenceType(settings.sequenceType));
    history.push('/game');
  });
};

export const sendTimerToAll = (time: TimerStateTypes, id: string) => {
  socket.emit('set-timer', time, id);
};

export const receivedTimer = (dispatch: ThunkDispatch<TimerStateTypes, unknown, any>) => {
  socket.on('received-timer', (time: TimerStateTypes) => {
    dispatch(setStartTime([time.minutes, time.seconds]));
  });
};
