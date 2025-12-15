import React from 'react';
import Hero from './includes/Hero';
import MilestoneTimeline from './includes/MilestoneTimeline';

const page = () => {
    return (
        <div className='bg-[var(--light-bg)]'>
            <Hero />
            <MilestoneTimeline />
        </div>
    );
};

export default page;