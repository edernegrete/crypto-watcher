import {
  takeLatest,
  call,
  select,
  fork,
  delay,
  put
} from 'redux-saga/effects';
import { getBitsoData, getCoinloreData, getCoincapData } from '../services';
import { setBitsoData, setCoinloreData, setUpdated, setCoincapData } from '../actions-creators/crypto';
import NProgress from 'nprogress';
import { 
  FETCH_ALL_DATA,
} from '../actions/crypto';

function parseBitsoData({change_24, last}) {
  return {
    change: change_24,
    value: last,
    title: 'Bitso',
    image: '/bitso.jpg',
    id: Math.random()
  }
}
function parseCoinloreData(payload) {
  return payload.map(item => ({
    change: item.percent_change_24h,
    value: item.price_usd,
    title: 'Coinlore',
    image: '/coinlore.png',
    id: Math.random()
  }))
}
function parseCoincapData(payload) {
  return payload.map(item => ({
    change: Number(item.percentExchangeVolume).toFixed(2),
    value: Number(item.priceUsd).toFixed(2),
    title: 'Coincap',
    image: '/coincap.png',
    id: Math.random()
  }))
}
function * fetchAllData() {
  yield fork(NProgress.start)
  const currency = yield select(state => state.getIn(['cryptos', 'currentCrypto']))
  while (true) {
    yield put(setUpdated(false))
    const bitso = yield call(getBitsoData, currency)
    const coinlore = yield call(getCoinloreData, currency)
    const coincap = yield call(getCoincapData , currency)
    const bitsopayload = yield call(parseBitsoData, bitso.payload)
    const coinlorepayload = yield call(parseCoinloreData, coinlore)
    const coincappayload = yield call(parseCoincapData, coincap)
    yield put(setBitsoData(bitsopayload))
    yield put(setCoinloreData(coinlorepayload[0]))
    yield put(setCoincapData(coincappayload[0]))
    yield fork(NProgress.done)
    yield delay(15000)
    yield put(setUpdated(true))
    yield delay(3000)
    yield put(setUpdated(false))
  }
}

function * getAllData() {
  yield takeLatest(FETCH_ALL_DATA, fetchAllData);
}

export {
  getAllData,
};
