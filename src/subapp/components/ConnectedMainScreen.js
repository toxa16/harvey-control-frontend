import { connect } from 'react-redux';

import MainScreen from './MainScreen';

function mapStateToProps(state) {
  return {
    status: state.controlBackend.status,
    message: state.controlBackend.message,
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

const ConnectedMainScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainScreen);

export default ConnectedMainScreen;
