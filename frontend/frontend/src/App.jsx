import React, { useState } from 'react';
import "./App.css";
import UserProfile from './UserProfile';
import GameTroller from "./GameTroller";
import InviteGame from './InviteGame';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  const [username, setUsername] = useState(localStorage.getItem('username') || '');

  return (
    <>
      <Router>
        <Routes>
          {username ? (
            <Route path="/" element={<GameTroller username={username} />} />
          ) : (
            <Route path="/" element={<UserProfile setUsername={setUsername} />} />
          )}
          <Route path="/challenge" element={<InviteGame />} />
        </Routes>
      </Router>
    </>
  );
}