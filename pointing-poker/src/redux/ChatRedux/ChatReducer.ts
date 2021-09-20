import { IMsg } from '../../types/interfaces';
import { SET_MESSAGE, SET_OPEN_CHAT, TReduxChat } from './ChatTypes';

interface IChatState {
  msgs: IMsg[];
  isOpen: boolean;
}

const chatState: IChatState = {
  msgs: [],
  isOpen: false,
};

export const chatReducer = (state = chatState, action: TReduxChat) => {
  switch (action.type) {
    case SET_MESSAGE:
      return {
        ...state,
        msgs: [...state.msgs, action.payload as IMsg],
      };
    case SET_OPEN_CHAT:
      return {
        ...state,
        isOpen: action.payload as boolean,
      };
    default:
      return state;
  }
};
