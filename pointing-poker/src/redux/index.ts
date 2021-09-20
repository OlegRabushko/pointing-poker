import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { chatReducer } from './ChatRedux/ChatReducer';
import { initialReducer, gameProcessReducer } from './InitialRedux/InitialReducer';
import { gameCardReducer } from './GameCardRedux/GameCardReducer';
import { lobbySettingsReducer } from './SettingsSectionRedux/SettingsSectionReducer';
import {
  connectFormDataReducer,
  issueFormDataReducer,
  showFormsReducer,
} from './FormRedux/FormReducers';
import { gameStatusPersonReducer } from './RolesRedux/RolesReducers';
import { timerReducer } from './TimerRedux/TimerReducer';

const rootReducer = combineReducers({
  personStatus: gameStatusPersonReducer,
  showForms: showFormsReducer,
  issueFormData: issueFormDataReducer,
  dataConnectForm: connectFormDataReducer,
  settings: lobbySettingsReducer,
  initial: initialReducer,
  chat: chatReducer,
  card: gameCardReducer,
  timer: timerReducer,
  gameProcess: gameProcessReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
