import { Routes, Route } from "react-router-dom";
import HomePage from "./Components/Elements/homepage";
import FicheLogement from './Components/Fiches/FicheLogement';
import Apropos from './Components/Elements/apropos';
import Footer from './Components/Footer/footer';
import Header from './Components/header/Header';
import PageError from './Components/Elements/PageError';


import './Fichiers scss/App.scss';

function App() {
  return (
    <div className="App">
      <Header/> 
      
      <Routes>
        <Route path="/" element={<HomePage />} /> 
        <Route path="/" element = {<Apropos />} />
        <Route path="/location/:id" element={<FicheLogement />} />
        <Route path="*" element={<PageError />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;




















