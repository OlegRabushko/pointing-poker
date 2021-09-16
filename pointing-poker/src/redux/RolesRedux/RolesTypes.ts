export const SET_DILLER_STATUS = 'SET_DILLER_STETUS';
export const SET_OBSERVER_STATUS = 'SET_OBSERVER_STETUS';
export const SET_PLAYER_STATUS = 'SET_PLAYER_STETUS';

interface ISetDillerStetus {
  type: typeof SET_DILLER_STATUS;
  payload: boolean;
}

interface ISetDObserverStetus {
  type: typeof SET_OBSERVER_STATUS;
  payload: boolean;
}

interface ISetPlayerStetus {
  type: typeof SET_PLAYER_STATUS;
  payload: boolean;
}

export type ActionsPersonStatusGame = ISetDillerStetus | ISetDObserverStetus | ISetPlayerStetus;
