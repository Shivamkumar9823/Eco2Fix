import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header  from './components/Header/header'
import Navbar from './components/Navbar/Navbar'
import Desc from './components/Description/Desc'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import HottestDeal from './components/HottestDeal/HottestDeal'
import WhyUs from './components/Why-us/WhyUs'
import Seller from './components/Seller/Seller'

function App() {
  const [bgPosition, setBgPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    const { clientX: x, clientY: y } = event;
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Calculate the background position as a percentage of the cursor's position relative to the window
    const moveX = (x / width) * 100;
    const moveY = (y / height) * 100;

    // Update the background position based on the cursor movement
    setBgPosition({ x: moveX, y: moveY });
  };

  return (
      <div className='app background-effect-container'
      onMouseMove={handleMouseMove}
      style={{
        backgroundPosition: `${bgPosition.x}% ${bgPosition.y}%`
      }}
      >
             <Header />
             <Main />
             <Desc />
             {/* <Navbar /> */}
             <WhyUs />
             <Seller />
             <HottestDeal />

             <Footer />
          
      </div>
  )
}

export default App
