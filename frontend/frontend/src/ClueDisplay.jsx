import React, { useState, useEffect } from "react";

function ClueDisplay({ destination, clues, handleAnswer, cities, feedback }) {
  const [cityOptions, setCityOptions] = useState([]);

  useEffect(() => {
    if (destination) {
      const options = getRandomCityOptions(destination.city, cities);
      setCityOptions(options);
    }
  }, [destination]);

  const getRandomCityOptions = (correctCity, cities) => {
    const filteredCities = cities.filter((city) => city !== correctCity);
    const shuffledCities = filteredCities.sort(() => Math.random() - 0.5);
    const randomOptions = shuffledCities.slice(0, 3);
    const randomIndex = Math.floor(Math.random() * 4);
    randomOptions.splice(randomIndex, 0, correctCity);
    return randomOptions;
  };

  const getButtonClass = (city) => {
    if (feedback) {
      if (city === destination.city) {
        return "answer-button correct"; 
      } else {
        return "answer-button incorrect"; 
      }
    }
    return "answer-button";
  };

  return (
    <div className="clue-display">
      <div className="clue">
        {clues.map((clue, index) => (
          <p key={index}>{clue}</p>
        ))}
      </div>
      <div className="answer-options">
        {cityOptions.map((city, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(city)}
            className={getButtonClass(city)}
            disabled={feedback !== null} 
          >
            {city}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ClueDisplay;
