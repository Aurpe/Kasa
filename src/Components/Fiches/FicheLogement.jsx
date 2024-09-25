import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Banner from "../Elements/banner";
import Slides from '../Elements/slides';
import Tagline from '../Elements/taglines';  
import data from '../../assets/data/logements.json';
//import Classement from '../Elements/rating';
import Host from '../Elements/host';
import Collapse from '../Elements/collapse';


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
      <h1 className='logement-description'>{logement.title}</h1>
      <p className='logement-location'>Localisation: {logement.location}</p>
      <Tagline tags={logement.tags} />
      <Host host={logement.host} />
      <div key={logement.id} className="logement-item">
      <Collapse 
        title="Description" 
        content={logement.description}
      />
      <Collapse 
        title="Équipements" 
        content={logement.equipments}
      />
      
      <p>Rating:{logement.rating}</p>
      <p>Hôte: {logement.host.name}</p>
      <p>Hôte: {logement.host.picture}</p>
      
    </div>
    </div>
  );
}







 
