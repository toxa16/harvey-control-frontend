import React from 'react';

import './App.css';
import AuthScreen from './auth/ui/AuthScreen';
import ConnectedAuthPanel from './_panels/AuthPanel/ConnectedAuthPanel';

function App() {
  return (
    <div className="App">
      <ConnectedAuthPanel />
      <br />
      <hr />
      <br />
      <AuthScreen />
    </div>
  );
}

export default App;
