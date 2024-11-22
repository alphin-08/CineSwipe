import { Link } from "react-router-dom";
import './suggestedM.css';

function SuggestedMovies() {
    return (
        <div class = "mainContainer-suggestedM">

            <div class = "topContainer-suggestedM">
                <h1>Suggested Movies</h1>
            </div>


            <div class = "middleContainer-suggestedM">
                {/* <input type='text' placeholder='Genre: '/>
                <input type='text' placeholder='Age Rating: '/>
                <input type='text' placeholder='Ideal Season Length: '/>
                <input type='text' placeholder='Year: '/>
                <input type='text' placeholder='Rotten Tomatoe Score: '/> */}
                <div class='movieImgM'>
                    <h1>Movie Image</h1>
                </div>

                <div class = 'headersM'>
                    <div class = 'leftColumnM'> 
                        <h1>Genre: </h1>
                        <h1>Age Rating: </h1>
                        <h1>Year: </h1>
                    </div>

                    <div class = 'rightColumnM'> 
                        <h1>Length: </h1>
                        <h1>RT Score: </h1>
                    </div>
                </div>
            </div>

            <div class = "bottomContainer-suggestedM">
                <Link to = '/preferencesMovies'> 
                    <button><b>BACK</b></button>
                </Link>
            </div>
        </div>
    ); 
}

export default SuggestedMovies;