import React from 'react';
import Hero from './includes/Hero';
import MilestoneTimeline from './includes/MilestoneTimeline';

const page = () => {
    return (
        <div className='bg-gray-950'>
            <Hero />
            <MilestoneTimeline />
        </div>
    );
};

export default page;