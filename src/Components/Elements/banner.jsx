import React from 'react'

export default function Banner({img, title}) {
  return (
    <div className="banner">
      <img src={img} alt="Banner" className="banner-homepage" />
      <h2>{title}</h2>
    </div>
  );
};



