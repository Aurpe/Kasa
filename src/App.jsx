import { Routes, Route } from "react-router-dom";
import HomePage from "./Components/home/home/homePage";
import FicheLogement from './Components/Fiches/FicheLogement';
import Accueil from './Components/Accueil/menu/Accueil';
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
        <Route path="/fiche-logement/" element={<FicheLogement />} />
        <Route path="/Accueil/" element = {<Accueil />} />
        <Route path="/Accueil/" element = {<Apropos />} />

      </Routes>
      <Footer/>
    </div>
  );
}

export default App;






/*import { Routes, Route } from "react-router-dom"
import HomePage from "./Components/home/home/homePage"
import FicheLogement from './Components/Fiches/FicheLogement'
import Navbar from './Components/header/Navbar/Navbar'
import Header from './Components/header/Navbar/Navbar'

import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ficheLogement" element={<FicheLogement />} />
        <Route path="/Navbar" element={<Navbar />} />

      </Routes>
    </div>
  )
}

export default App*/


































/*function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}*/


