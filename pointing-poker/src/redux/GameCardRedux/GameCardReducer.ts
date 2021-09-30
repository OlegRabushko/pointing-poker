/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable no-else-return */
/* eslint-disable no-param-reassign */
import {
  SET_GAME_CARD,
  ActionTypeGameCard,
  ICardState,
  SET_SEQUENCE_FOR_CARD,
  SET_INITIAL_CARDS,
  SET_GAME_CARD_COUNT,
  CardType,
} from './GameCardTypes';

const cardsState: ICardState = {
  count: 0,
  store: [
    {
      id: 'Coffee',
      stats: 0,
      chosen: 0,
      content: '',
    },
    {
      id: 1,
      stats: 0,
      chosen: 0,
      content: '',
    },
    {
      id: 2,
      stats: 0,
      chosen: 0,
      content: '',
    },
    {
      id: 3,
      stats: 0,
      chosen: 0,
      content: '',
    },
    {
      id: 4,
      stats: 0,
      chosen: 0,
      content: '',
    },
    {
      id: 5,
      stats: 0,
      chosen: 0,
      content: '',
    },
    {
      id: 6,
      stats: 0,
      chosen: 0,
      content: '',
    },
    {
      id: 7,
      stats: 0,
      chosen: 0,
      content: '',
    },
    {
      id: 8,
      stats: 0,
      chosen: 0,
      content: '',
    },
    {
      id: 'Unknown',
      stats: 0,
      chosen: 0,
      content: '',
    },
  ],
};

const fibonacciSequence = [1, 2, 3, 5, 8, 13, 21, 34];
const authorSequence = [1, 2, 3, 6, 10, 20, 30, 40];

export const gameCardReducer = (state = cardsState, action: ActionTypeGameCard) => {
  switch (action.type) {
    case SET_GAME_CARD:
      return {
        ...state,
        store: state.store.map((el) => {
          const payload = action.payload as CardType;
          if (el.id === payload.id) {
            el.chosen += payload.chosen;
            el.selected = payload.selected;
          }
          el.stats = Math.round((100 / state.count) * el.chosen);
          return el;
        }),
      };
    case SET_GAME_CARD_COUNT:
      return {
        ...state,
        count: state.count + (action.payload as number),
      };
    case SET_SEQUENCE_FOR_CARD:
      return {
        ...state,
        store: state.store.map((el) => {
          if (typeof el.id === 'number') {
            if ((action.payload as string) === 'Fibonacci') {
              el.content = fibonacciSequence[el.id - 1];
            } else {
              el.content = authorSequence[el.id - 1];
            }
          } else {
            el.content = el.id;
          }
          return el;
        }),
      };
    case SET_INITIAL_CARDS:
      return {
        count: (action.payload as boolean) && 0,
        store:
          (action.payload as boolean) &&
          state.store.map((el) => {
            el.chosen = 0;
            el.stats = 0;
            el.selected = false;
            return el;
          }),
      };
    default:
      return state;
  }
};
