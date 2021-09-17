export const SET_OBSERVER = 'SET_OBSERVER';
export const SHOW_CONNECT_FORM = 'SHOW_CONNECT_FORM';
export const SHOW_ISSUES_FORM = 'SHOW_ISSUES_FORM';
export const SHOW_DELETE_PLAYER_FORM = 'SHOW_DELETE_PLAYER_FORM';
export const SET_TITLE_ISSUE = 'SET_TITLE_ISSUE';
export const SET_LINK_ISSUE = 'SET_LINK_ISSUE';
export const SET_PRIORITY_ISSUE = 'SET_PRIORITY_ISSUE';
export const SET_IS_DEALER = 'SET_IS_DEALER';
export const SET_IS_PLAYER = 'SET_IS_PLAYER';
export const SET_IS_OBSERVER = 'SET_IS_OBSERVER';
export const SET_AVATAR = 'SET_AVATAR';

// CONNECT FORM

export interface IConnectFormData {
  firstName: string;
  lastName: string;
  job: string;
  avatar: string;
}

export interface IInitialStateFormData {
  isUserDealer: IConnectFormData[];
  isUserPlayer: IConnectFormData[];
  isUserObserver: IConnectFormData[];
}

interface IConnectIsDealer {
  type: typeof SET_IS_DEALER;
  payload: IConnectFormData;
}

interface IConnectIsPlayer {
  type: typeof SET_IS_PLAYER;
  payload: IConnectFormData;
}

interface IConnectIsObserver {
  type: typeof SET_IS_OBSERVER;
  payload: IConnectFormData;
}

export type ActionTypeConnectFormData = IConnectIsDealer | IConnectIsPlayer | IConnectIsObserver;

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
