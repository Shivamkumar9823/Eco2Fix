import React from 'react';
import './HottestDeal.css'; 
import hotdeal from '../../../public/mask.webp'

const HottestDeal = () => {
  return (
    <div className="image-containerr">
      <img
        src={hotdeal} // Replace with your image URL
        alt="Descriptive Text"
        className="background-image"
      />
      <div className="overlay-text">
        <h1>Hottest Deals</h1>
        <p> Save up to $150 on selected laptop & tablet parts</p>
        



      </div>
    </div>
  );
};

export default HottestDeal;
