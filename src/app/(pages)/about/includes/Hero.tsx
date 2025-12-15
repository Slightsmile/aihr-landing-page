'use client'

import React from 'react'

const Hero = () => {
    return (
        <section className="relative w-full min-h-screen bg-[var(--light-bg)]">
            <div className="pulse-shadow absolute top-10 left-0 w-120 h-120 bg-blue-50/50 rounded-full blur-3xl" />
            <div className="left-right absolute top-10 right-2 w-160 h-120 bg-amber-50/50 rounded-full blur-3xl" />

            {/* Background dots */}
            <div className="absolute inset-0 overflow-hidden opacity-30">
                <div className="absolute top-30 left-50 w-2 h-2 bg-[var(--accent-gold)] rounded-full animate-pulse" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
                <div className="absolute top-40 left-26 w-2 h-2 bg-[var(--accent-blue)] rounded-full animate-pulse" style={{ animationDelay: '0.5s', animationDuration: '3s' }}></div>
                <div className="absolute top-32 right-40 w-2 h-2 bg-[var(--accent-gold)] rounded-full animate-pulse" style={{ animationDelay: '1s', animationDuration: '3s' }}></div>
                <div className="absolute bottom-48 left-24 w-2 h-2 bg-[var(--accent-blue)] rounded-full animate-pulse" style={{ animationDelay: '1.5s', animationDuration: '3s' }}></div>
                <div className="absolute bottom-32 right-32 w-2 h-2 bg-[var(--accent-gold)] rounded-full animate-pulse" style={{ animationDelay: '2s', animationDuration: '3s' }}></div>
                <div className="absolute top-2/3 right-16 w-2 h-2 bg-[var(--accent-blue)] rounded-full animate-pulse" style={{ animationDelay: '2.5s', animationDuration: '3s' }}></div>
                <div className="absolute bottom-16 left-12 w-2 h-2 bg-[var(--primary-navy)] rounded-full animate-pulse" style={{ animationDelay: '1.2s', animationDuration: '3s' }}></div>
            </div>

            <div className="relative z-10 container mx-auto px-4 text-center pt-32">
                <div className="max-w-5xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[var(--accent-blue)]/30 mb-8 bg-white/50 backdrop-blur-sm">
                        <span className="text-[var(--primary-navy)] font-semibold text-sm">About Us</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold text-[var(--primary-navy)] mb-8 leading-tight">
                        Powering Tomorrow&apos;s
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-gold)]">Enterprises</span> Today
                    </h1>

                    <p className="text-[var(--charcoal)] text-xl font-normal mb-12 max-w-4xl mx-auto"> DRC is a next-gen BPO powerhouse under the Daffodil Group, driving innovation and <br /> redefining the outsourcing landscape with a forward-thinking approach. </p>

                    <button className="group inline-flex items-center gap-2 md:gap-3 p-[2px] rounded-full bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-gold)] hover:shadow-lg hover:shadow-blue-400/20 transition-all duration-300 transform hover:scale-105">
                        <span className="inline-flex items-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-3.5 rounded-full bg-white text-[var(--primary-navy)] font-semibold text-sm md:text-base group-hover:bg-transparent group-hover:text-white transition-colors duration-300">
                            Explore Solutions
                            <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                        </span>
                    </button>
                </div>

            </div>

        </section>

    )
}

export default Hero