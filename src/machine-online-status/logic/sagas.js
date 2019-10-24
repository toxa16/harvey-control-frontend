import { take } from 'redux-saga/effects';

import ActionType from './action-type.enum';

export default function* machineOnlineStatusSaga(socket) {
  while (true) {
    yield take(ActionType.STATUS_REQUEST);
    const message = JSON.stringify({ type: ActionType.STATUS_REQUEST });
    socket.send(message);
  }
}
