export interface IMsg {
  msgId?: string;
  userId: string;
  username: string;
  msgText: string;
  msgDate: string;
}

export interface IUserInfo {
  userID: string;
  userName: string;
  userLatName: string;
  role: string;
  position: string;
  avatatr: string;
}

export interface IUsers {
  [key: string]: IUserInfo;
}
