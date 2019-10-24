import { connect } from 'react-redux';

import OnlineStatus from './OnlineStatus';
import ActionType from '../logic/action-type.enum';

function mapStateToProps(state) {
  return {
    status: state.machineStatus.status,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onRequestStatus: () => dispatch({ type: ActionType.STATUS_REQUEST }),
  };
}

const ConnectedOnlineStatus = connect(
  mapStateToProps,
  mapDispatchToProps,
)(OnlineStatus);

export default ConnectedOnlineStatus;
