import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { chatReducer } from './ChatRedux/ChatReducer';
import { initialReducer } from './InitialRedux/InitialReducer';
import { lobbySettingsReducer } from './reducers';
import { connectFormDataReducer, issueFormDataReducer } from './FormRedux/FormReducers';

const rootReducer = combineReducers({
  dataConnectForm: connectFormDataReducer,
  dataIssuesForm: issueFormDataReducer,
  settings: lobbySettingsReducer,
  initial: initialReducer,
  chat: chatReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
// Этот тип используется в: useSelector((state: RootState)=>state)

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
