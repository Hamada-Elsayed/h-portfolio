import React from 'react';
import './index.scss'
import contact3 from '../../Assets/images/contact3.png'

 const Contact = () => {


  return (
    <div className='contact'>
        <div>
        <form className='contact-form'>
        <h3><span>C</span>ontact&gt;&gt;<span>M</span>e</h3>
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