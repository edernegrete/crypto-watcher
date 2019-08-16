import { combineReducers } from 'redux-immutable';
import { connectRouter } from 'connected-react-router/immutable';
import cryptos from './cryptos'
const createRootReducer = history => combineReducers({
  router: connectRouter(history),
  cryptos
});

export default createRootReducer;
