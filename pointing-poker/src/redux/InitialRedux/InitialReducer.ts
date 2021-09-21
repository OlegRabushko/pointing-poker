import {
  InitialState,
  SET_CURR_USER_ID,
  SET_GAME_ID,
  SET_USER,
  TActionsInitial,
} from './InitialTypes';

const initialState: InitialState = {
  gameId: '1234',
  currUserID: '1001',
  users: {
    '1001': {
      userId: '1001',
      name: 'Alex',
      lastName: 'Gordon',
      isObserver: false,
      isDialer: false,
      isPlayer: true,
      job: 'frontender',
      avatar: '',
    },
    '1000': {
      userId: '1002',
      name: 'Ivan',
      lastName: 'Volk',
      isObserver: false,
      isDialer: false,
      isPlayer: true,
      job: 'manager',
      avatar: '',
    },
  },
};

export const initialReducer = (state = initialState, action: TActionsInitial) => {
  switch (action.type) {
    case SET_CURR_USER_ID:
      return {
        ...state,
        userID: action.payload,
      };
    case SET_USER:
      return {
        ...state,
        users: { ...state.users, [action.payload.userId]: action.payload },
      };
    case SET_GAME_ID:
      return {
        ...state,
        gameId: action.payload,
      };
    default:
      return state;
  }
};
