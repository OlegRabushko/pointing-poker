import {
  IConnectFormData,
  SET_AVATAR,
  SET_DEALERS,
  SET_LINK_ISSUE,
  SET_OBSERVERS,
  SET_PLAYERS,
  SET_PRIORITY_ISSUE,
  SET_TITLE_ISSUE,
  SHOW_CONNECT_FORM,
  SHOW_DELETE_PLAYER_FORM,
  SHOW_ISSUES_FORM,
  UPDATE_PLAYERS_STATE,
} from './FormTypes';

export const setConnectFormDialer = (
  payload: IConnectFormData,
  avatar: string,
  userID: string,
) => ({
  type: SET_DEALERS,
  payload: { ...payload, avatar, userID },
});

export const setConnectFormPlayer = (
  payload: IConnectFormData,
  avatar: string,
  userID: string,
) => ({
  type: SET_PLAYERS,
  payload: { ...payload, avatar, userID },
});

export const setConnectFormObserver = (
  payload: IConnectFormData,
  avatar: string,
  userID: string,
) => ({
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

// ACTION-CREATORS ISSUE FORM
export const setIssueTitle = (payload: string) => ({
  type: SET_TITLE_ISSUE,
  payload,
});
export const setIssueLink = (payload: string) => ({
  type: SET_LINK_ISSUE,
  payload,
});
export const setIssuePriority = (payload: string) => ({
  type: SET_PRIORITY_ISSUE,
  payload,
});
