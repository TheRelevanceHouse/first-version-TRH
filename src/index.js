import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Hero from './hero-section';
import Welcome from './welcome-section';
import './fonts/norwester.ttf';
import Approach from './approach-section';
import How from './how-section';
import What from './what-section';
import IsItAThing from './is-it-a-thing';
import TeamSection from './team-section';
import JobSection from './job-section';
import ContactSection from './contact-section';
import Footer from './footer';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Hero />
    <Welcome />
    <Approach />
    <How />
    <What />
    <IsItAThing />
    <TeamSection />
    <JobSection />
    <ContactSection />
    <Footer />
    
  </React.StrictMode>,
  document.getElementById('root')
);


