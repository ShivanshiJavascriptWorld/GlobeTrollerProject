
import React from 'react';

export default function NextButton({ onClick }) {
  return (
    <div className="next-button-container">
      <button className="next-button" onClick={onClick}>
        Next Destination
      </button>
    </div>
  );
}
