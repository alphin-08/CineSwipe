
import {useState} from "react"
import { Link, useNavigate} from "react-router-dom";
import './preferencesM.css';
import React from 'react';
import axios from "axios";

function PreferencesMovies() {

  const [filters, setFilters] = useState({
    genre: "",
    year: "",
    language: "",
    minRating: "",
    maxRating: "",
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleGenerate = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/movies", {
        params: filters,
      });
      const movies = response.data;
      // Store movies in local storage to pass them to SuggestedMovies
      localStorage.setItem("movies", JSON.stringify(movies));
      navigate("/suggestedMovies");
    } catch (error) {
      console.error("Error fetching movies:", error.message);
    }
  };

    return (
        <div class = "mainContainer-preferenceM">
            <div class = "topContainer-preferenceM">
                <h1>MOVIES</h1>
            </div>


            {/* <div class = "middleContainer-preferenceM">
                <input type='text' placeholder='Genre ?'/>
                <input type='text' placeholder='Year ?'/>
                <input type='text' placeholder='RR ?'/>
            </div> */}
        <div className="middleContainer-preferenceM">
            <input
            type="text"
            name="genre"
            placeholder="Genre (e.g., Action)"
            onChange={handleInputChange}
            />
            <input
            type="text"
            name="year"
            placeholder="Year (e.g., 2022)"
            onChange={handleInputChange}
            />
            <input
            type="text"
            name="language"
            placeholder="Language (e.g., en)"
            onChange={handleInputChange}
            />
            <input
            type="number"
            name="minRating"
            placeholder="Min Rating (e.g., 7)"
            onChange={handleInputChange}
            />
            <input
            type="number"
            name="maxRating"
            placeholder="Max Rating (e.g., 10)"
            onChange={handleInputChange}
            />
        </div>

            <div class = "bottomContainer-preferenceM">
                <Link to = '/recommendations'> 
                    <button><b>BACK</b></button>
                </Link>

                
                <button onClick = {handleGenerate}><b>Generate</b></button>
                
            </div>
        </div>
    ); 
}

export default PreferencesMovies;