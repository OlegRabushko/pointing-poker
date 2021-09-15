import {
  SET_HERO_INFO,
  SET_SCRAM_MASTER_ROLE,
  SET_CARD_IN_ROUND_END,
  SET_TIMER,
  SET_COFFEE_CARD,
  SET_QUESTION_CARD,
  SET_SEQUENCE_TYPE,
} from './redux-types';

export const setHeroInfo = (info: string) => ({ type: SET_HERO_INFO, payload: info });

export const setScramMasterRole = (role: boolean) => ({
  type: SET_SCRAM_MASTER_ROLE,
  payload: role,
});
export const setCardInRoundEnd = (count: boolean) => ({
  type: SET_CARD_IN_ROUND_END,
  payload: count,
});
export const setTimer = (count: boolean) => ({
  type: SET_TIMER,
  payload: count,
});
export const setCoffeeCard = (count: boolean) => ({
  type: SET_COFFEE_CARD,
  payload: count,
});
export const setQuestionCard = (count: boolean) => ({
  type: SET_QUESTION_CARD,
  payload: count,
});
export const setSequenceType = (sequence: string) => ({
  type: SET_SEQUENCE_TYPE,
  payload: sequence,
});
