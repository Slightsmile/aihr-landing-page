import React from 'react';
import Hero from './include/Hero';
import CustomerStore from './include/CustomerStore';
import GlobalStudies from './include/GlobalStudies';

const page = () => {
    return (
        <div className='bg-[var(--light-bg)]'>
            <Hero />
            <CustomerStore />
            <GlobalStudies />
        </div>
    );
};

export default page;