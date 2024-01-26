import './LandingPage.css'

import { FaMapMarkerAlt } from 'react-icons/fa';
import { IoSearch } from 'react-icons/io5';


 

const LandingPage = () => {
    return (  
        <div className="container">
            <div className='homeImg' ><img src="./homee.jpg"></img></div>
            <div className='home'>
                <h1>Your legal ally for a just tomorrow</h1>
                <p>Find a lowyer</p>
                <div className="chercher">
                    <div className='search-bar'>
                        <div className="search-lawyer">
                            <IoSearch className='searchIcon'></IoSearch>
                            <input type="text" placeholder="Practice area or lawyer name"></input>    
                        </div>
                        <div className="search-location">
                             <FaMapMarkerAlt className='mapIcon'></FaMapMarkerAlt>
                            <input type="text" placeholder="City, state, or ZIP code"></input>    
                        </div>
                    </div>
                    <button className='searchBtn'>search</button>
                </div>
            </div>
        </div>
    );
}
 
export default LandingPage;