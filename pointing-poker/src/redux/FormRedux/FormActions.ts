import { IConnectForm, IIssueCard } from '../../components/Forms/FormTypes';
import {
  DELETE_ISSUE_DATA,
  SET_AVATAR,
  SET_DEALERS,
  SET_ISSUE_DATA,
  SET_OBSERVERS,
  SET_PLAYERS,
  SHOW_CONNECT_FORM,
  SHOW_DELETE_PLAYER_FORM,
  SHOW_ISSUES_FORM,
  UPDATE_PLAYERS_STATE,
} from './ReduxFormTypes';

// ROLE PLAYERS
export const setConnectFormDialer = (payload: IConnectForm, avatar: string, userID: string) => ({
  type: SET_DEALERS,
  payload: { ...payload, avatar, userID },
});

export const setConnectFormPlayer = (payload: IConnectForm, avatar: string, userID: string) => ({
  type: SET_PLAYERS,
  payload: { ...payload, avatar, userID },
});

export const setConnectFormObserver = (payload: IConnectForm, avatar: string, userID: string) => ({
  type: SET_OBSERVERS,
  payload: { ...payload, avatar, userID },
});

export const setUpdatedPlayersState = (payload: string) => ({
  type: UPDATE_PLAYERS_STATE,
  payload,
});

// AVATAR CONNECT FORM
export const setAvatar = (payload: string) => ({
  type: SET_AVATAR,
  payload,
});

// SHOW FORMS
export const showConnectForm = (payload: boolean) => ({
  type: SHOW_CONNECT_FORM,
  payload,
});
export const showIssuesForm = (payload: boolean) => ({
  type: SHOW_ISSUES_FORM,
  payload,
});
export const showDeleteForm = (payload: boolean) => ({
  type: SHOW_DELETE_PLAYER_FORM,
  payload,
});

// ISSUE FORM
export const createIssueCard = (payload: IIssueCard, issueID: string) => ({
  type: SET_ISSUE_DATA,
  payload: { ...payload, issueID },
});

export const deleteIssueCard = (payload: string) => ({
  type: DELETE_ISSUE_DATA,
  payload,
});
