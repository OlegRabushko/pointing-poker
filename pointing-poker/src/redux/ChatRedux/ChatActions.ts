import { IMsg } from '../../types/interfaces';
import { GET_ALL_MESSAGES, GET_MESSAGE, IActionGetAllMsgs, IActionGetMsg } from './ChatTypes';

export const getMessage = (msg: IMsg): IActionGetMsg => ({
  type: GET_MESSAGE,
  payload: msg,
});

export const getAllMessage = (msgs: IMsg[]): IActionGetAllMsgs => ({
  type: GET_ALL_MESSAGES,
  payload: msgs,
});
