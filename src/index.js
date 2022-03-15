import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Hero from './hero-section';
import Welcome from './welcome-section';
import './fonts/norwester.ttf';
import Approach from './approach-section';
import Approach2 from './approach-section-2';
import How from './how-section';
import How2 from './how-section-2';
import What from './what-section';
import IsItAThing from './is-it-a-thing';
import TeamSection from './team-section';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Hero />
    <Welcome />
    <Approach />
    <Approach2 />
    <How />
    <How2 />
    <What />
    <IsItAThing />
    <TeamSection />
    
  </React.StrictMode>,
  document.getElementById('root')
);


