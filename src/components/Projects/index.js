import React from 'react'
import './index.scss'
import { Card } from 'react-bootstrap'
import data from '../../Data/data'

const Projects = () => {
  return (
    <div className='projects-page'>

        <h3><span>M</span>y<span>P</span>rojects&gt;&gt;</h3>
        <div className='content'>

        {
          data ? data.map((i)=>{
            return (
              <Card className='card' key={i.id}>
              <img src={i.image} alt='#'/>
              <div className='overlay'>
                  <h2>{i.title}</h2>
  
                  <div className='link-class'>
                      <a href={i.view} target='_blank' rel='noreferrer' >live</a>
                      <a href={i.githup} target='_blank' rel='noreferrer'>githup</a>
                  </div>
              </div> 
              </Card>
            )

          }):<h2>no data found</h2>
        }
        </div>





      
    </div>
  )
}

export default Projects
