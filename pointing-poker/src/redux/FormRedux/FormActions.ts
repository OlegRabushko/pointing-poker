import {
  IConnectFormData,
  SET_AVATAR,
  SET_IS_DEALER,
  SET_IS_OBSERVER,
  SET_IS_PLAYER,
  SET_LINK_ISSUE,
  SET_PRIORITY_ISSUE,
  SET_TITLE_ISSUE,
  SHOW_CONNECT_FORM,
  SHOW_ISSUES_FORM,
} from './FormTypes';

export const setConnectFormDialer = (payload: IConnectFormData, avatar: string) => ({
  type: SET_IS_DEALER,
  payload: { ...payload, avatar },
});
export const setConnectFormPlayer = (payload: IConnectFormData, avatar: string) => ({
  type: SET_IS_PLAYER,
  payload: { ...payload, avatar },
});
export const setConnectFormObserver = (payload: IConnectFormData, avatar: string) => ({
  type: SET_IS_OBSERVER,
  payload: { ...payload, avatar },
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
