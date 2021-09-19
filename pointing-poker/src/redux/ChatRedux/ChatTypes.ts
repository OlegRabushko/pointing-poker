import { IMsg } from '../../types/interfaces';

export const GET_MESSAGE = 'GET_MESSAGE';
export const GET_ALL_MESSAGES = 'GET_ALL_MESSAGES';

export type TChatActions = IActionGetMsg | IActionGetAllMsgs;

export interface IActionGetMsg {
  type: 'GET_MESSAGE';
  payload: IMsg;
}

export interface IActionGetAllMsgs {
  type: 'GET_ALL_MESSAGES';
  payload: IMsg[];
}
