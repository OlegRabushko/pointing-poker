import { SET_FULL_SECONDS, SET_MINUTES, SET_SECONDS } from './TimerTypes';

export const setSeconds = (count: number) => ({
  type: SET_SECONDS,
  payload: count,
});
export const setMinutes = (count: number) => ({
  type: SET_MINUTES,
  payload: count,
});
export const setFullSeconds = (count: number) => ({
  type: SET_FULL_SECONDS,
  payload: count,
});
