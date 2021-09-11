import { IUserInfo } from '../../types/interfaces';
import { SET_CURR_USER_ID, SET_USER } from './initial-types';

export const setCurrUserID = (id: string) => ({
  type: SET_CURR_USER_ID,
  payload: id,
});

export const setUser = (userInfo: IUserInfo) => ({
  type: SET_USER,
  payload: userInfo,
});
