import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

// reducers
import authReducer from './auth/auth.reducer';
import alumnsReducer from './alumns/alumns.reducer';
import rickymortyReducer from './rickymorty/rickymorty.reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  alumns: alumnsReducer,
  rickymorty: rickymortyReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;