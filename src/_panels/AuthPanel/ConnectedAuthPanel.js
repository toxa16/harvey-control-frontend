import { connect } from 'react-redux';

import AuthPanel from './AuthPanel';
import ActionType from '../../auth/logic/action-type.enum';

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    onLoginSuccess: () => dispatch({ type: ActionType.LOGIN_SUCCESS }),
    onLogoutSuccess: () => dispatch({ type: ActionType.LOGOUT_SUCCESS }),
  };
}

const ConnectedAuthPanel = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AuthPanel);

export default ConnectedAuthPanel;
