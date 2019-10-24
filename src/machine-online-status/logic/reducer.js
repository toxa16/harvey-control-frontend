import MachineStatus from './machine-status.enum';

const initialState = {
  status: MachineStatus.UNKNOWN,
};

export default function(state = initialState, action) {
  switch (action.type) {
    default: return state;
  }
}
