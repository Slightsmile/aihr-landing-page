import React from 'react';
import AIHRFeaturesCarousel from './AIHRFeaturesCarousel';

const AIHRFeatures = () => {
    return (
        <div id="features" className="bg-gray-950 scroll-mt-20">
            {/*Header section*/}
            <section className='relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center pt-12 md:pt-16 pb-4'>
                <h2 className='text-white text-2xl md:text-4xl xl:text-5xl font-bold text-center mb-3 md:mb-4'>
                    AI-Powered <span className='text-[#9dffa1]'>HR Features</span>
                </h2>
                <p className='text-[#bebec0] text-sm md:text-lg xl:text-xl text-center max-w-3xl'>
                    Discover how AI transforms every aspect of human resource management.
                </p>
            </section>
            {/*Carousel section*/}
            <section className="pb-8">
                <AIHRFeaturesCarousel />
            </section>
        </div>
    );
};

export default AIHRFeatures;
