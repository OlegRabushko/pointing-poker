import {
  SET_CARD_IN_ROUND_END,
  SET_TIMER,
  SET_COFFEE_CARD,
  SET_QUESTION_CARD,
  ActionTypeLobbySettings,
  SET_SCRAM_MASTER_ROLE,
  SET_SEQUENCE_TYPE,
  SET_OBSERVER,
  ActionTypeConnectLobby,
  ActionTypeConnectFormData,
  SET_CONNECT_FORM_NAME,
  SET_CONNECT_FORM_SURNAME,
  SET_CONNECT_FORM_ROLE,
  SET_AVATAR,
  SHOW_CONNECT_FORM,
} from './redux-types';

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

// CONNECT FORM CHECKBOX REDUSER
const connectLobbyState = {
  checkObserver: false,
};

export const connectCheckboxToLobbyReducer = (
  state = connectLobbyState,
  action: ActionTypeConnectLobby,
) => {
  switch (action.type) {
    case SET_OBSERVER:
      return {
        ...state,
        checkObserver: action.payload,
      };
    default:
      return state;
  }
};

// CONNECT FORM INPUTS VALUE
const connectFormInputsValueState = {
  connectFormName: '',
  connectFormSurname: '',
  connectFormRole: '',
  avatar: '',
  isConnectForm: false,
};

export const connectFormDataReducer = (
  state = connectFormInputsValueState,
  action: ActionTypeConnectFormData,
) => {
  switch (action.type) {
    case SET_CONNECT_FORM_NAME:
      return {
        ...state,
        connectFormName: action.payload,
      };
    case SET_CONNECT_FORM_SURNAME:
      return {
        ...state,
        connectFormSurname: action.payload,
      };
    case SET_CONNECT_FORM_ROLE:
      return {
        ...state,
        connectFormRole: action.payload,
      };
    case SET_AVATAR:
      return {
        ...state,
        avatar: action.payload,
      };
    case SHOW_CONNECT_FORM:
      return {
        ...state,
        isConnectForm: action.payload,
      };
    default:
      return state;
  }
};
