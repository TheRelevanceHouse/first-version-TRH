import React, {useEffect,useState} from 'react';
import styled from 'styled-components';
import { NavHashLink } from 'react-router-hash-link';


const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
  }

  @media (max-width: 1000px) {
    z-index: 1;
    flex-flow: column nowrap;
    background-color: #13161B;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};

    top: 10%;
    right: 0;
    width: 100%;
    height:auto;
    padding: 1.5rem;
    align-items: center;
    transition: transform 0.3s ease-in-out;
    font-size: 16px;
    font-family: 'Quicksand', sans-serif;
    text-transform: uppercase;
    font-weight: 600;
    line-height: 7rem;

    
  }

`;



// const RightNav = ({setOpen, open}) => {

  const RightNav = () => {
    const [open , setOpen] = useState(true)
  
    useEffect(() => {
  if (!open){
    document.getElementById("mobile-menu").click()
  }
},[open]);
  
return (
   
   
    <Ul open={open} onClick={()=> setOpen(true)} className="mobile-menu" id="mobile-menu">
     
      <NavHashLink onClick={()=> setOpen(false)} smooth to="/#welcome-section"  style={{ color: '#00a993' }}>
       What 
        </NavHashLink>

        <NavHashLink smooth to="/#how-section"  style={{ color: '#00a993' }}>
            How
        </NavHashLink>

        <NavHashLink smooth to="/#IsItAThing-section" style={{ color: '#00a993' }}>
            Why
        </NavHashLink>
        
        <NavHashLink smooth to="/#team-section"  style={{ color: '#00a993' }}>
            Who
        </NavHashLink>

        <NavHashLink smooth to="/#contact-section"  style={{ color: '#00a993' }}>
            Where
        </NavHashLink>
     
        <a href='https://stories.therelevancehouse.com/' style={{ color: '#00a993' }}> 
            Stories 
        </a>
    </Ul>
  )
}

export default RightNav
