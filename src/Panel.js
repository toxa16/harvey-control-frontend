import React from 'react';

export default function Panel({ onConnect, onDisconnect }) {
  function handleConnectClick() {
    onConnect && onConnect();
  }

  function handleDisconnectClick() {
    onDisconnect && onDisconnect();
  }

  return (
    <div>
      <button onClick={handleConnectClick}>Connect</button>
      {' '}
      <button onClick={handleDisconnectClick}>Disconnect</button>
    </div>
  );
}
