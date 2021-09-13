import { InitialState, SET_CURR_USER_ID, SET_USER, TReduxInitial } from './InitialTypes';

const initialState: InitialState = {
  currUserID: '1001',
  users: {
    '1001': {
      userID: '1001',
      userName: 'Alex',
      userLatName: 'Gordon',
      role: 'player',
      position: 'frontender',
      avatatr: '',
    },
    '1000': {
      userID: '1000',
      userName: 'Ivan',
      userLatName: 'Volk',
      role: 'player',
      position: 'manager',
      avatatr: '',
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
