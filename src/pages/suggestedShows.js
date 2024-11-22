import { Link } from "react-router-dom";
import './suggestedS.css';

function SuggestedShows() {
    return (
        <div class = "mainContainer-suggestedS">

            <div class = "topContainer-suggestedS">
                <h1>Suggested Shows</h1>
            </div>


            <div class = "middleContainer-suggestedS">
                {/* <input type='text' placeholder='Genre: '/>
                <input type='text' placeholder='Age Rating: '/>
                <input type='text' placeholder='Ideal Season Length: '/>
                <input type='text' placeholder='Year: '/>
                <input type='text' placeholder='Rotten Tomatoe Score: '/> */}
                <div class='movieImgS'>
                    <h1>Movie Image</h1>
                </div>

                <div class = 'headersS'>
                    <div class = 'leftColumnS'> 
                        <h1>Genre: </h1>
                        <h1>Age Rating: </h1>
                        <h1>Year: </h1>
                    </div>

                    <div class = 'rightColumnS'> 
                        <h1>Length: </h1>
                        <h1>RT Score: </h1>
                    </div>
                </div>
            </div>

            <div class = "bottomContainer-suggestedS">
                <Link to = '/preferencesShows'> 
                    <button><b>BACK</b></button>
                </Link>
            </div>
        </div>
    ); 
}

export default SuggestedShows;