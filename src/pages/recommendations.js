// import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './recommendations.css';

function Recommendations() {
    return (
        <div class = "mainContainer-recommendations">

            <div class = "topContainer-recommendations">
                <h1>Recommendations For ?</h1>
            </div>


            <div class = "bottomContainer-recommendations">
                <Link to = '/preferencesMovies'> 
                    <button class='movieB'><b>MOVIE</b></button>
                </Link>

                <Link to = '/preferencesShows'>
                    <button class ='showB'><b>SHOW</b></button>
                </Link>

                <Link to = '/loginP'>
                    <button class ='backB'><b>BACK</b></button>
                </Link>
            </div>
        </div>
    ); 
}

export default Recommendations;