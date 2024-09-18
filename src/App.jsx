import { Routes, Route } from "react-router-dom";
import HomePage from "./Components/home/home/homePage";
import FicheLogement from './Components/Fiches/FicheLogement';
import Apropos from './Components/Accueil/apropos/apropos';
import Footer from './Components/Footer/footer';
import Header from './Components/header/Header';
import Banner from './Components/Elements/banner';


import './App.css';

function App() {
  return (
    <div className="App">
      <Header/> 
      <Banner/>
      <Routes>

        <Route path="/" element={<HomePage />} /> 
        <Route path="/Accueil/" element = {<HomePage />} />
        <Route path="/Accueil/" element = {<Apropos />} />
        <Route path="/LogementCard/" element={<FicheLogement />} />

      </Routes>
      <Footer/>
    </div>
  );
}

export default App;












