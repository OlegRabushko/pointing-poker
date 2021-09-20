import { IUserInfo } from '../../types/interfaces';
import { SET_CURR_USER_ID, SET_ROUND, SET_USER } from './InitialTypes';

export const setCurrUserID = (id: string) => ({
  type: SET_CURR_USER_ID,
  payload: id,
});

export const setUser = (userInfo: IUserInfo) => ({
  type: SET_USER,
  payload: userInfo,
});

export const setRound = (count: boolean) => ({
  type: SET_ROUND,
  payload: count,
});
