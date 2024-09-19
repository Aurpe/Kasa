import React from 'react'
import Slides from './Components/Elements/slides';


 
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

