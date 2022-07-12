import styled from 'styled-components';
import Burger from './Burger';
import React, { useEffect, useState } from 'react';
import '../App.css';
import logo from '../images/logomain.png'
import ln from '../images/LinkedIN_white.svg'
import medium from '../images/Medium_white.svg'
import twitter from '../images/Twitter_white.svg'
import fb from '../images/Facebook_white.svg'
import instagram from '../images/Instagram_white.svg'
import '../fonts/norwester.ttf'
import linkedinhover from '../images/LinkedinIconHover.svg'
import facebookhover from '../images/FacebookIconHover.svg'
import twitterhover from '../images/TwitterIconHover.svg'
import instagramhover from '../images/InstagramIconHover.svg'
import mediumhover from '../images/MediumIconHover.svg'
import { NavHashLink } from 'react-router-hash-link'

const Nav = styled.nav`
  width: 100%;
  border-bottom: 2px solid #f1f1f1;
  padding: 20px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    padding: 15px 0;
  }


`
const Navbar = () => {
  const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
        useEffect(() => {
            const controlNavbar = () => {
                if (typeof window !== 'undefined') { 
                  if ((window.scrollY > lastScrollY) && (window.scrollY > 200) && (window.innerWidth > 1000)) 
                  { 
                    
                    setShow(false); 
                  } else { 
                    setShow(true);  
                  }
                  setLastScrollY(window.scrollY); 
                }
              };
      if (typeof window !== 'undefined') {
        window.addEventListener('scroll', controlNavbar);
  
       
        return () => {
          window.removeEventListener('scroll', controlNavbar);
        };
      }
    }, [lastScrollY]);
 
    return (
      <Nav style={{height:'120px'}}>
   
  

   <nav  className={ `${show && 'nav'}`} >
      <a href="./" >
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

       <NavHashLink smooth to="/#welcome-section" activeClassName="selected" activeStyle={{ color: '#00a993' }}>
            What
        </NavHashLink>

        <NavHashLink smooth to="/#how-section" activeClassName="selected" activeStyle={{ color: '#00a993' }}>
            How
        </NavHashLink>

        <NavHashLink smooth to="/#IsItAThing-section" activeClassName="selected" activeStyle={{ color: '#00a993' }}>
            Why
        </NavHashLink>
        
        <NavHashLink smooth to="/#team-section" activeClassName="selected" activeStyle={{ color: '#00a993' }}>
            Who
        </NavHashLink>

        <NavHashLink smooth to="/#contact-section" activeClassName="selected" activeStyle={{ color: '#00a993' }}>
            Where
        </NavHashLink>
     
        <a href='https://stories.therelevancehouse.com/'> 
            Stories 
        </a>
      
       </div>
  </nav>
  <Burger />
  </Nav>
    
  )
}

export default Navbar
