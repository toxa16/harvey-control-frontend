import React from 'react';

import DisconnectedScreen from './DisconnectedScreen';

export default function MainScreen({ status }) {
  function renderByStatus() {
    switch (status) {
      default: return <DisconnectedScreen />
    }
  }

  return (
    <div>
      { renderByStatus() }
    </div>
  );
}
