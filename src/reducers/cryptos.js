import { fromJS } from 'immutable';
import {
  SET_BITSO_CRYPTO_DATA,
  SET_COINLORE_CRYPTO_DATA,
  SET_COINCAP_CRYPTO_DATA,
  SET_CURRENT_CRYPTO,
  SET_UPDATED
} from '../actions/crypto';

const initialState = fromJS({
  data: {
    bitso: [],
    coinlore: [],
    coincap: [] 
  },
  updated: false,
  currentCrypto: 'btc'
});
const crypto = (state = initialState, action) => {
  switch (action.type) {
    case SET_BITSO_CRYPTO_DATA:
      return state.setIn(['data', 'bitso'], fromJS(action.payload));
    case SET_COINLORE_CRYPTO_DATA:
      return state.setIn(['data', 'coinlore'], fromJS(action.payload));
    case SET_COINCAP_CRYPTO_DATA:
      return state.setIn(['data', 'coincap'], fromJS(action.payload));
    case SET_UPDATED:
      return state.set('updated', fromJS(action.payload));
    case SET_CURRENT_CRYPTO:
      return state.set('currentCrypto', fromJS(action.payload));
    default: return state;
  }
};

export default crypto;
