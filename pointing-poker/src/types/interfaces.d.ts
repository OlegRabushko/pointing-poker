export interface IMsg {
  msgId?: string;
  userId: string;
  username: string;
  msgText: string;
  msgDate: string;
}

export interface IUserInfo {
  userID: string;
  firstName: string;
  lastName: string;
  role: string;
  job: string;
  avatar: string;
}

export interface IUsers {
  [key: string]: IUserInfo;
}
