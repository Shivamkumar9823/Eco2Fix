import React, { useState, useEffect } from 'react';
import limg from '../../../public/LEarBud.webp';
import Rimg from '../../../public/rEarbud.webp';
import './Main.css';

const Main = () => {
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);

  const handleMouseMove = (event) => {
    const { clientX: x, clientY: y } = event;

    // Calculate the offset based on the mouse position
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Adjust the translation amount (for subtle movement)
    const moveX = (x / width - 0.5) * 30; // Move in the X direction
    const moveY = (y / height - 0.5) * 100; // Move in the Y direction

    setOffsetX(moveX);
    setOffsetY(moveY);
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div>
      <div className='Main_img'> 
        <img
          src={limg}
          alt="Left"
          style={{
            transform: `translate(${offsetX}px, ${offsetY}px)`,
            transition: 'transform 0.1s ease-out',
          }}
        />
        <img
          src={Rimg}
          alt="Right"
          style={{
            transform: `translate(${offsetY}px, ${offsetX}px)`,
            transition: 'transform 0.1s ease-out',
          }}
        />
      </div>
      <div className='main-heading'>
        <h1>ECO-2-FIX</h1>
        <p> Turning Old Electronics into a Greener Tomorrow</p>
      </div>
    </div>
  );
};

export default Main;