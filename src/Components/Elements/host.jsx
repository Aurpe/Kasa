import React from 'react';

export default function Host({ name, picture }) {
  return (
    <div className="host">
      <span className="host-name">{name}</span>
      <img 
        src={picture} 
        alt={`Photo de ${name}`} 
        className="host-picture" 
      />
    </div>
  );
}