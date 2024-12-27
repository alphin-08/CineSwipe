import { Link } from "react-router-dom";
import './suggestedS.css';
import React, { useEffect, useState } from 'react';

function SuggestedShows() {
    const [shows, setShows] = useState([]);

    useEffect(() => {
        // Retrieve shows from local storage
        const storedShows = JSON.parse(localStorage.getItem("shows"));
        console.log("Retrieved shows from localStorage:", storedShows); // Debugging log
        if (Array.isArray(storedShows)) {
            setShows(storedShows);
        } else {
            setShows([]); // Fallback to an empty array if data is invalid
        }
    }, []);

    return (
        <div className="mainContainer-suggestedS">
            <div className="topContainer-suggestedS">
                <h1>Suggested Shows</h1>
            </div>

            <div className="middleContainer-suggestedS">
                {Array.isArray(shows) && shows.length > 0 ? (
                    shows.map((show) => (
                        <div key={show.id} className="show">
                            <div className="showImgS">
                                <img
                                    src={
                                        show.poster_path
                                            ? `https://image.tmdb.org/t/p/w500${show.poster_path}`
                                            : "/path/to/placeholder.jpg" // Fallback for missing poster
                                    }
                                    alt={show.name || "Unknown Show"}
                                />
                            </div>
                            <div className="headersS">
                                <div className="leftColumnS">
                                    <h2>Title: {show.name || "Unknown Title"}</h2>
                                    <h2>
                                        Genre: {show.genre_ids?.length
                                            ? show.genre_ids.join(", ")
                                            : "N/A"}
                                    </h2>
                                    <h2>Year: {show.first_air_date || "Unknown Year"}</h2>
                                </div>
                                <div className="rightColumnS">
                                    <h2>Rating: {show.vote_average || "N/A"}</h2>
                                    <h2>Language: {show.original_language || "Unknown"}</h2>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <h2>No shows found. Please try different filters.</h2>
                )}
            </div>

            <div className="bottomContainer-suggestedS">
                <Link to="/recommendations">
                    <button>
                        <b>BACK</b>
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default SuggestedShows;

