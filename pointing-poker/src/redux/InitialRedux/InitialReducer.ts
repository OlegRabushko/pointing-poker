import {
  InitialState,
  SET_CURR_USER_ID,
  SET_USER,
  TReduxInitial,
  ActionTypeGameProcess,
  SET_ROUND,
  SET_MINI_GAME,
} from './InitialTypes';

const initialState: InitialState = {
  currUserID: '1001',
  users: {
    '1001': {
      userID: '1001',
      firstName: 'Alex',
      lastName: 'Gordon',
      role: 'player',
      job: 'frontender',
      avatar: '',
    },
    '1000': {
      userID: '1000',
      firstName: 'Ivan',
      lastName: 'Volk',
      role: 'player',
      job: 'manager',
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

const gameProcessState = {
  startRound: false,
  selectedCard: false,
  miniGame: false,
};

export const gameProcessReducer = (state = gameProcessState, action: ActionTypeGameProcess) => {
  switch (action.type) {
    case SET_ROUND:
      return {
        ...state,
        startRound: action.payload,
      };
    case SET_MINI_GAME:
      return {
        ...state,
        miniGame: action.payload,
      };
    default:
      return state;
  }
};
