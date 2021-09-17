import {
  ActionsPersonStatusGame,
  SET_DIALER_STATUS,
  SET_OBSERVER_STATUS,
  SET_PLAYER_STATUS,
} from './RolesTypes';

const initialGameStatusPersonState = {
  isDialer: false,
  isObserver: false,
  isPlayer: false,
};

export const gameStatusPersonReducer = (
  state = initialGameStatusPersonState,
  action: ActionsPersonStatusGame,
) => {
  switch (action.type) {
    case SET_DIALER_STATUS:
      return {
        ...state,
        isDialer: action.payload,
      };
    case SET_OBSERVER_STATUS:
      return {
        ...state,
        isObserver: action.payload,
      };
    case SET_PLAYER_STATUS:
      return {
        ...state,
        isPlayer: action.payload,
      };
    default:
      return state;
  }
};
