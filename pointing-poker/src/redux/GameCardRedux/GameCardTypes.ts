export const SET_GAME_CARD = 'SET_GAME_CARD';
export const SET_SEQUENCE_FOR_CARD = 'SET_SEQUENCE_FOR_CARD';
export const SET_INITIAL_CARDS = 'SET_INITIAL_CARDS';
export const SET_GAME_CARD_COUNT = 'SET_GAME_CARD_COUNT';
export const USER_IS_SELECTED_CARD = 'USER_IS_SELECTED_CARD';

export interface CardType {
  id: string | number;
  stats?: number;
  chosen?: number;
  content?: string | number;
}

export type TypeUserSelectedCard = { [key: string]: boolean };
export interface ICardState {
  userSelectedCard: TypeUserSelectedCard;
  count: number;
  store: CardType[];
}

export interface ActionTypeGameCard {
  type:
    | typeof SET_GAME_CARD
    | typeof SET_SEQUENCE_FOR_CARD
    | typeof SET_INITIAL_CARDS
    | typeof SET_GAME_CARD_COUNT
    | typeof USER_IS_SELECTED_CARD;
  payload: number | CardType | string | boolean | { id: string; count: boolean };
}
