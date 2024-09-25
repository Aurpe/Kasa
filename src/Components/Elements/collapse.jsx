

import React, { useState } from 'react';

export default function CollapseMenu({title, content}) {
  const [isOpen, setIsOpen] = useState(false);

  // Fonction pour basculer l'état d'ouverture
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse-menu">
      
      <button onClick={toggleMenu} className="btn-collapse">
        {isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
      </button>
      <div className={`collapse-content ${isOpen ? 'open' : 'closed'}`}>
        <ul>
          <li><a href="#section1"></a></li>
          <li><a href="#section2"></a></li>
          <li><a href="#section3"></a></li>
          <li><a href="#section4"></a></li>
        </ul>
      </div>
    </div>
  );
}
