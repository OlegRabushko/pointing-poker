import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { lobbySettingsReducer } from './reducers';
import { connectFormDataReducer } from './ReduxConnectForm/reducers';

const rootReducer = combineReducers({
  dataConnectForm: connectFormDataReducer,
  settings: lobbySettingsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
// Этот тип используется в: useSelector((state: RootState)=>state)

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
