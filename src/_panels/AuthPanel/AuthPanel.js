import React from 'react';

export default function AuthPanel({
  onLoginRequest, onLoginSuccess, onLogoutRequest, onLogoutSuccess,
}) {
  return (
    <div>
      <h3>Auth Panel</h3>
      <div>
        <button onClick={onLoginRequest}>LoginRequest</button>
        {' '}
        <button onClick={onLoginSuccess}>LoginSuccess</button>
        {' '}
        <button onClick={onLogoutRequest}>LogoutRequest</button>
        {' '}
        <button onClick={onLogoutSuccess}>LogoutSuccess</button>
      </div>
    </div>
  );
}
