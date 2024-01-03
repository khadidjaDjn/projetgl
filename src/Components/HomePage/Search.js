import './search.css'

import Navbar from './Navbar';
import Footer from '../Footer';

import { FaMapMarkerAlt , FaStar} from 'react-icons/fa';
import { IoSearch } from 'react-icons/io5';

const Search = () => {
    return ( 
        <div className="search">
            <Navbar></Navbar>
            <div className='search-container'>
                <div className="container">
                    <div className='homeImg' ><img src="./homee.jpg"></img></div>
                    <div className='home'>
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

                <div className='box'>
                    <div className='card'>
                        <img src='./avocat1.png'></img>
                        <div className='evaluation'>
                            <FaStar className='star'></FaStar>
                            <FaStar className='star'></FaStar>
                            <FaStar className='star'></FaStar>
                            <FaStar className='star'></FaStar>
                            <FaStar className='star'></FaStar>
                        </div>
                        <h4 className='name'>michael Pasco</h4>
                        <p className='domain'>family lawyer</p>
                        <div className='location'>
                            <FaMapMarkerAlt></FaMapMarkerAlt>
                            <p>Mountain View, CA</p>
                        </div> 
                        <a href='/Profile' className='more'>read more</a>
                    </div>
                    <div className='card'>
                        <img src='./avocat1.png'></img>
                        <div className='evaluation'>
                            <FaStar className='star'></FaStar>
                            <FaStar className='star'></FaStar>
                            <FaStar className='star'></FaStar>
                            <FaStar className='star'></FaStar>
                            <FaStar className='star'></FaStar>
                        </div>
                        <h4 className='name'>michael Pasco</h4>
                        <p className='domain'>family lawyer</p>
                        <div className='location'>
                            <FaMapMarkerAlt></FaMapMarkerAlt>
                            <p>Mountain View, CA</p>
                        </div> 
                        <a href='/Profile' className='more'>read more</a>
                    </div>
                    <div className='card'>
                        <img src='./avocat1.png'></img>
                        <div className='evaluation'>
                            <FaStar className='star'></FaStar>
                            <FaStar className='star'></FaStar>
                            <FaStar className='star'></FaStar>
                            <FaStar className='star'></FaStar>
                            <FaStar className='star'></FaStar>
                        </div>
                        <h4 className='name'>michael Pasco</h4>
                        <p className='domain'>family lawyer</p>
                        <div className='location'>
                            <FaMapMarkerAlt></FaMapMarkerAlt>
                            <p>Mountain View, CA</p>
                        </div> 
                        <a href='/Profile' className='more'>read more</a>
                    </div>
                    <div className='card'>
                        <img src='./avocat1.png'></img>
                        <div className='evaluation'>
                            <FaStar className='star'></FaStar>
                            <FaStar className='star'></FaStar>
                            <FaStar className='star'></FaStar>
                            <FaStar className='star'></FaStar>
                            <FaStar className='star'></FaStar>
                        </div>
                        <h4 className='name'>michael Pasco</h4>
                        <p className='domain'>family lawyer</p>
                        <div className='location'>
                            <FaMapMarkerAlt></FaMapMarkerAlt>
                            <p>Mountain View, CA</p>
                        </div> 
                        <a href='/Profile' className='more'>read more</a>
                    </div>
                    <div className='card'>
                        <img src='./avocat1.png'></img>
                        <div className='evaluation'>
                            <FaStar className='star'></FaStar>
                            <FaStar className='star'></FaStar>
                            <FaStar className='star'></FaStar>
                            <FaStar className='star'></FaStar>
                            <FaStar className='star'></FaStar>
                        </div>
                        <h4 className='name'>michael Pasco</h4>
                        <p className='domain'>family lawyer</p>
                        <div className='location'>
                            <FaMapMarkerAlt></FaMapMarkerAlt>
                            <p>Mountain View, CA</p>
                        </div> 
                        <a href='/Profile' className='more'>read more</a>
                    </div>
                    <div className='card'>
                        <img src='./avocat1.png'></img>
                        <div className='evaluation'>
                            <FaStar className='star'></FaStar>
                            <FaStar className='star'></FaStar>
                            <FaStar className='star'></FaStar>
                            <FaStar className='star'></FaStar>
                            <FaStar className='star'></FaStar>
                        </div>
                        <h4 className='name'>michael Pasco</h4>
                        <p className='domain'>family lawyer</p>
                        <div className='location'>
                            <FaMapMarkerAlt></FaMapMarkerAlt>
                            <p>Mountain View, CA</p>
                        </div> 
                        <a href='/Profile' className='more'>read more</a>
                    </div>
                </div>
            </div>



            <Footer></Footer>
        </div>

     );
}
 
export default Search;