export interface IMsg {
  msgId?: string;
  game_id: string;
  user_id: string;
  text: string;
  time: string;
}

export interface IUserInfo {
  userID: string;
  name: string;
  lastName: string;
  role: string;
  job: string;
  avatar: string;
}

export interface IUsers {
  [key: string]: IUserInfo;
}
