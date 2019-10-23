import { all, call, delay, fork, put, take } from 'redux-saga/effects';
import { eventChannel, END } from 'redux-saga';
import ActionType from './action-type.enum';

function websocketChannel2(socket) {
  return eventChannel(emit => {
    const handleOpen = () => {
      console.log('websocket opened');
      const action = { type: ActionType.HANDLE_CONNECTED };
      emit(action);
    };
    const handleClose = () => {
      console.log('websocket closed');
      const action = { type: ActionType.HANDLE_DISCONNECTED };
      emit(action);
      emit(END);
    };

    socket.addEventListener('open', handleOpen);
    socket.addEventListener('close', handleClose);

    return () => {
      console.log('closing channel...');
      socket.removeEventListener('open', handleOpen);
      socket.removeEventListener('close', handleClose);
    };
  });
}

function* logWebsocket2(channel) {
  while (true) {
    let action = yield take(channel);
    console.log(action);
    yield put(action);
  }
}

function* watchWebsocket(wsUrl) {
  while (true) {
    yield take(ActionType.CONNECT);
    yield put({ type: ActionType.HANDLE_CONNECTING });
    yield delay(500);
    const socket = new WebSocket(wsUrl);
    const channel = yield call(websocketChannel2, socket);
    yield fork(logWebsocket2, channel);
    yield take(ActionType.DISCONNECT);
    yield put({ type: ActionType.HANDLE_DISCONNECTING });
    yield delay(500);
    socket.close();
  }
}

export default function* rootSaga() {
  const wsUrl = 'ws://localhost:3001';  // env
  yield all([
    watchWebsocket(wsUrl),
  ]);
}
