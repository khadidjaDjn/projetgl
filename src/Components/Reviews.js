import './reviews.css'
import './ReviewForm.css'
import {FaStar , FaUser} from 'react-icons/fa';
import { MdEmail, MdClose } from 'react-icons/md';
import { useState } from 'react';



const Reviews = () => {

        const [modalVisible2, setModalVisible2] = useState(false);
    const handleButtonClick2 = () => {
        setModalVisible2(!modalVisible2);
        setModalVisible2(true)
      };
    
  
      const handleOutsideClick2 = (e) => {
        if (modalVisible2 && !e.target.closest('.form2')  ) {
    
          setModalVisible2(false);
        }
      };
    
      const handleCloseModal2 = () => {
        setModalVisible2(false);
        
      };


//       rating 
const [rating, setRating] = useState(null);
const [hover ,setHover] = useState(null)




    return ( 
        <div className="reviews">
            <h1>reviews</h1>
            <div className='reviews-container'>
                <div className="reviews-item">
                <h4>khadidja djn</h4>
                <div className='rating'>
                        <FaStar className='star'></FaStar>
                        <FaStar className='star'></FaStar>
                        <FaStar className='star'></FaStar>
                        <FaStar className='star'></FaStar>
                        <FaStar className='star'></FaStar>
                        <span> 29/12/2023</span>
                </div>
                <p>Working with Lawyer Kha was a remarkable experience. Their deep understanding of family law, coupled with genuine empathy, made a daunting legal process much more manageable. Kha's attention to detail and commitment to my case reassured me every step of the way. I wholeheartedly recommend Lawyer Kha for anyone seeking a dedicated and knowledgeable family lawyer.</p>

                </div>
                <div className="reviews-item">
                <h4>khadidja djn</h4>
                <div className='rating'>
                        <FaStar className='star'></FaStar>
                        <FaStar className='star'></FaStar>
                        <FaStar className='star'></FaStar>
                        <FaStar className='star'></FaStar>
                        <FaStar className='star'></FaStar>
                        <span> 29/12/2023</span>
                </div>
                <p>Working with Lawyer Kha was a remarkable experience. Their deep understanding of family law, coupled with genuine empathy, made a daunting legal process much more manageable. Kha's attention to detail and commitment to my case reassured me every step of the way. I wholeheartedly recommend Lawyer Kha for anyone seeking a dedicated and knowledgeable family lawyer.</p>

                </div>
                <div className="reviews-item">
                <h4>khadidja djn</h4>
                <div className='rating'>
                        <FaStar className='star'></FaStar>
                        <FaStar className='star'></FaStar>
                        <FaStar className='star'></FaStar>
                        <FaStar className='star'></FaStar>
                        <FaStar className='star'></FaStar>
                        <span> 29/12/2023</span>
                </div>
                <p>Working with Lawyer Kha was a remarkable experience. Their deep understanding of family law, coupled with genuine empathy, made a daunting legal process much more manageable. Kha's attention to detail and commitment to my case reassured me every step of the way. I wholeheartedly recommend Lawyer Kha for anyone seeking a dedicated and knowledgeable family lawyer.</p>

                </div>
                <div className="reviews-item">
                <h4>khadidja djn</h4>
                <div className='rating'>
                        <FaStar className='star'></FaStar>
                        <FaStar className='star'></FaStar>
                        <FaStar className='star'></FaStar>
                        <FaStar className='star'></FaStar>
                        <FaStar className='star'></FaStar>
                        <span> 29/12/2023</span>
                </div>
                <p>Working with Lawyer Kha was a remarkable experience. Their deep understanding of family law, coupled with genuine empathy, made a daunting legal process much more manageable. Kha's attention to detail and commitment to my case reassured me every step of the way. I wholeheartedly recommend Lawyer Kha for anyone seeking a dedicated and knowledgeable family lawyer.</p>

                </div>
                </div>
            
            <a className='more'>read more views</a>

            <button className='write' onClick={handleButtonClick2}>add a review</button>

            {modalVisible2 && (
            <div id="id02" className='modal2' onClick={handleOutsideClick2}>
            
            <form  className='form2'>
                        <h2 class="text">add review to <span>kha</span> </h2>
                        <div className='ratingForm'>
                                 
                         {[...Array(5)].map((star, index) => {
                                   const currentRating = index + 1;
                                         return (
                                               <label>
                                               <input type='radio' name='rating' value={currentRating} onClick={()=> setRating(currentRating)} ></input>
                                                  <FaStar className='star' color= {currentRating <= (hover || rating) ? '#ffc107' : '#e4e5e9' }
                                                             onMouseEnter={()=> setHover(currentRating)}
                                                           onMouseLeave={()=> setHover(null)}  
                                                   ></FaStar>
                        
                                                </label>
                                                )
                        })}
                        <p>{rating} /5</p>
                                
                         </div>
                        <textarea className='yourMsg' placeholder='write your message here '> </textarea>
                        <div className='reviewButtons'>
                                <button className='send'> send</button> 
                                <button className='send'> send</button>
                        </div>
                        <MdClose className='close' onClick={handleCloseModal2}></MdClose>

                           
                
                    
                </form>
            </div>
             )}
        </div>
     );
}
 
export default Reviews;