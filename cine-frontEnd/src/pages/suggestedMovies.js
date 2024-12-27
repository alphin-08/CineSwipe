import { Link } from "react-router-dom";
import './suggestedM.css';
import React, { useEffect, useState } from 'react';

function SuggestedMovies() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        // Retrieve movies from local storage
        const storedMovies = JSON.parse(localStorage.getItem("movies"));
        console.log("Retrieved movies from localStorage:", storedMovies); // Debugging log
        if (Array.isArray(storedMovies)) {
            setMovies(storedMovies);
        } else {
            setMovies([]); // Fallback to an empty array if data is invalid
        }
    }, []);

    return (
        <div className="mainContainer-suggestedM">
            <div className="topContainer-suggestedM">
                <h1>Suggested Movies</h1>
            </div>

            <div className="middleContainer-suggestedM">
                {Array.isArray(movies) && movies.length > 0 ? (
                    movies.map((movie) => (
                        <div key={movie.id} className="movie">
                            <div className="movieImgM">
                                <img
                                    src={
                                        movie.poster_path
                                            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                                            : "/path/to/placeholder.jpg" // Fallback for missing poster
                                    }
                                    alt={movie.title || "Unknown Title"}
                                />
                            </div>
                            <div className="headersM">
                                <div className="leftColumnM">
                                    <h2>Title: {movie.title || "Unknown Title"}</h2>
                                    <h2>
                                        Genre: {movie.genre_ids?.length
                                            ? movie.genre_ids.join(", ")
                                            : "N/A"}
                                    </h2>
                                    <h2>Year: {movie.release_date || "Unknown Year"}</h2>
                                </div>
                                <div className="rightColumnM">
                                    <h2>Rating: {movie.vote_average || "N/A"}</h2>
                                    <h2>Language: {movie.original_language || "Unknown"}</h2>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <h2>No movies found. Please try different filters.</h2>
                )}
            </div>

            <div className="bottomContainer-suggestedM">
                <Link to="/preferencesMovies">
                    <button>
                        <b>BACK</b>
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default SuggestedMovies;

