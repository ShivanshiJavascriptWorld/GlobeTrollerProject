// server.js
const express = require("express");
const app = express();
const cors = require("cors");
const port = 5000;

app.use(cors()); 
const destinations = [
  {
    "city": "Paris",
    "country": "France",
    "clues": [
      "This city is home to a famous tower that sparkles every night.",
      "Known as the 'City of Love' and a hub for fashion and art."
    ],
    "fun_fact": [
      "The Eiffel Tower was supposed to be dismantled after 20 years but was saved because it was useful for radio transmissions!",
      "Paris has only one stop sign in the entire city—most intersections rely on priority-to-the-right rules."
    ],
    "trivia": [
      "This city is famous for its croissants and macarons. Bon appétit!",
      "Paris was originally a Roman city called Lutetia."
    ]
  },
  {
    "city": "Tokyo",
    "country": "Japan",
    "clues": [
      "This city has the busiest pedestrian crossing in the world.",
      "You can visit an entire district dedicated to anime, manga, and gaming."
    ],
    "fun_fact": [
      "Tokyo was originally a small fishing village called Edo before becoming the bustling capital it is today!",
      "More than 14 million people live in Tokyo, making it one of the most populous cities in the world."
    ],
    "trivia": [
      "The city has over 160,000 restaurants, more than any other city in the world.",
      "Tokyo’s subway system is so efficient that train delays of just a few minutes come with formal apologies."
    ]
  },
  {
    "city": "New York",
    "country": "USA",
    "clues": [
      "Home to a green statue gifted by France in the 1800s.",
      "Nicknamed 'The Big Apple' and known for its Broadway theaters."
    ],
    "fun_fact": [
      "The Statue of Liberty was originally a copper color before oxidizing to its iconic green patina.",
      "Times Square was once called Longacre Square before being renamed in 1904."
    ],
    "trivia": [
      "New York City has 468 subway stations, making it one of the most complex transit systems in the world.",
      "The Empire State Building has its own zip code: 10118."
    ]
  },
  {
    "city": "London",
    "country": "England",
    "clues": [
      "This city is home to a famous clock tower known as Big Ben.",
      "It’s a major global financial hub and also famous for its royal family."
    ],
    "fun_fact": [
      "Big Ben is actually the name of the bell inside the clock tower, not the clock tower itself.",
      "London’s Underground is the oldest metro system in the world, opening in 1863."
    ],
    "trivia": [
      "London is home to more than 300 museums, many of which are free to visit.",
      "The River Thames is the longest river in England, flowing for over 200 miles."
    ]
  },
  {
    "city": "Sydney",
    "country": "Australia",
    "clues": [
      "This city is home to a famous opera house shaped like sails.",
      "Known for its beautiful beaches, including Bondi Beach."
    ],
    "fun_fact": [
      "The Sydney Opera House took 15 years to complete and is one of the most recognizable landmarks in the world.",
      "Sydney's Harbour Bridge is affectionately known as the 'Coathanger' due to its shape."
    ],
    "trivia": [
      "Sydney is the largest and most populous city in Australia.",
      "The city’s annual New Year's Eve fireworks display is one of the biggest in the world."
    ]
  },
  {
    "city": "Rome",
    "country": "Italy",
    "clues": [
      "This city is home to an ancient amphitheater, the Colosseum.",
      "Known as the 'Eternal City' and the capital of the Roman Empire."
    ],
    "fun_fact": [
      "The Colosseum was used for gladiatorial contests and public spectacles, including animal hunts.",
      "Rome’s Pantheon has the world’s largest unreinforced concrete dome."
    ],
    "trivia": [
      "Rome has a special rule that no building can be taller than St. Peter’s Basilica.",
      "The city has more fountains than any other city in the world—over 280!"
    ]
  },
  {
    "city": "Berlin",
    "country": "Germany",
    "clues": [
      "This city is known for its historical significance, including the Berlin Wall.",
      "It’s a cultural hub known for its art, music, and history."
    ],
    "fun_fact": [
      "The Berlin Wall, which divided the city for nearly 30 years, fell in 1989, symbolizing the end of the Cold War.",
      "Berlin has more bridges than Venice, with over 1,700!"
    ],
    "trivia": [
      "Berlin is known for its vibrant nightlife, with hundreds of clubs and bars.",
      "It’s also home to the world-famous Brandenburg Gate, one of Germany’s most iconic landmarks."
    ]
  },
  {
    "city": "Moscow",
    "country": "Russia",
    "clues": [
      "This city is known for its red square and impressive onion-domed cathedral.",
      "It’s the capital and largest city of Russia."
    ],
    "fun_fact": [
      "The Kremlin is the official residence of the President of Russia, and it’s a UNESCO World Heritage Site.",
      "Moscow has the largest number of billionaires of any city in Europe."
    ],
    "trivia": [
      "Moscow’s subway system is one of the busiest and most beautiful in the world.",
      "The city has over 40,000 monuments and architectural landmarks."
    ]
  },
  {
    "city": "Cairo",
    "country": "Egypt",
    "clues": [
      "This city is home to the ancient pyramids and the Sphinx.",
      "It’s the largest city in the Arab world."
    ],
    "fun_fact": [
      "The Great Pyramid of Giza is the only one of the Seven Wonders of the Ancient World still standing.",
      "Cairo’s Egyptian Museum houses more than 120,000 ancient Egyptian artifacts."
    ],
    "trivia": [
      "Cairo is one of the fastest-growing cities in the world.",
      "The Nile River flows through Cairo, making it one of the few major cities built along a river."
    ]
  },
  {
    "city": "Barcelona",
    "country": "Spain",
    "clues": [
      "This city is famous for its surreal architecture, including works by Antoni Gaudí.",
      "It’s known for its Mediterranean beaches and vibrant arts scene."
    ],
    "fun_fact": [
      "The Sagrada Família, designed by Gaudí, has been under construction since 1882 and is still unfinished.",
      "Barcelona has the oldest operating amusement park in the world, the Tibidabo Amusement Park."
    ],
    "trivia": [
      "The city’s football team, FC Barcelona, is one of the most successful and popular teams globally.",
      "Barcelona’s famous La Rambla street is a popular area for shopping, dining, and entertainment."
    ]
  }
];

app.get("/api/destination", (req, res) => {
  const randomDestination = destinations[Math.floor(Math.random() * destinations.length)];
  res.json(randomDestination);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
