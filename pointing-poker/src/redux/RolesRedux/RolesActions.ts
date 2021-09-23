import { SET_DIALER_STATUS, SET_OBSERVER_STATUS, SET_PLAYER_STATUS } from './RolesTypes';

export const setDealerStatus = (payload: boolean) => ({
  type: SET_DIALER_STATUS,
  payload,
});

export const setObserverStatus = (payload: boolean) => ({
  type: SET_OBSERVER_STATUS,
  payload,
});

export const setPlayerStatus = (payload: boolean) => ({
  type: SET_PLAYER_STATUS,
  payload,
});
