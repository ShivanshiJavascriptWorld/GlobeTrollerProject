import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const InviteGame = () => {
  const [username, setUsername] = useState('');
  const [score, setScore] = useState(0);

  const query = new URLSearchParams(useLocation().search);
  useEffect(() => {
    const username = query.get('username');
    const score = parseInt(query.get('score'), 10);
    setUsername(username);
    setScore(score);
  }, []);

  return (
    <div>
      <h2>Challenge Accepted!</h2>
      <p>You're playing against {username}. They have {score} points so far!</p>
      {/* Add Game Component here */}
    </div>
  );
};

export default InviteGame;
