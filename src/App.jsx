import { Routes, Route } from "react-router-dom";
import HomePage from "./Components/Elements/Homepage";
import FicheLogement from './Components/Elements/AccomodationSheet';
import Apropos from './Components/Elements/About';
import Footer from './Components/Elements/Footer';
import Header from './Components/Elements/Header';
import PageError from './Components/Elements/PageError';


import './Fichiers scss/main.scss';


function App() {
  return (
    <div className="App">
      <Header/> 
      <Routes>
        <Route path="/" element={<HomePage />} /> 
        <Route path="/apropos" element = {<Apropos />} />
        <Route path="/location/:id" element={<FicheLogement />} />
        <Route path="*" element={<PageError />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;




















