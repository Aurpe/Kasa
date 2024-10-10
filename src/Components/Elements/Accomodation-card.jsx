import React from 'react';
import { Link } from 'react-router-dom';


// Composant pour une carte de logement
function AccomodationCard({ id, cover, title }) {
  return (
    <div className="container-card">
      <Link to={`/location/${id}`} className="logement-card">
        <img src={cover} alt={title} className="logement-image" />
        <div className="logement-title">{title}</div>
      </Link>
    </div>
  );
}

export default AccomodationCard;