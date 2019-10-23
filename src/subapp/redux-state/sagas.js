import { all, call, fork, put, take } from 'redux-saga/effects';
import { eventChannel, END } from 'redux-saga';
import ActionType from './action-type.enum';

function websocketChannel2(socket) {
  return eventChannel(emit => {
    const handleOpen = () => {
      console.log('websocket opened');
      emit('emit: ws opened');
    };
    const handleClose = () => {
      console.log('websocket closed');
      emit('emit: ws closed');
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
    let message = yield take(channel);
    console.log(message);
  }
}

function* watchWebsocket() {
  while (true) {
    yield take(ActionType.CONNECT);
    const socket = new WebSocket('ws://localhost:3001');  // env
    const channel = yield call(websocketChannel2, socket);
    yield fork(logWebsocket2, channel);
    yield take(ActionType.DISCONNECT);
    socket.close();
  }
}

export default function* rootSaga() {
  yield all([
    watchWebsocket(),
  ]);
}
