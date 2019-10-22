import ActionType from './action-type.enum';

export function connect() {
  return (dispatch, getState, { backend }) => {
    console.log(backend);
    dispatch(handleConnecting());
    setTimeout(() => {
      dispatch(handleConnected());
    }, 1000);
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
