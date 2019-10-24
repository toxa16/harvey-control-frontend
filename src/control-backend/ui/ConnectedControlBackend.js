import { connect } from 'react-redux';

import ControlBackend from './ControlBackend';

function mapStateToProps(state) {
  return {
    status: state.controlBackend.status,
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

const ConnectedControlBackend = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ControlBackend);

export default ConnectedControlBackend;
