import { Routes, Route } from "react-router-dom";
import HomePage from "./Components/home/home/homePage";
import FicheLogement from './Components/Fiches/FicheLogement';
import Apropos from './Components/Accueil/apropos/apropos';
import Footer from './Components/Footer/footer';
import Header from './Components/header/Header';


import './App.scss';

function App() {
  return (
    <div className="App">
      <Header/> 
      
      <Routes>
        <Route path="/" element={<HomePage />} /> 
        <Route path="/Accueil/" element = {<Apropos />} />
        <Route path="/location/:id" element={<FicheLogement />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;




















