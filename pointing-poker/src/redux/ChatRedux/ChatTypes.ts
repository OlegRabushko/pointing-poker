import { IMsg } from '../../types/interfaces';

export const SET_MESSAGE = 'SET_MESSAGE';
export const SET_ALL_MESSAGES = 'SET_ALL_MESSAGES';

export type TChatActions = IActionSetMsg | IActionSetAllMsgs | IActionOpenChat;

export interface IActionSetMsg {
  type: 'SET_MESSAGE';
  payload: IMsg;
}

export interface IActionSetAllMsgs {
  type: 'SET_ALL_MESSAGES';
  payload: IMsg[];
}

export interface IActionOpenChat {
  type: 'SET_OPEN_CHAT';
  payload: boolean;
}

export const SET_OPEN_CHAT = 'SET_OPEN_CHAT';
