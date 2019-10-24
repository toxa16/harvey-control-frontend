import React from 'react';

import LoggedOut from './LoggedOut';
import ConnectedHeader from './ConnectedHeader';
import AuthStatus from '../logic/auth-status.enum';
import LoggedIn from './LoggedIn';

export default function AuthScreen({ status }) {
  const renderBody = () => {
    switch (status) {
      case AuthStatus.LOGGING_IN: return 'Logging in...';
      case AuthStatus.LOGGED_IN: return <LoggedIn />;
      case AuthStatus.LOGGING_OUT: return 'Logging out...';
      default: return <LoggedOut />;
    }
  };

  return (
    <div>
      <ConnectedHeader />
      <br />
      <div>{ renderBody() }</div>
    </div>
  );
}
