export const SET_RESULT_CARDS = 'SET_RESULT_CARDS';

export type ResultType = {
  title: string;
  issueId: string;
  cardsResult: {
    id: string;
    stats?: number;
    content?: string;
  }[];
};

export interface IResultsState {
  store: ResultType[];
}

export type ActionTypeGameCard = {
  type: typeof SET_RESULT_CARDS;
  payload: ResultType;
};
