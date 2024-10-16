import React from 'react';

export default function LogementCards({ logements }) {
  return (
    <div className="logement-cards-container">
      {logements.map((logement) => (
        <div key={logement.id} className="logement-card">
          <img src={logement.cover} alt={logement.title} />
          <h3>{logement.title}</h3>
        </div>
      ))}
    </div>
  );
}