import React, { useState } from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';


export default function CollapseMenu({
  title,
  content,
  className = '',
  buttonClassName = '',
  contentClassName = '',
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`collapse-menu ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`btn-collapse ${buttonClassName}`}
      >
        <span>{title}</span>
        {isOpen ? <FaChevronDown /> : <FaChevronUp />}
      </button>
      {isOpen && (
        <div className={`collapse-content ${contentClassName}`}>
        {content}
        
      </div>
    )}
    </div>
  );
}
    