import { delay, put } from 'redux-saga/effects';

import ActionType from './action-type.enum';

export default function* controlBackendSaga() {
  yield put({ type: ActionType.CONNECT_PENDING });
  yield delay(1000);
  yield put({ type: ActionType.CONNECT_SUCCESS });
}
