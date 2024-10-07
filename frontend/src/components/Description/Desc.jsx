import React from 'react';
import './desc.css'

const Desc = () => {
  return (
    <div className="description">
      <h2>Welcome to EcoCycle</h2>
      <p>EcoCycle is a platform that connects shopkeepers and individuals to exchange old electronics in a convenient and environmentally friendly way. Our mission is to reduce electronic waste and promote sustainable living.</p>
      <h2>How it Works</h2>
      <ol>
        <li>Shopkeepers list their old electronics on our platform</li>
        <li>Individuals browse and purchase old electronics at a discounted price</li>
        <li>We facilitate the exchange and ensure a smooth transaction</li>
      </ol>
      <h2>Benefits</h2>
      <ul>
        <li>Convenient and easy to use</li>
        <li>Environmentally friendly</li>
        <li>Discounted prices for individuals</li>
        <li>Increased sales for shopkeepers</li>
      </ul>
    </div>
  );
};

export default Desc;