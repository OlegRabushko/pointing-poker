export const SET_HERO_INFO = 'SET_HERO_INFO';

export type ActionColor = {
  about: boolean;
  home: boolean;
};

export type ReduxStateType = {
  type: typeof SET_HERO_INFO;
  payload: string;
};
