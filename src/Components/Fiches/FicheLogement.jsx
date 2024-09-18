import React from 'react'



export default function FicheLogement() {
  return (
    <div>
      <Header/>
      <h1>Nos logements</h1>
    </div>
  )
}


/*import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const FicheLogement = () => {
  const { id } = useParams(); // Récupérer l'ID du logement depuis l'URL
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

export default FicheLogement;*/
