import { Link } from "react-router-dom";
import './suggestedM.css';
import React, { useEffect, useState } from 'react';

const genreMap = {
    28: "Action",
    12: "Adventure",
    16: "Animation",
    35: "Comedy",
    80: "Crime",
    99: "Documentary",
    18: "Drama",
    10751: "Family",
    14: "Fantasy",
    36: "History",
    27: "Horror",
    10402: "Music",
    9648: "Mystery",
    10749: "Romance",
    878: "Science Fiction",
    10770: "TV Movie",
    53: "Thriller",
    10752: "War",
    37: "Western"
};

const languageMap = {
    en: "English",
    kw: "Cornish",
    id: "Indonesian",
    os: "Ossetian",
    so: "Somali",
    ta: "Tamil",
    uk: "Ukrainian",
    co: "Corsican",
    ki: "Kikuyu",
    st: "Sotho",
    tr: "Turkish",
    bi: "Bislama",
    eu: "Basque",
    ka: "Georgian",
    kj: "Kuanyama",
    zu: "Zulu",
    mk: "Macedonian",
    ba: "Bashkir",
    lt: "Lithuanian",
    as: "Assamese",
    ko: "Korean",
    mn: "Mongolian",
    pi: "Pali",
    bo: "Tibetan",
    kn: "Kannada",
    sa: "Sanskrit",
    bs: "Bosnian",
    mg: "Malagasy",
    jv: "Javanese",
    tg: "Tajik",
    fr: "French",
    kv: "Komi",
    bm: "Bambara",
    de: "German",
    ky: "Kyrgyz",
    yi: "Yiddish",
    dz: "Dzongkha",
    fy: "Frisian",
    it: "Italian",
    pt: "Portuguese",
    ch: "Chamorro",
    hu: "Hungarian",
    li: "Limburgish",
    nv: "Navajo",
    ab: "Abkhazian",
    fo: "Faroese",
    lb: "Letzeburgesch",
    sk: "Slovak",
    ay: "Aymara",
    io: "Ido",
    no: "Norwegian",
    qu: "Quechua",
    sw: "Swahili",
    bg: "Bulgarian",
    ak: "Akan",
    et: "Estonian",
    ig: "Igbo",
    mr: "Marathi",
    na: "Nauru",
    za: "Zhuang",
    ty: "Tahitian",
    he: "Hebrew"
};

function getGenreNames(ids) {
    return ids?.map(id => genreMap[id] || id).join(", ");
}

function getLanguageName(code) {
    return languageMap[code] || code || "Unknown";
}

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
                                            ? getGenreNames(movie.genre_ids)
                                            : "N/A"}
                                    </h2>
                                    <h2>Year: {movie.release_date || "Unknown Year"}</h2>
                                </div>
                                <div className="rightColumnM">
                                    <h2>Rating: {movie.vote_average || "N/A"}</h2>
                                    <h2>Language: {getLanguageName(movie.original_language)}</h2>
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

