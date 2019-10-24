import { connect } from 'react-redux';

import MachineStatusPanel from './MachineStatusPanel';

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

const ConnectedMachineStatusPanel = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MachineStatusPanel);

export default ConnectedMachineStatusPanel
