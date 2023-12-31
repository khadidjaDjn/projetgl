import './messageForm.css'

import { MdEmail, MdClose } from 'react-icons/md';
import {FaUser} from 'react-icons/fa';
import { useState } from 'react';


const MessageForm = ({ handleButtonClick }) => {
    const [modalVisible, setModalVisible] = useState(false);
    

  
    const handleOutsideClick = (e) => {
        const closeButton = document.querySelector('.close');
        if (modalVisible && !e.target.closest('.form') && e.target !== closeButton ) {
            console.log('Outside click detected');
          setModalVisible(false);
        }
      };
    
      const handleCloseModal = () => {
        setModalVisible(false);
        handleButtonClick();
      };

    return ( 
        <div e={`messageForm ${modalVisible ? 'visible' : ''}`}>
             {/* form to send a mesage   */}
             {modalVisible && (
            <div id="id01" className={`modal ${modalVisible ? 'visible' : ''}`} onClick={handleOutsideClick}>
            
            <form action="action_page.php" method="post" className='form'>
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
            </div> )}
        </div>
     );
}
 
export default MessageForm;