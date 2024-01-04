import './footer.css'

import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin,FaMapMarker,FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return ( 
        <div className="footer">
            <div className='container' >
                <div className="ourSite">
                    <img src="./logo.png"  className="logo"></img>
                    <div className="description">Explore our lawyers' website—a beacon of legal expertise and innovation, guiding you toward tailored solutions for a just tomorrow</div>
                </div>
                <div className="links">
                    <h4>our links</h4>
                    <a href="#" className='aboutUs'>about us </a>
                    <a href="./ContactUS" className='contact us'>contact us  </a>
                    <a href="#" className='link3'>link number3</a>
                    <a href="#" className='link4'  >link number4</a>
                </div>
                <div className='contact'>
                    <h4>contact us</h4>
                    <div className='phone'>
                       <FaPhone />
                       +213066666666
                    </div>
                    <div>
                        <FaEnvelope></FaEnvelope>
                        mouhamidz@gmail.com
                    </div>
                    <div className='location'>
                        <FaMapMarker></FaMapMarker>
                        Algeria 
                    </div>
                </div>
            </div>
            <div className="socialMedia">
                <h4>Find ud on </h4>
                <div className='soc'> 
                    <a className='fb'><FaFacebook /></a>
                    <a className='insta'><FaInstagram /> </a>
                    <a className='twitter'><FaTwitter /></a>
                    <a className='linkedIn'><FaLinkedin /></a>
                </div>
             </div>
            
        </div>
        
     );
}
 
export default Footer;
