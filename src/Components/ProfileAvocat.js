
import './profileAvocat.css'



import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

// import { useState } from 'react';
import {FaPhone , FaStar , FaBriefcase , FaMapMarked , FaFacebook,FaUser, FaGlobe , FaBalanceScale,FaBuilding, FaChartBar, FaCannabis, FaGavel} from 'react-icons/fa';
// import { MdEmail, MdClose } from 'react-icons/md';

import Navbar from './HomePage/Navbar';
import Footer from './Footer';


import ReviewsAvocat from './ReviewsAvocat';


import 'leaflet/dist/leaflet.css';


const ProfileAvocat = () => {
   
  
     

    return ( 
        
       <div className='Profile-container '>
        <Navbar></Navbar>
         <div className="profile">
            <div className="profileCard" >
                <img src='./avocat4.png' ></img>  
                <div className='infos'> 
                    <h4 className='name'> khadidja djn </h4>
                    <p> Avocat d’affaire a bejaia </p>
                    <div className='rating'>
                        <FaStar className='star'></FaStar>
                        <FaStar className='star'></FaStar>
                        <FaStar className='star'></FaStar>
                        <FaStar className='star'></FaStar>
                        <FaStar className='star'></FaStar>
                    </div>
                    <div className='domain'>
                        <FaBriefcase className='brief'></FaBriefcase>
                        <p>10 years experience</p>
                    </div>

                    <div className='nbr'>
                        <FaPhone className='phone'></FaPhone>
                        <p>+123456778</p>
                    </div>
                
                </div>  
            </div>


            <div className='buttons'> 
               <button className='msg' > <FaBriefcase></FaBriefcase> messages</button>
               <button className='appoinment' >appoinments </button>
               <button className='edit'>edit Profile </button>
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
                <MapContainer center={[36.66374584, 4.913265056]} zoom={13} style={{ height: '320px', width: '70%', marginTop: '20px' }}>
                     <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                <Marker position={[36.455, 5.104]}>
                    <Popup>Estin Mizour, Bejaia, Algeria</Popup>
                </Marker>
            </MapContainer>
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
            <div className='schedule'>
                <h1>schedule</h1>
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


              {/* form pour envoyer un message  */}

            

            <div className='areas'>
            <h1>practise areas</h1>
            <div className='practiceAreas'>
                <div className='area-item'>
                    <div className='title' >
                        <FaGavel className='area-icon' />
                        <h4>criminal law</h4>
                    </div>
                    <p>Criminal law attorneys defend individuals against charges, ensuring fair trials and protecting rights, with expertise in navigating the complexities of the legal system.</p>
                </div>
                <div className='area-item'>
                    <div className='title' >
                    <FaBalanceScale className='area-icon' />
                        <h4>family law</h4>
                    </div>
                    <p>Specializing in family matters, family law practitioners guide clients through divorce, child custody, and adoption cases, prioritizing resolutions that uphold the well-being of the family.</p>
                </div>
                <div className='area-item'>
                    <div className='title' >
                        <FaBuilding className='area-icon'/>
                        <h4>real estate law</h4>
                    </div>
                    <p>Real estate lawyers facilitate property transactions, addressing legal intricacies, resolving disputes, and ensuring the lawful transfer of ownership in residential and commercial real estate deals.</p>
                </div>
                <div className='area-item'>
                    <div className='title' >
                        <FaUser className='area-icon'/>
                        <h4>personal law</h4>
                     </div>
                     <p>Personal law attorneys advocate for justice in cases of personal injury, medical malpractice, and insurance claims, providing legal representation to secure fair compensation for clients harmed by others.</p>
                </div>
                 <div className='area-item'>
                    <div className='title' >
                        <FaChartBar className='area-icon'/>
                        <h4>financial law</h4>
                    </div>
                    <p>Experts in financial law navigate regulations governing transactions and institutions, offering legal advice on securities, banking, and corporate governance to ensure compliance and financial stability.</p>
                </div>
                 <div className='area-item'>
                    <div className='title' >
                        <FaCannabis className='area-icon' />

                        <h4>drug offence</h4>
                     </div>
                    <p>Specializing in drug-related legal matters, attorneys provide comprehensive defense, addressing issues such as search and seizure, constitutional rights, and advocating for alternatives to incarceration.</p>
                </div>
            </div>
            
            </div>

            <ReviewsAvocat></ReviewsAvocat>

            
        </div>
        <Footer></Footer>
       </div>

     );
}

 
export default ProfileAvocat;