import { IUserInfo, IUsers } from '../../types/interfaces';

export const SET_CURR_USER_ID = 'SET_USER_ID';
export const SET_USER = 'SET_USER';
export const SET_ROUND = 'SET_ROUND';

export interface InitialState {
  currUserID: string;
  users: IUsers;
}

export type TReduxInitial = ISetCurrUserID | ISetUser;

export interface ISetCurrUserID {
  type: typeof SET_CURR_USER_ID;
  payload: string;
}

export interface ActionTypeGameProcess {
  type: typeof SET_ROUND;
  payload: boolean;
}

export interface ISetUser {
  type: typeof SET_USER;
  payload: IUserInfo;
}
