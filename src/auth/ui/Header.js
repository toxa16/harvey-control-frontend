import React from 'react';
import AuthStatus from '../logic/auth-status.enum';

export default function Header({ status, onLogoutRequest }) {
  const renderLogoutButton = () => {
    return (status === AuthStatus.LOGGED_IN) &&
      <button onClick={onLogoutRequest}>Log Out</button>;
  }

  return (
    <header>
      <span>Header</span>
      {' '}
      { renderLogoutButton() }
    </header>
  );
}
