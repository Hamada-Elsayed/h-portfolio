import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBootstrap,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'


const index = () => {

  return (
    <div className='skills-page'>
          <div className='about-skills'>
          <h3><span>&lt; M</span>Y<span>S</span>kills /&gt;</h3>
          <p className='p-width'>
          I'm a very ambitious front-end developer looking for a role in an
          established IT company with the opportunity to work with the latest
          technologies on challenging and diverse projects.
        </p>
             </div>



    <div className='skills-content'>
      <div className='content'>
        <div className='skills-progressone'>

        <div class="progress-bar-container">
          <h2>
            <label for="html">HTML</label>
          </h2>
          <div class="progress-bar html">
            <progress id="html" min="0" max="100" value="95"></progress>
          </div>
        </div>
        
        <div class="progress-bar-container">
          <h2>
            <label for="css">CSS</label>
          </h2>
          <div class="progress-bar css">
            <progress id="css" min="0" max="100" value="92"></progress>
          </div>
        </div>
        
        <div class="progress-bar-container">
          <h2>
            <label for="js">JavaScript</label>
          </h2>
          <div class="progress-bar js">
            <progress id="js" min="0" max="100" value="90"></progress>
          </div>
        </div>
        
        
        
        </div>
        <div className='skills-progressone'>

        <div class="progress-bar-container">
          <h2>
            <label for="html">Bootstrab</label>
          </h2>
          <div class="progress-bar html">
            <progress id="html" min="0" max="100" value="95"></progress>
          </div>
        </div>
        
        <div class="progress-bar-container">
          <h2>
            <label for="css">Sass</label>
          </h2>
          <div class="progress-bar css">
            <progress id="css" min="0" max="100" value="87"></progress>
          </div>
        </div>
        
        <div class="progress-bar-container">
          <h2>
            <label for="js">Git & Github</label>
          </h2>
          <div class="progress-bar js">
            <progress id="js" min="0" max="100" value="95"></progress>
          </div>
        </div>
        
        
        
        </div>
        <div className='skills-progressone'>
        
        <div class="progress-bar-container">
          <h2>
            <label for="js">React</label>
          </h2>
          <div class="progress-bar js">
            <progress id="js" min="0" max="100" value="90"></progress>
          </div>
        </div>
        <div class="progress-bar-container">
        <h2>
          <label for="js">Redux</label>
        </h2>
        <div class="progress-bar js">
          <progress id="js" min="0" max="100" value="95"></progress>
        </div>
      </div>
        
        
        
        </div>
      </div>


      <div className='about-antimation'>
      <div>
      <div className="stage-cube-cont">
      <div className="cubespinner">
        <div className="face1">
          <FontAwesomeIcon icon={faBootstrap} color="#F06529" />
        </div>
        <div className="face2">
          <FontAwesomeIcon icon={faHtml5} color="#F06529" />
        </div>
        <div className="face3">
          <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
        </div>
        <div className="face4">
          <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
        </div>
        <div className="face5">
          <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
        </div>
        <div className="face6">
          <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
        </div>
      </div>
    </div>
      </div>
    </div>

</div>
    



    
    </div>
  )
}

export default index
