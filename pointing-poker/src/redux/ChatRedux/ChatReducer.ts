import { IMsg } from '../../types/interfaces';
import { GET_ALL_MESSAGES, GET_MESSAGE, TChatActions } from './ChatTypes';

export interface IChatState {
  msgs: IMsg[];
}

const chatState: IChatState = {
  msgs: [],
};

export const chatReducer = (state = chatState, action: TChatActions) => {
  switch (action.type) {
    case GET_MESSAGE:
      return {
        ...state,
        msgs: [...state.msgs, action.payload],
      };
    case GET_ALL_MESSAGES:
      return {
        ...state,
        msgs: action.payload,
      };
    default:
      return state;
  }
};
