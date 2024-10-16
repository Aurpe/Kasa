import React from 'react'

export default function Banner({img, title,className= 'banner'}) {
  return (
    <div className={className}>
      <img src={img} alt="Banner" className="Banner" />
      <h2 className='bannerTitle'>{title}</h2>
      
    </div>
  );
};



