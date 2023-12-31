import './profile.css'

import '../messageForm.css'
import '../rvForm.css'

import { useState } from 'react';
import {FaPhone , FaStar , FaBriefcase , FaMapMarked , FaFacebook,FaUser, FaGlobe} from 'react-icons/fa';
import { MdEmail, MdClose } from 'react-icons/md';



import Reviews from '../Reviews';


const Profile = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const handleButtonClick = () => {
        console.log('handleButtonClick called');
        setModalVisible(!modalVisible);
        // setModalVisible(true);
      };
    
  
      const handleOutsideClick = (e) => {
        if (modalVisible && !e.target.closest('.form')  ) {
    
          setModalVisible(false);
        }
      };
    
      const handleCloseModal = () => {
        setModalVisible(false);
        
      };
//   er form 
    const [rvmodalVisible, setRvModalVisible] = useState(false);
    const handleButtonClick2 = () => {
        setRvModalVisible(!modalVisible);
        
      };
    
  
      const handleOutsideClick2 = (e) => {
        
        if (rvmodalVisible && !e.target.closest('.rvForm') && e.target ) {
          setRvModalVisible(false);
        }
      };
    
      const handleCloseModal2 = () => {
        setRvModalVisible(false);
        
      };
  

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
               <button className='msg' onClick={handleButtonClick}> <FaPhone></FaPhone> message</button>
               <button className='appoinment' onClick={handleButtonClick2}>appoinment </button>
            </div>

            <div className='aboutLawyer'>
                <h1>about</h1>
                <p>Lawyer Kha, a seasoned family law professional with over a decade of experience, is dedicated to providing compassionate and effective representation. As a partner at Smith & Associates Law Firm, Kha has successfully handled numerous family law cases, earning a reputation for excellence in the field.</p>
            </div>
            <div className='languages'>
                <h1>spoken languages</h1>
                <div className='spoken'> <p>english</p> <p>french</p> <p>arabic</p> <p>korean</p>  </div>
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

              {/* form pour envoyer un message  */}

            {modalVisible && (
            <div id="id01" className='modal' onClick={handleOutsideClick}>
            
            <form  className='form'>
                        <h2 class="text">write a message to <span>kha</span> </h2>
                        <div class="input-container">
                            <div class="grp">
                                <div class="input-grp">
                                    <FaUser></FaUser>
                                    <input type="text" id="username" name="username" placeholder="" autocomplete="off"/>
                                    <label for="username">your name</label>
                                </div>
                             </div>
                            <div class="grp">
                                <div class="input-grp">
                                    <MdEmail></MdEmail>
                                    <input type="email" id="email" name="email" placeholder="" autocomplete="off"/>
                                     <label for="email">Email</label>
                                </div>
                            </div>
                            <textarea className='yourMsg'> </textarea>

                            <button className='send'> send</button>
                            <MdClose className='close' onClick={handleCloseModal}></MdClose>

                           
                        </div>
                    
                </form>
            </div>
             )}


            {/* form pour un rendez-vous */}
            {rvmodalVisible && (
            <div id="id02" className='modal2' onClick={handleOutsideClick2} >
            
            <form  className='rvForm'>
                        <h2 class="text">take a date  <span>kha</span> </h2>
                        <div class="input-container">
                            <div class="grp">
                                <div class="input-grp">
                                    <FaUser></FaUser>
                                    <input type="text" id="username" name="username"  />
                                    <label for="username">your name</label>
                                </div>
                             </div>
                            <div class="grp">
                                <div class="input-grp">
                                    <MdEmail></MdEmail>
                                    <input type="email" id="email" name="email"  />
                                     <label for="email">Email</label>
                                </div>
                            </div>
                            <div class="grp">
                                <div class="input-grp">
                                    <FaPhone></FaPhone>
                                    <input type="text" id="phone" name="phone"  />
                                     <label for="phone" placeholder='anter your phone number' >phone number</label>
                                </div>
                            </div>
                            <div class="grp">
                                <div class="input-grp">
                                    <input type="text" id="date" name="date"  />
                                     <label for="date" > Date</label>
                                </div>
                            </div>


                            <button className='send'> send</button>
                            <MdClose className='close' onClick={handleCloseModal2} ></MdClose>

                           
                        </div>
                    
                </form>
            </div> 
            )}

            
        </div>
     );
}

 
export default Profile;