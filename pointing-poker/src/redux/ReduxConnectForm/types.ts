export const SET_OBSERVER = 'SET_OBSERVER';
export const SET_CONNECT_FORM_NAME = 'SET_CONNECT_FORM_NAME';
export const SET_CONNECT_FORM_SURNAME = 'SET_CONNECT_FORM_SURNAME';
export const SET_CONNECT_FORM_JOB = 'SET_CONNECT_FORM_JOB';
export const SET_AVATAR = 'SET_AVATAR';
export const SHOW_CONNECT_FORM = 'SHOW_CONNECT_FORM';

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

interface IShowConnectForm {
  type: typeof SHOW_CONNECT_FORM;
  payload: boolean;
}

export type ActionTypeConnectFormData =
  | IConnectFirstName
  | IConnectLastName
  | IConnectFormJob
  | IAvatar
  | IShowConnectForm
  | IConnectRole;
