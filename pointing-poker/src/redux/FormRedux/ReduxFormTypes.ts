import { IConnectForm, IIssueCard } from '../../components/Forms/FormTypes';

export const SHOW_CONNECT_FORM = 'SHOW_CONNECT_FORM';
export const SHOW_ISSUES_FORM = 'SHOW_ISSUES_FORM';
export const SHOW_DELETE_PLAYER_FORM = 'SHOW_DELETE_PLAYER_FORM';

export const SET_ISSUE_DATA = 'SET_ISSUE_DATA';
export const DELETE_ISSUE_DATA = 'DELETE_ISSUE_DATA';

export const SET_DEALERS = 'SET_DEALERS';
export const SET_PLAYERS = 'SET_PLAYERS';
export const UPDATE_PLAYERS_STATE = 'UPDATE_PLAYERS_STATE';
export const SET_OBSERVERS = 'SET_OBSERVERS';
export const SET_AVATAR = 'SET_AVATAR';

// CONNECT FORM
export interface IInitialStatePlayers {
  userDealers: IConnectForm[];
  userPlayers: IConnectForm[];
  userObservers: IConnectForm[];
}

interface IConnectIsDealer {
  type: typeof SET_DEALERS;
  payload: IConnectForm;
}

interface IConnectIsPlayer {
  type: typeof SET_PLAYERS;
  payload: IConnectForm;
}

interface IConnectIsObserver {
  type: typeof SET_OBSERVERS;
  payload: IConnectForm;
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

// ISSUE FORM
export interface IInitialStateIssueCards {
  issueCards: IIssueCard[];
}

interface ISetIssueFormData {
  type: typeof SET_ISSUE_DATA;
  payload: IIssueCard;
}

interface IDeleteIssueFormData {
  type: typeof DELETE_ISSUE_DATA;
  payload: string;
}

export type ActionTypeIssueCards = ISetIssueFormData | IDeleteIssueFormData;

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
