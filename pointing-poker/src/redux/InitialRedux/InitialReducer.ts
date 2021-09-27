import {
  IActionTypeGameProcess,
  InitialState,
  SET_CURR_USER_ID,
  SET_DILER_ID,
  SET_GAME_ID,
  SET_MINI_GAME,
  SET_ROUND,
  SET_USER,
  SET_USERS,
  TActionsInitial,
} from './InitialTypes';

const initialState: InitialState = {
  gameId: '',
  dilerId: '',
  currUserID: '',
  users: {},
  NotUserArr: [],
};

export const initialReducer = (state = initialState, action: TActionsInitial) => {
  switch (action.type) {
    case SET_CURR_USER_ID:
      return {
        ...state,
        currUserID: action.payload,
      };
    case SET_USER:
      return {
        ...state,
        users: { ...state.users, [action.payload._id]: action.payload },
      };
    case SET_USERS:
      return {
        ...state,
        NotUserArr: action.payload,
      };
    case SET_GAME_ID:
      return {
        ...state,
        gameId: action.payload,
      };
    case SET_DILER_ID:
      return {
        ...state,
        dilerId: action.payload,
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
export const gameProcessReducer = (state = gameProcessState, action: IActionTypeGameProcess) => {
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
