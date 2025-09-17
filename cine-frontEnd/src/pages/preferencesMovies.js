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
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("shows");
  }, []);
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "minRating" && filters.maxRating && Number(value) > Number(filters.maxRating)) {
      setFilters({ ...filters, minRating: value, maxRating: value });
    } else if (name === "maxRating" && filters.minRating && Number(value) < Number(filters.minRating)) {
      setFilters({ ...filters, minRating: value, maxRating: value });
    } else {
      setFilters({ ...filters, [name]: value });
    }
    setErrorMessage(""); // Clear error when user changes input
  };

  const handleGenerate = async () => {
    const hasInput = Object.values(filters).some(val => val !== "");
    if (!hasInput) {
      setErrorMessage("Please fill in at least one input.");
      return;
    }
    try {
      const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/media`, {
        params: { ...filters, type: "movies" },
      });
      const movies = response.data;
      if (Array.isArray(movies)) {
        localStorage.setItem("movies", JSON.stringify(movies));
        navigate("/suggestedMovies");
      } else {
        setErrorMessage("Failed to fetch movies. Please try again.");
      }
    } catch (error) {
      setErrorMessage("An error occurred while fetching movies.");
    }
  };

  return (
    <div class="mainContainer-preferenceM">
      <div class="topContainer-preferenceM">
        <h1>MOVIES</h1>
      </div>
      <div className="middleContainer-preferenceM">
        <div className="loadingMessage-M">
          <p>⚠️ The first generate may take up to 2 minutes, but after that, it will be instant</p>
        </div>
        {errorMessage && (
          <div style={{ color: "rgb(95, 7, 7)", fontWeight: "bold", fontSize: "1.5rem", marginBottom: "16px", textAlign: "center" }}>
            {errorMessage}
          </div>
        )}
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
        <select
          name="year"
          value={filters.year}
          onChange={handleInputChange}
          size={1}
        >
          <option value="">Select Year</option>
          {Array.from({ length: new Date().getFullYear() - 1949 }, (_, i) => new Date().getFullYear() - i).map(year => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>
        <select
          name="language"
          value={filters.language}
          onChange={handleInputChange}
        >
          <option value="">Select Language</option>
          <option value="en">English</option>
          <option value="kw">Cornish</option>
          <option value="id">Indonesian</option>
          <option value="os">Ossetian</option>
          <option value="so">Somali</option>
          <option value="ta">Tamil</option>
          <option value="uk">Ukrainian</option>
          <option value="co">Corsican</option>
          <option value="ki">Kikuyu</option>
          <option value="st">Sotho</option>
          <option value="tr">Turkish</option>
          <option value="bi">Bislama</option>
          <option value="eu">Basque</option>
          <option value="ka">Georgian</option>
          <option value="kj">Kuanyama</option>
          <option value="zu">Zulu</option>
          <option value="mk">Macedonian</option>
          <option value="ba">Bashkir</option>
          <option value="lt">Lithuanian</option>
          <option value="as">Assamese</option>
          <option value="ko">Korean</option>
          <option value="mn">Mongolian</option>
          <option value="pi">Pali</option>
          <option value="bo">Tibetan</option>
          <option value="kn">Kannada</option>
          <option value="sa">Sanskrit</option>
          <option value="bs">Bosnian</option>
          <option value="mg">Malagasy</option>
          <option value="jv">Javanese</option>
          <option value="tg">Tajik</option>
          <option value="fr">French</option>
          <option value="kv">Komi</option>
          <option value="bm">Bambara</option>
          <option value="de">German</option>
          <option value="ky">Kyrgyz</option>
          <option value="yi">Yiddish</option>
          <option value="dz">Dzongkha</option>
          <option value="fy">Frisian</option>
          <option value="it">Italian</option>
          <option value="pt">Portuguese</option>
          <option value="ch">Chamorro</option>
          <option value="hu">Hungarian</option>
          <option value="li">Limburgish</option>
          <option value="nv">Navajo</option>
          <option value="ab">Abkhazian</option>
          <option value="fo">Faroese</option>
          <option value="lb">Letzeburgesch</option>
          <option value="sk">Slovak</option>
          <option value="ay">Aymara</option>
          <option value="io">Ido</option>
          <option value="no">Norwegian</option>
          <option value="qu">Quechua</option>
          <option value="sw">Swahili</option>
          <option value="bg">Bulgarian</option>
          <option value="ak">Akan</option>
          <option value="et">Estonian</option>
          <option value="ig">Igbo</option>
          <option value="mr">Marathi</option>
          <option value="na">Nauru</option>
          <option value="za">Zhuang</option>
          <option value="ty">Tahitian</option>
          <option value="he">Hebrew</option>
        </select>
        <select
          name="minRating"
          value={filters.minRating}
          onChange={handleInputChange}
        >
          <option value="">Min Rating</option>
          {Array.from({ length: 10 }, (_, i) => i + 1).map(rating => (
            <option key={rating} value={rating}>{rating}</option>
          ))}
        </select>
        <select
          name="maxRating"
          value={filters.maxRating}
          onChange={handleInputChange}
        >
          <option value="">Max Rating</option>
          {Array.from({ length: 10 }, (_, i) => i + 1).map(rating => (
            <option key={rating} value={rating}>{rating}</option>
          ))}
        </select>
      </div>
      <div class="bottomContainer-preferenceM">
        <Link to='/recommendations'>
          <button><b>BACK</b></button>
        </Link>
        <button onClick={handleGenerate}><b>Generate</b></button>
      </div>
    </div>
  );
}

export default PreferencesMovies;