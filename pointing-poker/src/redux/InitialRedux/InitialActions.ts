import { IUserInfo } from '../../types/interfaces';
import {
  IActionSetCurrUserID,
  IActionSetGameId,
  IActionSetGameTitle,
  IActionSetUser,
  IActionSetUsers,
  SET_CHECK,
  SET_CURR_USER_ID,
  SET_DILER_ID,
  SET_GAME_ID,
  SET_GAME_TITLE,
  SET_MINI_GAME,
  SET_ROUND,
  SET_USER,
  SET_USERS,
} from './InitialTypes';

export const setCurrUserID = (id: string): IActionSetCurrUserID => ({
  type: SET_CURR_USER_ID,
  payload: id,
});

export const setUser = (userInfo: IUserInfo): IActionSetUser => ({
  type: SET_USER,
  payload: userInfo,
});

export const setUsers = (usersArr: IUserInfo[]): IActionSetUsers => ({
  type: SET_USERS,
  payload: usersArr,
});

export const setGameId = (gameId: string): IActionSetGameId => ({
  type: SET_GAME_ID,
  payload: gameId,
});

export const setGameTitle = (gameTitle: string): IActionSetGameTitle => ({
  type: SET_GAME_TITLE,
  payload: gameTitle,
});

export const setRound = (count: boolean) => ({
  type: SET_ROUND,
  payload: count,
});

export const setMiniGame = (count: boolean) => ({
  type: SET_MINI_GAME,
  payload: count,
});

export const setDilerId = (id: string) => ({
  type: SET_DILER_ID,
  payload: id,
});
export const setCheck = (payload: any) => ({
  type: SET_CHECK,
  payload,
});
