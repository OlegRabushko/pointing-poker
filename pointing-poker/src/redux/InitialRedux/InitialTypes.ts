import { IUserInfo, IUsers } from '../../types/interfaces';

export const SET_CURR_USER_ID = 'SET_USER_ID';
export const SET_USER = 'SET_USER';
export const SET_USERS = 'SET_USERS';
export const SET_GAME_ID = 'SET_GAME_ID';
export const SET_ROUND = 'SET_ROUND';
export const SET_MINI_GAME = 'SET_MINI_GAME';
export const SET_DILER_ID = 'SET_DILER_ID';
export const SET_GAME_TITLE = 'SET_GAME_TITLE';
export const SET_DELETED_USER = 'SET_DELETED_USER';

export const SET_CHECK = 'SET_CHECK';
export interface III {
  type: typeof SET_CHECK;
  payload: any;
}

export interface InitialState {
  gameId: string;
  gameTitle: string;
  dilerId: string;
  currUserID: string;
  users: IUsers;
  NotUserArr: IUserInfo[];
}

export type TActionsInitial =
  | IActionSetCurrUserID
  | IActionSetUser
  | IActionSetGameId
  | IActionSetUsers
  | IActionSetDilerID
  | IActionSetGameTitle
  | IActionDeleteUser;

export interface IActionSetCurrUserID {
  type: 'SET_USER_ID';
  payload: string;
}

export interface IActionSetUser {
  type: 'SET_USER';
  payload: IUserInfo;
}

export interface IActionSetUsers {
  type: 'SET_USERS';
  payload: IUserInfo[];
}

export interface IActionSetDilerID {
  type: 'SET_DILER_ID';
  payload: string;
}

export interface IActionTypeGameProcess {
  type: typeof SET_ROUND | typeof SET_MINI_GAME | typeof SET_CHECK;
  payload: boolean | any;
}

export interface IActionSetGameId {
  type: 'SET_GAME_ID';
  payload: string;
}

export interface IActionSetGameTitle {
  type: 'SET_GAME_TITLE';
  payload: string;
}

export interface IActionDeleteUser {
  type: 'SET_DELETED_USER';
  payload: string;
}
