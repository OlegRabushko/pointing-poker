import {
  SET_HERO_INFO,
  SET_CARD_IN_ROUND_END,
  SET_TIMER,
  SET_COFFEE_CARD,
  SET_QUESTION_CARD,
  ReduxStateType,
  ActionTypeLobbySettings,
  SET_SCRAM_MASTER_ROLE,
} from './redux-types';

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

const lobbySettingsState = {
  scramMasterAsPlayer: true,
  changeCardInRoundEnd: false,
  timerNeeded: true,
  coffeeCardNeeded: true,
  questionCardNeeded: false,
};

export const lobbySettingsReducer = (
  state = lobbySettingsState,
  action: ActionTypeLobbySettings,
) => {
  switch (action.type) {
    case SET_SCRAM_MASTER_ROLE:
      return {
        ...state,
        scramMasterAsPlayer: action.payload,
      };
    case SET_CARD_IN_ROUND_END:
      return {
        ...state,
        changeCardInRoundEnd: action.payload,
      };
    case SET_TIMER:
      return {
        ...state,
        timerNeeded: action.payload,
      };
    case SET_COFFEE_CARD:
      return {
        ...state,
        coffeeCardNeeded: action.payload,
      };
    case SET_QUESTION_CARD:
      return {
        ...state,
        questionCardNeeded: action.payload,
      };
    default:
      return state;
  }
};
