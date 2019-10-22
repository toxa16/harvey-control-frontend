import React from 'react';
import Disconnected from './Disconnected';

export default function MainScreen({ status }) {
  function renderByStatus() {
    switch (status) {
      default: return <Disconnected />
    }
  }

  return (
    <div>
      { renderByStatus() }
    </div>
  );
}
