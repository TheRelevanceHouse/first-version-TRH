import React from 'react';
import './App.css';
import logo from './images/logomain.png'
import ln from './images/linkedin.webp'
import medium from './images/medium.webp'
import twitter from './images/twitter.webp'
import fb from './images/fb.webp'
import instagram from './images/insta.webp'


function App() {
  return (
    // <nav className='nav-bar' >
	
    // <img className='nav-bar-logo' src={logo} alt="Marketing, Branding and Communications Agency"/>

    // </nav>
    <nav class="nav-bar" id="">
	   <a href="/" >
	      <img className='nav-bar-logo' alt="Marketing, Branding and Communications Agency"  
           src={logo}  />
      </a>
      <div id='navigation-social'>
        <a href='/'> 
        <img className='social-nav' src={ln} alt='linkedin' />
        </a>
        <a href='/'> 
        <img className='social-nav' src={medium} alt='medium'/>
        </a>
        <a href='/'> 
        <img className='social-nav' src={twitter} alt='twitter' />
        </a>
        <a href='/'> 
        <img className='social-nav' src={fb} alt='facebook' />
        </a>
        <a href='/'> 
        <img className='social-nav' src={instagram} alt='instagram' />
        </a>      
        </div>
        
        <div id='navigation-items'>
        <a href='/'> 
            What
        </a>
        <a href='/'> 
            How 
        </a>
        <a href='/'> 
            Why 
        </a>
        <a href='/'> 
            Who
        </a>
        <a href='/'> 
            Where 
        </a>
        <a href='/'> 
            Stories 
        </a>
        <a href='/' className='btn-nav'>
            Be Relevant
        </a>
        </div>

        



   </nav>
  );
}

export default App;
