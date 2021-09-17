import { nanoid } from 'nanoid';
import { InitialState, SET_CURR_USER_ID, SET_USER, TReduxInitial } from './InitialTypes';

const initialState: InitialState = {
  currUserID: '1001',
  users: {
    '1001': {
      userID: `${nanoid()}`,
      name: 'Alex',
      lastName: 'Gordon',
      role: 'player',
      position: 'frontender',
      avatar: '',
    },
    '1000': {
      userID: `${nanoid()}`,
      name: 'Ivan',
      lastName: 'Volk',
      role: 'player',
      position: 'manager',
      avatar: '',
    },
  },
};

export const initialReducer = (state = initialState, action: TReduxInitial) => {
  switch (action.type) {
    case SET_CURR_USER_ID:
      return {
        ...state,
        userID: action.payload,
      };
    case SET_USER:
      return {
        ...state,
        users: { ...state.users, [action.payload.userID]: action.payload },
      };
    default:
      return state;
  }
};
