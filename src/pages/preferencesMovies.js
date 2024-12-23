import {useState, useEffect} from "react"
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

  useEffect(() => {
        localStorage.removeItem("shows");
  }, []);
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleGenerate = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/media", {
        params: { filters, type: "movies" },
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

        <div className="middleContainer-preferenceM">
            <select
          name="genre"
          value={filters.genre}
          onChange={handleInputChange}
        >
          <option value="">Select Genre</option>
          <option value="28">Action</option>
          <option value="12">Adventure</option>
          <option value="16">Animation</option>
          <option value="35">Comedy</option>
          <option value="80">Crime</option>
          <option value="99">Documentary</option>
          <option value="18">Drama</option>
          <option value="10751">Family</option>
          <option value="14">Fantasy</option>
          <option value="36">History</option>
          <option value="27">Horror</option>
          <option value="10402">Music</option>
          <option value="9648">Mystery</option>
          <option value="10749">Romance</option>
          <option value="878">Science Fiction</option>
          <option value="10770">TV Movie</option>
          <option value="53">Thriller</option>
          <option value="10752">War</option>
          <option value="37">Western</option>
        </select>
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