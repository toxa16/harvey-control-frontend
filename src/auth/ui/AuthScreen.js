import React from 'react';

import LoggedOut from './LoggedOut';
import ConnectedHeader from './ConnectedHeader';
import AuthStatus from '../logic/auth-status.enum';
import LoggedIn from './LoggedIn';

export default function AuthScreen({ status }) {
  const renderBody = () => {
    return status === AuthStatus.LOGGED_IN ?
      <LoggedIn /> :
      <LoggedOut />;
  };

  return (
    <div>
      <ConnectedHeader />
      { renderBody() }
    </div>
  );
}
