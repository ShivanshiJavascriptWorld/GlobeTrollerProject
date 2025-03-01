import React from "react";

function ClueDisplay({ clues, handleAnswer }) {
  return (
    <div>
      <h2>Guess the destination:</h2>
      {clues.map((clue, index) => (
        <p key={index}>{clue}</p>
      ))}
      <div>
        <button onClick={() => handleAnswer("Paris")}>Paris</button>
        <button onClick={() => handleAnswer("Tokyo")}>Tokyo</button>
        <button onClick={() => handleAnswer("New York")}>New York</button>
        <button onClick={() => handleAnswer("London")}>London</button>
      </div>
    </div>
  );
}

export default ClueDisplay;
