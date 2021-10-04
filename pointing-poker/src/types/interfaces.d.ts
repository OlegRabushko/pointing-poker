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

export interface IssueData {
  _id?: string;
  game_id?: string;
  isCurrent?: boolean;
  isCompleted?: boolean;
  title: string;
  link?: string;
  priority: string;
  results: IGameCardValues[];
}

export interface IGameCardValues {
  id: string;
  stats: number;
  content: string;
}

export interface Issues {
  [key: string]: IssueData;
}
