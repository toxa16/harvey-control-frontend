import MachineStatus from './machine-status.enum';
import ActionType from './action-type.enum';

const initialState = {
  status: MachineStatus.UNKNOWN,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ActionType.MACHINE_OFFLINE: {
      return Object.assign({}, state, {
        status: MachineStatus.OFFLINE,
      })
    }
    case ActionType.MACHINE_ONLINE: {
      return Object.assign({}, state, {
        status: MachineStatus.ONLINE,
      })
    }
    default: return state;
  }
}
