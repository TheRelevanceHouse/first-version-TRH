import React from 'react';
import './App.css';
import logo from './images/logomain.png'
import ln from './images/LinkedIN_white.svg'
import medium from './images/Medium_white.svg'
import twitter from './images/Twitter_white.svg'
import fb from './images/Facebook_white.svg'
import instagram from './images/Instagram_white.svg'
import {Container} from 'react-bootstrap'
import './fonts/norwester.ttf';

function App() {
  return (
    <div>
    <Container style={{height:'120px'}}>
    <nav class="nav-bar" id="">
	   <a href="/" >
	      <img className='nav-bar-logo' alt="Marketing, Branding and Communications Agency"  
           src={logo}  />
      </a>
      <div id='navigation-social'>
        <a href='/'> 
        <img className='social-nav' src={ln} alt='linkedin' />
        {/* <img className='social-nav' src={ln} alt='linkedin' onMouseOver={e => e.currentTarget.src = medium}  onMouseOut={e => e.currentTarget.src = ln} /> */}
        {/* <img className='social-nav' src='LinkedIN_white.svg' onmouseover="this.src='./images/Instagram_white.svg';" onmouseout="this.src='./images/LinkedIN_white.svg';" /> */}
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
        {/* <a href='/' className='btn-nav'>
            Be Relevant
        </a> */}
        </div>
   </nav>
   </Container>
  
  

</div>
  );
}

export default App;
