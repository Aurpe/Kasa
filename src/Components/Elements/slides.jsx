import React, { useState } from 'react'; 
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; 



function Slider({pictures,title}) {
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
      
      {pictures && pictures.length > 0 ? (
        <div className="slider">
         
          <FaArrowLeft className="arrow left" onClick={handlePrevClick} />
          
          <img src={pictures[currentImageIndex]} alt={`${title} image`} />

          
          <FaArrowRight className="arrow right" onClick={handleNextClick} />
        </div>
      ) : (
        <p>Aucune image disponible</p>
      )}
    </div>
  );
}

export default Slider;











