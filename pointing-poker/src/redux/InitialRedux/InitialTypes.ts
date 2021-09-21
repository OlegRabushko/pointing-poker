import { IUserInfo, IUsers } from '../../types/interfaces';

export const SET_CURR_USER_ID = 'SET_USER_ID';
export const SET_USER = 'SET_USER';
export const SET_GAME_ID = 'SET_GAME_ID';

export interface InitialState {
  gameId: string;
  currUserID: string;
  users: IUsers;
}

export type TActionsInitial = IActionSetCurrUserID | IActionSetUser | IActionSetGameId;

export interface IActionSetCurrUserID {
  type: 'SET_USER_ID';
  payload: string;
}

export interface IActionSetUser {
  type: 'SET_USER';
  payload: IUserInfo;
}

export interface IActionSetGameId {
  type: 'SET_GAME_ID';
  payload: string;
}
