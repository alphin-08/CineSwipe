import { useState, useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import "./preferencesS.css";
import React from "react";
import axios from "axios";

function PreferencesShows() {
  const [filters, setFilters] = useState({
    genre: "",
    year: "",
    language: "",
    minRating: "",
    maxRating: "",
  });
    
  const navigate = useNavigate();
    
  useEffect(() => {
    localStorage.removeItem("movies");
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleGenerate = async () => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/media`, {
            params: { type: "shows", ...filters },
        });

        const shows = response.data;

        console.log("API Response:", shows); // Debugging

        // Validate response before saving to localStorage
        if (Array.isArray(shows)) {
            localStorage.setItem("shows", JSON.stringify(shows));
            console.log("Shows saved in localStorage:", shows); // Debugging
            navigate("/suggestedShows");
        } else {
            console.error("Unexpected API Response:", shows);
            alert("Failed to fetch shows. Please try again.");
        }
    } catch (error) {
        console.error("Error fetching shows:", error.message);
        alert("An error occurred while fetching shows. Please try again later.");
    }
  };


  return (
    <div className="mainContainer-preferenceS">
      <div className="topContainer-preferenceS">
        <h1>SHOWS</h1>
      </div>

      <div className="middleContainer-preferenceS">
        <select
          name="genre"
          value={filters.genre}
          onChange={handleInputChange}
        >
          <option value="">Select Genre</option>
          <option value="10759">Action & Adventure</option>
          <option value="16">Animation</option>
          <option value="35">Comedy</option>
          <option value="80">Crime</option>
          <option value="99">Documentary</option>
          <option value="18">Drama</option>
          <option value="10751">Family</option>
          <option value="10762">Kids</option>
          <option value="9648">Mystery</option>
          <option value="10763">News</option>
          <option value="10764">Reality</option>
          <option value="10765">Sci-Fi & Fantasy</option>
          <option value="10766">Soap</option>
          <option value="10767">Talk</option>
          <option value="10768">War & Politics</option>
          <option value="37">Western</option>
        </select>
        <input
          type="text"
          name="year"
          placeholder="Year (e.g., 2023)"
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

      <div className="bottomContainer-preferenceS">
        <Link to="/recommendations">
          <button>
            <b>BACK</b>
          </button>
        </Link>

        <button onClick={handleGenerate}>
          <b>Generate</b>
        </button>
      </div>
    </div>
  );
}

export default PreferencesShows;
