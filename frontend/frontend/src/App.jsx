import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ClueDisplay from "./ClueDisplay";
import Feedback from "./Feedback";
import NextButton from "./NextButton";

export default function Globetrotter() {
const[destination,setDestination]=useState(null);
const[userAnswer,setUserAnswer]=useState(null);
const[score,setScore]=useState({correct:0,incorrect:0});
const[feedback,setFeedback]=useState(null);

useEffect(() => {
  fetchNewDestination();
}, []);

const handleAnswer = (answer) => {
  if (answer === destination.city) {
    setFeedback("correct");
    setScore({ ...score, correct: score.correct + 1 });
  } else {
    setFeedback("incorrect");
    setScore({ ...score, incorrect: score.incorrect + 1 });
  }
};

const fetchNewDestination = async () => {
  try {
    const res = await fetch("http://localhost:5000/api/destination");
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
   const data = await res.json();
    setDestination(data);
    setFeedback(null);
  } catch (error) {
    console.error("Fetch error:", error); 
  }
};

  

  return (
  <>
  <h1>GlobeTroller</h1>
  {destination && (
        <ClueDisplay clues={destination.clues} handleAnswer={handleAnswer} />
      )}
  {feedback && <Feedback feedback={feedback} funFact={destination.funFact} />}
  {/* <Score correct={score.correct} incorrect={score.incorrect} /> */}
  <NextButton onClick={fetchNewDestination} />

  </>
  );
}