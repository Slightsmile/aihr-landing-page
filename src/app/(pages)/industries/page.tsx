import React from 'react'
import DrcInnovation from './includes/DrcInnovation'
import GetInTouch from '../../components/common/GetInTouch';
import Hero from './includes/Hero' 
import StackingCards from './includes/StackingCards';

const page = () => {
  return (
    <div>
        <Hero />
        <DrcInnovation />
        <StackingCards />
        <GetInTouch />
    </div>
  );
}

export default page