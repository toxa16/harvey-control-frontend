import ConnectionStatus from './connection-status.enum';
import ActionType from './action-type.enum';

const initialState = {
  status: ConnectionStatus.DISCONNECTED,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ActionType.CONNECT_PENDING: {
      return Object.assign({}, state, {
        status: ConnectionStatus.CONNECTING,
      });
    }
    case ActionType.CONNECT_SUCCESS: {
      return Object.assign({}, state, {
        status: ConnectionStatus.CONNECTED,
      });
    }
    default: return state;
  }
}
