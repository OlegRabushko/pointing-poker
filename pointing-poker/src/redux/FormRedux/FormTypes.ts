export const SET_OBSERVER = 'SET_OBSERVER';
export const SET_CONNECT_FORM_NAME = 'SET_CONNECT_FORM_NAME';
export const SET_CONNECT_FORM_SURNAME = 'SET_CONNECT_FORM_SURNAME';
export const SET_CONNECT_FORM_JOB = 'SET_CONNECT_FORM_JOB';
export const SET_AVATAR = 'SET_AVATAR';
export const SHOW_CONNECT_FORM = 'SHOW_CONNECT_FORM';
export const SHOW_ISSUES_FORM = 'SHOW_ISSUES_FORM';
export const SHOW_DELETE_PLAYER_FORM = 'SHOW_DELETE_PLAYER_FORM';
export const SET_TITLE_ISSUE = 'SET_TITLE_ISSUE';
export const SET_LINK_ISSUE = 'SET_LINK_ISSUE';
export const SET_PRIORITY_ISSUE = 'SET_PRIORITY_ISSUE';

// CONNECT FORM
interface IConnectRole {
  type: typeof SET_OBSERVER;
  payload: boolean;
}

interface IConnectFirstName {
  type: typeof SET_CONNECT_FORM_NAME;
  payload: string;
}

interface IConnectLastName {
  type: typeof SET_CONNECT_FORM_SURNAME;
  payload: string;
}

interface IConnectFormJob {
  type: typeof SET_CONNECT_FORM_JOB;
  payload: string;
}

interface IAvatar {
  type: typeof SET_AVATAR;
  payload: string;
}

export type ActionTypeConnectFormData =
  | IConnectFirstName
  | IConnectLastName
  | IConnectFormJob
  | IAvatar
  | IConnectRole;

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
