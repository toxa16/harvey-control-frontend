import React from 'react';

export default function MachineStatusPanel() {
  return (
    <div>
      <h3>MachineStatsuPanel</h3>
      <div>
        <button>Status Pending</button>
        {' '}
        <button>Status Offline</button>
        {' '}
        <button>Status Online</button>
      </div>
    </div>
  );
}
