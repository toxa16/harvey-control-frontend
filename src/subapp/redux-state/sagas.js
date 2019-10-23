import { all, put, takeEvery } from 'redux-saga/effects';

function* helloSaga() {
  console.log('hello saga');
}

function delay(ms) {
  return new Promise(res => setTimeout(res, ms));
}

function* connect() {
  yield delay(1000);
  yield put({ type: 'HANDLE_CONNECTED' });
}
function* watchConnect() {
  yield takeEvery('CONNECT', connect);
}

export default function* rootSaga() {
  yield all([
    helloSaga(),
    watchConnect(),
  ]);
}
