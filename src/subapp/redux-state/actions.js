import ActionType from './action-type.enum';

export function connect() {
  return dispatch => {
    dispatch(handleConnecting());
  }
}
export function disconnect() {
  return dispatch => {
    dispatch(handleDisconnecting());
  }
}

function handleConnecting() {
  return {
    type: ActionType.HANDLE_CONNECTING,
  }
}
function handleConnected() {}
function handleDisconnecting() {
  return {
    type: ActionType.HANDLE_DISCONNECTING,
  }
}
function handleDisconnected() {}
