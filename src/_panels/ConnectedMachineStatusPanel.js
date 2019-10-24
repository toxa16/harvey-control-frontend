import { connect } from 'react-redux';

import MachineStatusPanel from './MachineStatusPanel';
import ActionType from '../machine-online-status/logic/action-type.enum';

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    onPending: () => dispatch({ type: ActionType.MACHINE_PENDING }),
    onOffline: () => dispatch({ type: ActionType.MACHINE_OFFLINE }),
    onOnline: () => dispatch({ type: ActionType.MACHINE_ONLINE }),
  };
}

const ConnectedMachineStatusPanel = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MachineStatusPanel);

export default ConnectedMachineStatusPanel
