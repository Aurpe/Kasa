import React from 'react';
import { Link } from 'react-router-dom';
import Data from '../../assets/data/logements.json';
import Banner from '../Elements/banner';





function LogementCard({ id, cover, title }) {
  return (
    <Link to={`/location/${id}`} className="logement-card">
      <img src={cover} alt={title} className="logement-image" />
      <div className="logement-title">{title}</div>
    </Link>
  );
}

export default function HomePage() {
  return (
    <div className="homepage">
      <Banner img="./src/assets/Images/Banner_homepage.png" title= "Chez vous, et partout ailleurs" />
      <main className="logements-grid">
        {Data.map((logement) => (
          <LogementCard
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




