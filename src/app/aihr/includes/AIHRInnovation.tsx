'use client';

import React from 'react';

import { CostOptimization, BrainConnection, GroupPeople, AccessTopTalent, TechnologyIntegration } from '@/app/static/icons';


export default function AIHRInnovation() {
    return (
        <section id="services" className="py-20 px-4 md:px-8 lg:px-16 bg-gray-950 relative overflow-hidden">
            <div className="animate-pulse absolute top-70 right-0 w-96 h-96 bg-[#101710] rounded-full blur-3xl"></div>
            <div className="animate-pulse absolute top-230 right-0 w-96 h-96 bg-[#101710] rounded-full blur-3xl"></div>


            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                        <span className="text-[#9dffa1]">Cloud Native</span> Innovation
                    </h2>
                    <p className="text-gray-300 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed px-4">
                        Empowering organizations with scalable, intelligent HR solutions built for the modern cloud era
                    </p>

                </div>

                <div className='w-full max-w-7xl mx-auto px-4 md:px-8 '>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 px-1 md:px-10'>
                        {/*  Card 1 & 2 */}
                        <div className='w-full h-auto lg:h-110 border border-[#5a854d] rounded-3xl overflow-hidden bg-gradient-to-br from-green-900/15 via-gray-900/40 to-gray-950 flex flex-col relative'>

                            <div className='absolute inset-0 bg-gradient-to-tl from-[#334e34]/80 via-[#334e34]/20 to-transparent  pointer-events-none animate-pulse-shadow '></div>

                            <div className='flex flex-col gap-4 mb-6 p-6 md:p-8 relative z-10'>
                                <h3 className=' text-2xl md:text-3xl font-bold text-[#d2d2d2]'>Innovation</h3>
                                <p className='text-[#d2d2d2] text-sm md:text-base leading-relaxed'>We use state-of-the-art AI models, predictive analytics, NLP, and automation to transform HR operations from manual to intelligent.</p>
                            </div>

                            <div className='w-full h-32 md:h-48 lg:h-56 flex items-end justify-center mt-auto relative z-10'>
                                <div className='w-58 h-38 md:w-full md:h-full lg:w-full lg:h-full flex items-center justify-center'>
                                    <CostOptimization />
                                </div>

                            </div>
                        </div>

                        {/*  Card 2 */}
                        <div className='w-full h-auto lg:h-110 border border-[#5a854d] rounded-3xl overflow-hidden bg-gradient-to-br from-green-900/15 via-gray-900/40 to-gray-950 flex flex-col relative'>
                            <div className='absolute inset-0 bg-gradient-to-tr from-[#334e34]/80 via-[#334e34]/20 to-transparent 
                    pointer-events-none animate-pulse-shadow'></div>

                            <div className='flex flex-col gap-4 mb-6 p-6 md:p-8 relative z-10'>
                                <h3 className='text-2xl md:text-3xl font-bold text-[#d2d2d2]'>Human-Centered Design</h3>
                                <p className='text-[#d2d2d2] text-sm md:text-base leading-relaxed'>Technology built around real HR challenges and employee experience, ensuring solutions that work for people, not just processes.</p>
                            </div>

                            <div className='w-full h-32 md:h-48 lg:h-56 flex items-end justify-center mt-auto relative z-10'>
                                <div className='w-58 h-38 md:w-full md:h-full lg:w-full lg:h-full flex items-center justify-center'>
                                    <GroupPeople />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='hidden lg:flex w-full left-52 px-10 relative'>
                        <div className='w-full '>
                            <BrainConnection />
                        </div>
                    </div>

                    {/* Row 2 & 3 */}
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 px-1 md:px-10 mt-6 md:mt-0'>
                        {/* Card 3 */}
                        <div className='w-full h-auto lg:h-110 border border-[#5a854d] rounded-3xl overflow-hidden
                bg-gradient-to-br from-green-900/15 via-gray-900/40 to-gray-950
                flex flex-col relative '>
                            <div className='absolute inset-0 bg-gradient-to-bl from-[#334e34]/80 via-[#334e34]/20 to-transparent pointer-events-none animate-pulse-shadow'></div>

                            <div className='flex flex-col gap-4 mb-6 p-6 md:p-8 relative z-10'>
                                <h3 className='text-2xl md:text-3xl font-bold text-[#d2d2d2]'>Ethical AI</h3>
                                <p className='text-[#d2d2d2] text-sm md:text-base leading-relaxed'>Fairness, transparency, and compliance integrated into every solution. Our AI reduces bias and promotes inclusive decision-making.</p>
                            </div>
                            <div className='md:w-full w-38 h-22 left-24 md:left-0 md:h-48 lg:h-56 flex items-center justify-center mt-auto pb-8 md:pb-12  lg:pb-24 relative z-10'>
                                <div className='w-38 h-38 md:w-full md:h-full lg:w-full lg:h-full flex items-center justify-center'>
                                    <AccessTopTalent />
                                </div>
                            </div>
                        </div>

                        {/* Card 4 -  */}
                        <div className='w-full h-auto lg:h-110 border border-[#5a854d] rounded-3xl overflow-hidden bg-gradient-to-br from-green-900/15 via-gray-900/40 to-gray-950 flex flex-col relative'>
                            <div className='absolute inset-0 bg-gradient-to-br from-[#334e34]/80 via-[#334e34]/20 to-transparent pointer-events-none animate-pulse-shadow'></div>

                            <div className='flex flex-col gap-4 mb-6 p-6 md:p-8 relative z-10'>
                                <h3 className='text-2xl md:text-3xl font-bold text-[#d2d2d2]'>Scalability</h3>
                                <p className='text-[#d2d2d2] text-sm md:text-base leading-relaxed'>Solutions that grow with your organization, from small teams to large enterprises, with seamless integration and expansion.</p>
                            </div>

                            <div className='w-28 left-22 md:left-0 md:w-full h-32 md:h-48 lg:h-56 flex items-center justify-center mt-auto pb-4 md:pb-6 relative z-10'>
                                <div className='w-10 h-28 mb-4 md:mb-8 md:w-full md:h-full lg:w-full lg:h-full flex items-center justify-center'>
                                    <TechnologyIntegration />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>





            </div>
        </section>
    );
}
