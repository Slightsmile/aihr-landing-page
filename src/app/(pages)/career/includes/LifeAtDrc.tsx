'use client' 
import React from 'react';
import { Icon1, Icon2, Icon3, Icon4, Icon5, Icon6, Icon7, OuterCircle, InnerCircle, PuzzleIcon, ArrowDown, CurveArrows, Lightbulb, WorkspaceBuilding, ExcellenceChart, ExcellenceGear, GlowDot, CultureCircle } from '@/app/static/icons';

const LifeAtDrc = () => {
    const glowingTextStyle = ` @keyframes soft-glow { 0%, 100% { filter: drop-shadow(0 0 10px rgba(177, 255, 180, 0.4)); } 50% { filter: drop-shadow(0 0 10px rgba(177, 255, 180, 0.7)); } }.puzzle-glow { animation: soft-glow 3s ease-in-out infinite; }`;

    return (
        <>
            <style>{glowingTextStyle}</style>
            <div className='flex flex-col items-center min-h-screen  py-16 px-6 relative'>
            {/* Hero Section */}
            <div className='flex flex-col items-center text-center mb-12 max-w-2xl'>
                
                <div className="mb-6 inline-flex items-center gap-2 rounded-full p-[2px]" style={{ backgroundImage: 'linear-gradient(90deg, #858685 0%, #076a0a 100%)' }}>
                    <div className="flex items-center gap-2 rounded-full px-4 py-2 bg-gray-950">
                        <span className="text-white font-semibold text-sm">Our Culture</span>
                    </div>
                </div>

                <h2 className='text-6xl font-bold mb-6'>
                    <span className='text-white'>Life At </span>
                    <span className="text-[#9dffa1]">DRC</span>
                </h2>
                <p className='text-[#bebec0] text-lg leading-relaxed'> Our culture is built on collaboration, innovation, and a shared commitment to excellence. We create an environment where everyone can thrive.</p>
            </div>

            {/* Details Sections */}   
            <div className='text-white flex flex-row  gap-[24px] '>
                {/* Left sections */} 
                <div className=' flex-1 flex flex-col gap-[24px]'>
                    {/* top sections */}
                    <div className=' w-[386px] h-[338px] rounded-3xl border border-[#8fa094] relative overflow-hidden'>                 
                        <p className='bg-gradient-to-r from-[#fdfdfd] to-[#999999] bg-clip-text text-transparent px-4 py-4 font-bold text-2xl'> Collection </p>

                        <div className="absolute -bottom-30 left-14 w-76 h-76 bg-[#161e16] rounded-full blur-3xl z-0" />
                
                            <div className='absolute top-20 left-2'>
                                <div className=' border-2 border-[#747e74] backdrop-blur-lg
                                    rounded-3xl p-5 md:px-2 md:py-2 text-center transition-colors items-center'>
                                    <p className='text-[15px] text-[#6fb572]'>Team Work</p>
                                </div>
                            </div>

                            <div className='absolute top-10 right-4'>
                                <div className=' border-2 border-[#747e74] backdrop-blur-lg rounded-3xl p-5 md:px-2 md:py-2 text-center transition-colors items-center'>
                                    <p className='text-[15px] text-[#6fb572]'>Communicate</p>
                                </div>
                            </div>

                            <div className='absolute bottom-5 left-4'>
                                <div className=' border-2 border-[#747e74] backdrop-blur-lg rounded-3xl p-5 md:px-2 md:py-2 text-center transition-colors items-center'>
                                    <p className='text-[15px] text-[#6fb572]'>Members</p>
                                </div>
                            </div>

                            <div className='absolute bottom-10 right-4'>
                                <div className=' border-2 border-[#747e74] backdrop-blur-lg rounded-3xl p-5 md:px-2 md:py-2 text-center transition-colors items-center'>
                                    <p className='text-[15px] text-[#6fb572]'>Success</p>
                                </div>
                            </div>

                            <div className='flex justify-center items-center h-[220px] relative'>
                                <OuterCircle />
                                <InnerCircle />
                                <PuzzleIcon />
                            </div>
                        </div>

                    <div className=' w-[386px] h-[548px] rounded-3xl border border-[#8fa094] relative overflow-hidden'>
                        <p className='bg-gradient-to-r from-[#fdfdfd] to-[#999999] bg-clip-text text-transparent px-4 py-4 font-bold text-2xl'> Integrity </p>
                        <div className="absolute -bottom-30 left-14 w-76 h-96 bg-[#161e16] rounded-full blur-3xl z-0" />
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
                    <div className='border border-[#8fa094] relative  w-[386px] h-[548px] rounded-3xl overflow-hidden'>
                        <p className='bg-gradient-to-r from-[#fdfdfd] to-[#999999] bg-clip-text text-transparent px-4 py-4 font-bold text-2xl'>Innovation</p>
                        <div className="absolute -bottom-30 left-14 w-76 h-76 bg-[#161e16] rounded-full blur-3xl z-0" />

                        <div className='absolute top-50 right-4'>
                            <div className=' border-2 border-[#747e74] backdrop-blur-lg rounded-3xl p-5 md:px-6 md:py-2 text-center transition-colors items-center'>
                                <p className='text-[15px] text-[#6fb572]'>Videos</p>
                            </div>
                        </div>

                        <div className='absolute top-50 left-4'>
                            <div className=' border-2 border-[#747e74] backdrop-blur-lg rounded-3xl p-5 md:px-6 md:py-2 text-center transition-colors items-center'>
                                <p className='text-[15px] text-[#6fb572]'>Identity</p>
                            </div>
                        </div>

                        <div className='absolute top-38 right-34'>
                            <div className=' border-2 border-[#747e74] backdrop-blur-lg rounded-3xl p-5 md:px-5 md:py-2 text-center transition-colors items-center'>
                                <p className='text-[15px] text-[#6fb572]'>Engaging</p>
                            </div>
                        </div>

                        <div className='absolute bottom-15 left-5'>
                            <div className=' border-2 border-[#747e74] backdrop-blur-lg rounded-3xl p-5 md:px-3 md:py-2 text-center transition-colors items-center'>
                                <p className='text-[15px] text-[#6fb572]'>Graphics</p>
                            </div>
                        </div>

                        <div className='absolute bottom-37 left-4'>
                            <div className=' border-2 border-[#747e74] backdrop-blur-lg rounded-3xl p-5 md:px-3 md:py-2 text-center transition-colors items-center'>
                                <p className='text-[15px] text-[#6fb572]'>Visuals</p>
                            </div>
                        </div>

                        <div className='absolute bottom-15 right-5'>
                            <div className=' border-2 border-[#747e74] backdrop-blur-lg rounded-3xl p-5 md:px-6 md:py-2 text-center transition-colors items-center'>
                                <p className='text-[15px] text-[#6fb572]'>Post</p>
                            </div>
                        </div>

                         <div className='absolute bottom-37 right-4'>
                            <div className=' border-2 border-[#747e74] backdrop-blur-lg rounded-3xl p-5 md:px-4 md:py-2 text-center transition-colors items-center'>
                                <p className='text-[15px] text-[#6fb572]'>Blogs</p>
                            </div>
                        </div>

                        <ArrowDown />
                        <CurveArrows />
                        <Lightbulb />
                    </div>

                    <div className='border border-[#8fa094] relative  w-[386px] h-[338px] rounded-3xl'>

                        <div className="absolute bottom-1 left-10 w-96 h-96 bg-[#161e16] rounded-full blur-3xl z-0" />
                        <p className='bg-gradient-to-r from-[#fdfdfd] to-[#999999] bg-clip-text text-transparent px-4 py-4 font-bold text-2xl relative z-10'>Modern Workspace</p>
                        <WorkspaceBuilding />

                    </div>
                </div>

                {/* Right sections */} 
                <div className='flex-1 flex flex-col gap-[24px]'>
                    {/* Top sections */} 
                    <div className='border border-[#8fa094] relative  w-[386px] h-[412px] rounded-3xl overflow-hidden'>

                        <p className='bg-gradient-to-r from-[#fdfdfd] to-[#999999] bg-clip-text text-transparent px-4 py-4 font-bold text-2xl'> Excellence</p>
                        <div className="absolute bottom-1 left-10 w-96 h-96 bg-[#161e16] rounded-full blur-3xl z-0" />

                        <div className='absolute inset-0 flex items-center justify-center'>
                            <ExcellenceChart />
                            <ExcellenceGear />
                            <GlowDot />
                        </div>

                    </div>

                    <div className='border border-[#8fa094] relative  w-[386px] h-[466px] rounded-3xl overflow-hidden'>
                         <p className='bg-gradient-to-r from-[#fdfdfd] to-[#999999] bg-clip-text text-transparent px-4 py-4 font-bold text-2xl'> Our Culture </p>
                        <div className="absolute -bottom-30 left-14 w-76 h-76 bg-[#161e16] rounded-full blur-3xl z-0" />
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
                        