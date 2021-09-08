export const SET_HERO_INFO = 'SET_HERO_INFO';
export const SET_SCRAM_MASTER_ROLE = 'SET_SCRAM_MASTER_ROLE';
export const SET_CARD_IN_ROUND_END = 'SET_CARD_IN_ROUND_END';
export const SET_TIMER = 'SET_TIMER';
export const SET_COFFEE_CARD = 'SET_COFFEE_CARD';
export const SET_QUESTION_CARD = 'SET_QUESTION_CARD';
export const SET_SEQUENCE_TYPE = 'SET_SEQUENCE_TYPE';

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
    | typeof SET_QUESTION_CARD
    | typeof SET_SEQUENCE_TYPE;
  payload: boolean | string;
};
