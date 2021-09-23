export const SET_GAME_CARD = 'SET_GAME_CARD';

export type CardType = {
  id: string | number;
  stats?: number;
  chosen?: number;
  selected: boolean;
};

export interface ICardState {
  count: number;
  store: CardType[];
}

export type ActionTypeGameCard = {
  type: typeof SET_GAME_CARD;
  payload: CardType;
};
