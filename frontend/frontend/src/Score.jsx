
import React from 'react';

export default function Score({ correct, incorrect }) {
  return (
    <div className="score">
      <p>
        Correct: <span>{correct}</span>
      </p>
      <p>
        Incorrect: <span>{incorrect}</span>
      </p>
    </div>
  );
}
