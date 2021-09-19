import { IUserInfo, IUsers } from '../../types/interfaces';

export const SET_CURR_USER_ID = 'SET_USER_ID';
export const SET_USER = 'SET_USER';

export interface InitialState {
  gameId: string;
  currUserID: string;
  users: IUsers;
}

export type TReduxInitial = ISetCurrUserID | ISetUser;

export interface ISetCurrUserID {
  type: typeof SET_CURR_USER_ID;
  payload: string;
}

export interface ISetUser {
  type: typeof SET_USER;
  payload: IUserInfo;
}
