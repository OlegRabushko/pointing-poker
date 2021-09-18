export const SET_OBSERVER = 'SET_OBSERVER';
export const SHOW_CONNECT_FORM = 'SHOW_CONNECT_FORM';
export const SHOW_ISSUES_FORM = 'SHOW_ISSUES_FORM';
export const SHOW_DELETE_PLAYER_FORM = 'SHOW_DELETE_PLAYER_FORM';
export const SET_TITLE_ISSUE = 'SET_TITLE_ISSUE';
export const SET_LINK_ISSUE = 'SET_LINK_ISSUE';
export const SET_PRIORITY_ISSUE = 'SET_PRIORITY_ISSUE';
export const SET_DEALERS = 'SET_DEALERS';
export const SET_PLAYERS = 'SET_PLAYERS';
export const UPDATE_PLAYERS_STATE = 'UPDATE_PLAYERS_STATE';
export const SET_OBSERVERS = 'SET_OBSERVERS';
export const SET_AVATAR = 'SET_AVATAR';

// CONNECT FORM

export interface IConnectFormData {
  userID: string;
  firstName: string;
  lastName: string;
  job: string;
  avatar: string;
}

export interface IInitialStateFormData {
  userDealers: IConnectFormData[];
  userPlayers: IConnectFormData[];
  userObservers: IConnectFormData[];
}

interface IConnectIsDealer {
  type: typeof SET_DEALERS;
  payload: IConnectFormData;
}

interface IConnectIsPlayer {
  type: typeof SET_PLAYERS;
  payload: IConnectFormData;
}

interface IConnectIsObserver {
  type: typeof SET_OBSERVERS;
  payload: IConnectFormData;
}

interface IUpdatePlayerState {
  type: typeof UPDATE_PLAYERS_STATE;
  payload: string;
}

export type ActionTypeConnectFormData =
  | IConnectIsDealer
  | IConnectIsPlayer
  | IConnectIsObserver
  | IUpdatePlayerState;

// AVATAR CONNECT FORM
export interface IAvatar {
  type: typeof SET_AVATAR;
  payload: string;
}

// ISSUES FORM
interface IIssueTitle {
  type: typeof SET_TITLE_ISSUE;
  payload: string;
}

interface IIssueLink {
  type: typeof SET_LINK_ISSUE;
  payload: string;
}

interface IIssuePriority {
  type: typeof SET_PRIORITY_ISSUE;
  payload: string;
}

export type ActionTypeIssueFormData = IIssueTitle | IIssueLink | IIssuePriority;

// SHOW FORMS
interface IShowConnectForm {
  type: typeof SHOW_CONNECT_FORM;
  payload: boolean;
}

interface IShowIssuesForm {
  type: typeof SHOW_ISSUES_FORM;
  payload: boolean;
}

interface IShowDeletePlayerForm {
  type: typeof SHOW_DELETE_PLAYER_FORM;
  payload: boolean;
}

export type ActionTypeShowForms = IShowConnectForm | IShowIssuesForm | IShowDeletePlayerForm;
