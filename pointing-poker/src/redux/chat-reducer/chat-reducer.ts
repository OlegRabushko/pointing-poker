import { IMsg } from '../../types/interfaces';
import { SET_MESSAGE, TReduxChat } from './chat-types';

interface IChatState {
  msgs: IMsg[];
}

const chatState: IChatState = {
  msgs: [],
};

export const chatReducer = (state = chatState, action: TReduxChat) => {
  switch (action.type) {
    case SET_MESSAGE:
      return {
        ...state,
        msgs: [...state.msgs, action.payload],
      };
    default:
      return state;
  }
};
