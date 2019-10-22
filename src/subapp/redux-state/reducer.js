import ConnectionStatus from './connection-status.enum';

const initialState = {
  status: ConnectionStatus.DISCONNECTED,
};

export default function(state = initialState, action) {
  switch (action.type) {
    default: return state;
  }
}
