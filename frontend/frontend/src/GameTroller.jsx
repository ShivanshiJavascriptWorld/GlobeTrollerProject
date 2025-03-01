import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import html2canvas from "html2canvas";
import ClueDisplay from "./ClueDisplay";
import Feedback from "./Feedback";
import NextButton from "./NextButton";
import Score from "./Score";
import ChallengeButton from "./ChallengeFriend";
import Confetti from "react-confetti";

const GameTroller = () => {
  const [destination, setDestination] = useState(null);
  const [score, setScore] = useState({ correct: 0, incorrect: 0 });
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [feedback, setFeedback] = useState(null);
  const [username] = useState(localStorage.getItem("username"));
  const [showModal, setShowModal] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);
  const [rounds, setRounds] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const feedbackClass =
    feedback === "correct"
      ? "correct"
      : feedback === "incorrect"
      ? "incorrect"
      : "empty";

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
    setSelectedAnswer(answer);
    const isCorrect = answer === destination.city;
    setFeedback(isCorrect ? "correct" : "incorrect");
    setScore((prevScore) => ({
      correct: isCorrect ? prevScore.correct + 1 : prevScore.correct,
      incorrect: !isCorrect ? prevScore.incorrect + 1 : prevScore.incorrect,
    }));
  };

  const fetchNewDestination = async () => {
    if (rounds >= 10) {
      setGameOver(true);
      setRounds(0);
      return;
    }
    try {
      const res = await fetch(
        `http://localhost:5000/api/destination?${new Date().getTime()}`
      );
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await res.json();
      setDestination(data);
      setFeedback(null);
      setSelectedAnswer(null);
      setRounds((prevRounds) => prevRounds + 1);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  const generateInviteLink = () => {
    const inviteLink = `http://localhost:5173?username=${username}&score=${score.correct}`;
    return inviteLink;
  };

  const generateInviteImage = () => {
    const inviteSection = document.getElementById("invite-section");
    html2canvas(inviteSection)
      .then((canvas) => {
        const imageUrl = canvas.toDataURL();
        setShowModal(true);
        setImageUrl(imageUrl);
      })
      .catch((error) => {
        console.error("Error generating image:", error);
      });
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handlePlayAgain = () => {
    fetchNewDestination();
    setScore({ correct: 0, incorrect: 0 });
    setGameOver(false);
  };
  return (
    <div className="main">
      {feedback === "correct" ? (
        <Confetti />
      ) : feedback === "incorrect" ? (
        <></>
      ) : (
        ""
      )}

      <header>
        <h1>GlobeTroller:The Travel Game</h1>
        <p>
          {" "}
          Guess the city from the given options to know fun facts about the city
          and win the game
        </p>
      </header>

      {feedback ? (
        <Feedback
          feedback={feedback}
          city={destination.city}
          funFact={destination?.fun_fact}
          feedbackClass={feedbackClass}
        />
      ) : (
        <section className="game-status empty"></section>
      )}

      {destination && (
        <ClueDisplay
          destination={destination}
          clues={destination.clues}
          handleAnswer={handleAnswer}
          cities={cities}
          feedback={feedback}
        />
      )}

      
        <Score correct={score.correct} incorrect={score.incorrect} totalTurns={10-rounds} gameOver={gameOver} />
   

      <section className="btn-group">
        {" "}
        <NextButton
          onClick={gameOver ? handlePlayAgain : fetchNewDestination}
          disabled={!selectedAnswer}
          text={gameOver ? "Play Again" : "Next Destination"}
        />
        <ChallengeButton onClick={generateInviteImage} />
      </section>

      <div id="invite-section" style={{ display: "none" }}>
        <div>
          <h3>Challenge your friend!</h3>
          <p>Username: {username}</p>
          <p>Score: {score.correct}</p>
        </div>
      </div>

      {showModal && (
        <div className="share-modal">
          <div className="modal-content">
            <h2>Invite a Friend to Play</h2>
            <div className="invite-image">
              {imageUrl && <img src={imageUrl} alt="Invite Preview" />}
            </div>
            <p>Share this link with your friend to challenge them:</p>
            <input type="text" value={generateInviteLink()} />
            <div className="share-buttons">
              <button
                onClick={() =>
                  window.open(
                    `https://wa.me/?text=${encodeURIComponent(
                      generateInviteLink()
                    )}`,
                    "_blank"
                  )
                }
              >
                Share on WhatsApp
              </button>
              <button onClick={closeModal}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GameTroller;
