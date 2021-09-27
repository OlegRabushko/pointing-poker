import { IMsg } from '../../types/interfaces';
import { SET_ALL_MESSAGES, SET_MESSAGE, SET_OPEN_CHAT, TChatActions } from './ChatTypes';

export interface IChatState {
  msgs: IMsg[];
  isOpen: boolean;
}

const chatState: IChatState = {
  msgs: [],
  isOpen: false,
};

export const chatReducer = (state = chatState, action: TChatActions) => {
  switch (action.type) {
    case SET_MESSAGE:
      return {
        ...state,
        msgs: [...state.msgs, action.payload as IMsg],
      };
    case SET_OPEN_CHAT:
      return {
        ...state,
        isOpen: action.payload,
      };
    case SET_ALL_MESSAGES:
      return {
        ...state,
        msgs: action.payload,
      };
    default:
      return state;
  }
};
