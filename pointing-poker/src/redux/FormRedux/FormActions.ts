import {
  SET_AVATAR,
  SET_CONNECT_FORM_JOB,
  SET_CONNECT_FORM_NAME,
  SET_CONNECT_FORM_SURNAME,
  SET_LINK_ISSUE,
  SET_OBSERVER,
  SET_PRIORITY_ISSUE,
  SET_TITLE_ISSUE,
  SHOW_CONNECT_FORM,
  SHOW_ISSUES_FORM,
} from './FormTypes';

export const setObserver = (payload: boolean) => ({
  type: SET_OBSERVER,
  payload,
});
export const setConnectFormName = (payload: string) => ({
  type: SET_CONNECT_FORM_NAME,
  payload,
});
export const setConnectFormSurname = (payload: string) => ({
  type: SET_CONNECT_FORM_SURNAME,
  payload,
});
export const setConnectFormJob = (payload: string) => ({
  type: SET_CONNECT_FORM_JOB,
  payload,
});
export const setAvatar = (payload: string) => ({
  type: SET_AVATAR,
  payload,
});
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
