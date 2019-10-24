import React from 'react';
import AuthStatus from '../logic/auth-status.enum';

export default function Header({ status }) {
  const renderLogoutButton = () => {
    return (status === AuthStatus.LOGGED_IN) &&
      <button>Log Out</button>;
  }

  return (
    <header>
      <span>Header</span>
      {' '}
      { renderLogoutButton() }
    </header>
  );
}
