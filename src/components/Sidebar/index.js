import React, { useState } from 'react';
import './index.scss';
import logo from '../../Assets/images/logo2.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faHome ,
          faEye,
          faUser,
          faBars,
          faEnvelope,
            faGear} from '@fortawesome/free-solid-svg-icons';
import {
  faLinkedin,
  faGithub,
  faFacebook,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
  const [opennavbar,setopennavbar]=useState(false);

  const handlenavbar = ()=>{
    setopennavbar(!opennavbar);
  }

  const handlhome = ()=>{
    setopennavbar(true)
    document.scrollTop = 0; 
    
  }

  return (
    <div className='nav'>
      <div className="logo">
      <Link to='/h-portfolio' onClick={()=>{handlhome()}}> 
          <img className='img' src={logo} alt='logo'/>
      </Link>
      </div>
      <div className='responsive-bar' onClick={()=>{handlenavbar()}}>
          <FontAwesomeIcon icon={faBars} color='white' fontSize={'30px'} />
      </div>
      <div className={`container-navlinks ${opennavbar&& 'container-navbar-close'}`}>
      <div className='navlinks'>
        <ul>
            <li>
              <Link className='link-design' to={'/h-portfolio'}> 
                    <FontAwesomeIcon icon={faHome} color="#ffffff82" />
                    <p >Home</p>
            </Link>


            </li>
            <li>
              <Link className='link-design' to={'/about'} > 
                <FontAwesomeIcon icon={faUser} color='#ffffff82' />
                <p >About</p>
              </Link>
            </li>
            <li>
              <Link className='link-design' to={'/skills'} > 
                <FontAwesomeIcon icon= {faGear} color='#ffffff82' />
                <p >Skills</p>
              </Link>
            </li>
            <li>
              <Link className='link-design' to={'/Projects'} > 
                <FontAwesomeIcon icon={faEye} color="#ffffff82" />
                <p >Projects</p>
              </Link>
            </li>

            <li>
              <Link className='link-design' to={'/contact'} > 
                <FontAwesomeIcon icon={faEnvelope} color='#ffffff82' />
                <p>Contact</p>
              </Link>
            </li>

        </ul>
      </div>
      <div className='social navlinks'>
        <ul>
          <li>
              <a className='social-icon' target='_blank' rel='noreferrer' href={"https://linkedin.com/in/hamada-elmorsy-0a7893237"}>
                  <FontAwesomeIcon icon={faLinkedin} color='#ffffff82'/>
              </a>
          </li>
          <li>
              <a className='social-icon' target='_blank' rel='noreferrer'  href={"https://github.com/Hamada-Elsayed"}>
                  <FontAwesomeIcon icon={faGithub} color="#ffffff82" />
            </a>
          </li>
          <li>
              <a className='social-icon' target='_blank' rel='noreferrer'  href={"https://www.facebook.com/profile.php?id=100007826172316"}>
                  <FontAwesomeIcon icon={faFacebook} color="#ffffff82" />
              </a>
          </li>
          <li>
              <a className='social-icon' target='_blank' rel='noreferrer'  href={"https://wa.me/201091518340"}>
                  <FontAwesomeIcon icon={faWhatsapp} color="#ffffff82" />
              </a>
          </li>
        </ul>
        
      </div>
      </div>
      
    </div>
  )
}

export default Sidebar
