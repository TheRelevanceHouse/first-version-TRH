import React from 'react';
import './App.css';
import logo from './images/logomain.png'
import ln from './images/LinkedIN_white.svg'
import medium from './images/Medium_white.svg'
import twitter from './images/Twitter_white.svg'
import fb from './images/Facebook_white.svg'
import instagram from './images/Instagram_white.svg'
import {Container} from 'react-bootstrap'
import './fonts/norwester.ttf'
import linkedinhover from './images/LinkedinIconHover.svg'
import facebookhover from './images/FacebookIconHover.svg'
import twitterhover from './images/TwitterIconHover.svg'
import instagramhover from './images/InstagramIconHover.svg'
import mediumhover from './images/MediumIconHover.svg'


function Navbar () {

    return (
   <Container style={{height:'120px'}}>
   <nav class="nav-bar" id="">
      <a href="/" >
         <img className='nav-bar-logo' alt="Marketing, Branding and Communications Agency"  
          src={logo}  />
     </a>
     <div id='navigation-social'>
       <a href='/'> 
     
       <img className='social-nav' src={ln} alt='linkedin' onMouseOver={e => e.currentTarget.src = linkedinhover}  onMouseOut={e => e.currentTarget.src = ln} />
      
       </a>
       <a href='/'> 
      
       <img className='social-nav' src={medium} alt='medium' onMouseOver={e => e.currentTarget.src = mediumhover}  onMouseOut={e => e.currentTarget.src = medium} />
       </a>
       <a href='/'> 
      
       <img className='social-nav' src={twitter} alt='twitter' onMouseOver={e => e.currentTarget.src = twitterhover}  onMouseOut={e => e.currentTarget.src = twitter} />
       </a>
       <a href='/'> 
       
       <img className='social-nav' src={fb} alt='facebook' onMouseOver={e => e.currentTarget.src = facebookhover}  onMouseOut={e => e.currentTarget.src = fb} />
       </a>
       <a href='/'> 
       
       <img className='social-nav' src={instagram} alt='instagram' onMouseOver={e => e.currentTarget.src = instagramhover}  onMouseOut={e => e.currentTarget.src = instagram} />
       </a>      
       </div>
       
       <div id='navigation-items'>
       <a href='/'> 
           What
       </a>
       <a href='/'> 
           How 
       </a>
       <a href='/How.js'> 
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
      
       </div>
  </nav>
  
  </Container>
  )
}

export default Navbar;