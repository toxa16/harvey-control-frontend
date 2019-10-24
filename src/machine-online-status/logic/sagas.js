import { all, put, takeEvery } from 'redux-saga/effects';

import ActionType from './action-type.enum';

function* generateRandomStatus() {
  if (Math.random() >= 0.5) {
    yield put({ type: ActionType.MACHINE_ONLINE });
  } else {
    yield put({ type: ActionType.MACHINE_OFFLINE });
  }
}

function* watchStatusRequest() {
  yield takeEvery(ActionType.STATUS_REQUEST, generateRandomStatus);
}

export default function* machineOnlineStatusSaga() {
  yield all([
    watchStatusRequest(),
  ]);
}
