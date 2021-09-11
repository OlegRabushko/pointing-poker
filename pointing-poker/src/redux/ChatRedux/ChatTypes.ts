import { IMsg } from '../../types/interfaces';

export const SET_MESSAGE = 'SET_MESSAGE';

export type TReduxChat = {
  type: typeof SET_MESSAGE;
  payload: IMsg;
};
