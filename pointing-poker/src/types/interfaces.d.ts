export interface IMsg {
  _id?: string;
  game_id: string;
  user_id: string;
  text: string;
  time: string;
}

export interface IUserInfo {
  _id?: string;
  game_id?: string;
  name: string;
  lastName: string;
  isDialer: Boolean;
  isObserver: Boolean;
  isPlayer: Boolean;
  job: string;
  avatar: string;
}

export interface IUsers {
  [key: string]: IUserInfo;
}

export interface IInputComponentProps {
  setter: (count: number) => { type: string; payload: number };
  count: number;
  actualCount: number;
}
