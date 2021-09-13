import {
  SET_AVATAR,
  SET_CONNECT_FORM_NAME,
  SET_CONNECT_FORM_JOB,
  SET_CONNECT_FORM_SURNAME,
  SET_OBSERVER,
  SHOW_CONNECT_FORM,
} from './types';

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
