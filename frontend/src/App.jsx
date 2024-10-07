import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header  from './components/Header/header'
import Navbar from './components/Navbar/Navbar'
import Desc from './components/Description/Desc'

function App() {

  return (
      <div className='app'>
             <Header />
             <Navbar />
             <Desc />

          
      </div>
  )
}

export default App
