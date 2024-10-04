
import React, { useState, useEffect } from 'react';
import CollapseMenu from './collapse';
import Banner from './banner';
import data from '../../assets/data/apropos.json'; 

export default function Apropos() {
  const [collapses, setCollapses] = useState([]);

  useEffect(() => {
    setCollapses(data.collapses);  
  }, []);

  return (
    <div className="apropos">
      
      
      <Banner img="./src/assets/Images/Banner_avantpropos.png" title=" " className="Bannerfooter" />

      
      <div class="collapse-apropos">
      
        {collapses.map((collapse, index) => (
          <CollapseMenu
            key={index}
            title={collapse.title}
            content={collapse.content}
            openButtonText={collapse.title} 
            closeButtonText={collapse.title}
            buttonClassName="custom-button-class"
            contentClassName="content-apropos"
          />
        ))}
      </div>
    </div>
  );
}
