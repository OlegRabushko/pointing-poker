import {
  SET_HERO_INFO,
  SET_CARD_IN_ROUND_END,
  SET_TIMER,
  SET_COFFEE_CARD,
  SET_QUESTION_CARD,
  ReduxStateType,
  ActionTypeLobbySettings,
  SET_SCRAM_MASTER_ROLE,
  SET_SEQUENCE_TYPE,
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
  sequenceType: 'Fibonacci',
};

export const lobbySettingsReducer = (
  state = lobbySettingsState,
  action: ActionTypeLobbySettings,
) => {
  switch (action.type) {
    case SET_SCRAM_MASTER_ROLE:
      return {
        ...state,
        scramMasterAsPlayer: action.payload as boolean,
      };
    case SET_CARD_IN_ROUND_END:
      return {
        ...state,
        changeCardInRoundEnd: action.payload as boolean,
      };
    case SET_TIMER:
      return {
        ...state,
        timerNeeded: action.payload as boolean,
      };
    case SET_COFFEE_CARD:
      return {
        ...state,
        coffeeCardNeeded: action.payload as boolean,
      };
    case SET_QUESTION_CARD:
      return {
        ...state,
        questionCardNeeded: action.payload as boolean,
      };
    case SET_SEQUENCE_TYPE:
      return {
        ...state,
        sequenceType: action.payload as string,
      };
    default:
      return state;
  }
};
