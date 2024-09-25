import React from 'react'

export default function Banner({img, title}) {
  return (
    <div className="banner">
      <img src={img} alt="Banner" className="Banner" />
      <h2 className='bannerTitle'>{title}</h2>
    </div>
  );
};



