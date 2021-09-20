import { IMsg } from '../../types/interfaces';
import { SET_MESSAGE, SET_OPEN_CHAT } from './ChatTypes';

export const setMessage = (msg: IMsg) => ({
  type: SET_MESSAGE,
  payload: msg,
});

export const setOpenChat = (count: boolean) => ({
  type: SET_OPEN_CHAT,
  payload: count,
});
