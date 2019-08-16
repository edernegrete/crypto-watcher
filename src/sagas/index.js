import {
  fork
} from 'redux-saga/effects';

import { getAllData } from './crypto';
export default function * rootSaga() {
  yield fork(getAllData);
}
