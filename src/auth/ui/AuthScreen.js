import React from 'react';

import LoggedOut from './LoggedOut';
import ConnectedHeader from './ConnectedHeader';

export default function AuthScreen() {
  return (
    <div>
      <ConnectedHeader />
      <LoggedOut />
    </div>
  );
}
