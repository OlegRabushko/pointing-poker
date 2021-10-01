import {
  SET_CARD_IN_ROUND_END,
  SET_TIMER,
  SET_COFFEE_CARD,
  SET_QUESTION_CARD,
  ActionTypeLobbySettings,
  SET_SCRAM_MASTER_ROLE,
  SET_SEQUENCE_TYPE,
} from './SettingsSectionTypes';

export interface ILobbySettingsState {
  scramMasterAsPlayer: boolean;
  changeCardInRoundEnd: boolean;
  timerNeeded: boolean;
  coffeeCardNeeded: boolean;
  questionCardNeeded: boolean;
  sequenceType: string;
}

const lobbySettingsState: ILobbySettingsState = {
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
