import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Hero from './hero-section';
import Welcome from './welcome-section';
import './fonts/norwester.ttf';
import Approach from './approach-section';
import Approach2 from './approach-section-2';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Hero />
    <Welcome />
    <Approach />
    <Approach2 />
    
  </React.StrictMode>,
  document.getElementById('root')
);


