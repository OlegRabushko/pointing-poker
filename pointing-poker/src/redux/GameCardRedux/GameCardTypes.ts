export const SET_GAME_CARD = 'SET_GAME_CARD';
export const SET_SEQUENCE_FOR_CARD = 'SET_SEQUENCE_FOR_CARD';
export const SET_INITIAL_CARDS = 'SET_INITIAL_CARDS';
export const SET_GAME_CARD_COUNT = 'SET_GAME_CARD_COUNT';

export interface CardType {
  id: string;
  stats?: number;
  chosen?: number;
  selected?: boolean;
  content?: string;
}

export interface ICardState {
  count: number;
  store: CardType[];
}

export interface ActionTypeGameCard {
  type:
    | typeof SET_GAME_CARD
    | typeof SET_SEQUENCE_FOR_CARD
    | typeof SET_INITIAL_CARDS
    | typeof SET_GAME_CARD_COUNT;
  payload: number | CardType | string | boolean;
}
