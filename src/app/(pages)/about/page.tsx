'use client'

import React from 'react';
import Hero from './includes/Hero';
import Details from './includes/Details';
import GetInTouch from '../../components/common/GetInTouch';
import WhyChoose from './includes/WhyChoose';

const page = () => {
    return (
        <> 
            <div className='m-0 p-0'>
                <Hero />
                <Details />
                <WhyChoose />
                <GetInTouch />
            </div>
        </>
    );
};

export default page;