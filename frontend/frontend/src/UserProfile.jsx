import React, { useState } from 'react';

const UserProfile = ({ setUsername }) => {
  const [usernameInput, setUsernameInput] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (usernameInput.trim()) {
      localStorage.setItem('username', usernameInput);
      setUsername(usernameInput);
      setMessage("Username saved successfully!");
    } else {
      setMessage("Please enter a valid username.");
    }
  };

  return (
    <div className="user-profile">
      <h2>Enter your unique username to get started</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={usernameInput}
          onChange={(e) => setUsernameInput(e.target.value)}
          placeholder="Enter your username"
          required
        />
        <button type="submit">Save</button>
      </form>
      {message && <p>{message}</p>} 
    </div>
  );
}

export default UserProfile;
