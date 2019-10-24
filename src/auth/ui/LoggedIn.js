import React from 'react';

import ConnectedControlBackend from '../../control-backend/ui/ConnectedControlBackend';

export default function LoggedIn() {
  return (
    <div>
      <h2>Logged In</h2>

      <ConnectedControlBackend />
    </div>
  );
}
