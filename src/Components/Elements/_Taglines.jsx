import React from 'react';

export default function Tagline({ tags }) {
  return (
    <div className="tags-container">
      {tags.map((tag, index) => (
        <span key={index} className="tag">
          {tag}
        </span>
      ))}
    </div>
  );
}


 
      
        
        
   



