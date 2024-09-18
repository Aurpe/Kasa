import React from 'react';
import Data from '../src/assets/data/logements.json'; 
 

export default function Taglines() {
  return (
    <div className='taglines'>
      
      {Data.map((tag) => (
        <FicheLogement
          key={logement.id}        
          id={logement.id}         
          tags={logement.tags}    
        />
      ))}
    </div>
  );
}



