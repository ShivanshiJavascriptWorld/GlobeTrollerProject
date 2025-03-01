
import React from 'react';

export default function Feedback({ feedback, funFact }) {
  return (
    <div className={`feedback ${feedback}`}>
      <p className={`feedback-text ${feedback === 'correct' ? 'correct' : 'incorrect'}`}>
        {feedback === 'correct' ? 'Correct! 🎉' : 'Oops! 😔'}
      </p>
      <div className="fun-fact">
        <p>{funFact}</p>
      </div>
    </div>
  );
}
