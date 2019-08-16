import {
  FETCH_ALL_DATA,
  SET_CURRENT_CRYPTO,
  SET_COINLORE_CRYPTO_DATA,
  SET_COINCAP_CRYPTO_DATA,
  SET_UPDATED,
  SET_BITSO_CRYPTO_DATA
} from '../actions/crypto';

const fetchAllData = () => ({
  type: FETCH_ALL_DATA
});
const setCurrentCrypto = payload => ({
  type: SET_CURRENT_CRYPTO,
  payload
});
const setCoinloreData = payload => ({
  type: SET_COINLORE_CRYPTO_DATA,
  payload
});

const setCoincapData = payload => ({
  type: SET_COINCAP_CRYPTO_DATA,
  payload
});
const setUpdated = payload => ({
  type: SET_UPDATED,
  payload
});
const setBitsoData = payload => ({
  type: SET_BITSO_CRYPTO_DATA,
  payload
});


export {
  fetchAllData,
  setCurrentCrypto,
  setCoincapData,
  setCoinloreData,
  setBitsoData,
  setUpdated
};
