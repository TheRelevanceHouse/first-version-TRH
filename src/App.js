import React from 'react';
import './App.css';
import logo from './images/logomain.png'


function App() {
  return (
    // <nav className='nav-bar' >
	
    // <img className='nav-bar-logo' src={logo} alt="Marketing, Branding and Communications Agency"/>

    // </nav>
    <nav class="nav-bar" id="">
	   <a class="nav-bar-logo" href="#">
	      <img alt="Marketing, Branding and Communications Agency"  
           src={logo} style={{height:'105px' , width:'auto' , float: 'left !important'}}  />
      </a>




   </nav>
  );
}

export default App;
