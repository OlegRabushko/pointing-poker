/* eslint-disable no-param-reassign */
import { SET_GAME_CARD, ActionTypeGameCard, ICardState } from './GameCardTypes';

const cardsState: ICardState = {
  count: 1,
  store: [
    {
      id: 'Coffee',
      stats: 0,
      chosen: 0,
      selected: false,
    },
    {
      id: 1,
      stats: 0,
      chosen: 0,
      selected: false,
    },
    {
      id: 2,
      stats: 0,
      chosen: 0,
      selected: false,
    },
    {
      id: 3,
      stats: 0,
      chosen: 0,
      selected: false,
    },
    {
      id: 4,
      stats: 0,
      chosen: 0,
      selected: false,
    },
    {
      id: 5,
      stats: 0,
      chosen: 0,
      selected: false,
    },
    {
      id: 6,
      stats: 0,
      chosen: 0,
      selected: false,
    },
    {
      id: 7,
      stats: 0,
      chosen: 0,
      selected: false,
    },
    {
      id: 8,
      stats: 0,
      chosen: 0,
      selected: false,
    },
    {
      id: 'Unknown',
      stats: 0,
      chosen: 0,
      selected: false,
    },
  ],
};

export const gameCardReducer = (state = cardsState, action: ActionTypeGameCard) => {
  switch (action.type) {
    case SET_GAME_CARD:
      return {
        ...state,
        count: state.count + 1,
        store: state.store.map((el) => {
          if (el.id === action.payload.id) {
            el.chosen += action.payload.chosen;
            el.selected = action.payload.selected;
          } else {
            el.selected = !action.payload.selected;
          }
          el.stats = Math.round((100 / state.count) * el.chosen);
          return el;
        }),
      };
    default:
      return state;
  }
};
