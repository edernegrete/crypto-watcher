import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import immutable from 'immutable';
import createRootReducer from '../reducers';
import rootSaga from '../sagas';
import { routerMiddleware } from 'connected-react-router/immutable';
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

const initialState = immutable.fromJS({});

function configureStore(preloadedState = initialState) {
  const sagaMiddleware = createSagaMiddleware();
  const middleware = [
    routerMiddleware(history),
    sagaMiddleware
  ];
  const enhancers = [];
  const composedEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
  const enhancerComposed = composedEnhancers(applyMiddleware(...middleware), ...enhancers);
  const store = createStore(createRootReducer(history), preloadedState, enhancerComposed);

  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
}

export default configureStore;
