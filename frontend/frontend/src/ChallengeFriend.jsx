import React from 'react';

const ChallengeButton = ({ onClick }) => {
  return (
    <div className="button-container">
      <button className="challenge-button" onClick={onClick}>
        Challenge a Friend
      </button>
    </div>
  );
};

export default ChallengeButton;
