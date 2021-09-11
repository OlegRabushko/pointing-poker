import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { chatReducer } from './chat-reducer/chat-reducer';
import { initialReducer } from './initial/initial-reducer';
import { lobbySettingsReducer, mainReducer } from './reducers';

const rootReducer = combineReducers({
  hero: mainReducer,
  settings: lobbySettingsReducer,
  initial: initialReducer,
  chat: chatReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
// Этот тип используется в: useSelector((state: RootState)=>state)

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
