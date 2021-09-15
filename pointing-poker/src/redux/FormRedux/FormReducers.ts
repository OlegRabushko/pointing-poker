import {
  ActionTypeConnectFormData,
  SET_AVATAR,
  SET_CONNECT_FORM_NAME,
  SET_CONNECT_FORM_JOB,
  SET_CONNECT_FORM_SURNAME,
  SET_OBSERVER,
  SHOW_CONNECT_FORM,
  SHOW_ISSUES_FORM,
  SET_TITLE_ISSUE,
  ActionTypeIssueFormData,
  SET_LINK_ISSUE,
  SET_PRIORITY_ISSUE,
  ActionTypeShowForms,
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

// CONNECT FORM
const connectFormState = {
  firstName: '',
  lastName: '',
  job: '',
  avatar: '',
  role: false,
};

export const connectFormDataReducer = (
  state = connectFormState,
  action: ActionTypeConnectFormData,
) => {
  switch (action.type) {
    case SET_CONNECT_FORM_NAME:
      return {
        ...state,
        firstName: action.payload,
      };
    case SET_CONNECT_FORM_SURNAME:
      return {
        ...state,
        lastName: action.payload,
      };
    case SET_CONNECT_FORM_JOB:
      return {
        ...state,
        job: action.payload,
      };
    case SET_AVATAR:
      return {
        ...state,
        avatar: action.payload,
      };
    case SET_OBSERVER:
      return {
        ...state,
        role: action.payload,
      };
    default:
      return state;
  }
};

// ISSUE FORMS
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
