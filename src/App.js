import React from 'react';

import './App.css';
import ConnectedPanel from './Panel/ConnectedPanel';
import ConnectedMainScreen from './subapp/components/ConnectedMainScreen';
import DummyPanel from './_panels/DummyPanel';
import ConnectedOnlineStatus from './machine-online-status/ui/ConnectedOnlineStatus';

function App() {
  return (
    <div className="App">
      <DummyPanel />
      <br />
      <hr />
      <br />
      <ConnectedOnlineStatus />
    </div>
  );
}

export default App;
