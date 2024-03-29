import { connect } from 'react-redux';

import Header from './Header';
import ActionType from '../logic/action-type.enum';

function mapStateToProps(state) {
  return {
    status: state.auth.status,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onLogoutRequest: () => dispatch({ type: ActionType.LOGOUT_REQUEST }),
  };
}

const ConnectedHeader = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);

export default ConnectedHeader;
