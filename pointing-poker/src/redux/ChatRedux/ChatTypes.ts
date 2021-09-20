import { IMsg } from '../../types/interfaces';

export const SET_MESSAGE = 'SET_MESSAGE';
export const SET_OPEN_CHAT = 'SET_OPEN_CHAT';

export type TReduxChat = {
  type: typeof SET_MESSAGE | typeof SET_OPEN_CHAT;
  payload: IMsg | boolean;
};
