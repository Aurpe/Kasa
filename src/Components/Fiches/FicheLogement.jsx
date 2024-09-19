
import React from 'react'
// import Slides from './Components/Elements/slides';
import Banner from "./../Elements/banner"


 
export default function FicheLogement() {
  return (
    <div>
      <Header/>
      <div className="Logement">
      <Banner img="url de l'image" title="Chez vous machin machin"/>
      <h1>Notre Galerie de Logements</h1>
      <Slides logements={pictures} />


      </div>

    </div>
  )
}

//se servir de useParams pour récupérer l'id du logement qui est dans l'url
