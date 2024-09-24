import { Routes, Route } from "react-router-dom";
import HomePage from "./Components/Elements/homepage";
import FicheLogement from './Components/Fiches/FicheLogement';
import Apropos from './Components/Elements/apropos';
import Footer from './Components/Footer/footer';
import Header from './Components/header/Header';
import PageError from './Components/Elements/PageError';
import Banner from './Components/Elements/banner';




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




















