import React, { useState } from 'react';
import './index.scss';
import logo from '../../Assets/images/logo.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faHome , faSuitcase, faUser ,faBars,faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {
  faLinkedin,
  faGithub,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
  const [opennavbar,setopennavbar]=useState(false);

  const handlenavbar = ()=>{
    setopennavbar(!opennavbar);
  }

  return (
    <div className='nav'>
      <div className="logo">
      <Link to='/h-portfolio' onClick={()=>{setopennavbar(true)}}> 
          <img className='img' src={logo} alt='logo'/>
      </Link>
      </div>
      <div className='responsive-bar' onClick={()=>{handlenavbar()}}>
          <FontAwesomeIcon icon={faBars} color='white' fontSize={'30px'} />
      </div>
      <div className={`container-navlinks ${opennavbar&& 'container-navbar-close'} `}>
      <div className='navlinks'>
        <ul>
            <li>
              <Link to={'/h-portfolio'} onClick={()=>{setopennavbar(true)}}> 
                <FontAwesomeIcon icon={faHome} color="#ffffff82" />
              </Link>
            </li>
            <li>
              <Link to={'/about'} onClick={()=>{setopennavbar(true)}}> 
                <FontAwesomeIcon icon={faUser} color='#ffffff82' />
              </Link>
            </li>
            <li>
              <Link to={'/Projects'}  onClick={()=>{setopennavbar(true)}}> 
                <FontAwesomeIcon icon={faSuitcase} color='#ffffff82' />
              </Link>
            </li>
            <li>
              <Link to={'/contact'}  onClick={()=>{setopennavbar(true)}}> 
                <FontAwesomeIcon icon={faEnvelope} color='#ffffff82' />
              </Link>
            </li>

        </ul>
      </div>
      <div className='social navlinks'>
        <ul>
          <li>
            <a target='_blank' rel='noreferrer' href={"https://www.linkedin.com/in/hamada-elmorsy-0a7893237?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BwiuYongHRXy0vOSr%2B1zshw%3D%3D"}>
            <FontAwesomeIcon
            icon={faLinkedin} color='#ffffff82'/>
            </a>
          </li>
          <li>
            <a href={"google.com"}><FontAwesomeIcon icon={faGithub} color="#ffffff82" /></a>
          </li>
          <li>
            <a href={"google.com"}><FontAwesomeIcon icon={faFacebook} color="#ffffff82" /></a>
          </li>
        </ul>
        
      </div>
      </div>
      
    </div>
  )
}

export default Sidebar
