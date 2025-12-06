'use client'

import React from 'react'

const Hero = () => {
    return (
        <section className="relative w-full min-h-screen bg-gray-950">
            <div className="pulse-shadow absolute top-10 left-0 w-120 h-120 bg-[#161e16] rounded-full blur-3xl" />
            <div className="left-right absolute top-10 right-2 w-160 h-120 bg-[#161e16] rounded-full blur-3xl" />

            {/* Background dots */} 
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-30 left-50 w-1 h-1 bg-[#336935] rounded-full animate-pulse" style={{ animationDelay: '0s', animationDuration: '1.5s' }}></div>
                <div className="absolute top-40 left-26 w-1 h-1 bg-[#336935] rounded-full animate-pulse" style={{ animationDelay: '0s', animationDuration: '1.5s' }}></div>
                <div className="absolute top-32 right-40 w-1 h-1 bg-[#336935] rounded-full animate-pulse" style={{ animationDelay: '0.5s', animationDuration: '1.5s' }}></div>
                <div className="absolute bottom-48 left-24 w-1 h-1 bg-[#336935] rounded-full animate-pulse" style={{ animationDelay: '1s', animationDuration: '1.5s' }}></div>
                <div className="absolute bottom-32 right-32 w-1 h-1 bg-[#336935] rounded-full animate-pulse" style={{ animationDelay: '1.5s', animationDuration: '1.5s' }}></div>
                <div className="absolute top-2/3 right-16 w-1 h-1 bg-[#336935] rounded-full animate-pulse" style={{ animationDelay: '0.7s', animationDuration: '1.5s' }}></div>
                <div className="absolute bottom-16 left-12 w-1 h-1 bg-[#336935] rounded-full animate-pulse" style={{ animationDelay: '1.2s', animationDuration: '1.5s' }}></div>
                <div className="absolute bottom-16 left-100 w-1 h-1 bg-[#336935] rounded-full animate-pulse" style={{ animationDelay: '1.2s', animationDuration: '1.5s' }}></div>
                <div className="absolute bottom-16 right-150 w-1 h-1 bg-[#336935] rounded-full animate-pulse" style={{ animationDelay: '1.2s', animationDuration: '1.5s' }}></div>
                <div className="absolute bottom-36 right-60 w-1 h-1 bg-[#336935] rounded-full animate-pulse" style={{ animationDelay: '1.2s', animationDuration: '1.5s' }}></div>
                <div className="absolute top-1/2 right-24 w-1 h-1 bg-emerald-400 rounded-full animate-pulse" style={{ animationDelay: '0.9s', animationDuration: '1.5s' }}></div>
            </div>
         
            <div className="relative z-10 container mx-auto px-4 text-center">
                <div className="max-w-5xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-green-400/30 mb-8">
                        <div className="w-4 h-4  rounded flex items-center justify-center">                           
                        </div>
                        <span className="text-white font-sm">About Us</span>
                    </div>

                    <h1 className="text-6xl  font-semibold text-white mb-6 leading-tight">
                        Powering Tomorrow&apos;s
                        <br />
                        <span className="text-green-300">Enterprises</span> Today
                    </h1>

                    <p className="text-white text-xl font-normal mb-12  max-w-4xl mx-auto"> DRC is a next-gen BPO powerhouse under the Daffodil Group, driving innovation and <br /> redefining the outsourcing landscape with a forward-thinking approach. </p>

                    <button className="group inline-flex items-center gap-2 md:gap-3 p-[2px] rounded-full bg-gradient-to-r from-[#dcdedd] to-[#3eb343] hover:shadow-lg hover:shadow-green-400/50 transition-all duration-300 transform hover:scale-105">
                    
                        <span className="inline-flex items-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-3.5 rounded-full bg-linear-to-t from-[#92eb95] via-[#9dffa1] to-[#c3ffc6] text-[#2d4c2e] font-semibold text-sm md:text-base">
                            Explore Solutions
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z" stroke="#2D4C2E" strokeWidth="1.5"/>
                            <path d="M12.4014 8.29796L15.3213 7.32465C16.2075 7.02924 16.6507 6.88153 16.8846 7.11544C17.1185 7.34935 16.9708 7.79247 16.6753 8.67871L15.702 11.5986C15.1986 13.1088 14.9469 13.8639 14.4054 14.4054C13.8639 14.9469 13.1088 15.1986 11.5986 15.702L8.67871 16.6753C7.79247 16.9708 7.34935 17.1185 7.11544 16.8846C6.88153 16.6507 7.02924 16.2075 7.32465 15.3213L8.29796 12.4014C8.80136 10.8912 9.05306 10.1361 9.59457 9.59457C10.1361 9.05306 10.8912 8.80136 12.4014 8.29796Z" stroke="#2D4C2E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M12.0001 12L11.9937 12.0064" stroke="#2D4C2E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </span>
                    </button>
                </div>
               
            </div>
             
        </section>
        
    )
}

export default Hero