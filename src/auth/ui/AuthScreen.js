import React from 'react';

import ConnectedHeader from './ConnectedHeader';
import AuthStatus from '../logic/auth-status.enum';
import LoggedIn from './LoggedIn';
import ConnectedLoggedOut from './ConnectedLoggedOut';

export default function AuthScreen({ status }) {
  const renderBody = () => {
    switch (status) {
      case AuthStatus.LOGGING_IN: return 'Logging in...';
      case AuthStatus.LOGGED_IN: return <LoggedIn />;
      case AuthStatus.LOGGING_OUT: return 'Logging out...';
      default: return <ConnectedLoggedOut />;
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
