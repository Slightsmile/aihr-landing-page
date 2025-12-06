'use client'

import React from 'react';
import Hero from './includes/Hero';
import MaximizeDigitalReach from './includes/MaximizeDigitalReach';
import Services from '../../home/includes/Services';
import SmartSolution from './includes/SmartSolution';
import GetInTouch from '../../components/common/GetInTouch';
import Service from './includes/Service';


const page = () => {
    return (
        <>
            <div className='bg-gray-950'>
                <Hero />
                <MaximizeDigitalReach />
                <Services />
                <SmartSolution />
                <Service />
                <GetInTouch />
            </div>
        </> 
    );
};

export default page;