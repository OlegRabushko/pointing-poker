import { IUserInfo } from '../../types/interfaces';
import {
  IActionSetCurrUserID,
  IActionSetGameId,
  IActionSetUser,
  SET_CURR_USER_ID,
  SET_GAME_ID,
  SET_USER,
} from './InitialTypes';

export const setCurrUserID = (id: string): IActionSetCurrUserID => ({
  type: SET_CURR_USER_ID,
  payload: id,
});

export const setUser = (userInfo: IUserInfo): IActionSetUser => ({
  type: SET_USER,
  payload: userInfo,
});

export const setGameId = (gameId: string): IActionSetGameId => ({
  type: SET_GAME_ID,
  payload: gameId,
});
