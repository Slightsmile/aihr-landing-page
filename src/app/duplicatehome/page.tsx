'use client' 

import React from 'react'
import Hero from './includes/Hero'
import Services from './includes/Services'
import About from './includes/About'
import Saas_ai_innovation from './includes/SaasAiInnovation'
import Partner from './includes/Partner'

const HomePage = () => {
  return <>
          <div className='home-page bg-gray-950 overflow-hidden'>
                <Hero />
                <Services />
                <About />
                <Saas_ai_innovation />
                <Partner />
          </div>
        </>
}

export default HomePage