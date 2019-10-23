import { all, put, takeLatest } from 'redux-saga/effects';
import ActionType from './action-type.enum';

function delay(ms) {
  return new Promise(res => setTimeout(res, ms));
}

function* connect() {
  yield put({ type: ActionType.HANDLE_CONNECTING });
  yield delay(1000);
  yield put({ type: ActionType.HANDLE_CONNECTED });
}
function* watchConnect() {
  yield takeLatest(ActionType.CONNECT, connect);
}

function* disconnect() {
  yield put({ type: ActionType.HANDLE_DISCONNECTING });
  yield delay(1000);
  yield put({ type: ActionType.HANDLE_DISCONNECTED });
}
function* watchDisconnect() {
  yield takeLatest(ActionType.DISCONNECT, disconnect);
}

export default function* rootSaga() {
  yield all([
    watchConnect(),
    watchDisconnect(),
  ]);
}
