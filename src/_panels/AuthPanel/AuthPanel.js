import React from 'react';

export default function AuthPanel({ onLoginSuccess, onLogoutSuccess }) {
  return (
    <div>
      <h3>Auth Panel</h3>
      <div>
        <button onClick={onLoginSuccess}>LoginSuccess</button>
        {' '}
        <button onClick={onLogoutSuccess}>LogoutSuccess</button>
      </div>
    </div>
  );
}
