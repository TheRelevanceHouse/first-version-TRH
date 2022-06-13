import React from 'react';
import './App.css';
import './fonts/norwester.ttf'
import {Routes, Route} from "react-router-dom"
import Navbar from './navbar'
import Footer from './footer';
import HomePage from './home';
import HowPage from "./How"
import WhatPage from "./What"

function App() {
  return (
    <div>
        <Navbar/>
       
        <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/how" element={<HowPage/>} />
        <Route path="/what" element={<WhatPage/>} />
        </Routes>
        
        <Footer/>
</div>
  );
}
export default App;
