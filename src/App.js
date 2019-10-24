import React from 'react';

import './App.css';
import ConnectedPanel from './Panel/ConnectedPanel';
import ConnectedMainScreen from './subapp/components/ConnectedMainScreen';
import ConnectedOnlineStatus from './machine-online-status/ui/ConnectedOnlineStatus';
import ConnectedMachineStatusPanel from './_panels/ConnectedMachineStatusPanel';
import AuthScreen from './auth/ui/AuthScreen';

function App() {
  return (
    <div className="App">
      <ConnectedMachineStatusPanel />
      <br />
      <hr />
      <br />
      <AuthScreen />
    </div>
  );
}

export default App;
