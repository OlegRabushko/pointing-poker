import { IMsg } from '../../types/interfaces';
import { SET_MESSAGE } from './chat-types';

export const setMessage = (msg: IMsg) => ({
  type: SET_MESSAGE,
  payload: msg,
});
