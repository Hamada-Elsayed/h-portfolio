import React from 'react'
import './index.scss'

import me4 from '../../Assets/images/me4.png'
import logo from '../../Assets/images/logo.png'
import logo2 from '../../Assets/images/logo2.png'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='Home'>
        <div className='home-text'>
        <p><img src={logo} alt='hero'/><span>ello</span></p>
          <h3>i,m <span><img src={logo2} alt="logo"/></span>amada Elmorsy</h3>
          <p>Front-end web developer</p>
          <p>React developer</p>
          <Link to={'/contact'}><button className='btn'>CONTACT ME</button></Link>

        </div>
        <div className='home-img'>
          <img src={me4} alt='hero'/>
        </div>
    </div>
  )
}

export default Home
