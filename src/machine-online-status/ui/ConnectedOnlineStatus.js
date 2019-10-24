import { connect } from 'react-redux';

import OnlineStatus from './OnlineStatus';

function mapStateToProps(state) {
  return {
    status: state.machineStatus.status,
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

const ConnectedOnlineStatus = connect(
  mapStateToProps,
  mapDispatchToProps,
)(OnlineStatus);

export default ConnectedOnlineStatus;
