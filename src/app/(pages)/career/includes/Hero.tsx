
'use client'
import React from 'react';

const Hero = () => {
    const email: string | null = "careers@drc.com"

    const handleApplyClick = () => {
        const gmailurl: string | null = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`
        window.open(gmailurl, '_blank');
    }

    return (
        <div className="relative min-h-screen overflow-hidden">
            <div className="absolute top-10 left-0 w-120 h-120 bg-blue-50/50 rounded-full blur-3xl" />
            <div className="absolute top-10 -right-20 w-160 h-120 bg-amber-50/50 rounded-full blur-3xl" />


            <div className="absolute inset-0 overflow-hidden opacity-30">
                <div className="absolute top-30 left-50 w-1 h-1 bg-[var(--accent-gold)] rounded-full animate-pulse" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
                <div className="absolute top-40 left-26 w-1 h-1 bg-[var(--accent-blue)] rounded-full animate-pulse" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
                <div className="absolute top-30 right-40 w-1 h-1 bg-[var(--accent-gold)] rounded-full animate-pulse" style={{ animationDelay: '0.5s', animationDuration: '3s' }}></div>
                <div className="absolute bottom-48 left-24 w-1 h-1 bg-[var(--accent-blue)] rounded-full animate-pulse" style={{ animationDelay: '1s', animationDuration: '3s' }}></div>
                <div className="absolute bottom-32 right-32 w-1 h-1 bg-[var(--accent-gold)] rounded-full animate-pulse" style={{ animationDelay: '1.5s', animationDuration: '3s' }}></div>
                <div className="absolute top-2/3 right-16 w-1 h-1 bg-[var(--accent-blue)] rounded-full animate-pulse" style={{ animationDelay: '0.7s', animationDuration: '3s' }}></div>
                <div className="absolute bottom-16 left-12 w-1 h-1 bg-[var(--primary-navy)] rounded-full animate-pulse" style={{ animationDelay: '1.2s', animationDuration: '3s' }}></div>
            </div>

            {/* Top Left Stat Box  */}
            <div className="absolute animate-bounce-slow top-6 left-18 md:left-40 md:top-35 z-20 ">
                <div className="bg-[var(--card-bg)] border border-gray-100 backdrop-blur-lg rounded-3xl p-5 md:px-10 md:py-4 text-center transition-colors items-center shadow-lg">
                    <div className="text-3xl md:text-4xl font-bold text-[var(--accent-blue)] mb-1">5+</div>
                    <p className="text-[var(--charcoal)] text-xs md:text-sm font-medium">Industries<br />Transformed</p>
                </div>
            </div>

            {/* Top Right Stat Box  */}
            <div className="absolute left-right top-6 right-8 md:right-46 md:top-60  z-20">
                <div className="bg-[var(--card-bg)] border border-gray-100 backdrop-blur-lg rounded-3xl p-5 md:px-8 md:py-5 text-center transition-colors items-center shadow-lg">
                    <div className="text-3xl md:text-4xl font-bold text-[var(--accent-blue)] mb-1">23+</div>
                    <p className="text-[var(--charcoal)] text-xs md:text-sm font-medium">Countries Served</p>
                </div>
            </div>

            {/* Bottom Left Stat Box  */}
            <div className="absolute animate-bounce-slow bottom-12 left-12 md:bottom-22 md:left-85 z-20">
                <div className="bg-[var(--card-bg)] border border-gray-100 backdrop-blur-lg rounded-3xl p-5 md:px-10 md:py-4 text-center transition-colors">
                    <div className="text-3xl md:text-4xl font-bold text-[var(--accent-blue)] mb-1">500+</div>
                    <p className="text-[var(--charcoal)] text-xs md:text-sm font-medium">Team Members</p>
                </div>
            </div>

            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center py-20 mt-20">

                <div className="mb-6 inline-flex items-center gap-2 rounded-full p-[2px] bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-gold)]">
                    <div className="flex items-center gap-2 rounded-full px-4 py-2 bg-white">
                        <span className="text-[var(--primary-navy)] font-semibold text-sm">Careers</span>
                    </div>
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[var(--primary-navy)] mb-4 leading-tight text-center max-w-5xl">
                    Build the Future of <span className="text-[var(--accent-blue)]">BPO &</span>
                    <br />
                    <span className="text-[var(--accent-blue)]">Digital Solutions</span>
                </h1>

                <p className="text-[var(--charcoal)] text-base sm:text-lg lg:text-md leading-relaxed mb-6 max-w-3xl mx-auto text-center">
                    Work alongside passionate individuals who turn vision into action. At DRC Group, your growth, creativity, and contributions pave the way for a better, more connected future.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    {/* Apply Now Button */}
                    <button onClick={handleApplyClick} className="group inline-flex items-center gap-2 md:gap-3 p-[2px] rounded-full bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-gold)] hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                        <span className="inline-flex items-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-3.5 rounded-full bg-[var(--accent-blue)] text-white font-semibold text-sm md:text-base group-hover:bg-opacity-90 transition-all">
                            Apply Now
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z" stroke="currentColor" strokeWidth="1.5" />
                                <path d="M12.4014 8.29796L15.3213 7.32465C16.2075 7.02924 16.6507 6.88153 16.8846 7.11544C17.1185 7.34935 16.9708 7.79247 16.6753 8.67871L15.702 11.5986C15.1986 13.1088 14.9469 13.8639 14.4054 14.4054C13.8639 14.9469 13.1088 15.1986 11.5986 15.702L8.67871 16.6753C7.79247 16.9708 7.34935 17.1185 7.11544 16.8846C6.88153 16.6507 7.02924 16.2075 7.32465 15.3213L8.29796 12.4014C8.80136 10.8912 9.05306 10.1361 9.59457 9.59457C10.1361 9.05306 10.8912 8.80136 12.4014 8.29796Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M12.0001 12L11.9937 12.0064" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </span>
                    </button>

                    {/* Learn More Button */}
                    <button className="group inline-flex items-center gap-2 md:gap-3 p-[2px] rounded-full bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-gold)] hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                        <span className="inline-flex items-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-3.5 rounded-full bg-white text-[var(--primary-navy)] font-semibold text-sm md:text-base hover:bg-gray-50 transition-all">
                            Learn More
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z" stroke="currentColor" strokeWidth="1.5" />
                                <path d="M12.4014 8.29796L15.3213 7.32465C16.2075 7.02924 16.6507 6.88153 16.8846 7.11544C17.1185 7.34935 16.9708 7.79247 16.6753 8.67871L15.702
                                 11.5986C15.1986 13.1088 14.9469 13.8639 14.4054 14.4054C13.8639 14.9469 13.1088 15.1986 11.5986 15.702L8.67871 16.6753C7.79247 16.9708 7.34935
                                  17.1185 7.11544 16.8846C6.88153 16.6507 7.02924 16.2075 7.32465 15.3213L8.29796 12.4014C8.80136 10.8912 9.05306 10.1361 9.59457 9.59457C10.1361 
                                  9.05306 10.8912 8.80136 12.4014 8.29796Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M12.0001 12L11.9937 12.0064" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </span>
                    </button>

                </div>
            </div>
        </div>
    );
};

export default Hero;