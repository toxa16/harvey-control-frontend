import React from 'react';

import './App.css';
import ConnectedAuthPanel from './_panels/AuthPanel/ConnectedAuthPanel';
import ConnectedAuthScreen from './auth/ui/ConnectedAuthScreen';

function App() {
  return (
    <div className="App">
      <ConnectedAuthPanel />
      <br />
      <hr />
      <br />
      <ConnectedAuthScreen />
    </div>
  );
}

export default App;
