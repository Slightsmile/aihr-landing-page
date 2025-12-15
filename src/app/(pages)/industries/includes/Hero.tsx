import React from 'react';
import Image from 'next/image';
import personImage from '@/app/static/images/industries_page/person.png';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-[var(--light-bg)] overflow-hidden px-4 sm:px-6 md:px-10 lg:px-20">
      {/* Background blur elements */}

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50" />
      <div className="absolute top-10 left-0 w-96 h-96 bg-yellow-50 rounded-full blur-3xl opacity-50" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-blue-50 rounded-full blur-3xl drop-shadow-[2px_10px_28px_rgba(59,130,246,0.2)] opacity-50" />
      <div className="absolute top-10 left-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-11 ">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8 z-10">
            <div className="mb-6 md:mb-8">
              <div className="relative inline-block">
                {/* Gradient Border */}
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-gold)] rounded-full"></div>
                {/* Button Content */}
                <button type="button" className="relative inline-flex items-center gap-2 md:gap-3 lg:gap-2 bg-white pl-1.5 md:pl-1 pr-3 md:pr-5 py-1.5 md:py-1 rounded-full text-[var(--primary-navy)] text-xs md:text-sm font-medium m-0.5">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="32" height="32" rx="16" fill="#E0F2FE" fillOpacity="1" />
                    <path d="M16 26L14 20H6L8 26H16ZM16 26H20H16Z" fill="#3B82F6" />
                    <path d="M16 26L14 20H6L8 26H16ZM16 26H20" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M16 17V16.5C16 14.6144 16 13.6716 15.4142 13.0858C14.8284 12.5 13.8856 12.5 12 12.5C10.1144 12.5 9.17157 12.5 8.58579 13.0858C8 13.6716 8 14.6144 8 16.5V17" fill="#3B82F6" />
                    <path d="M16 17V16.5C16 14.6144 16 13.6716 15.4142 13.0858C14.8284 12.5 13.8856 12.5 12 12.5C10.1144 12.5 9.17157 12.5 8.58579 13.0858C8 13.6716 8 14.6144 8 16.5V17" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M23 17C23 18.1046 22.1046 19 21 19C19.8954 19 19 18.1046 19 17C19 15.8954 19.8954 15 21 15C22.1046 15 23 15.8954 23 17Z" fill="#3B82F6" stroke="#3B82F6" strokeWidth="1.5" />
                    <path d="M14 8C14 9.10457 13.1046 10 12 10C10.8954 10 10 9.10457 10 8C10 6.89543 10.8954 6 12 6C13.1046 6 14 6.89543 14 8Z" fill="#3B82F6" stroke="#3B82F6" strokeWidth="1.5" />
                    <path d="M18 21.5H24C25.1046 21.5 26 22.3954 26 23.5V24C26 25.1046 25.1046 26 24 26H23" fill="#3B82F6" />
                    <path d="M18 21.5H24C25.1046 21.5 26 22.3954 26 23.5V24C26 25.1046 25.1046 26 24 26H23" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                  Industries
                </button>
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-[53px] font-semibold leading-tight">
              <span className="text-[var(--primary-navy)]">Empowering Industries</span>
              <span className="text-[var(--primary-navy)]"> with </span>
              <span className="bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-gold)] bg-clip-text text-transparent">Smart BPO</span>
              <span className="text-[var(--primary-navy)]"> Solutions</span>
            </h1>

            <p className="text-[var(--charcoal)] text-base sm:text-md max-w-2xl leading-relaxed"> From finance to healthcare, retail to education DRC delivers tailored outsourcing, automation,  and AI-driven solutions that transform how businesses operate. </p>

            <div>
              <button className="group inline-flex items-center gap-2 md:gap-3 p-[2px] rounded-full bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-gold)] hover:shadow-lg transition-all duration-300 transform hover:scale-105" >
                <span className="inline-flex items-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-3.5 rounded-full bg-white text-[var(--primary-navy)] font-bold text-sm md:text-base group-hover:bg-opacity-95 transition-colors" >
                  Explore Solutions
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z" stroke="#0A2540" strokeWidth="1.5" />
                    <path d="M12.4014 8.29796L15.3213 7.32465C16.2075 7.02924 16.6507 6.88153 16.8846 7.11544C17.1185 7.34935 16.9708 7.79247 16.6753 8.67871L15.702 11.5986C15.1986 13.1088 14.9469 13.8639 14.4054 14.4054C13.8639 14.9469 13.1088 15.1986 11.5986 15.702L8.67871 16.6753C7.79247 16.9708 7.34935 17.1185 7.11544 16.8846C6.88153 16.6507 7.02924 16.2075 7.32465 15.3213L8.29796 12.4014C8.80136 10.8912 9.05306 10.1361 9.59457 9.59457C10.1361 9.05306 10.8912 8.80136 12.4014 8.29796Z" stroke="#0A2540" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12.0001 12L11.9937 12.0064" stroke="#0A2540" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </button>
            </div>
          </div>

          {/* Right content */}
          <div className="absolute bottom-0 right-0 translate-x-[5%] translate-y-[2%] w-[400px] h-[600px] sm:w-[500px] sm:h-[700px] md:w-[600px] md:h-[800px] lg:w-[700px] lg:h-[1000px]">
            {/* Circular gradient SVG */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
              <defs>
                <linearGradient id="fadeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#0A2540" stopOpacity="0" />
                  <stop offset="30%" stopColor="#0A2540" stopOpacity="0.3" />
                  <stop offset="60%" stopColor="#0A2540" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="#0A2540" stopOpacity="1" />
                </linearGradient>
                <mask id="circleMask">
                  <rect width="400" height="400" fill="url(#fadeGradient)" />
                </mask>
              </defs>
              <circle cx="200" cy="200" r="200" fill="none" stroke="#D1D5DB" strokeWidth="1" mask="url(#circleMask)" />
              <circle cx="200" cy="200" r="170" fill="none" stroke="#D1D5DB" strokeWidth="1" mask="url(#circleMask)" />
              <circle cx="200" cy="200" r="140" fill="none" stroke="#D1D5DB" strokeWidth="1" mask="url(#circleMask)" />
            </svg>
          </div>

          {/* Mobile */}
          <div className="relative h-[400px] sm:h-[450px] mt-12 lg:hidden">
            {/* Top Left Card */}
            <div className="absolute top-0 left-4 w-40 h-48 sm:w-48 sm:h-56 rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden shadow-2xl transform  hover:scale-105 transition-transform duration-300 z-20 p-[10px] sm:p-[12px]  bg-gradient-to-br from-purple-200 via-pink-200 to-emerald-200" >
              <div className="relative w-full h-full rounded-[1rem] sm:rounded-[1.3rem] overflow-hidden">
                <Image
                  src={personImage}
                  alt="Professional at work"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Top Right Card */}
            <div className="absolute top-8 right-4 w-40 h-48 sm:w-48 sm:h-56 rounded-[1.5rem] sm:rounded-[2rem]  overflow-hidden shadow-2xl transform  hover:scale-105 transition-transform duration-300 z-30 p-[10px] sm:p-[12px]  bg-gradient-to-br from-purple-200 via-pink-200 to-blue-200" >
              <div className="relative w-full h-full rounded-[1rem] sm:rounded-[1.3rem] overflow-hidden">
                <Image
                  src={personImage}
                  alt="Team collaboration"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Bottom Center Card */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-40 h-48 sm:w-48 sm:h-56 rounded-[1.5rem] sm:rounded-[2rem]  overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300 z-40 p-[10px] sm:p-[12px]  bg-gradient-to-br from-emerald-200 via-teal-200 to-green-300" >
              <div className="relative w-full h-full rounded-[1rem] sm:rounded-[1.3rem] overflow-hidden">
                <Image
                  src={personImage}
                  alt="Business meeting"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Desktop */}
          <div className="relative h-[500px] sm:h-[550px] md:h-[600px] hidden lg:block">
            {/* Top Left Card */}
            <div className="absolute top-0 left-40 xl:left-62 w-48 h-56 md:w-56 md:h-64 xl:w-64 xl:h-72 rounded-[2rem] xl:rounded-[2.5rem]  overflow-hidden shadow-2xl backdrop-blur-sm transform  hover:scale-105 transition-transform duration-300 z-20 p-[14px] xl:p-[18px]  bg-gradient-to-br from-purple-200 via-pink-200 to-emerald-200" >
              <div className="relative w-full h-full rounded-[1.4rem] xl:rounded-[1.8rem] overflow-hidden">
                <Image
                  src={personImage}
                  alt="Professional at work"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Middle Card */}
            <div className="absolute top-32 md:top-40 xl:top-44 right-1 w-48 h-56 md:w-56 md:h-64 xl:w-64 xl:h-72 rounded-[2rem] xl:rounded-[2.5rem]  overflow-hidden shadow-2xl backdrop-blur-sm transform  hover:scale-105 transition-transform duration-300 z-30 p-[14px] xl:p-[18px]  bg-gradient-to-br from-purple-200 via-pink-200 to-blue-200" >
              <div className="relative w-full h-full rounded-[1.4rem] xl:rounded-[1.8rem] overflow-hidden">
                <Image
                  src={personImage}
                  alt="Team collaboration"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Bottom Left Card */}
            <div className="absolute bottom-10 md:bottom-12 xl:bottom-15 left-32 xl:left-50 w-48 h-56 md:w-56 md:h-64 xl:w-64 xl:h-72 rounded-[2rem] xl:rounded-[2.5rem]  overflow-hidden shadow-2xl backdrop-blur-sm transform  hover:scale-105 transition-transform duration-300 z-40 p-[14px] xl:p-[18px]  bg-gradient-to-br from-emerald-200 via-teal-200 to-green-300">
              <div className="relative w-full h-full rounded-[1.4rem] xl:rounded-[1.8rem] overflow-hidden">
                <Image
                  src={personImage}
                  alt="Business meeting"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="absolute top-20 right-20 w-32 h-32 md:w-40 md:h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-40 right-40 md:right-60 w-48 h-48 md:w-60 md:h-60 bg-purple-500/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;