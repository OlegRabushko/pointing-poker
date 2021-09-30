import {
  SET_GAME_CARD,
  SET_SEQUENCE_FOR_CARD,
  SET_INITIAL_CARDS,
  SET_GAME_CARD_COUNT,
  CardType,
} from './GameCardTypes';

export const setGameCard = (card: CardType) => ({
  type: SET_GAME_CARD,
  payload: card,
});

export const setGameCardCount = (count: number) => ({
  type: SET_GAME_CARD_COUNT,
  payload: count,
});

export const setSequenceForCard = (sequence: string) => ({
  type: SET_SEQUENCE_FOR_CARD,
  payload: sequence,
});

export const setInitialCards = (count: boolean) => ({
  type: SET_INITIAL_CARDS,
  payload: count,
});
