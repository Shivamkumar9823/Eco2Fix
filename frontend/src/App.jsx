import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header  from './components/Header/header'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
      <div className='app'>
             <Header />
             <Navbar />

          
      </div>
  )
}

export default App
