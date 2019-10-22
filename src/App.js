import React from 'react';

import './App.css';
import MainScreen from './subapp/components/MainScreen';
import Panel from './Panel';

function App() {
  return (
    <div className="App">
      <Panel />
      <br />
      <MainScreen status={0} />
    </div>
  );
}

export default App;
