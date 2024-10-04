import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const StarRating = ({ rating, className }) => {
  const numericRating = Math.round(parseFloat(rating)) || 0;

  return (
    <div className={`star-rating ${className}`}>
      {[...Array(5)].map((_, index) => {
        const ratingValue = index + 1;
        return (
          <FontAwesomeIcon
            key={index}
            icon={faStar}
            className={`star ${ratingValue <= numericRating ? 'filled' : ''}`}
          />
        );
      })}
    </div>
  );
};

export default StarRating;







