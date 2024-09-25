
import React from 'react';
import CollapseMenu from "./collapse"
import Banner from "./banner"

export default function Apropos() {
  return (
    <div>
      <Banner img="./src/assets/Images/Banner_avantpropos.png" title=" " />
      <Collapse 
        title="Description" 
        content={logement.description}
      />
    </div>
  )
}


