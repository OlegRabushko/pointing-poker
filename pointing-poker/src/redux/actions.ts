import {
  SET_HERO_INFO,
  SET_SCRAM_MASTER_ROLE,
  SET_CARD_IN_ROUND_END,
  SET_TIMER,
  SET_COFFEE_CARD,
  SET_QUESTION_CARD,
  SET_OBSERVER,
  SET_CONNECT_FORM_NAME,
  SET_CONNECT_FORM_SURNAME,
  SET_CONNECT_FORM_ROLE,
  SET_AVATAR,
  SHOW_CONNECT_FORM,
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

// CONNECT FORM ACTION CREATORS
export const setObserver = (payload: boolean) => ({
  type: SET_OBSERVER,
  payload,
});
export const setConnectFormName = (payload: string) => ({
  type: SET_CONNECT_FORM_NAME,
  payload,
});
export const setConnectFormSurname = (payload: string) => ({
  type: SET_CONNECT_FORM_SURNAME,
  payload,
});
export const setConnectFormRole = (payload: string) => ({
  type: SET_CONNECT_FORM_ROLE,
  payload,
});
export const setAvatar = (payload: string) => ({
  type: SET_AVATAR,
  payload,
});
export const showConnectForm = (payload: boolean) => ({
  type: SHOW_CONNECT_FORM,
  payload,
});
