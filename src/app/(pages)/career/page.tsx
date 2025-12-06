
'use client' 
import React from 'react';
import Hero from './includes/Hero'; 
import LifeAtDrc from './includes/LifeAtDrc'; 
import GetInTouch from '../../components/common/GetInTouch'; 

const page = () => {
    return (
        <>
            <div className='bg-gray-950'>
                <Hero />
                <LifeAtDrc />
                <GetInTouch />
            </div>
        </>
    );
};

export default page;