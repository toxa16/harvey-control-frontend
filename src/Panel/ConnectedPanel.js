import { connect } from 'react-redux';

import Panel from './Panel';
import { connect as backendConnect, disconnect } from '../subapp/redux-state/actions';

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    onConnect: () => dispatch(backendConnect()),
    onDisconnect: () => dispatch(disconnect()),
  };
}

const ConnectedPanel = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Panel);

export default ConnectedPanel;
