export const SET_MINUTES = 'SET_MINUTES';
export const SET_SECONDS = 'SET_SECONDS';
export const SET_FULL_SECONDS = 'SET_FULL_SECONDS';
export const SET_START_TIME = 'SET_START_TIME';

export type ActionTypeTimer = {
  type: typeof SET_MINUTES | typeof SET_SECONDS | typeof SET_FULL_SECONDS | typeof SET_START_TIME;
  payload: number | number[];
};
