
import React from 'react';

export default function NextButton({ onClick, disabled, text }) {
  return (
    <div className="button-container">
      <button
        onClick={onClick}
        disabled={disabled}
        className={`next-btn ${disabled ? 'disabled' : ''}`}
      >
        {text}
      </button>
    </div>
  );
}
