import './lawyerCard.css'
import { Link } from 'react-router-dom';


import { FaStar,FaMapMarkerAlt} from 'react-icons/fa';

const LawyerCard = () => {
    return (  
       <div className='lawyer-card'>
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
                {/* <p>mouhami dz rating <span>10.0</span><AiOutlineExclamationCircle></AiOutlineExclamationCircle> </p> */}
                <div className='location'>
                    <FaMapMarkerAlt></FaMapMarkerAlt>
                    <p>Mountain View, CA</p>
                </div> 
                <a href='/Profile' className='more'>read more</a>
           </div>
           <button className='allDomains' >see more family laywers </button>
       </div>
    );
}
 
export default LawyerCard;