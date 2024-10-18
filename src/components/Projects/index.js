import React from 'react'
import './index.scss'
import data from '../../Data/data'

const Projects = () => {
  return (
    <div className='projects-page'>

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
          })):null
        }

        </div>





      
    </div>
  )
}

export default Projects




// {
//   data ? data.map((i)=>{
//     return (
//       <Card className='card' key={i.id}>
//       <img src={i.image} alt='#'/>
//       <div className='overlay'>
//           <h4>{i.title}</h4>
//           <p>{i.description}</p>
//           <div className='link-class'>
//               <a href={i.view} target='_blank' rel='noreferrer' >Live</a>
//               <a href={i.githup} target='_blank' rel='noreferrer'>GitHub</a>
//           </div>
//       </div> 
//       </Card>
//     )

//   }):<h2>no data found</h2>
// }