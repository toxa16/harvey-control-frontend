import { connect } from 'react-redux';

import LoggedOut from './LoggedOut';
import ActionType from '../logic/action-type.enum';

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    onLoginRequest: () => dispatch({ type: ActionType.LOGIN_REQUEST }),
  };
}

const ConnectedLoggedOut = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoggedOut);

export default ConnectedLoggedOut;
