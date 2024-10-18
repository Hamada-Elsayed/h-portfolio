import React from 'react'

const index = () => {
  return (
    <div>
    <div className='skills-progress'>
    <p>Html&Html5</p>
    <ProgressBar className='ProgressBar' width='500px'  baseBgColor='white' bgColor='#21acc1' completed={95} maxCompleted={100} />
</div>   
<div className='skills-progress'>
    <p>Css&Css3  </p>
    <ProgressBar className='ProgressBar' width='500px'  baseBgColor='white' bgColor='#21acc1' completed={90} maxCompleted={100} />
</div>
<div className='skills-progress'>
    <p>JavaScript  </p>
    <ProgressBar width='500px'  baseBgColor='white' bgColor='#21acc1' completed={88} maxCompleted={100} />
</div> 
<div className='skills-progress'>
  <p>Bootstrab</p>
  <ProgressBar width='500px'  baseBgColor='white' bgColor='#21acc1' completed={85} maxCompleted={100} />
</div>   
<div className='skills-progress'>
  <p>Sass</p>
  <ProgressBar width='500px'  baseBgColor='white' bgColor='#21acc1' completed={80} maxCompleted={100} />
</div>  
<div className='skills-progress'>
<p>React & Redux  </p>
<ProgressBar width='500px'  baseBgColor='white' bgColor='#21acc1' completed={90} maxCompleted={100} />
</div>  
<div className='skills-progress'>
    <p>Git & Github  </p>
    <ProgressBar width='500px'  baseBgColor='white' bgColor='#21acc1' completed={90} maxCompleted={100} />
</div>  
    </div>
  )
}

export default index
