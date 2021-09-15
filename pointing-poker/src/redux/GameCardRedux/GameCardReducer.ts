/* eslint-disable no-param-reassign */
import { SET_GAME_CARD, ActionTypeGameCard, ICardState } from './GameCardTypes';

const cardsState: ICardState = {
  count: 1,
  store: [
    {
      id: 'Coffee',
      stats: 0,
      chosen: 0,
    },
    {
      id: 1,
      stats: 0,
      chosen: 0,
    },
    {
      id: 2,
      stats: 0,
      chosen: 0,
    },
    {
      id: 3,
      stats: 0,
      chosen: 0,
    },
    {
      id: 4,
      stats: 0,
      chosen: 0,
    },
    {
      id: 5,
      stats: 0,
      chosen: 0,
    },
    {
      id: 6,
      stats: 0,
      chosen: 0,
    },
    {
      id: 7,
      stats: 0,
      chosen: 0,
    },
    {
      id: 8,
      stats: 0,
      chosen: 0,
    },
    {
      id: 'Unknown',
      stats: 0,
      chosen: 0,
    },
  ],
};

export const gameCardReducer = (state = cardsState, action: ActionTypeGameCard) => {
  switch (action.type) {
    case SET_GAME_CARD:
      return {
        count: state.count + 1,
        store: state.store.map((el) => {
          if (el.id === action.payload.id) {
            el.chosen += action.payload.chosen;
          }
          el.stats = Math.round((100 / state.count) * el.chosen);
          return el;
        }),
      };

    default:
      return state;
  }
};
