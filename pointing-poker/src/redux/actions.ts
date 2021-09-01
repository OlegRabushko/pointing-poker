import { SET_HERO_INFO } from './redux-types';

export const setHeroInfo = (info: string) => ({ type: SET_HERO_INFO, payload: info });
