import React from 'react';
import { FaStar } from 'react-icons/fa';

// Composant pour afficher les étoiles
const StarRating = ({ rating }) => {
  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        const ratingValue = index + 1;
        return (
          <FaStar
            key={index}
            className={`star ${ratingValue <= rating ? 'filled' : ''}`}
          />
        );
      })}
    </div>
  );
};

export default function App({ logements }) {
  return (
    <div className="App">
      {logements.map((logement) => (
        <div key={logement.id} className="logement-item">
          <h2>{logement.name}</h2>
          <StarRating rating={logement.rating} />
        </div>
      ))}
    </div>
  );
}





