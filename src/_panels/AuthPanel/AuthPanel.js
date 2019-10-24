import React from 'react';

export default function AuthPanel({
  onLoginPending, onLoginSuccess, onLogoutPending, onLogoutSuccess,
}) {
  return (
    <div>
      <h3>Auth Panel</h3>
      <div>
        <button onClick={onLoginPending}>LoginPending</button>
        {' '}
        <button onClick={onLoginSuccess}>LoginSuccess</button>
        {' '}
        <button onClick={onLogoutPending}>LogoutPending</button>
        {' '}
        <button onClick={onLogoutSuccess}>LogoutSuccess</button>
      </div>
    </div>
  );
}
