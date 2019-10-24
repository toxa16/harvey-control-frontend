import React from 'react';

import './App.css';
import ConnectedPanel from './Panel/ConnectedPanel';
import ConnectedMainScreen from './subapp/components/ConnectedMainScreen';
import OnlineStatus from './machine-online-status/ui/OnlineStatus';
import DummyPanel from './_panels/DummyPanel';

function App() {
  return (
    <div className="App">
      <DummyPanel />
      <br />
      <hr />
      <br />
      <OnlineStatus status={1} />
    </div>
  );
}

export default App;
