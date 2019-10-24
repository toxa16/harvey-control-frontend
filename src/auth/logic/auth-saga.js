import { cancel, delay, fork, put, take } from 'redux-saga/effects';

import ActionType from './action-type.enum';
import controlBackendSaga from '../../control-backend/logic/saga';

export default function* authSaga() {
  while (true) {
    yield take(ActionType.LOGIN_REQUEST);

    yield put({ type: ActionType.LOGIN_PENDING });
    yield delay(1000);
    yield put({ type: ActionType.LOGIN_SUCCESS });

    const wsUrl = 'ws://localhost:3001';  // env
    const socket = new WebSocket(wsUrl);
    const cbTask = yield fork(controlBackendSaga, socket);

    yield take(ActionType.LOGOUT_REQUEST);
    socket.close();
    yield cancel(cbTask);

    yield put({ type: ActionType.LOGOUT_PENDING });
    yield delay(1000);
    yield put({ type: ActionType.LOGOUT_SUCCESS });
  }
}
