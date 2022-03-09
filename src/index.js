import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Hero from './hero-section';
import Welcome from './welcome-section';
import './fonts/norwester.ttf';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Hero />
    <Welcome />
    
  </React.StrictMode>,
  document.getElementById('root')
);


