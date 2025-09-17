import { Link } from "react-router-dom";
import './suggestedS.css';
import React, { useEffect, useState } from 'react';

const genreMap = {
    10759: "Action & Adventure",
    16: "Animation",
    35: "Comedy",
    80: "Crime",
    99: "Documentary",
    18: "Drama",
    10751: "Family",
    10762: "Kids",
    9648: "Mystery",
    10763: "News",
    10764: "Reality",
    10765: "Sci-Fi & Fantasy",
    10766: "Soap",
    10767: "Talk",
    10768: "War & Politics",
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
                                            ? getGenreNames(show.genre_ids)
                                            : "N/A"}
                                    </h2>
                                    <h2>Year: {show.first_air_date || "Unknown Year"}</h2>
                                </div>
                                <div className="rightColumnS">
                                    <h2>Rating: {show.vote_average || "N/A"}</h2>
                                    <h2>Language: {getLanguageName(show.original_language)}</h2>
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

