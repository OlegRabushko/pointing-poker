import { SET_GAME_CARD, SET_SEQUENCE_FOR_CARD, SET_INITIAL_CARDS, CardType } from './GameCardTypes';

export const setGameCard = (arr: CardType) => ({
  type: SET_GAME_CARD,
  payload: arr,
});

export const setSequenceForCard = (sequence: string) => ({
  type: SET_SEQUENCE_FOR_CARD,
  payload: sequence,
});

export const setInitialCards = (count: boolean) => ({
  type: SET_INITIAL_CARDS,
  payload: count,
});
