import './contactUS.css'
import Navbar from "./Navbar";
import Footer from "../Footer";


import {FaUser} from 'react-icons/fa';
import { MdEmail} from 'react-icons/md';

const ContactUS = () => {
    return ( 
        <div className="contactUs">
            <Navbar></Navbar>
            <div className="container">
                <form>
                        <h2 class="text">contact us </h2>
                        <p>Get in touch and let us know how we can help you. </p>
                        <div class="input-container">
                            <div class="grpC">
                                <div class="input-grp">
                                    <FaUser></FaUser>
                                    <input type="text" id="username" name="username" placeholder="" autocomplete="off"/>
                                    <label for="username">your name</label>
                                </div>
                             </div>
                            <div class="grpC">
                                <div class="input-grp">
                                    <MdEmail></MdEmail>
                                    <input type="email" id="email" name="email" placeholder="" autocomplete="off"/>
                                     <label for="email">Email</label>
                                </div>
                            </div>
                            <div className='who'>
                                <h5>are you :</h5>
                                <label htmlFor='lawyer'>
                                    <input id='lawyer' type='checkbox' />
                                    lawyer
                                </label>

                                <label htmlFor='client'>
                                    <input id='client' type='checkbox' />
                                    client
                                </label>
                    
                    
                        </div>
                            <textarea className='yourMsg' placeholder='write your message here '> </textarea>

                            <button className='send'> send</button>

                           
                        </div>

                </form>
                <img src="contactus.jpg"></img>
            </div>





            <Footer></Footer>
        </div>
     );
}
 
export default ContactUS;