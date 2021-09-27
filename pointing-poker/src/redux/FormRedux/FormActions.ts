import { IConnectForm, IIssueCard } from '../../components/Forms/FormTypes';
import {
  DELETE_ISSUE_DATA,
  SET_AVATAR,
  SET_DEALERS,
  SET_ISSUE_DATA,
  TOGGLE_CURRENT_ISSUE_CARD,
  SET_OBSERVERS,
  SET_PLAYERS,
  SHOW_CONNECT_FORM,
  SHOW_ISSUES_FORM,
  UPDATE_PLAYERS_STATE,
  RENAME_ISSUE_TITLE,
  RENAME_ISSUE_PRIORITY,
  SET_COMPLETED_ISSUE_CARD,
  SET_ELEM_INDEX,
  RESTART_ISSUES,
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

// ISSUE FORM
export const createIssueCard = (
  payload: IIssueCard,
  issueID: string,
  current: boolean,
  isCompleted: boolean,
) => ({
  type: SET_ISSUE_DATA,
  payload: { ...payload, issueID, current, isCompleted },
});

export const deleteIssueCard = (payload: string) => ({
  type: DELETE_ISSUE_DATA,
  payload,
});

export const toggleCurrentIssueCard = (payload: string) => ({
  type: TOGGLE_CURRENT_ISSUE_CARD,
  payload,
});

export const setCompletedIssueCard = (payload: { id: string; count: boolean }) => ({
  type: SET_COMPLETED_ISSUE_CARD,
  payload,
});

export const setElementIndex = (payload: number) => ({
  type: SET_ELEM_INDEX,
  payload,
});

export const renameIssueTitle = (payload: string, issueID: string) => ({
  type: RENAME_ISSUE_TITLE,
  payload,
  issueID,
});

export const renameIssuePriority = (payload: string, issueID: string) => ({
  type: RENAME_ISSUE_PRIORITY,
  payload,
  issueID,
});

export const restartIssues = (payload: boolean) => ({
  type: RESTART_ISSUES,
  payload,
});
