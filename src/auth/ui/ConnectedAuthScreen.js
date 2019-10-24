import { connect } from 'react-redux';

import AuthScreen from './AuthScreen';

function mapStateToProps(state) {
  return {
    status: state.auth.status,
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

const ConnectedAuthScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AuthScreen);

export default ConnectedAuthScreen;
