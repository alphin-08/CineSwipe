import React from "react";
import { Link } from "react-router-dom";
import './mainPage.css';


function MainScreen() {
    return (

        <div class = "mainContainer">
            <div class = "topContainer">
                <h1>Cine</h1>
                <h1>Swipe</h1>
            </div>

            <div class = "bottomContainer">
                <Link to = "/loginP">
                    <button> <b>Swipe Up</b></button>
                </Link>
            </div>
        </div>
    ); 
}

export default MainScreen;