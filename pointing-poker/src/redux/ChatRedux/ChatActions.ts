import { IMsg } from '../../types/interfaces';
import {
  IActionOpenChat,
  IActionSetAllMsgs,
  IActionSetMsg,
  SET_ALL_MESSAGES,
  SET_MESSAGE,
  SET_OPEN_CHAT,
} from './ChatTypes';

export const setMessage = (msg: IMsg): IActionSetMsg => ({
  type: SET_MESSAGE,
  payload: msg,
});

export const setAllMessage = (msgs: IMsg[]): IActionSetAllMsgs => ({
  type: SET_ALL_MESSAGES,
  payload: msgs,
});
export const setOpenChat = (currState: boolean): IActionOpenChat => ({
  type: SET_OPEN_CHAT,
  payload: currState,
});
