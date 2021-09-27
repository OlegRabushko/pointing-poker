import { SET_COMPLETED_ISSUE_CARD, SET_ELEM_INDEX } from './ReduxFormTypes';
/* eslint-disable array-callback-return */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
/* eslint-disable no-case-declarations */
import {
  ActionTypeConnectFormData,
  SHOW_CONNECT_FORM,
  SHOW_ISSUES_FORM,
  ActionTypeShowForms,
  IAvatar,
  SET_AVATAR,
  IInitialStatePlayers,
  UPDATE_PLAYERS_STATE,
  SET_DEALERS,
  SET_PLAYERS,
  SET_OBSERVERS,
  SET_ISSUE_DATA,
  IInitialStateIssueCards,
  ActionTypeIssueCards,
  DELETE_ISSUE_DATA,
  TOGGLE_CURRENT_ISSUE_CARD,
  RENAME_ISSUE_TITLE,
  RENAME_ISSUE_PRIORITY,
  RESTART_ISSUES,
} from './ReduxFormTypes';

// SHOW FORMS
const showFormsState = {
  isConnectForm: false,
  isIssuesForm: false,
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
  userDealer: {
    userID: '',
    firstName: '',
    lastName: '',
    job: '',
    avatar: '',
    session: '',
  },
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
        userDealer: action.payload,
      };
    case SET_PLAYERS:
      return {
        ...state,
        userPlayers: [...state.userPlayers, action.payload],
      };
    case UPDATE_PLAYERS_STATE:
      return {
        ...state,
        userPlayers: [...state.userPlayers.filter((el) => el.userID !== action.payload)],
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
  elemIndex: 0,
  issueCards: [],
};

export const issueFormDataReducer = (state = issueFormState, action: ActionTypeIssueCards) => {
  const { issueCards } = state;
  const issueIndex = issueCards.findIndex(({ issueID }) => issueID === action.payload);

  switch (action.type) {
    case SET_ISSUE_DATA:
      return {
        ...state,
        issueCards: [...state.issueCards, action.payload],
      };
    case DELETE_ISSUE_DATA:
      return {
        ...state,
        issueCards: [
          ...state.issueCards.slice(0, issueIndex),
          ...state.issueCards.slice(issueIndex + 1),
        ],
      };
    case TOGGLE_CURRENT_ISSUE_CARD:
      issueCards.map((card) =>
        card.issueID !== action.payload ? (card.current = false) : (card.current = true),
      );
      return {
        ...state,
        issueCards: [...state.issueCards],
      };
    case SET_COMPLETED_ISSUE_CARD:
      issueCards.map((card) => {
        if (card.issueID === action.payload.id) card.isCompleted = action.payload.count;
      });
      return {
        ...state,
        issueCards: [...state.issueCards],
      };
    case SET_ELEM_INDEX:
      return {
        ...state,
        elemIndex: action.payload,
      };
    case RENAME_ISSUE_TITLE:
      issueCards.map((card) => {
        if (card.issueID === action.issueID) {
          card.issueTitle = action.payload;
        }
      });
      return {
        ...state,
        issueCards: [...state.issueCards],
      };
    case RENAME_ISSUE_PRIORITY:
      issueCards.map((card) => {
        if (card.issueID === action.issueID) {
          card.issuePriority = action.payload;
        }
      });
      return {
        ...state,
        issueCards: [...state.issueCards],
      };
    case RESTART_ISSUES:
      return {
        ...state,
        elemIndex: action.payload && 0,
        issueCards: action.payload && [],
      };
    default:
      return state;
  }
};
