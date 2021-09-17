import {
  ActionTypeConnectFormData,
  SHOW_CONNECT_FORM,
  SHOW_ISSUES_FORM,
  SET_TITLE_ISSUE,
  ActionTypeIssueFormData,
  SET_LINK_ISSUE,
  SET_PRIORITY_ISSUE,
  ActionTypeShowForms,
  SET_IS_DEALER,
  SET_IS_PLAYER,
  SET_IS_OBSERVER,
  IAvatar,
  SET_AVATAR,
  IInitialStateFormData,
} from './FormTypes';

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
const connectFormState: IInitialStateFormData = {
  isUserDealer: [],
  isUserPlayer: [],
  isUserObserver: [],
};

export const connectFormDataReducer = (
  state = connectFormState,
  action: ActionTypeConnectFormData,
) => {
  switch (action.type) {
    case SET_IS_DEALER:
      return {
        ...state,
        isUserDealer: [...state.isUserDealer, action.payload],
      };
    case SET_IS_PLAYER:
      return {
        ...state,
        isUserPlayer: [...state.isUserPlayer, action.payload],
      };
    case SET_IS_OBSERVER:
      return {
        ...state,
        isUserObserver: [...state.isUserObserver, action.payload],
      };
    default:
      return state;
  }
};

// ISSUE FORM
const issueFormState = {
  title: '',
  link: '',
  priority: '',
  voitingResults: [{}],
};

export const issueFormDataReducer = (state = issueFormState, action: ActionTypeIssueFormData) => {
  switch (action.type) {
    case SET_TITLE_ISSUE:
      return {
        ...state,
        title: action.payload,
      };
    case SET_LINK_ISSUE:
      return {
        ...state,
        link: action.payload,
      };
    case SET_PRIORITY_ISSUE:
      return {
        ...state,
        priority: action.payload,
      };
    default:
      return state;
  }
};
