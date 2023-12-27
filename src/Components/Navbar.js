import '../Components/navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IoSearch } from 'react-icons/io5';
import { FaRegEnvelope } from 'react-icons/fa';

import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
// import { faCircleUser } from '@fortawesome/free-regular-svg-icons';
import { faCircleUser, faHeart , faGear, faArrowUpRightFromSquare, faBars } from '@fortawesome/free-solid-svg-icons';


import { useState } from 'react';



const Navbar = () => {
    const [active, setActive] = useState('nav-menu')
    const [toggleIcon,setToggleIcon] = useState('menu-icon')
    const navBar = ()=> {
        setActive(!active);
        setToggleIcon(!toggleIcon);

    }
    return ( 
        <nav className="nav" >
            <img className="logo"  src="./logo.png" alt="logo"></img>
            <div className="search">
                {/* <img src="./search.png" alt="search"></img> */}
                <IoSearch className='searchIcon'></IoSearch>
                <input type="text" placeholder="search"></input>    
            </div>
            <ul className={active ? 'nav-menu nav-active' : 'nav-menu'}>
                <li className='nav-item'>
                    <a  href='#' >
                       <div className="contacts" >
                            {/* <img src="./contact.png"  ></img> */}
                            <FaRegEnvelope></FaRegEnvelope>
                            contacts
                        </div>
                    </a>
                </li>
                <li className='nav-item dropdown'>
                    <a href='#'  >Annuere avocat</a>
                    <ul className='dropdown-list'>
                        <li className='dropdown-item'>
                            <a href='#'  className='dropdown-link'>par wilaya</a>
                        </li>
                        <li className='dropdown-item'>
                            <a href='#'  className='dropdown-link'>par domaine</a>
                        </li>
                    </ul>
                </li>
                <li className='nav-item dropdown '>
                    <a href='#' >
                        <div className="connexion" >
                            {/* <img src="./cnx.png"  ></img> */}
                            <FontAwesomeIcon icon={faArrowRight} />
                            connexion
                        </div>
                    </a>
                    {/* the sub list  */}
                    <ul className='dropdown-list'>
                        <li className='dropdown-item'>
                            <a href='#' className='dropdown-link'>
                                <div className="profile" >
                                    <FontAwesomeIcon icon={faCircleUser} />
                                    profile
                                </div>
                            </a>
                        </li>
                        <li className='dropdown-item'>
                            <a href='#' className='dropdown-link'>
                                <div className="fav" >
                                    <FontAwesomeIcon icon={faHeart} />
                                    favoris
                                </div>
                            </a>
                        </li>
                        <li className='dropdown-item'>
                            <a href='#' className='dropdown-link'>
                               <div className="prmtr" >
                                    <FontAwesomeIcon icon={faGear} />
                                     paramaitre
                                </div>
                            </a>
                        </li>
                        <li className='dropdown-item'>
                            <a href='#' className='dropdown-link'>
                                <div className="decnx" >
                                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                                    deconnexion
                                </div>
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
            <FontAwesomeIcon icon={faBars} className={toggleIcon ? 'menu-icon-active' : 'menu-icon'} onClick={navBar}/>

        </nav>
     ); 
}
 
export default Navbar;
