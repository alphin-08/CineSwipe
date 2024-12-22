import { Link } from "react-router-dom";
import './preferencesS.css';
import React from 'react';


function PreferencesShows() {
    return (
        <div class = "mainContainer-preferenceS">

            <div class = "topContainer-preferenceS">
                <h1>SHOWS</h1>
            </div>


            <div class = "middleContainer-preferenceS">
                <input type='text' placeholder='Genre ?'/>
                <input type='text' placeholder='Age Rating ?'/>
                <input type='text' placeholder='Ideal Season Length ?'/>
                <input type='text' placeholder='Year ?'/>
                <input type='text' placeholder='Rotten Tomatoe Score ?'/>
            </div>

            <div class = "bottomContainer-preferenceS">
                <Link to = '/recommendations'> 
                    <button><b>BACK</b></button>
                </Link>

                <Link to = '/suggestedShows'>
                    <button><b>Generate</b></button>
                </Link>
            </div>
        </div>
    ); 
}

export default PreferencesShows;