export const SET_HERO_INFO = 'SET_HERO_INFO';
export const SET_SCRAM_MASTER_ROLE = 'SET_SCRAM_MASTER_ROLE';
export const SET_CARD_IN_ROUND_END = 'SET_CARD_IN_ROUND_END';
export const SET_TIMER = 'SET_TIMER';
export const SET_COFFEE_CARD = 'SET_COFFEE_CARD';
export const SET_QUESTION_CARD = 'SET_QUESTION_CARD';
export const SET_OBSERVER = 'SET_OBSERVER';
export const SET_CONNECT_FORM_NAME = 'SET_CONNECT_FORM_NAME';
export const SET_CONNECT_FORM_SURNAME = 'SET_CONNECT_FORM_SURNAME';
export const SET_CONNECT_FORM_ROLE = 'SET_CONNECT_FORM_ROLE';
export const SET_AVATAR = 'SET_AVATAR';
export const SHOW_CONNECT_FORM = 'SHOW_CONNECT_FORM';

export type ActionColor = {
  about: boolean;
  home: boolean;
};

export type ReduxStateType = {
  type: typeof SET_HERO_INFO;
  payload: string;
};

export type ActionTypeLobbySettings = {
  type:
    | typeof SET_SCRAM_MASTER_ROLE
    | typeof SET_CARD_IN_ROUND_END
    | typeof SET_TIMER
    | typeof SET_COFFEE_CARD
    | typeof SET_QUESTION_CARD;
  payload: boolean;
};

export type ActionTypeConnectLobby = {
  type: typeof SET_OBSERVER;
  payload: boolean;
};

// CONNECT FORM TYPES
interface IConnectFormName {
  type: typeof SET_CONNECT_FORM_NAME;
  payload: string;
}

interface IConnectFormSurname {
  type: typeof SET_CONNECT_FORM_SURNAME;
  payload: string;
}

interface IConnectFormRole {
  type: typeof SET_CONNECT_FORM_ROLE;
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
  | IConnectFormName
  | IConnectFormSurname
  | IConnectFormRole
  | IAvatar
  | IShowConnectForm;
