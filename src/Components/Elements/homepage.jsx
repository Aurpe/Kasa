import React from 'react';
import Data from '../../assets/data/logements.json';
import Banner from './Banner'; 
import AccomodationCard from './Accomodation-card';


export default function HomePage() {
  return (
    <div className="homepage">
      <Banner img="./src/assets/Images/Banner_homepage.png" title="Chez vous, partout et ailleurs" />
      <main className="logements-grid">
        {Data.map((logement) => (
          <AccomodationCard
            key={logement.id}
            id={logement.id}
            cover={logement.cover}
            title={logement.title}
          />
        ))}
      </main>
    </div>
  );
}






