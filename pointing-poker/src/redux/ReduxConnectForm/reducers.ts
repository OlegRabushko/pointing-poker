import {
  ActionTypeConnectFormData,
  SET_AVATAR,
  SET_CONNECT_FORM_NAME,
  SET_CONNECT_FORM_JOB,
  SET_CONNECT_FORM_SURNAME,
  SET_OBSERVER,
  SHOW_CONNECT_FORM,
} from './types';

// CONNECT FORM INPUTS VALUE
const connectFormState = {
  firstName: '',
  lastName: '',
  job: '',
  avatar: '',
  isConnectForm: false,
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
    case SHOW_CONNECT_FORM:
      return {
        ...state,
        isConnectForm: action.payload,
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
