import { all, call, delay, put, take, takeLatest } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import ActionType from './action-type.enum';

/*function delay(ms) {
  return new Promise(res => setTimeout(res, ms));
}*/

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
      ws.close();
    }
  });
}

function* logWebsocket(channel) {
  while (true) {
    let action = yield take(channel);
    //console.log(message);
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

function* connect() {
  /*yield put({ type: ActionType.HANDLE_CONNECTING });
  yield delay(1000);
  yield put({ type: ActionType.HANDLE_CONNECTED });*/
  const channel = yield call(websocketInitChannel);
}
function* watchConnect() {
  yield takeLatest(ActionType.CONNECT, connect);
}

function* disconnect() {
  /*yield put({ type: ActionType.HANDLE_DISCONNECTING });
  yield delay(1000);
  yield put({ type: ActionType.HANDLE_DISCONNECTED });*/
}
function* watchDisconnect() {
  yield takeLatest(ActionType.DISCONNECT, disconnect);
}

export default function* rootSaga() {
  yield all([
    //watchConnect(),
    //watchDisconnect(),
    watchWebsocket(),
  ]);
}
