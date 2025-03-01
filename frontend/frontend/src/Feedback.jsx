import React from 'react';
import Confetti from "react-confetti";


const Feedback = ({feedback,funFact}) => {
  return (
    <>
     {feedback === "correct" ? (
        <div>
            <Confetti/>
          <h3>🎉 Correct Answer!</h3>
          <p>{funFact}</p>
        </div>
      ) : (
        <div>
          <h3>😢 Incorrect Answer!</h3>
          <p>{funFact}</p>
        </div>
      )}
    </>
  )
}

export default Feedback
