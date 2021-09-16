import { ActionTypeTimer, SET_FULL_SECONDS, SET_MINUTES, SET_SECONDS } from './TimerTypes';

type TimerStateTypes = {
  seconds: number;
  minutes: number;
  fullSeconds: number;
};

const timerState: TimerStateTypes = {
  seconds: 30,
  minutes: 2,
  fullSeconds: 150,
};

export const timerReducer = (state = timerState, action: ActionTypeTimer) => {
  switch (action.type) {
    case SET_SECONDS:
      return { ...state, seconds: action.payload };
    case SET_MINUTES:
      return { ...state, minutes: action.payload };
    case SET_FULL_SECONDS:
      return { ...state, fullSeconds: action.payload };
    default:
      return state;
  }
};
