import React from 'react'
//import FicheLogement from '../Fiches/FicheLogement';
//import Data from '../src/assets/data/logements.json';


export default function Logement() {
  return (
    <div>
      <Header/>
      <div className="Logement">
        <Slide pictures= {Data.pictures} />

      </div>

    </div>
  )
}

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const FicheLogement = () => {
  const { id } = useParams(); 
  const [logement, setLogement] = useState(null);

  useEffect(() => {
    fetch("/logements.json")
      .then((response) => response.json())
      .then((data) => {
        const selectedLogement = data.find((logement) => logement.id === parseInt(id));
        setLogement(selectedLogement);
      })
      .catch((error) => console.error("Erreur lors du chargement du logement :", error));
  }, [id]);

  if (!logement) {
    return <div>Chargement...</div>;
  }

  return (
    <div>
      <h1>{logement.title}</h1>
      <img src={logement.imageUrl} alt={logement.title} />
      <p>{logement.description}</p>
    </div>
  );
};


