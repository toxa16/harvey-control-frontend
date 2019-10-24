import { cancel, delay, fork, put, take } from 'redux-saga/effects';

import ActionType from './action-type.enum';
import controlBackendSaga from '../../control-backend/logic/saga';

export default function* authSaga() {
  while (true) {
    yield take(ActionType.LOGIN_REQUEST);

    yield put({ type: ActionType.LOGIN_PENDING });
    yield delay(1000);
    yield put({ type: ActionType.LOGIN_SUCCESS });

    const controlBackendTask = yield fork(controlBackendSaga);

    yield take(ActionType.LOGOUT_REQUEST);
    yield cancel(controlBackendTask);
    
    yield put({ type: ActionType.LOGOUT_PENDING });
    yield delay(1000);
    yield put({ type: ActionType.LOGOUT_SUCCESS });
  }
}
