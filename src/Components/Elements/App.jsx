
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './Homepage';
import AccomodationSheet from './AccomodationSheet';
import About from './About';
import Footer from './Footer';
import Header from './Header';
import PageError from './PageError';

import '../../Fichierscss/main/main.scss';

function App() {
  return (
    <Router> 
      <div className="App">
        <Header/> 
        <Routes>
          <Route path="/" element={<HomePage />} /> 
          <Route path="/apropos" element={<About />} />
          <Route path="/location/:id" element={<AccomodationSheet />} />
          <Route path="*" element={<PageError />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;



















