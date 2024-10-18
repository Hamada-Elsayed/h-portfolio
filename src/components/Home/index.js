import './index.scss'
import me4 from '../../Assets/images/me4.png'
import logo from '../../Assets/images/logo.png'
import logo2 from '../../Assets/images/logo2.png'
import { Link } from 'react-router-dom'
import About from '../About'
import Skills from '../Skills'
import data from '../../Data/data'
import Contact from './../Contact/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons'



const Home = () => {
  return (
    <div className='Home-page'>
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
    <div className='updown-btn'><FontAwesomeIcon icon={faAnglesDown} /></div>
    <About/>
    <div className='updown-btn'><FontAwesomeIcon icon={faAnglesDown} /></div>

    <Skills/>
    <div className='updown-btn'><FontAwesomeIcon icon={faAnglesDown} /></div>

    <div className='homeproject'>
    <div className='projects-page home-projects'>

        <h3><span>&lt; M</span>Y<span>P</span>rojects /&gt;</h3>
        <p className='p-text'>
        Here are some of my projects that I have worked on in the past,

        </p>
        
        <div className='content'>



        {
          data ? (data.map((i)=>{
            return (
              <div className='rainbow-tow'>
              <div className='card-container'>
                  <div className='card-tow'>
                          <div><img src={i.image} alt='#'/></div>
                  </div>
                  <div className='card-content'>
                          <h4>{i.title}</h4>
                          <p>{i.description}</p>
                          <div className='link-class'>
                              <a href={i.view} target='_blank' rel='noreferrer' >Live</a>
                              <a href={i.githup} target='_blank' rel='noreferrer'>GitHub</a>
                          </div>
                  </div>
              </div>
              </div>
            )
          }).slice(6,9)):null
        }

        

        </div>




      
    </div>
    <div className='see-all'><Link className='btn' to={'/projects'}>show all</Link></div>

    </div>

    <div className='updown-btn'><FontAwesomeIcon icon={faAnglesDown} /></div>

    <Contact/>




    </div>
  )
}

export default Home
