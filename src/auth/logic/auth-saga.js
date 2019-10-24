import { delay, put, take } from 'redux-saga/effects';

import ActionType from './action-type.enum';

export default function* authSaga() {
  while (true) {
    yield take(ActionType.LOGIN_REQUEST);
    yield put({ type: ActionType.LOGIN_PENDING });
    yield delay(1000);
    yield put({ type: ActionType.LOGIN_SUCCESS });

    yield take(ActionType.LOGOUT_REQUEST);
    yield put({ type: ActionType.LOGOUT_PENDING });
    yield delay(1000);
    yield put({ type: ActionType.LOGOUT_SUCCESS });
  }
}
