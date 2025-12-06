import React from 'react';
import Hero from './include/Hero';
import CustomerStore from './include/CustomerStore';
import GlobalStudies from './include/GlobalStudies';

const page = () => {
    return (
        <div className='bg-gray-950'>
            <Hero />
            <CustomerStore />
            <GlobalStudies />
        </div>
    );
};

export default page;