import React from 'react'
import BannerImage from '../../assets/Images/Banner_homepage.png';



export default function Banner() {
  return (
    <div className="banner">
      <img src={BannerImage} alt="Banner" className="banner-homepage" />
      <h1>Chez vous,et partout et ailleurs</h1>
    </div>
  );
};


