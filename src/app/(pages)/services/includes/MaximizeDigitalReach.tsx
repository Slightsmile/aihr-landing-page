'use client'; 
import React from 'react';
import {   ArrowDown, CurveArrows, Lightbulb,  ExcellenceChart,  GlowDot, Seo,Rate,
 Icon8, StrategicInsights, Twitter, SnapChat, LinkedIn, Instagram, Facebook , Shopping, NurturingFollow } from '@/app/static/icons';


const MaximizeDigitalReach = () => {
    const glowingTextStyle = `
        @keyframes soft-glow {
            0%, 100% { filter: drop-shadow(0 0 10px rgba(177, 255, 180, 0.4)); }
            50% { filter: drop-shadow(0 0 10px rgba(177, 255, 180, 0.7)); }
        }

        .puzzle-glow {
            animation: soft-glow 3s ease-in-out infinite;
        }
    `;

    return (
        <>
            <style>{glowingTextStyle}</style>
            <div className='flex flex-col items-center min-h-screen  py-16 px-6 relative'>
            {/* Hero Section */}
            <div className='flex flex-col items-center text-center mb-12 max-w-2xl'>
                <div className="mb-6 inline-flex items-center gap-2 rounded-full p-[2px]" 
                style={{ backgroundImage: 'linear-gradient(90deg, #858585 0%, #076909 100%)' }}>
                    <div className="flex items-center gap-2 rounded-full px-4 py-2 bg-gray-950">
                        <Icon8 />
                        <span className="text-white font-semibold text-sm">Maximize Digital Reach</span>
                    </div>
                </div>
                <h2 className='text-5xl font-bold mb-6'>
                    <span className="text-[#9dffa1]">Digital Engagement</span>
                    <span className='text-white'> Platform</span>
                </h2>
                
            </div>

            {/* Details Sections */}   
            <div className='text-white flex flex-col lg:flex-row  gap-[24px] '>
                {/* Left sections */} 
                <div className=' flex-1 flex flex-col gap-[24px]'>
                    {/* top sections */}
                    <div className=' w-[386px] h-[338px] rounded-3xl border border-[#8fa094] relative overflow-hidden'>                 
                        <p className='bg-gradient-to-r from-[#fdfdfd] to-[#999999] bg-clip-text text-transparent px-4 py-4 font-bold text-2xl'>
                            Strategic Insights
                        </p>
                    <div className="absolute -bottom-30 left-14 w-76 h-76 bg-[#161e16] rounded-full blur-3xl z-0" />

                        <div className='flex justify-center items-center h-[220px] relative'>
                            <StrategicInsights />
                        </div>
                    </div>
                     {/* bottom sections */}
                    <div className=' w-[386px] h-[548px] rounded-3xl border border-[#8fa094] relative overflow-hidden'>
                         <p className='bg-gradient-to-r from-[#fdfdfd] to-[#999999] bg-clip-text text-transparent px-4 py-4 font-bold text-2xl'>
                            Social Media Management
                        </p>
                        <div className="absolute -bottom-30 left-14 w-76 h-96 bg-[#161e16] rounded-full blur-3xl z-0" />

                        <SnapChat/>
                        <Twitter />
                        <LinkedIn />
                        <Instagram />
                        <Facebook />
                        <Shopping />
                        
                    </div>

                </div>
                {/* Middle sections */}
                <div className=' flex-1 flex flex-col gap-[24px]'>
                    {/* top sections */}                    
                    <div className='border border-[#8fa094] relative  w-[386px] h-[548px] rounded-3xl overflow-hidden'>
                        <p className='bg-gradient-to-r from-[#fdfdfd] to-[#999999] bg-clip-text text-transparent px-4 py-4 font-bold text-2xl'>
                            Creative Content Generation  
                        </p>
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
                     {/* bottom sections */} 
                    <div className='border border-[#8fa094] relative  w-[386px] h-[338px] rounded-3xl'>

                        <p className='bg-gradient-to-r from-[#fdfdfd] to-[#999999] bg-clip-text text-transparent px-4 py-4 font-bold text-2xl relative z-10'>
                            Lead Nurturing & Follow-up 
                        </p>
                        <NurturingFollow />
                    </div>
                </div>
                {/* Right sections */} 
                <div className='flex-1 flex flex-col gap-[24px]'>
                    {/* Top sections */} 
                    <div className='border border-[#8fa094] relative  w-[386px] h-[412px] rounded-3xl overflow-hidden'>
                        <p className='bg-gradient-to-r from-[#fdfdfd] to-[#999999] bg-clip-text text-transparent px-4 py-4 font-bold text-2xl'>
                            Web & SEO Optimization
                        </p>
                        <div className="absolute bottom-1 left-10 w-96 h-96 bg-[#161e16] rounded-full blur-3xl z-0" />
                        <div className='absolute inset-0 flex items-center justify-center'>
                            <ExcellenceChart />
                            <Seo />
                            <GlowDot />
                        </div>
                    </div>
                    {/* Bottom sections */}
                    <div className='border border-[#8fa094] relative  w-[386px] h-[466px] rounded-3xl overflow-hidden'>
                         <p className='bg-gradient-to-r from-[#fdfdfd] to-[#999999] bg-clip-text text-transparent px-4 py-4 font-bold text-2xl'>
                            Our Culture
                        </p>
                        <div className="absolute -bottom-30 left-14 w-76 h-76 bg-[#161e16] rounded-full blur-3xl z-0" />
                        <Rate />
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default MaximizeDigitalReach;