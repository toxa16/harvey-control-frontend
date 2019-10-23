import { all, call, put, take } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import ActionType from './action-type.enum';

function websocketInitChannel() {
  return eventChannel(emit => {
    const ws = new WebSocket('ws://localhost:3001');

    ws.addEventListener('open', () => {
      console.log('ws opened');
      const action = { type: ActionType.HANDLE_CONNECTED }
      emit(action);
    });

    ws.addEventListener('message', e => {
      const message = e.data;
      console.log(message);
      const action = {
        type: ActionType.HANDLE_MESSAGE,
        payload: { message },
      }
      emit(action);
    })

    ws.addEventListener('close', () => {
      console.log('ws closed');
      const action = { type: ActionType.HANDLE_DISCONNECTED }
      emit(action);
    });

    return () => {
      const action = { type: ActionType.HANDLE_DISCONNECTING }
      emit(action);
      ws.close();
    }
  });
}

function* logWebsocket(channel) {
  while (true) {
    let action = yield take(channel);
    yield put(action);
  }
}
function* closeWebsocket(channel) {
  yield take(ActionType.DISCONNECT);
  channel.close();
}
function* watchWebsocket() {
  while (true) {
    yield take(ActionType.CONNECT);
    const channel = yield call(websocketInitChannel);
    yield all([
      logWebsocket(channel),
      closeWebsocket(channel),
    ]);
  }
}

export default function* rootSaga() {
  yield all([
    watchWebsocket(),
  ]);
}
