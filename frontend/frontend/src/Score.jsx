import React from 'react';

export default function Score({ correct, incorrect, totalTurns, gameOver }) {
  const totalScore = correct - incorrect;

  return (
    <div className="score">
      {gameOver ? (
        <p>
          Total Score: <span>{totalScore}</span>
        </p>
      ) : (
        <>
          <p>
            Correct: <span>{correct}</span>
          </p>
          <p>
            Incorrect: <span>{incorrect}</span>
          </p>
        </>
      )}
      <p>
        Turns Remaining: <span>{totalTurns}</span>
      </p>
    </div>
  );
}
