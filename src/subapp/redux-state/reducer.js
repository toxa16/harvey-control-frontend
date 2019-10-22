import ConnectionStatus from './connection-status.enum';
import ActionType from './action-type.enum';

const initialState = {
  status: ConnectionStatus.DISCONNECTED,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ActionType.CONNECT: {
      return Object.assign({}, state, {
        status: ConnectionStatus.CONNECTED,
      });
    }
    case ActionType.DISCONNECT: {
      return Object.assign({}, state, {
        status: ConnectionStatus.DISCONNECTED,
      });
    }
    default: return state;
  }
}
