import { useState, useEffect } from "react";
import "./App.css"
import { motion } from "framer-motion";
import ClueDisplay from "./ClueDisplay";
import Feedback from "./Feedback";
import NextButton from "./NextButton";
import Score from "./Score";

export default function Globetrotter() {
const[destination,setDestination]=useState(null);
const[score,setScore]=useState({correct:0,incorrect:0});
const[feedback,setFeedback]=useState(null);
const cities = [
  "Paris",
  "Tokyo",
  "New York",
  "London",
  "Berlin",
  "Sydney",
  "Rome",
  "Dubai",
  "Madrid",
  "Amsterdam",
];

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
    const res = await fetch(`http://localhost:5000/api/destination?${new Date().getTime()}`); 
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
  <div className="main">
  <span className="globetroller-title">GlobeTroller</span>
  {destination && (
        <ClueDisplay destination={destination} clues={destination.clues} handleAnswer={handleAnswer} cities={cities} feedback={feedback} />
      )}
  {feedback && <Feedback feedback={feedback} funFact={destination.funFact} />}
  <Score correct={score.correct} incorrect={score.incorrect} />
  <NextButton onClick={fetchNewDestination} />

  </div>
  );
}