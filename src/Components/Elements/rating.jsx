import React from 'react';


export default function Rate({ rating }) {
  return (
  <div className="App">
    <h1>Liste des Logements avec Ratings</h1>

    {logements.map((logement) => (
      <div key={logement.id} className="logement-item">
        <h2>{logement.name}</h2>
        <Rating rating={logement.rating} />
      </div>
    ))}
  </div>
);
}