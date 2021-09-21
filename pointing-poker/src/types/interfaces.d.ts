export interface IMsg {
  msgId?: string;
  game_id: string;
  user_id: string;
  text: string;
  time: string;
}

export interface IUserInfo {
  userId?: string;
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
