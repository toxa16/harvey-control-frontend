import ConnectionStatus from './connection-status.enum';
import ActionType from './action-type.enum';

const initialState = {
  status: ConnectionStatus.DISCONNECTED,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ActionType.HANDLE_CONNECTING: {
      return Object.assign({}, state, {
        status: ConnectionStatus.CONNECTING,
      });
    }
    case ActionType.HANDLE_CONNECTED: {
      return Object.assign({}, state, {
        status: ConnectionStatus.CONNECTED,
      });
    }
    case ActionType.HANDLE_DISCONNECTING: {
      return Object.assign({}, state, {
        status: ConnectionStatus.DISCONNECTING,
      });
    }
    case ActionType.HANDLE_DISCONNECTED: {
      return Object.assign({}, state, {
        status: ConnectionStatus.DISCONNECTED,
      });
    }
    default: return state;
  }
}
