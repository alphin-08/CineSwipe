const PORT = process.env.PORT || 8000; // Use process.env.PORT for Render
const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
app.use(cors());

// Base route
app.get('/', (req, res) => {
    res.send('Welcome to CineSwipe Backend!');
});

// Debug route
app.get('/api/debug', (req, res) => {
    console.log("Debug endpoint hit");
    res.json({ message: "Debug endpoint works!", port: PORT });
});

// Media route
app.get('/api/media', async (req, res) => {
    try {
        const apiKey = process.env.API_KEY;
        const { type, genre, year, language, minRating, maxRating } = req.query;

        const endpoint =
            type === "shows"
                ? "https://api.themoviedb.org/3/discover/tv"
                : "https://api.themoviedb.org/3/discover/movie";

        const params = {
            with_genres: genre,
            with_original_language: language,
            "vote_average.gte": minRating,
            "vote_average.lte": maxRating,
        };

        if (type === "movies") {
            params.primary_release_year = year;
        } else if (type === "shows") {
            params.first_air_date_year = year;
        }
        console.log("Requesting TMDb API with params:", params);
        const response = await axios.get(endpoint, {
            headers: { Authorization: `Bearer ${apiKey}` },
            params,
        });

        res.json(response.data.results);
    } catch (error) {
        console.error('Error fetching data:', error.message);
        res.status(500).send(`Error fetching ${req.query.type || "media"}`);
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});



 



