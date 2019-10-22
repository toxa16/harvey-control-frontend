import React from 'react';

import DisconnectedScreen from './DisconnectedScreen';
import ConnectionStatus from '../redux-state/connection-status.enum';
import ConnectingScreen from './ConnectingScreen';
import ConnectedScreen from './ConnectedScreen';
import DisconnectingScreen from './DisconnectingScreen';
import ErrorScreen from './ErrorScreen';

export default function MainScreen({ status }) {
  function renderByStatus() {
    switch (status) {
      case ConnectionStatus.CONNECTING: {
        return <ConnectingScreen />;
      }
      case ConnectionStatus.CONNECTED: {
        return <ConnectedScreen />;
      }
      case ConnectionStatus.DISCONNECTING: {
        return <DisconnectingScreen />;
      }
      case ConnectionStatus.ERROR: {
        return <ErrorScreen />
      }
      default: return <DisconnectedScreen />;
    }
  }

  return (
    <div>
      { renderByStatus() }
    </div>
  );
}
