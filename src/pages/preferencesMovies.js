import { Link } from "react-router-dom";
import './preferencesM.css';

function PreferencesMovies() {
    return (
        <div class = "mainContainer-preferenceM">

            <div class = "topContainer-preferenceM">
                <h1>MOVIES</h1>
            </div>


            <div class = "middleContainer-preferenceM">
                <input type='text' placeholder='Genre ?'/>
                <input type='text' placeholder='Age Rating ?'/>
                <input type='text' placeholder='Ideal Movie Length ?'/>
                <input type='text' placeholder='Year ?'/>
                <input type='text' placeholder='Rotten Tomatoe Score ?'/>
            </div>

            <div class = "bottomContainer-preferenceM">
                <Link to = '/recommendations'> 
                    <button><b>BACK</b></button>
                </Link>

                <Link to = '/suggestedMovies'>
                    <button><b>Generate</b></button>
                </Link>
            </div>
        </div>
    ); 
}

export default PreferencesMovies;