
import './navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IoSearch } from 'react-icons/io5';
import { FaRegEnvelope } from 'react-icons/fa';

import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
// import { faCircleUser } from '@fortawesome/free-regular-svg-icons';
import { faCircleUser, faHeart , faGear, faArrowUpRightFromSquare, faBars, faTimes} from '@fortawesome/free-solid-svg-icons';


import { useState } from 'react';







const Navbar = () => {
    // const [active, setActive] = useState('nav-menu')
    // const [toggleIcon,setToggleIcon] = useState('menu-icon')

    const [active, setActive] = useState(false);

    const [language, setLanguage] = useState('en');
    // const [isLanguageDropdownVisible, setIsLanguageDropdownVisible] = useState(false);

    
    
  const translations = {
    en: {
      contacts: 'Contacts',
      search: 'Search',
      avocatDirectory: 'Annuaire avocat',
      byRegion: 'par wilaya',
      byDomain: 'par domaine',
      connection: 'Connexion',
      profile: 'Profile',
      favorites: 'Favoris',
      settings: 'Paramètres',
      logout: 'Déconnexion',
    },
    ar: {
      contacts: 'جهات الاتصال',
      search: 'بحث',
      avocatDirectory: 'دليل المحامين',
      byRegion: 'حسب الولاية',
      byDomain: 'حسب المجال',
      connection: 'تسجيل الدخول',
      profile: 'الملف الشخصي',
      favorites: 'المفضلة',
      settings: 'الإعدادات',
      logout: 'تسجيل الخروج',
    },
    fr: {
        contacts: 'Contacts',
        search: 'Recherche',
        avocatDirectory: 'Répertoire des avocats',
        byRegion: 'par région',
        byDomain: 'par domaine',
        connection: 'Connexion',
        profile: 'Profil',
        favorites: 'Favoris',
        settings: 'Paramètres',
        logout: 'Déconnexion',
      },
  };

  const t = (key) => translations[language][key];
  

  const toggleNavbar = () => {
    setActive(!active);
  };

  const closeNavbar = () => {
    setActive(false);
  };



    
    return ( 
        <nav className={`nav ${active ? 'nav-active' : ''}`} >
            <img className="logo"  src="./logo.png" alt="logo"></img>
            <div className="search">
                {/* <img src="./search.png" alt="search"></img> */}
                <IoSearch className='searchIcon'></IoSearch>
                <input type="text" placeholder={t('search')}></input>    
            </div>
            <ul className= 'nav-menu'>
                <li className='nav-item'>
                    <a  href='#' >
                       <div className="contacts" >
                            {/* <img src="./contact.png"  ></img> */}
                            <FaRegEnvelope></FaRegEnvelope>
                            {t('contacts')}
                        </div>
                    </a>
                </li>
                <li className='nav-item dropdown'>
                    <a href='#'  >{t('avocatDirectory')}</a>
                    <ul className='dropdown-list'>
                        <li className='dropdown-item'>
                            <a href='#'  className='dropdown-link'>{t('byRegion')}</a>
                        </li>
                        <li className='dropdown-item'>
                            <a href='#'  className='dropdown-link'>{t('byDomain')}</a>
                        </li>
                    </ul>
                </li>
                <li className='nav-item dropdown '>
                    <a href='#' >
                        <div className="connexion" >
                            {/* <img src="./cnx.png"  ></img> */}
                            <FontAwesomeIcon icon={faArrowRight} />
                            {t('connection')}
                        </div>
                    </a>
                    {/* the sub list  */}
                    <ul className='dropdown-list'>
                        <li className='dropdown-item'>
                            <a href='#' className='dropdown-link'>
                                <div className="profileNav" >
                                    <FontAwesomeIcon icon={faCircleUser} />
                                    {t('profile')}
                                </div>
                            </a>
                        </li>
                        <li className='dropdown-item'>
                            <a href='#' className='dropdown-link'>
                                <div className="fav" >
                                    <FontAwesomeIcon icon={faHeart} />
                                    {t('favorites')}
                                </div>
                            </a>
                        </li>
                        <li className='dropdown-item'>
                            <a href='#' className='dropdown-link'>
                               <div className="prmtr" >
                                    <FontAwesomeIcon icon={faGear} />
                                    {t('settings')}
                                </div>
                            </a>
                        </li>
                        <li className='dropdown-item'>
                            <a href='#' className='dropdown-link'>
                                <div className="decnx" >
                                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                                    {t('logout')}
                                </div>

                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
            <FontAwesomeIcon icon={faBars} className={`menu-icon ${active ? 'menu-icon-active' : ''}`} onClick={toggleNavbar}></FontAwesomeIcon>

{active && (
  <div className="close-button" onClick={closeNavbar}>
    <FontAwesomeIcon icon={faTimes} />
  </div>
)}

            
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
        <faBars className={`menu-icon ${active ? 'menu-icon-active' : ''}`} onClick={toggleNavbar} ></faBars>
        
        </nav>
     ); 
}
 
export default Navbar;
