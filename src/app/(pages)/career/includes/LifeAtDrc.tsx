
'use client'
import React from 'react';
import { Icon1, Icon2, Icon3, Icon4, Icon5, Icon6, Icon7, OuterCircle, InnerCircle, PuzzleIcon, ArrowDown, CurveArrows, Lightbulb, WorkspaceBuilding, ExcellenceChart, ExcellenceGear, GlowDot, CultureCircle } from '@/app/static/icons';

const LifeAtDrc = () => {
    const glowingTextStyle = ` @keyframes soft-glow { 0%, 100% { filter: drop-shadow(0 0 10px rgba(59, 130, 246, 0.4)); } 50% { filter: drop-shadow(0 0 10px rgba(59, 130, 246, 0.7)); } }.puzzle-glow { animation: soft-glow 3s ease-in-out infinite; }`;

    return (
        <>
            <style>{glowingTextStyle}</style>
            <div className='flex flex-col items-center min-h-screen  py-16 px-6 relative'>
                {/* Hero Section */}
                <div className='flex flex-col items-center text-center mb-12 max-w-2xl'>

                    <div className="mb-6 inline-flex items-center gap-2 rounded-full p-[2px] bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-gold)]">
                        <div className="flex items-center gap-2 rounded-full px-4 py-2 bg-white">
                            <span className="text-[var(--primary-navy)] font-semibold text-sm">Our Culture</span>
                        </div>
                    </div>

                    <h2 className='text-6xl font-bold mb-6'>
                        <span className='text-[var(--primary-navy)]'>Life At </span>
                        <span className="text-[var(--accent-blue)]">DRC</span>
                    </h2>
                    <p className='text-[var(--charcoal)] text-lg leading-relaxed'> Our culture is built on collaboration, innovation, and a shared commitment to excellence. We create an environment where everyone can thrive.</p>
                </div>

                {/* Details Sections */}
                <div className='text-[var(--primary-navy)] flex flex-row  gap-[24px] '>
                    {/* Left sections */}
                    <div className=' flex-1 flex flex-col gap-[24px]'>
                        {/* top sections */}
                        <div className=' w-[386px] h-[338px] rounded-3xl border border-gray-200 bg-[var(--card-bg)] shadow-lg relative overflow-hidden'>
                            <p className='bg-gradient-to-r from-[var(--primary-navy)] to-[var(--accent-blue)] bg-clip-text text-transparent px-4 py-4 font-bold text-2xl'> Collection </p>

                            <div className="absolute -bottom-30 left-14 w-76 h-76 bg-blue-50 rounded-full blur-3xl z-0" />

                            <div className='absolute top-20 left-2'>
                                <div className=' border border-gray-200 bg-white/50 backdrop-blur-lg
                                    rounded-3xl p-5 md:px-2 md:py-2 text-center transition-colors items-center shadow-sm'>
                                    <p className='text-[15px] text-[var(--accent-blue)] font-medium'>Team Work</p>
                                </div>
                            </div>

                            <div className='absolute top-10 right-4'>
                                <div className=' border border-gray-200 bg-white/50 backdrop-blur-lg rounded-3xl p-5 md:px-2 md:py-2 text-center transition-colors items-center shadow-sm'>
                                    <p className='text-[15px] text-[var(--accent-blue)] font-medium'>Communicate</p>
                                </div>
                            </div>

                            <div className='absolute bottom-5 left-4'>
                                <div className=' border border-gray-200 bg-white/50 backdrop-blur-lg rounded-3xl p-5 md:px-2 md:py-2 text-center transition-colors items-center shadow-sm'>
                                    <p className='text-[15px] text-[var(--accent-blue)] font-medium'>Members</p>
                                </div>
                            </div>

                            <div className='absolute bottom-10 right-4'>
                                <div className=' border border-gray-200 bg-white/50 backdrop-blur-lg rounded-3xl p-5 md:px-2 md:py-2 text-center transition-colors items-center shadow-sm'>
                                    <p className='text-[15px] text-[var(--accent-blue)] font-medium'>Success</p>
                                </div>
                            </div>

                            <div className='flex justify-center items-center h-[220px] relative z-10'>
                                <OuterCircle />
                                <InnerCircle />
                                <PuzzleIcon />
                            </div>
                        </div>

                        <div className=' w-[386px] h-[548px] rounded-3xl border border-gray-200 bg-[var(--card-bg)] shadow-lg relative overflow-hidden'>
                            <p className='bg-gradient-to-r from-[var(--primary-navy)] to-[var(--accent-blue)] bg-clip-text text-transparent px-4 py-4 font-bold text-2xl'> Integrity </p>
                            <div className="absolute -bottom-30 left-14 w-76 h-96 bg-blue-50 rounded-full blur-3xl z-0" />
                            <Icon1 />
                            <Icon2 />
                            <Icon3 />
                            <Icon4 />
                            <Icon5 />
                            <Icon6 />
                        </div>
                    </div>

                    {/* Middle sections */}
                    <div className=' flex-1 flex flex-col gap-[24px]'>
                        {/* top sections */}
                        <div className='border border-gray-200 bg-[var(--card-bg)] shadow-lg relative  w-[386px] h-[548px] rounded-3xl overflow-hidden'>
                            <p className='bg-gradient-to-r from-[var(--primary-navy)] to-[var(--accent-blue)] bg-clip-text text-transparent px-4 py-4 font-bold text-2xl'>Innovation</p>
                            <div className="absolute -bottom-30 left-14 w-76 h-76 bg-blue-50 rounded-full blur-3xl z-0" />

                            <div className='absolute top-50 right-4'>
                                <div className=' border border-gray-200 bg-white/50 backdrop-blur-lg rounded-3xl p-5 md:px-6 md:py-2 text-center transition-colors items-center shadow-sm'>
                                    <p className='text-[15px] text-[var(--accent-blue)] font-medium'>Videos</p>
                                </div>
                            </div>

                            <div className='absolute top-50 left-4'>
                                <div className=' border border-gray-200 bg-white/50 backdrop-blur-lg rounded-3xl p-5 md:px-6 md:py-2 text-center transition-colors items-center shadow-sm'>
                                    <p className='text-[15px] text-[var(--accent-blue)] font-medium'>Identity</p>
                                </div>
                            </div>

                            <div className='absolute top-38 right-34'>
                                <div className=' border border-gray-200 bg-white/50 backdrop-blur-lg rounded-3xl p-5 md:px-5 md:py-2 text-center transition-colors items-center shadow-sm'>
                                    <p className='text-[15px] text-[var(--accent-blue)] font-medium'>Engaging</p>
                                </div>
                            </div>

                            <div className='absolute bottom-15 left-5'>
                                <div className=' border border-gray-200 bg-white/50 backdrop-blur-lg rounded-3xl p-5 md:px-3 md:py-2 text-center transition-colors items-center shadow-sm'>
                                    <p className='text-[15px] text-[var(--accent-blue)] font-medium'>Graphics</p>
                                </div>
                            </div>

                            <div className='absolute bottom-37 left-4'>
                                <div className=' border border-gray-200 bg-white/50 backdrop-blur-lg rounded-3xl p-5 md:px-3 md:py-2 text-center transition-colors items-center shadow-sm'>
                                    <p className='text-[15px] text-[var(--accent-blue)] font-medium'>Visuals</p>
                                </div>
                            </div>

                            <div className='absolute bottom-15 right-5'>
                                <div className=' border border-gray-200 bg-white/50 backdrop-blur-lg rounded-3xl p-5 md:px-6 md:py-2 text-center transition-colors items-center shadow-sm'>
                                    <p className='text-[15px] text-[var(--accent-blue)] font-medium'>Post</p>
                                </div>
                            </div>

                            <div className='absolute bottom-37 right-4'>
                                <div className=' border border-gray-200 bg-white/50 backdrop-blur-lg rounded-3xl p-5 md:px-4 md:py-2 text-center transition-colors items-center shadow-sm'>
                                    <p className='text-[15px] text-[var(--accent-blue)] font-medium'>Blogs</p>
                                </div>
                            </div>

                            <ArrowDown />
                            <CurveArrows />
                            <Lightbulb />
                        </div>

                        <div className='border border-gray-200 bg-[var(--card-bg)] shadow-lg relative  w-[386px] h-[338px] rounded-3xl'>

                            <div className="absolute bottom-1 left-10 w-96 h-96 bg-blue-50 rounded-full blur-3xl z-0" />
                            <p className='bg-gradient-to-r from-[var(--primary-navy)] to-[var(--accent-blue)] bg-clip-text text-transparent px-4 py-4 font-bold text-2xl relative z-10'>Modern Workspace</p>
                            <WorkspaceBuilding />

                        </div>
                    </div>

                    {/* Right sections */}
                    <div className='flex-1 flex flex-col gap-[24px]'>
                        {/* Top sections */}
                        <div className='border border-gray-200 bg-[var(--card-bg)] shadow-lg relative  w-[386px] h-[412px] rounded-3xl overflow-hidden'>

                            <p className='bg-gradient-to-r from-[var(--primary-navy)] to-[var(--accent-blue)] bg-clip-text text-transparent px-4 py-4 font-bold text-2xl'> Excellence</p>
                            <div className="absolute bottom-1 left-10 w-96 h-96 bg-blue-50 rounded-full blur-3xl z-0" />

                            <div className='absolute inset-0 flex items-center justify-center'>
                                <ExcellenceChart />
                                <ExcellenceGear />
                                <GlowDot />
                            </div>

                        </div>

                        <div className='border border-gray-200 bg-[var(--card-bg)] shadow-lg relative  w-[386px] h-[466px] rounded-3xl overflow-hidden'>
                            <p className='bg-gradient-to-r from-[var(--primary-navy)] to-[var(--accent-blue)] bg-clip-text text-transparent px-4 py-4 font-bold text-2xl'> Our Culture </p>
                            <div className="absolute -bottom-30 left-14 w-76 h-76 bg-blue-50 rounded-full blur-3xl z-0" />
                            <CultureCircle />
                            <Icon7 />
                        </div>

                    </div>

                </div>
            </div>
        </>
    );
};

export default LifeAtDrc;