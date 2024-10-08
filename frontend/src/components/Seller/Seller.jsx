import React from 'react';
import './Seller.css'; // Importing the CSS for styling
import img1 from "../../../public/img1.webp"
import img2 from "../../../public/img2.webp"
import img3 from "../../../public/img3.webp"
import img4 from "../../../public/img4.webp"

const Seller = () => {
  return (
    <>   
     <div className='seller-heading'>Best Sellers</div>

     <div className="image-grid">
      <div className="image-container">
        <img src={img1} alt="Image 1" />
      </div>
      <div className="image-container">
        <img src={img2} alt="Image 2" />
      </div>
      <div className="image-container">
        <img src={img3} alt="Image 3" />
      </div>
      <div className="image-container">
        <img src={img4} alt="Image 4" />
      </div>
    </div>
    
    </>

   
  );
};

export default Seller;
