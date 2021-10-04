import { IUserInfo, IUsers } from '../../types/interfaces';
import { TInitial } from './InitialActions';

export interface InitialState {
  gameId: string;
  dealerId: string;
  currUserID: string;
  users: IUsers;
  NotUserArr: IUserInfo[];
}

const initialState: InitialState = {
  gameId: '',
  dealerId: '',
  currUserID: '',
  users: {},
  NotUserArr: [],
};

export const initialReducer = (state = initialState, action: TInitial) => {
  switch (action.type) {
    case 'SET_CURR_USER_ID':
      return {
        ...state,
        currUserID: action.payload,
      };
    case 'SET_USER':
      return {
        ...state,
        users: { ...state.users, [action.payload._id]: action.payload },
      };
    case 'SET_USERS':
      return {
        ...state,
        NotUserArr: action.payload,
      };
    case 'SET_GAME_ID':
      return {
        ...state,
        gameId: action.payload,
      };
    case 'SET_DILER_ID':
      return {
        ...state,
        dealerId: action.payload,
      };
    default:
      return state;
  }
};

const gameProcessState = {
  startRound: false,
  selectedCard: false,
  miniGame: false,
  check: [] as any[],
};
export const gameProcessReducer = (state = gameProcessState, action: TInitial) => {
  switch (action.type) {
    case 'SET_ROUND':
      return {
        ...state,
        startRound: action.payload,
      };
    case 'SET_MINI_GAME':
      return {
        ...state,
        miniGame: action.payload,
      };
    case 'SET_CHECK':
      return {
        ...state,
        check: [action.payload],
      };
    default:
      return state;
  }
};
