import React from 'react';
import { FaStar } from 'react-icons/fa';

const StarRating = ({ rating }) => {
  const numericRating = parseInt(rating, 10) || 0;
  
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
    <div className="stars">
      {logements.map((logement) => (
        <div key={logement.id} className="logement-item">
          <h2>{logement.title}</h2>
          <StarRating rating={logement.rating} />
        </div>
      ))}
    </div>
  );
}





