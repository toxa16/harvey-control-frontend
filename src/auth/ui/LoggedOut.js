import React from 'react';

export default function LoggedOut({ onLoginRequest }) {
  return (
    <div>
      <h2>Logged Out</h2>
      <div>
        <button onClick={onLoginRequest}>Log In</button>
      </div>
    </div>
  );
}
