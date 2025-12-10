'use client';
import React from 'react'

export default function AIHRServices() {
    const services = [
        {
            title: 'AI-Powered Recruitment',
            subtitle: '& Talent Acquisition',
            description: 'Automated resume screening, smart candidate-job matching using semantic AI, AI-enhanced video interview assessments, and hiring dashboards for faster, unbiased, high-quality hiring decisions.',
            gradient: 'from-green-500/10',
        },
        {
            title: 'Intelligent Employee',
            subtitle: 'Onboarding',
            description: 'AI chatbots for onboarding assistance, personalized onboarding journeys, automated document management, IT provisioning, and role-based training recommendations.',
            gradient: 'from-green-500/10',
        },
        {
            title: 'Employee Engagement',
            subtitle: '& Retention Analytics',
            description: 'Predictive attrition modeling, early warning signals for burnout and disengagement, engagement pulse surveys powered by AI, and data-backed retention recommendations.',
            gradient: 'from-green-500/10',
        },
        {
            title: 'Performance Management',
            subtitle: '& Productivity Insights',
            description: 'Intelligent performance analytics, objective bias-free evaluation support, AI-based productivity and collaboration insights, and continuous performance monitoring tools.',
            gradient: 'from-green-500/10',
        },
        {
            title: 'AI-Driven Learning',
            subtitle: '& Development (L&D)',
            description: 'Personalized course recommendations, skill-gap analysis and career mapping, adaptive learning models for real-time training, and integration with LMS platforms.',
            gradient: 'from-green-500/10',
        },
        {
            title: 'Diversity, Equity',
            subtitle: '& Inclusion (DEI)',
            description: 'Bias detection in job descriptions, promotion and hiring fairness analytics, inclusive language recommendations, and DEI dashboards for leadership.',
            gradient: 'from-green-500/10',
        },
        {
            title: 'HR Chatbots',
            subtitle: '& Employee Self-Service',
            description: '24/7 conversational HR assistant, automated responses for payroll, leave, benefits, and policies. HR ticket automation and escalation for reduced workload.',
            gradient: 'from-green-500/10',
        },
        {
            title: 'Workforce Planning',
            subtitle: '& Forecasting',
            description: 'AI-based demand forecasting, skills forecasting and succession planning, staff optimization for seasonal variations, and budgeting and headcount planning tools.',
            gradient: 'from-green-500/10',
        },
    ];

    return (
        <section className='px-4 md:px-8 lg:px-35 relative py-8 md:py-12 bg-gray-950'>
            <div className="animate-pulse absolute -top-20 right-0 w-96 h-96 md:w-96 md:h-96 bg-[#141e14] rounded-full blur-3xl"></div>
            {/* header section */}
            <div className='relative flex flex-col items-center justify-center text-center'>

                <div className='relative inline-flex items-center gap-3 md:gap-8 rounded-full mb-2 bg-gradient-to-r from-[#8a8f8b] to-[#066a0a] p-0.5'>
                    <div className='flex items-center gap-3 md:gap-4 px-2 py-0.5 rounded-full bg-gray-950'>
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="32" height="32" rx="16" fill="#C6FEC8" fillOpacity="0.32" />
                            <path d="M24 7.04169H19C18.1945 7.04169 17.5416 7.69461 17.5416 8.50002V13.5C17.5416 14.3054 18.1945 14.9584 19 14.9584H24C24.8054 14.9584 25.4583 14.3054 25.4583 13.5V8.50002C25.4583 7.69461 24.8054 7.04169 24 7.04169Z" fill="#9DFFA1" />
                            <path d="M25.4442 19.9692L22.5308 17.0559C22.2571 16.7832 21.8864 16.6301 21.5 16.6301C21.1136 16.6301 20.743 16.7832 20.4692 17.0559L17.5558 19.9692C17.283 20.2429 17.1298 20.6136 17.1298 21C17.1298 21.3865 17.283 21.7572 17.5558 22.0309L20.4692 24.9442C20.7429 25.2171 21.1136 25.3703 21.5 25.3703C21.8865 25.3703 22.2572 25.2171 22.5308 24.9442L25.4442 22.0309C25.7172 21.7573 25.8706 21.3866 25.8706 21C25.8706 20.6135 25.7172 20.2428 25.4442 19.9692Z" fill="#9DFFA1" />
                            <path d="M14 7.04169H8.99996C8.19454 7.04169 7.54163 7.69461 7.54163 8.50002V13.5C7.54163 14.3054 8.19454 14.9584 8.99996 14.9584H14C14.8054 14.9584 15.4583 14.3054 15.4583 13.5V8.50002C15.4583 7.69461 14.8054 7.04169 14 7.04169Z" fill="#9DFFA1" />
                            <path d="M14 17.0417H8.99996C8.19454 17.0417 7.54163 17.6946 7.54163 18.5V23.5C7.54163 24.3054 8.19454 24.9584 8.99996 24.9584H14C14.8054 24.9584 15.4583 24.3054 15.4583 23.5V18.5C15.4583 17.6946 14.8054 17.0417 14 17.0417Z" fill="#9DFFA1" />
                        </svg>
                        <p className='text-white font-semibold text-base md:text-md mr-2'>Services </p>
                    </div>
                </div>

                <div className='text-white mb-2'>
                    <h1 className='text-2xl md:text-4xl lg:text-5xl font-bold'>
                        <span>Service </span>
                        <span className='text-[#9dffa1]'>Portfolio</span>
                    </h1>
                </div>
                <div className='text-gray-300 mt-4 max-w-3xl'>
                    <p className='text-sm md:text-base'>Comprehensive AI-powered HR solutions designed to transform every aspect of your human resource operations.</p>
                </div>

            </div>

            {/* Services Grid */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 text-white mt-10 max-w-7xl mx-auto'>
                {services.map((service, index) => (
                    <div
                        key={index}
                        className={`min-h-[240px] bg-gradient-to-br ${service.gradient} to-transparent border-2 border-[#646464] rounded-xl p-6 flex flex-col justify-between relative overflow-hidden hover:border-[#63a567] transition-all duration-300`}
                    >
                        {/* Gradient shadow/glow effect */}
                        <div className='absolute bottom-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-[#19281a] rounded-full blur-3xl'></div>

                        <div className='relative z-10'>
                            <h3 className='text-xl md:text-2xl text-[#dcdcdc] mb-1'>{service.title}</h3>
                            <p className='text-lg md:text-xl font-bold text-[#dcdcdc] mb-4'>{service.subtitle}</p>
                        </div>

                        <p className='text-[#dcdcdc] text-sm md:text-base leading-relaxed relative z-10'>{service.description}</p>
                    </div>
                ))}
            </div>

        </section>
    )
}
