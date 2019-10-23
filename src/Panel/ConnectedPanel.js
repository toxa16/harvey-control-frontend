import { connect } from 'react-redux';

import Panel from './Panel';
import ActionType from '../subapp/redux-state/action-type.enum';

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    onConnect: () => dispatch({
      type: ActionType.HANDLE_CONNECTING,
    }),
    onDisconnect: () => dispatch({
      type: ActionType.HANDLE_DISCONNECTING,
    }),
  };
}

const ConnectedPanel = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Panel);

export default ConnectedPanel;
