

/*import React, { useState } from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';

export default function CollapseMenu({
  title,
  content,
  buttonText,
  className = '',
  buttonClassName = ''
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`collapse-menu ${className}`}>
      
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`btn-collapse ${buttonClassName}`}
        {<h3>{title}</h3>}
        
      >
        {buttonText}
        
        {isOpen ? <FaChevronUp style={{ marginLeft: '10px' }} /> : <FaChevronDown style={{ marginLeft: '10px' }} />}
        
      </button>
      {isOpen && (
        <div className="collapse-content">
          <h3>{title}</h3>
          <p>{content}</p>
        </div>
      )}
    </div>
  );
}*/

import React, { useState } from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';

export default function CollapseMenu({
  title,
  content,
  openButtonText,
  closeButtonText,
  className = '',
  buttonClassName = ''
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`collapse-menu ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`btn-collapse ${buttonClassName}`}
      >
        {isOpen ? closeButtonText : openButtonText}
        {isOpen ? <FaChevronUp style={{ marginLeft: '10px' }} /> : <FaChevronDown style={{ marginLeft: '10px' }} />}
      </button>
      {isOpen && (
        <div className="collapse-content">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
}
