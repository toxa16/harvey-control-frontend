import AuthStatus from './auth-status.enum';

const initialState = {
  status: AuthStatus.LOGGED_OUT,
};

export default function(state = initialState, action) {
  switch (action.type) {
    default: return state;
  }
}
