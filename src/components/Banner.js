import React from 'react';
import image from '../img/elden_ring_final.png';

console.log(image);

const Banner = () => {
  return ( 
    <div className="banner-container">
      <img className="banner" src={image} alt="" />
    </div>
   );
}
 
export default Banner;