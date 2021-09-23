import {
  InitialState,
  SET_CURR_USER_ID,
  SET_GAME_ID,
  TActionsInitial,
  SET_USER,
  IActionTypeGameProcess,
  SET_ROUND,
} from './InitialTypes';

const initialState: InitialState = {
  gameId: '',
  currUserID: '',
  users: {},
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
        users: { ...state.users, [action.payload._id]: action.payload },
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

const gameProcessState = {
  startRound: false,
  selectedCard: false,
};
export const gameProcessReducer = (state = gameProcessState, action: IActionTypeGameProcess) => {
  switch (action.type) {
    case SET_ROUND:
      return {
        ...state,
        startRound: action.payload,
      };
    default:
      return state;
  }
};
