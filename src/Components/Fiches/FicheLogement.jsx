import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Slides from '../Elements/slides';
import Tagline from '../Elements/taglines';
import data from '../../assets/data/logements.json';
import Host from '../Elements/host';
import CollapseMenu from '../Elements/collapse';
import StarRating from '../Elements/StarRating';

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
      
      <div className="flatInformation">
        <div className="Flatlocation">
          <h2 className="logement-description">{logement.title}</h2>
          <p className="logement-location">Localisation: {logement.location}</p>
        </div>
        <Host
          name={logement.host.name}
          picture={logement.host.picture}
        />
      </div>
      
      <div className="flatTagStars">
        <Tagline tags={logement.tags} />
        <StarRating rating={logement.rating} className="custom-rating"/>
        </div>


        <div className= 'Host-rating'>
        <StarRating rating={logement.rating} className="custom-rating-class" />
        <Host
          name={logement.host.name}
          picture={logement.host.picture}
          className="host-2"
        />
      </div>
      
      <div className="allCollapse">
        <CollapseMenu
          title="Description"
          content={logement.description}
        />
        <CollapseMenu
          title="Équipements"
          content={
            <ul>
              {logement.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          }
        />
      </div>
    </div>
  );
}






 
