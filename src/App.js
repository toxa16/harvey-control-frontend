import React from 'react';

import './App.css';
import ConnectedAuthPanel from './_panels/AuthPanel/ConnectedAuthPanel';
import ConnectedAuthScreen from './auth/ui/ConnectedAuthScreen';
import ControlBackend from './control-backend/ui/ControlBackend';

function App() {
  return (
    <div className="App">
      <ConnectedAuthPanel />
      <br />
      <hr />
      <br />
      <ControlBackend status={4} />
    </div>
  );
}

export default App;
