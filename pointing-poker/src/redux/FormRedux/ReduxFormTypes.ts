import { IConnectForm, IIssueCard } from '../../components/Forms/FormTypes';

export const SHOW_CONNECT_FORM = 'SHOW_CONNECT_FORM';
export const SHOW_ISSUES_FORM = 'SHOW_ISSUES_FORM';

export const SET_ISSUE_DATA = 'SET_ISSUE_DATA';
export const DELETE_ISSUE_DATA = 'DELETE_ISSUE_DATA';
export const TOGGLE_CURRENT_ISSUE_CARD = 'TOGGLE_CURRENT_ISSUE_CARD';
export const SET_COMPLETED_ISSUE_CARD = 'SET_COMPLETED_ISSUE_CARD';
export const SET_ELEM_INDEX = 'SET_ELEM_INDEX';
export const RENAME_ISSUE_TITLE = 'RENAME_ISSUE_TITLE';
export const RESTART_ISSUES = 'RESTART_ISSUES';
export const RENAME_ISSUE_PRIORITY = 'RENAME_ISSUE_PRIORITY';

export const SET_DEALERS = 'SET_DEALERS';
export const SET_PLAYERS = 'SET_PLAYERS';
export const UPDATE_PLAYERS_STATE = 'UPDATE_PLAYERS_STATE';
export const SET_OBSERVERS = 'SET_OBSERVERS';
export const SET_AVATAR = 'SET_AVATAR';

// CONNECT FORM
export interface IInitialStatePlayers {
  userDealer: IConnectForm;
  userPlayers: IConnectForm[];
  userObservers: IConnectForm[];
}

interface IConnectUserDealer {
  type: typeof SET_DEALERS;
  payload: IConnectForm;
}

interface IConnectUserPlayer {
  type: typeof SET_PLAYERS;
  payload: IConnectForm;
}

interface IConnectUserObserver {
  type: typeof SET_OBSERVERS;
  payload: IConnectForm;
}

interface IUpdatePlayerState {
  type: typeof UPDATE_PLAYERS_STATE;
  payload: string;
}

export type ActionTypeConnectFormData =
  | IConnectUserDealer
  | IConnectUserPlayer
  | IConnectUserObserver
  | IUpdatePlayerState;

// AVATAR CONNECT FORM
export interface IAvatar {
  type: typeof SET_AVATAR;
  payload: string;
}

// ISSUE FORM
export interface IInitialStateIssueCards {
  issueCards: IIssueCard[];
  elemIndex: string;
}

interface ISetIssueFormData {
  type: typeof SET_ISSUE_DATA;
  payload: IIssueCard;
}

interface IDeleteIssueFormData {
  type: typeof DELETE_ISSUE_DATA;
  payload: string;
}

interface ICompletedIssueCard {
  type: typeof SET_COMPLETED_ISSUE_CARD;
  payload: { id: string; count: boolean };
}

interface IElemIndex {
  type: typeof SET_ELEM_INDEX;
  payload: number;
}

interface IToggleCurrentIssueCard {
  type: typeof TOGGLE_CURRENT_ISSUE_CARD;
  payload: string;
}

interface IRestartIssues {
  type: typeof RESTART_ISSUES;
  payload: boolean;
}
interface IRenameIssueTitle {
  type: typeof RENAME_ISSUE_TITLE;
  payload: string;
  issueID: string;
}

interface IRenameIssuePriority {
  type: typeof RENAME_ISSUE_PRIORITY;
  payload: string;
  issueID: string;
}

export type ActionTypeIssueCards =
  | ISetIssueFormData
  | IDeleteIssueFormData
  | IToggleCurrentIssueCard
  | IRenameIssueTitle
  | IRenameIssuePriority
  | ICompletedIssueCard
  | IElemIndex
  | IRestartIssues;

// SHOW FORMS
interface IShowConnectForm {
  type: typeof SHOW_CONNECT_FORM;
  payload: boolean;
}

interface IShowIssuesForm {
  type: typeof SHOW_ISSUES_FORM;
  payload: boolean;
}

export type ActionTypeShowForms = IShowConnectForm | IShowIssuesForm;
