import React from 'react';

import './App.css';
import ConnectedPanel from './Panel/ConnectedPanel';
import ConnectedMainScreen from './subapp/components/ConnectedMainScreen';
import ConnectedOnlineStatus from './machine-online-status/ui/ConnectedOnlineStatus';
import ConnectedMachineStatusPanel from './_panels/ConnectedMachineStatusPanel';

function App() {
  return (
    <div className="App">
      <ConnectedMachineStatusPanel />
      <br />
      <hr />
      <br />
      <ConnectedOnlineStatus />
    </div>
  );
}

export default App;
