import { useState } from 'react'
import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Risks from './components/Risks'
import Prevent from './components/Prevent'

const App = () => {
  return (
    <div className="app">
       <Header/>
       <main>
        <Hero/>
        <About/>
         <Risks/>
          <Prevent/>
       </main>
       
      

    </div>
   
  )
}

export default App
