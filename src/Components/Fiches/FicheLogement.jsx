import React from 'react'
import slides from './Components/Elements/slides';
//import Data from '../src/assets/data/logements.json';

 
export default function FicheLogement() {
  return (
    <div>
      <Header/>
      <div className="Logement">
      <h1>Notre Galerie de Logements</h1>
      <Slides logements={pictures} />
      <Slides title={pageTitle} />


      </div>

    </div>
  )
}

