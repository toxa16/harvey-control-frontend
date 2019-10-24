import React from 'react';
import Header from './Header';
import LoggedOut from './LoggedOut';

export default function AuthScreen() {
  return (
    <div>
      <Header />
      <LoggedOut />
    </div>
  );
}
