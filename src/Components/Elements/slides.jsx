import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function Slider({ 
  pictures, 
  title, 
  leftChevronClass = 'ChevronLeft', 
  rightChevronClass = 'ChevronRight' 
}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="ficheLogement">
      <h3>{title}</h3>
      {pictures && pictures.length > 0 && (
        <div className="slider">
          {pictures.length > 1 && (
            <span className={leftChevronClass}>
              <FaChevronLeft onClick={handlePrevClick} />
            </span>
          )}
          <img src={pictures[currentImageIndex]} alt={`${title}`} />
          {pictures.length > 1 && (
            <span className={rightChevronClass}>
              <FaChevronRight onClick={handleNextClick} />
            </span>
          )}
          {pictures.length > 1 && (
            <div className="image-counter">
              {currentImageIndex + 1} / {pictures.length}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Slider;