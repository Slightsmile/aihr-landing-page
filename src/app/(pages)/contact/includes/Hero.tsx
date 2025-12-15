
'use client'

import React from 'react';
import GetInTouchSection from './GetInTouchSection';
import ContactForm from './ContactForm';



const Hero = () => {

    return (
        <section className="relative overflow-hidden bg-[var(--light-bg)] flex items-center justify-center min-h-screen">
            {/* Background blur elements */}

            <div className="absolute top-0 left-0 w-64 md:w-96 h-64 md:h-96 bg-blue-50/60 rounded-full blur-3xl opacity-60" />
            <div className="absolute bottom-0 left-1/2 w-56 md:w-76 h-64 md:h-106 bg-amber-50/60 rounded-full blur-3xl opacity-60" />
            <div className="absolute -top-1 left-24 md:left-100 w-56 md:w-76 h-56 md:h-76 bg-blue-50/60 rounded-full blur-3xl z-0" />

            <div className="container mx-auto px-4 md:px-6 lg:px-20 relative z-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start pt-12 md:pt-20 lg:pt-32">

                    {/* Left Section */}
                    <GetInTouchSection />

                    {/* Right Section - Form */}
                    <ContactForm />

                </div>
            </div>
        </section>
    );
};

export default Hero;