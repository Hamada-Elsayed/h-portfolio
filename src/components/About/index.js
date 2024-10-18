import React from 'react'
import './index.scss'
import king from '../../Assets/images/king.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons'
import { 
    faEnvelope ,
    faGraduationCap
} from '@fortawesome/free-solid-svg-icons';


const index = () => {
  return (
    <div className='about'>
    <div className='about-section'>
      <div className='about-img'>
            <div className="rainbow"> <img src={king} alt='#'/></div>
            <h3><span>A</span>bout&gt;&gt;<span>M</span>e</h3>
            <p className='p-one'>
            My name is Hamada, I am 22 years old, and I just graduated from computer science.
              While searching for my first job, I decided to go towards web development,
              because I realize that it is impossible to succeed in almost any business
              without having some online presence. I simply enjoy working on code,
              and developing beautiful websites, which is why I am applying
              for this job with you.
            </p>
            <p className='p-tow'>
            I'm a very ambitious front-end developer looking for a role in an
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
  </p>
      </div>
        <div className='about-text'>
        <div style={{width:"320px", height:'60px'}} className='rainbow'><h3><span>p</span>ersonal <span>I</span>nformation</h3></div>
        <p>
        <FontAwesomeIcon icon={faWhatsapp} color="white" />
        <span > 01091518340 </span>
        </p>
        <p>
        <FontAwesomeIcon icon={faEnvelope} color="white" />
          <span style={{color:'rgb(184, 182, 182)'}}> hamada.elmorsy15@gmail.com </span>
        </p>
        <p>
        <FontAwesomeIcon icon={faLinkedin} color="white" />
        <span> <a href='https://www.linkedin.com/in/hamada-elmorsy-%F0%9F%87%B5%F0%9F%87%B8-0a7893237/' rel="noreferrer" target='_blank' style={{textDecoration:'none',color:'rgb(184, 182, 182)'}}>https://www.linkedin.com/in/hamada-elmorsy</a> </span>
        </p>


        <div style={{width:"320px", height:'60px'}} className='rainbow'> <h3><span>E</span>ducation</h3></div>

        <p style={{display:'grid'}}>
        
        <span><FontAwesomeIcon icon={faGraduationCap} color='white' />   ' Mansoura University ' </span>
        <span>bachelor's degree in computer science</span>
        </p>


        
        <div style={{width:"320px", height:'60px'}} className='rainbow'><h3><span>C</span>ertificates</h3></div>
        <p style={{display:'grid'}}>
        <span>bachelor's degree in computer science</span>
        <span> startups & marketing</span>
        </p>

        
        <div style={{width:"320px", height:'60px'}} className='rainbow' > <h3> <span>M</span>y <span>W</span>ork</h3></div>
        <p style={{display:'grid'}}>
              <span>E-commerce</span>
              <span>movie</span>
              <span>portfolio</span>
              <span>coffe</span>

        </p>


        </div>


      </div>
    </div>
  )
}

export default index
