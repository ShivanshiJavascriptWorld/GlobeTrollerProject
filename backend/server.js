const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");  
const app = express();
const port = 5000;

app.use(cors());

app.get("/api/destination", async (req, res) => {
  try {
    const response = await fetch("https://sheet2api.com/v1/MSKaWBxBTGOz/travel_destinations");
    
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const data = await response.json();

    const randomDestination = data[Math.floor(Math.random() * data.length)];

    res.setHeader('Cache-Control', 'no-store');
    res.json(randomDestination);

  } catch (error) {
    console.error("Error fetching destination data:", error);
    res.status(500).json({ message: "Error fetching destination data" });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
