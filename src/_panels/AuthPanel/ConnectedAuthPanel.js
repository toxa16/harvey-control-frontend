import { connect } from 'react-redux';

import AuthPanel from './AuthPanel';
import ActionType from '../../auth/logic/action-type.enum';

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    onLoginPending: () => dispatch({ type: ActionType.LOGIN_PENDING }),
    onLoginSuccess: () => dispatch({ type: ActionType.LOGIN_SUCCESS }),
    onLogoutPending: () => dispatch({ type: ActionType.LOGOUT_PENDING }),
    onLogoutSuccess: () => dispatch({ type: ActionType.LOGOUT_SUCCESS }),
  };
}

const ConnectedAuthPanel = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AuthPanel);

export default ConnectedAuthPanel;
