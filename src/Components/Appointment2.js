import './appointment2.css'

import Navbar from './HomePage/Navbar';
import Footer from './Footer';


import {FaUser} from 'react-icons/fa';
import { MdEmail, MdClose } from 'react-icons/md';



const Appointment2 = () => {
    return ( 
        <div className="appointment2">
            <Navbar></Navbar>
            <div className='appointment2-container'>
                <h1 className='title'>Make an appointment</h1>
                <p>With : <span>Ms kha</span></p>
                <p>Price : <span>1500DA</span> </p>
                <p className='kha'>To send your appointment request to <span>kha</span>, log in or create your account</p>
                 <form >
                                <div class="firstName">
                                    <label for="firstName"> first Name:  <span>*</span></label>
                                    <input type="text" id="firstName" name="firstName" placeholder="your first name" autocomplete="off"/>
                                </div>
                            
                                <div class="lastName">
                                    <label for="lastName"> last name:  <span>*</span></label>
                                    <input type="text" id="lastName" name="lastName" placeholder="your last name" />
                                </div>
                                
                                <div className='birth'>
                                    <label htmlFor='dob'>
                                        Date of Birth:  <span>*</span>
                                        <input type='date' id='dob' name='dob' />
                                     </label>
                                     <label htmlFor='pob'>
                                       place of Birth:  <span>*</span>
                                       <input type='text' id='pob' placeholder='enter your place of bearth'></input>
                                     </label>
                                </div>
                                <div className='adr'>
                                    <label htmlFor='adress'>adress:  <span>*</span></label>
                                    <input type='text' id='adress' placeholder='your adress'></input>
                                </div>
                                <div className='ccp'>
                                    <label htmlFor='ccp'>ZIP code:  <span>*</span> </label>
                                    <input type='text' id='ccp' placeholder='enter your Zip code'></input>
                                </div>


                                <div class="email">
                                    <label for="email">Email:  <span>*</span></label>
                                    <input type="email" id="email" name="email" placeholder="enter your email" autocomplete="off"/>
                                </div>
                                <div class="pwd">
                                    <label for="password">password:  <span>*</span></label>
                                    <input type="password" id="password" name="password" placeholder="enter your password" autocomplete="off"/>
                                </div>

                            

                            <button className='validate'> validate</button>

                           
                    
                 </form>
            </div>

            <Footer></Footer>

        </div>
     );
}
 
export default Appointment2;