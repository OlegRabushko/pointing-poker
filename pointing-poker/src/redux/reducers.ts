import { SET_HERO_INFO, ReduxStateType } from './redux-types';

const defaultState = {
  heroInfo: '',
  request: '',
};
export const mainReducer = (state = defaultState, action: ReduxStateType) => {
  switch (action.type) {
    case SET_HERO_INFO:
      return {
        ...state,
        heroInfo: action.payload,
      };
    default:
      return state;
  }
};
