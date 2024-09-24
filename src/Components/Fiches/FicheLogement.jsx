import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Banner from "../Elements/banner";
import Slides from '../Elements/slides';
import Tagline from '../Elements/taglines';  
import data from '../../assets/data/logements.json';
//import Classement from '../Elements/rating';

export default function FicheLogement() {
  const { id } = useParams();
  const [logement, setLogement] = useState(null);

  useEffect(() => {
    const findLogement = () => {
      const found = data.find(logement => logement.id === id);
      setLogement(found || null);
    };

    findLogement();
  }, [id]);

  if (!logement) {
    return <div>Logement non trouvé</div>;
  }

  return (
    <div className="Logement">
      
      <Slides pictures={logement.pictures} />
      <h1>{logement.title}</h1>
      <Tagline tags={logement.tags} />
      <p>Hôte: {logement.host.name.picture}</p>
      <p>Localisation: {logement.location}</p>
      <p>Description: {logement.description}</p>
    </div>
  );
}







 
/*export default function FicheLogement() {
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
}*/

//se servir de useParams pour récupérer l'id du logement qui est dans l'url
