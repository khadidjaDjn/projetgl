import './profile.css'

import {FaPhone , FaStar , FaBriefcase , FaMapMarked , FaFacebook, FaGlobe} from 'react-icons/fa';

import Reviews from './Reviews';


const Profile = () => {
    return ( 
        <div className="profile">
            <div className="profileCard" >
                <img src='./avocat4.png' ></img>  
                <div className='infos'> 
                    <h4 className='name'> khadidja djn </h4>
                    <p> Avocat d’affaire a bejaia </p>
                    <div className='domain'>
                        <FaBriefcase className='brief'></FaBriefcase>
                        <p>10 years experience</p>
                    </div>
                    <div className='rating'>
                        <FaStar className='star'></FaStar>
                        <FaStar className='star'></FaStar>
                        <FaStar className='star'></FaStar>
                        <FaStar className='star'></FaStar>
                        <FaStar className='star'></FaStar>
                    </div>

                    <div className='nbr'>
                        <FaPhone className='phone'></FaPhone>
                        <p>+123456778</p>
                    </div>
                
                </div>  
            </div>


            <div className='buttons'> 
               <button className='msg'> <FaPhone></FaPhone> messages</button>
               <button className='appoinment'>appoinment </button>
            </div>

            <div className='aboutLawyer'>
                <h1>about</h1>
                <p>Lawyer Kha, a seasoned family law professional with over a decade of experience, is dedicated to providing compassionate and effective representation. As a partner at Smith & Associates Law Firm, Kha has successfully handled numerous family law cases, earning a reputation for excellence in the field.</p>
            </div>
            <div className='languages'>
                <h1>spoken languages</h1>
                <div className='spoken'> <p>english</p> <p>french</p> <p>arabic</p> </div>
            </div>
            <div className='adr'>
                <h1>adress</h1>
                <div className='adress'> 
                     <FaMapMarked className='mapIcon'></FaMapMarked>
                     <p>8501 W Higgins Rd Ste 420
                        Chicago, IL, 60631-2811</p>
                </div>
            </div> 

            <div className='contact'>
                <h1>contact me </h1>
                <div className='phoneNbr'>
                    <FaPhone className='phone'></FaPhone>
                    <p>+1223456788</p>
                </div>
                <div className='facebook'>
                    <FaFacebook className='fbIcon'></FaFacebook>
                    <a href='#'>www.facebook.com</a>
                </div>
                <div className='site'>
                    <FaGlobe className='siteIcon'></FaGlobe>
                    <a href='#'>www.kha.com</a>

                </div>
            </div>
            <Reviews></Reviews>
        </div>
     );
}
 
export default Profile;