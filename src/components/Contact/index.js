import React from 'react';
import './index.scss'
import contact3 from '../../Assets/images/contact3.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import {
  faLinkedin,
  faGithub,
  faFacebook,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons'

 const Contact = () => {





  return (


    <div className='contact'>
        <div>
        <form className='contact-form'>
        <h3><span>&lt;C</span>ON<span>T</span>ACT/&gt;</h3>
        <div className='social-contact'>
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
          <input type='name' name='e-mail' placeholder='type your name'></input>
          <input type='e-mail' name='e-mail' placeholder='type your e-mail'></input>
          <textarea rows="10" cols="50" placeholder='message'></textarea><br/>
          <button className='btn'>CONTACT ME</button>  
        </form>
        </div>
        <div className='contact-img'>
            <img src={contact3} alt='img'/>
        </div>

    </div>

  );
};

export default Contact;