import React from 'react';
import { FaStar } from 'react-icons/fa';

// Composant pour afficher les étoiles
const StarRating = ({ rating }) => {
  const numericRating = parseInt(rating, 10) || 0; // Utilise 0 si la conversion échoue
  
  return (
    <div className="star-rating">
      {[...Array(5)].map((_, index) => {
        const ratingValue = index + 1;
        return (
          <FaStar
            key={index}
            className={`star ${ratingValue <= numericRating ? 'filled' : ''}`}
          />
        );
      })}
    </div>
  );
};

export default function App({ logements = [] }) { 
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





