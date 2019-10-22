import React from 'react';

import './App.css';
import ConnectedPanel from './Panel/ConnectedPanel';
import ConnectedMainScreen from './subapp/components/ConnectedMainScreen';

function App() {
  return (
    <div className="App">
      <ConnectedPanel />
      <br />
      <ConnectedMainScreen />
    </div>
  );
}

export default App;
