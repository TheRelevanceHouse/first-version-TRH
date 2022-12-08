import React from 'react';
import './App.css';
import './fonts/norwester.ttf'
import {Routes, Route} from "react-router-dom"
// import Navbar from './navbar'
import Navbar from './Nav/Navbar';
import Footer from './footer';
import HomePage from './home';
import HowPage from "./How"
import WhatPage from "./What"
import LegalNotice from "./legal-notice"
import ContactSection from './contact-section';

function App() {
  return (
    <div>
        <Navbar/>
        <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/how" element={<HowPage/>} />
        <Route path="/what" element={<WhatPage/>} />
        <Route path="/legal-notice" element={<LegalNotice/>} />
        </Routes>
        <ContactSection/>
        <Footer/>
</div>
  );
}
export default App;
