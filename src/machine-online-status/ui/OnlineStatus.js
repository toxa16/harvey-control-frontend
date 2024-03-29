import React from 'react';
import MachineStatus from '../logic/machine-status.enum';

export default function OnlineStatus({ status, onRequestStatus }) {
  function displayStatus() {
    switch (status) {
      case MachineStatus.PENDING: return 'Pending...';
      case MachineStatus.OFFLINE: return 'OFFLINE';
      case MachineStatus.ONLINE: return 'ONLINE';
      default: return 'UNKNOWN';
    }
  }

  return (
    <div>
      <h2>OnlineStatus</h2>
      <div>Status: { displayStatus() }</div>
      <br />
      <div>
        <button onClick={onRequestStatus}>
          Request Online Status
        </button>
      </div>
    </div>
  );
}
