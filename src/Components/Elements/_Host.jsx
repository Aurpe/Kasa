import React from 'react';

export default function Host({ name, picture, className }) {
  // Séparation du prénom et du nom
  const [firstName, lastName] = name.split(' ');

  return (
    <div className={`host ${className || ''}`}>
      <div className="name-host">
        <span className="first-name">{firstName}</span>
        <br />
        <span className="last-name">{lastName}</span>
      </div>
      <img
        src={picture}
        alt={`Photo de ${name}`}
        className="host-picture"
      />
    </div>
  );
}
