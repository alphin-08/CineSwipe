import { Link } from "react-router-dom";
import './suggestedS.css';
import React, { useEffect, useState } from 'react';

function SuggestedShows() {
    const [shows, setShows] = useState([]);

    useEffect(() => {
        // Retrieve shows from local storage
        const storedShows = JSON.parse(localStorage.getItem("shows"));
        if (storedShows) {
            setShows(storedShows);
        }
    }, []);

    return (
        <div className="mainContainer-suggestedS">
            <div className="topContainer-suggestedS">
                <h1>Suggested Shows</h1>
            </div>

            <div className="middleContainer-suggestedS">
                {shows.length > 0 ? (
                    shows.map((show) => (
                        <div key={show.id} className="show">
                            <div className="showImgS">
                                <img
                                    src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
                                    alt={show.name}
                                />
                            </div>
                            <div className="headersS">
                                <div className="leftColumnS">
                                    <h2>Title: {show.name}</h2>
                                    <h2>Genre: {show.genre_ids.join(", ")}</h2>
                                    <h2>Year: {show.first_air_date}</h2>
                                </div>
                                <div className="rightColumnS">
                                    <h2>Rating: {show.vote_average}</h2>
                                    <h2>Language: {show.original_language}</h2>
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
