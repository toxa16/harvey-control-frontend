import React from 'react';

import ConnectionStatus from '../logic/connection-status.enum';
import ConnectedOnlineStatus from '../../machine-online-status/ui/ConnectedOnlineStatus';

export default function ControlBackend({ status }) {
  const renderBody = () => {
    switch (status) {
      case ConnectionStatus.CONNECTING: return 'Connecting...';
      case ConnectionStatus.CONNECTED: {
        return <ConnectedOnlineStatus />;
      }
      case ConnectionStatus.DISCONNECTING: return 'Disconnecting...';
      default: return 'Disconnected.';
    }
  };

  return (
    <div>
      <h1>ControlBackend</h1>
      <br />
      <div>{ renderBody() }</div>
    </div>
  );
}
