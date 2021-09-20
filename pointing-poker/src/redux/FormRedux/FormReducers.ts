/* eslint-disable no-case-declarations */
import {
  ActionTypeConnectFormData,
  SHOW_CONNECT_FORM,
  SHOW_ISSUES_FORM,
  ActionTypeShowForms,
  IAvatar,
  SET_AVATAR,
  IInitialStatePlayers,
  SHOW_DELETE_PLAYER_FORM,
  UPDATE_PLAYERS_STATE,
  SET_DEALERS,
  SET_PLAYERS,
  SET_OBSERVERS,
  SET_ISSUE_DATA,
  IInitialStateIssueCards,
  ActionTypeIssueCards,
  DELETE_ISSUE_DATA,
} from './ReduxFormTypes';

// SHOW FORMS
const showFormsState = {
  isConnectForm: false,
  isIssuesForm: false,
  isDeleteUser: false,
};

export const showFormsReducer = (state = showFormsState, action: ActionTypeShowForms) => {
  switch (action.type) {
    case SHOW_CONNECT_FORM:
      return {
        ...state,
        isConnectForm: action.payload,
      };
    case SHOW_ISSUES_FORM:
      return {
        ...state,
        isIssuesForm: action.payload,
      };
    case SHOW_DELETE_PLAYER_FORM:
      return {
        ...state,
        isDeleteUser: action.payload,
      };
    default:
      return state;
  }
};

// AVATAR CONNECT FORM
const initialAvatar = {
  avatar: '',
};

export const connectAvatarReducer = (state = initialAvatar, action: IAvatar) => {
  switch (action.type) {
    case SET_AVATAR:
      return {
        ...state,
        avatar: action.payload,
      };
    default:
      return state;
  }
};

// CONNECT FORM
const connectFormState: IInitialStatePlayers = {
  userDealers: [],
  userPlayers: [],
  userObservers: [],
};

export const connectFormDataReducer = (
  state = connectFormState,
  action: ActionTypeConnectFormData,
) => {
  switch (action.type) {
    case SET_DEALERS:
      return {
        ...state,
        userDealers: [...state.userDealers, action.payload],
      };
    case SET_PLAYERS:
      return {
        ...state,
        userPlayers: [...state.userPlayers, action.payload],
      };
    case UPDATE_PLAYERS_STATE:
      const { userPlayers } = state;
      const userIndex = userPlayers.findIndex(({ userID }) => userID === action.payload);
      return {
        ...state,
        userPlayers: [
          ...state.userPlayers.slice(0, userIndex),
          ...state.userPlayers.slice(userIndex + 1),
        ],
      };
    case SET_OBSERVERS:
      return {
        ...state,
        userObservers: [...state.userObservers, action.payload],
      };
    default:
      return state;
  }
};

// ISSUE FORM
const issueFormState: IInitialStateIssueCards = {
  issueCards: [],
};

export const issueFormDataReducer = (state = issueFormState, action: ActionTypeIssueCards) => {
  switch (action.type) {
    case SET_ISSUE_DATA:
      return {
        ...state,
        issueCards: [...state.issueCards, action.payload],
      };
    case DELETE_ISSUE_DATA:
      const { issueCards } = state;
      const issueIndex = issueCards.findIndex(({ issueID }) => issueID === action.payload);
      return {
        ...state,
        issueCards: [
          ...state.issueCards.slice(0, issueIndex),
          ...state.issueCards.slice(issueIndex + 1),
        ],
      };
    default:
      return state;
  }
};
