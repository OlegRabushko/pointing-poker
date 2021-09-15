export interface IMsg {
  msgId?: string;
  order_id: string;
  user_id: string;
  username: string;
  text: string;
  time: string;
}

export interface IUserInfo {
  userID: string;
  name: string;
  lastName: string;
  role: string;
  position: string;
  avatar: string;
}

export interface IUsers {
  [key: string]: IUserInfo;
}
