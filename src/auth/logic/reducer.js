import AuthStatus from './auth-status.enum';
import ActionType from './action-type.enum';

const initialState = {
  status: AuthStatus.LOGGED_OUT,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ActionType.LOGIN_SUCCESS: {
      return Object.assign({}, state, {
        status: AuthStatus.LOGGED_IN,
      });
    }
    case ActionType.LOGOUT_SUCCESS: {
      return Object.assign({}, state, {
        status: AuthStatus.LOGGED_OUT,
      });
    }
    default: return state;
  }
}