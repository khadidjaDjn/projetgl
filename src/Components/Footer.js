// import './footer.css'

// import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin,FaMapMarker,FaPhone, FaEnvelope } from 'react-icons/fa';

// const Footer = () => {
//     return ( 
//         <div className="footer">
//             <div className='container' >
//                 <div className="ourSite">
//                     <img src="./logo.png"  className="logo"></img>
//                     <div className="description">Explore our lawyers' website—a beacon of legal expertise and innovation, guiding you toward tailored solutions for a just tomorrow</div>
//                 </div>
//                 <div className="links">
//                     <h4>our links</h4>
//                     <a href="#" className='aboutUs'>about us </a>
//                     <a href="./ContactUS" className='contact us'>contact us  </a>
//                     <a href="#" className='link3'>link number3</a>
//                     <a href="#" className='link4'  >link number4</a>
//                 </div>
//                 <div className='contact'>
//                     <h4>contact us</h4>
//                     <div className='phone'>
//                        <FaPhone />
//                        +213066666666
//                     </div>
//                     <div>
//                         <FaEnvelope></FaEnvelope>
//                         mouhamidz@gmail.com
//                     </div>
//                     <div className='location'>
//                         <FaMapMarker></FaMapMarker>
//                         Algeria 
//                     </div>
//                 </div>
//             </div>
//             <div className="socialMedia">
//                 <h4>Find ud on </h4>
//                 <div className='soc'> 
//                     <a className='fb'><FaFacebook /></a>
//                     <a className='insta'><FaInstagram /> </a>
//                     <a className='twitter'><FaTwitter /></a>
//                     <a className='linkedIn'><FaLinkedin /></a>
//                 </div>
//              </div>
            
//         </div>
        
//      );
// }
 
// export default Footer;


import React, { useState } from 'react';
import './footer.css';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaMapMarker, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const [language, setLanguage] = useState('en');

  const translations = {
    en: {
      ourLinks: 'Our Links',
      aboutUs: 'About Us',
      contactUs: 'Contact Us',
      link3: 'Link Number 3',
      link4: 'Link Number 4',
      contact: 'Contact Us',
      phone: '+213066666666',
      email: 'mouhamidz@gmail.com',
      location: 'Algeria',
      findUsOn: 'Find Us On',
    },
    ar: {
      ourLinks: 'روابطنا',
      aboutUs: 'معلومات عنا',
      contactUs: 'اتصل بنا',
      link3: 'الرابط رقم 3',
      link4: 'الرابط رقم 4',
      contact: 'اتصل بنا',
      phone: '+213066666666',
      email: 'mouhamidz@gmail.com',
      location: 'الجزائر',
      findUsOn: 'ابحث عنا على',
    },
    fr: {
      ourLinks: 'Nos Liens',
      aboutUs: 'À Propos de Nous',
      contactUs: 'Contactez-nous',
      link3: 'Lien Numéro 3',
      link4: 'Lien Numéro 4',
      contact: 'Contactez-nous',
      phone: '+213066666666',
      email: 'mouhamidz@gmail.com',
      location: 'Algérie',
      findUsOn: 'Trouvez-nous sur',
    },
  };

  const t = (key) => translations[language][key];

  return (
    <div className="footer">
      <div className='container' >
        <div className="ourSite">
          <img src="./logo.png" className="logo" alt="logo"></img>
          <div className="description">{t('description')}</div>
        </div>
        <div className="links">
          <h4>{t('ourLinks')}</h4>
          <a href="#" className='aboutUs'>{t('aboutUs')}</a>
          <a href="./ContactUS" className='contact us'>{t('contactUs')}</a>
          <a href="#" className='link3'>{t('link3')}</a>
          <a href="#" className='link4'>{t('link4')}</a>
        </div>
        <div className='contact'>
          <h4>{t('contact')}</h4>
          <div className='phone'>
            <FaPhone />
            {t('phone')}
          </div>
          <div>
            <FaEnvelope></FaEnvelope>
            {t('email')}
          </div>
          <div className='location'>
            <FaMapMarker></FaMapMarker>
            {t('location')}
          </div>
          <div className="language-toggle"  >
          <button className='language'>
    {language === 'en' ? 'English' : language === 'ar' ? 'العربية' : 'Français'}
    <ul className="language-menu">
      <li onClick={() => setLanguage('en')}>English</li>
      <li onClick={() => setLanguage('ar')}>العربية</li>
      <li onClick={() => setLanguage('fr')}>Français</li>
    </ul>
  </button>
             
           </div>
        </div>
      </div>
      <div className="socialMedia">
        <h4>{t('findUsOn')}</h4>
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
