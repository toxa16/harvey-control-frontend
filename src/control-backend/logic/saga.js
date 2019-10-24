import { call, fork, put, take } from 'redux-saga/effects';
import { eventChannel, END } from 'redux-saga';

import ActionType from './action-type.enum';

function websocketChannel(socket) {
  return eventChannel(emit => {
    const handleOpen = () => {
      console.log('websocket opened');
      const action = { type: ActionType.CONNECT_SUCCESS };
      emit(action);
    };
    const handleClose = () => {
      console.log('websocket closed');
      const action = { type: ActionType.DISCONNECT_SUCCESS };
      emit(action);
      emit(END);
    };
    const handleMessage = e => {
      const message = e.data;
      console.log(message);
      /*const action = {
        type: ActionType.HANDLE_MESSAGE,
        payload: { message },
      };
      emit(action);*/
    }

    socket.addEventListener('open', handleOpen);
    socket.addEventListener('message', handleMessage);
    socket.addEventListener('close', handleClose);

    return () => {
      console.log('closing channel...');
      socket.removeEventListener('open', handleOpen);
      socket.removeEventListener('message', handleMessage);
      socket.removeEventListener('close', handleClose);
    };
  });
}

function* logWebsocket(channel) {
  while (true) {
    let action = yield take(channel);
    console.log(action);
    yield put(action);
  }
}

export default function* controlBackendSaga(socket) {
  yield put({ type: ActionType.CONNECT_PENDING });
  const channel = yield call(websocketChannel, socket);
  yield call(logWebsocket, channel);
}
