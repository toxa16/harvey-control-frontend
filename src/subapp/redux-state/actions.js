import ActionType from './action-type.enum';

export function connect() {
  return (dispatch, getState, { backend }) => {
    dispatch(handleConnecting());
    backend.connect()
      .then(() => {
        const socket = backend.socket;
        socket.addEventListener('message', e => console.log(e.data));
        socket.send('hello world');
        dispatch(handleConnected());
      });
  }
}
export function disconnect() {
  return dispatch => {
    dispatch(handleDisconnecting());
    setTimeout(() => {
      dispatch(handleDisconnected());
    }, 1000);
  }
}

function handleConnecting() {
  return {
    type: ActionType.HANDLE_CONNECTING,
  }
}
function handleConnected() {
  return {
    type: ActionType.HANDLE_CONNECTED,
  }
}
function handleDisconnecting() {
  return {
    type: ActionType.HANDLE_DISCONNECTING,
  }
}
function handleDisconnected() {
  return {
    type: ActionType.HANDLE_DISCONNECTED,
  }
}
