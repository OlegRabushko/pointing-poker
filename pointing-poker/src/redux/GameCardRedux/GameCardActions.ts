import { SET_GAME_CARD, CardType } from './GameCardTypes';

export const setGameCard = (arr: CardType) => ({
  type: SET_GAME_CARD,
  payload: arr,
});
