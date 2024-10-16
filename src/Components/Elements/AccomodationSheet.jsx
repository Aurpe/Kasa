import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; 
import Gallery from './Gallery';
import Tagline from './Taglines';
import data from '../../assets/data/logements.json';
import Host from './Host';
import CollapseMenu from './Collapse';
import StarRating from './StarRating';


export default function AccomodationSheet() {
  const { id } = useParams();
  const [logement, setLogement] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const findLogement = () => {
      const found = data.find(logement => logement.id === id);
      if (!found) {
        navigate('/PageError');
      } else { // pas besoin 
        setLogement(found);
      }
    };

    findLogement();
  }, [id, navigate]); 

  if (!logement){
    return <div>Loading</div>
  }

  return (
    <div className="Logement">
      <Gallery pictures={logement.pictures} />
      
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






 
