import React from 'react';

export default function Host({ name, picture, className }) {
  return (
    <div className={`host ${className || ''}`}>
      <span className="host-name">{name}</span>
      <img
        src={picture}
        alt={`Photo de ${name}`}
        className="host-picture"
      />
    </div>
  );
}