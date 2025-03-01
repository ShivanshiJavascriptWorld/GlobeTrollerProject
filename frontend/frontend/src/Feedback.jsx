import React from 'react';

export default function Feedback({ feedback, funFact,city,feedbackClass }) {

  return (
    <section
      aria-live="polite"
      role="status"
      className={`game-status ${feedbackClass}`}>
      <h2>
        {feedback === 'correct' ? `${city} 🎉` : feedback === 'incorrect' ? 'Wrong Answer 😔' : ''}
      </h2>
    { funFact ?  (funFact.map((fact)=>{
        return(
      <p>{fact || ''}</p>)})):<></>}

    </section>
  );
}
