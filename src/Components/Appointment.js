import './appointment.css'

import Navbar from './HomePage/Navbar';
import Footer from './Footer';


import { Link } from 'react-router-dom';


const Appointment = () => {
    return ( 
        <div className="appointment">
            <Navbar></Navbar>
            <div className="appointment-container">
                <h1 className='title'>Make an appointment</h1>
                <p>With : <span>Ms kha</span></p>
                 <p>Price : <span>1500DA</span> </p>
                <div className="situation">
                    <label for="situation" >your situation:  <span>*</span> </label>
                    <textarea id="situation"></textarea>
                </div>

                <div className='schedule'>
                    <h1>week' schedule</h1>
                    <div className='week-time'>
                        <div className='heure'></div>
                        <div className='days'> saturday </div>
                        <div className='days'> sunday </div>
                        <div className='days'> monday </div>
                        <div className='days'> tuesday </div>
                        <div className='days'> wednesday </div>
                        <div className='days'> thirsday</div>

                        <div className='heure'>8am-9am</div>
                        <div className='event'> hello </div>
                        <div className='event'> hello </div>
                        <div className='event'> hello </div>
                        <div className='event'> hello </div>
                        <div className='event'> hello </div>
                        <div className='event'> hello</div>

                        <div className='heure'>9am-10am</div>
                        <div className='event'> hello </div>
                        <div className='event'> </div>
                        <div className='event'> hello </div>
                        <div className='event'> hello </div>
                        <div className='event'> hello </div>
                        <div className='event'> hello</div>

                        <div className='heure'>10am-11am</div>
                        <div className='event'> hello </div>
                        <div className='event'> hello </div>
                        <div className='event'> hello </div>
                        <div className='event'> hello </div>
                        <div className='event'> hello </div>
                        <div className='event'> hello</div>

                    <div className='heure'>13pm-14pm</div>
                        <div className='event'>  </div>
                        <div className='event'> hello </div>
                        <div className='event'> hello </div>
                        <div className='event'> hello </div>
                        <div className='event'> hello </div>
                        <div className='event'> hello</div>

                        <div className='heure'>14pm-15pm</div>
                        <div className='event'> hello </div>
                        <div className='event'> hello </div>
                        <div className='event'> hello </div>
                        <div className='event'> hello </div>
                        <div className='event'> hello</div>
                        <div className='event'> </div>

                        <div className='heure'>15pm-16pm</div>
                        <div className='event'> hello </div>
                        <div className='event'> hello </div>
                        <div className='event'>  </div>
                        <div className='event'> hello </div>
                        <div className='event'> hello</div>
                        <div className='event'> hello</div>
                    </div>
                </div>

                {/* <div className='choose'>
                    <label for='date' >Your availabilities <span>*</span></label>
                    <input id='date' type='checkbox'>date1</input>
                </div> */}
                <div className='choose'>
                    <h1>Your availabilities <span>*</span></h1>
                    <label htmlFor='date1'>
                        <input id='date1' type='checkbox' />
                                 Date 1
                    </label>

                    <label htmlFor='date2'>
                      <input id='date2' type='checkbox' />
                       Date 2
                    </label>
                    <label htmlFor='date3'>
                      <input id='date3' type='checkbox' />
                       Date 3
                    </label>
                    <label htmlFor='date4'>
                      <input id='date4' type='checkbox' />
                       Date 4
                    </label>
                </div>
                <Link to='#'><button className='validate'>validate</button></Link>
            </div>
            <Footer></Footer>
        </div>
     );
}
 
export default Appointment;