import { IMsg } from '../../types/interfaces';
import { SET_MESSAGE } from './ChatTypes';

export const setMessage = (msg: IMsg) => ({
  type: SET_MESSAGE,
  payload: msg,
});
