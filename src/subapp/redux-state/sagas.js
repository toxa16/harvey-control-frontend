import { all, put, takeEvery } from 'redux-saga/effects';
import ActionType from './action-type.enum';

function* helloSaga() {
  console.log('hello saga');
}

function delay(ms) {
  return new Promise(res => setTimeout(res, ms));
}

function* connect() {
  yield put({ type: ActionType.HANDLE_CONNECTING });
  yield delay(1000);
  yield put({ type: ActionType.HANDLE_CONNECTED });
}
function* watchConnect() {
  yield takeEvery(ActionType.CONNECT, connect);
}

export default function* rootSaga() {
  yield all([
    helloSaga(),
    watchConnect(),
  ]);
}
