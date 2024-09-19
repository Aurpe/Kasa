import React, { useState } from 'react';

export default function CollapseMenu() {
  // Utiliser l'état pour suivre si le menu est ouvert ou fermé
  const [isOpen, setIsOpen] = useState(false);

  // Fonction pour basculer l'état d'ouverture
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse-menu">
      
      <button onClick={toggleMenu} className="menu-toggle">
        {isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
      </button>
      <div className={`collapse-content ${isOpen ? 'open' : 'closed'}`}>
        <ul>
          <li><a href="#section1">Section 1</a></li>
          <li><a href="#section2">Section 2</a></li>
          <li><a href="#section3">Section 3</a></li>
          <li><a href="#section4">Section 4</a></li>
        </ul>
      </div>
    </div>
  );
}
