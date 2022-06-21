import React from 'react';
import styled from 'styled-components';
import { NavHashLink } from 'react-router-hash-link';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
  }

  @media (max-width: 768px) {
    z-index: 1;
    flex-flow: column nowrap;
    background-color: #00a993;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 8.8%;
    right: 0;
    width: 40%;
    padding-top: 1.5rem;
    padding-left: 1.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      color: #fff;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <NavHashLink smooth to="/#welcome-section" activeClassName="selected" style={{ color: '#fff' }}>
            What
        </NavHashLink>

        <NavHashLink smooth to="/#how-section" activeClassName="selected" style={{ color: '#fff' }}>
            How
        </NavHashLink>

        <NavHashLink smooth to="/#IsItAThing-section" activeClassName="selected" style={{ color: '#fff' }}>
            Why
        </NavHashLink>
        
        <NavHashLink smooth to="/#team-section" activeClassName="selected" style={{ color: '#fff' }}>
            Who
        </NavHashLink>

        <NavHashLink smooth to="/#contact-section" activeClassName="selected" style={{ color: '#fff' }}>
            Where
        </NavHashLink>
     
        <a href='https://stories.therelevancehouse.com/' style={{ color: '#fff' }}> 
            Stories 
        </a>
    </Ul>
  )
}

export default RightNav
