import ActionType from './action-type.enum';

/*export function connect() {
  return (dispatch, getState, { backend }) => {
    dispatch(handleConnecting());
    backend.connect()
      .then(() => {
        dispatch(handleConnected());
      });
  }
}
export function disconnect() {
  return (dispatch, getState, { backend }) => {
    dispatch(handleDisconnecting());
    backend.disconnect()
      .then(() => {
        dispatch(handleDisconnected());
      });
  }
}*/

export function connect() {
  return handleConnecting();
}
export function disconnect() {
  return handleDisconnecting();
}

function handleConnecting() {
  return {
    type: ActionType.HANDLE_CONNECTING,
  }
}
/*function handleConnected() {
  return {
    type: ActionType.HANDLE_CONNECTED,
  }
}*/
function handleDisconnecting() {
  return {
    type: ActionType.HANDLE_DISCONNECTING,
  }
}
/*function handleDisconnected() {
  return {
    type: ActionType.HANDLE_DISCONNECTED,
  }
}*/
