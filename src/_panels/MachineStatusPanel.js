import React from 'react';

export default function MachineStatusPanel({ onPending, onOffline, onOnline }) {
  return (
    <div>
      <h3>MachineStatsuPanel</h3>
      <div>
        <button onClick={onPending}>Status Pending</button>
        {' '}
        <button onClick={onOffline}>Status Offline</button>
        {' '}
        <button onClick={onOnline}>Status Online</button>
      </div>
    </div>
  );
}
