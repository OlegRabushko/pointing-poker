import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { chatReducer } from './ChatRedux/ChatReducer';
import { initialReducer } from './InitialRedux/InitialReducer';
import { gameCardReducer } from './GameCardRedux/GameCardReducer';
import {
  connectFormDataReducer,
  connectCheckboxToLobbyReducer,
  lobbySettingsReducer,
} from './reducers';

const rootReducer = combineReducers({
  dataConnectForm: connectFormDataReducer,
  connectCheckbox: connectCheckboxToLobbyReducer,
  settings: lobbySettingsReducer,
  initial: initialReducer,
  chat: chatReducer,
  card: gameCardReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
// Этот тип используется в: useSelector((state: RootState)=>state)

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
