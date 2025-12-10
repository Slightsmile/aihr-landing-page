"use client";

import { useRouter } from 'next/navigation';
import { HumanCentricBpo, DataDrivenInsights, DigitalAutomationSaas } from '@/app/static/icons';

const AIHRHero = () => {
  const router = useRouter();
  const handleExploreClick = () => {
    router.push('/pricing');
  };
  return (
    <section className="min-h-screen flex flex-col md:flex-col lg:flex-row justify-between items-center py-10 pt-0 relative overflow-hidden bg-gray-950">
      {/* Background blur elements */}
      <div className="animate-pulse absolute bottom-0 right-0 w-96 h-96 bg-[#141e14] rounded-full blur-3xl" />
      <div className="animate-pulse absolute bottom-0 left-0 w-96 h-96 bg-[#161e16] rounded-full blur-3xl" />
      <div className="animate-pulse absolute top-10 left-0 w-96 h-96 bg-[#161e16] rounded-full blur-3xl" />
      <div className="animate-pulse absolute top-0 right-120 w-96 h-106 bg-[#1b251b] rounded-full blur-3xl" />
      <div className="animate-pulse absolute top-10 left-0 w-96 h-96 bg-green-500/5 rounded-full blur-3xl" />

      {/* Main content section */}
      <div className="max-w-4xl relative z-10 px-6 md:px-12 lg:px-20">

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-[#ffffff] mb-6 md:mb-4 leading-tight"> Transforming <span className="text-[#9dffa1]">Human Resources</span> {' '}<br /> with AI Intelligence</h1>

        <p className="text-sm md:text-base lg:text-md text-[#bebec0] mb-8 md:mb-12 max-w-2xl leading-relaxed">
          AIHR is a next-generation Human Resource Technology provider focused on transforming how organizations attract, develop, and retain talent. Powered by advanced AI, Machine Learning, and automation, AIHR makes HR faster, smarter, and more strategic.
        </p>

        <button className="group inline-flex items-center gap-2 md:gap-3 p-[2px] rounded-full bg-gradient-to-r from-[#dcdedd] to-[#3eb343] hover:shadow-lg hover:shadow-green-400/50 transition-all duration-300 transform hover:scale-105" onClick={handleExploreClick} >

          <span className="inline-flex items-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-3.5 rounded-full  bg-gradient-to-t from-[#92eb95] via-[#9dffa1] to-[#c3ffc6] text-[#2d4c2e] font-semibold text-sm md:text-base hover:cursor-pointer">
            View Pricing
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z" stroke="#2D4C2E" strokeWidth="1.5" />
              <path d="M12.4014 8.29796L15.3213 7.32465C16.2075 7.02924 16.6507 6.88153 16.8846 7.11544C17.1185 7.34935 16.9708 7.79247 16.6753 8.67871L15.702 11.5986C15.1986 13.1088 14.9469 13.8639 14.4054 14.4054C13.8639 14.9469 13.1088 15.1986 11.5986 15.702L8.67871 16.6753C7.79247 16.9708 7.34935 17.1185 7.11544 16.8846C6.88153 16.6507 7.02924 16.2075 7.32465 15.3213L8.29796 12.4014C8.80136 10.8912 9.05306 10.1361 9.59457 9.59457C10.1361 9.05306 10.8912 8.80136 12.4014 8.29796Z" stroke="#2D4C2E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12.0001 12L11.9937 12.0064" stroke="#2D4C2E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>

        </button>

      </div>

      {/* Right side - Rotating Cards */}
      <div className="flex-1 relative w-full h-full flex items-center justify-center mt-8 lg:mt-0 px-6 lg:px-0">
        <div className="relative w-full max-w-[360px] md:max-w-[400px] lg:max-w-[580px] aspect-square">

          {/* Circular orbit rings */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
            <defs>
              <linearGradient id="fadeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="white" stopOpacity="0" />
                <stop offset="30%" stopColor="white" stopOpacity="0.3" />
                <stop offset="60%" stopColor="white" stopOpacity="0.7" />
                <stop offset="100%" stopColor="white" stopOpacity="1" />
              </linearGradient>
              <mask id="circleMask">
                <rect width="400" height="400" fill="url(#fadeGradient)" />
              </mask>
            </defs>
            <circle cx="200" cy="200" r="200" fill="none" stroke="#606355" strokeWidth="1" mask="url(#circleMask)" />
            <circle cx="200" cy="200" r="170" fill="none" stroke="#606355" strokeWidth="1" mask="url(#circleMask)" />
            <circle cx="200" cy="200" r="140" fill="none" stroke="#606355" strokeWidth="1" mask="url(#circleMask)" />
          </svg>

          {/* Rotating Cards Container */}
          <div className="rotating-cards-container">
            {/* Card 1 - AI-Powered Recruitment (Top) */}
            <div className="rotating-card rotating-card-1 absolute bg-gradient-to-br from-[#142a14] to-[#353f35] border-3 border-[#353f35] rounded-2xl p-3 md:p-4 flex flex-col items-center justify-center text-center transition-all duration-300 hover:scale-105 w-[120px] h-[130px] md:w-[140px] md:h-[150px] lg:w-[164.41px] lg:h-[171.17px]">
              <div className="mb-2 md:mb-3 flex items-center justify-center w-20 h-10 mt-4 sm:w-16 sm:h-16 md:w-24 md:h-24 lg:w-35 lg:h-20 lg:mt-10 mx-auto">
                <HumanCentricBpo />
              </div>
              <p className='bg-gradient-to-r from-[#fdfdfd] to-[#999999] bg-clip-text text-transparent px-4 py-4  font-semibold text-xs md:text-[12px] text-[8px] relative z-10'>AI-Powered <br /> Recruitment </p>
            </div>

            {/* Card 2 - Predictive Analytics (Right) */}
            <div className="rotating-card rotating-card-2 absolute bg-gradient-to-br from-[#142a14] to-[#353f35] border-3 border-[#353f35] rounded-2xl p-3 md:p-4 flex flex-col items-center justify-center text-center transition-all duration-300 hover:scale-105 w-[120px] h-[130px] md:w-[140px] md:h-[150px] lg:w-[164.41px] lg:h-[171.17px]">
              <div className="mb-2 md:mb-3 flex items-center justify-center w-20 h-10 mt-4 sm:w-16 sm:h-16 md:w-24 md:h-24 lg:w-35 lg:h-20 lg:mt-10 mx-auto">
                <DataDrivenInsights />
              </div>
              <p className='bg-gradient-to-r from-[#fdfdfd] to-[#999999] bg-clip-text text-transparent px-4 py-4  font-semibold text-xs md:text-[11px] text-[8px] relative z-10'>
                Predictive Analytics
              </p>
            </div>

            {/* Card 3 - Intelligent Automation (Bottom) */}
            <div className="rotating-card rotating-card-3 absolute bg-gradient-to-br from-[#142a14] to-[#353f35] border-3 border-[#353f35] rounded-2xl p-3 md:p-4 flex flex-col items-center justify-center text-center transition-all duration-300 hover:scale-105 w-[120px] h-[130px] md:w-[140px] md:h-[150px] lg:w-[164.41px] lg:h-[171.17px]">
              <div className="mb-2 md:mb-3 flex items-center justify-center w-20 h-10 mt-4 sm:w-16 sm:h-16 md:w-24 md:h-24 lg:w-35 lg:h-20 lg:mt-10 mx-auto">
                <DigitalAutomationSaas />
              </div>
              <p className='bg-gradient-to-r from-[#fdfdfd] to-[#999999] bg-clip-text text-transparent px-4 py-4 font-semibold text-xs md:text-[11px] text-[8px] -mt-1 relative z-10'>
                Intelligent Automation
              </p>
            </div>
          </div>

          <style jsx>{`
            .rotating-cards-container {
              position: relative;
              width: 100%;
              height: 100%;
            }

            @keyframes rotate-orbit {
              from {
                transform: translate(-50%, -50%) rotate(0deg) translateX(170px) rotate(0deg);
              }
              to {
                transform: translate(-50%, -50%) rotate(360deg) translateX(170px) rotate(-360deg);
              }
            }

            .rotating-card {
              top: 50%;
              left: 50%;
              animation: rotate-orbit 20s linear infinite;
            }

            .rotating-card-1 {
              animation-delay: 0s;
            }

            .rotating-card-2 {
              animation-delay: -6.67s;
            }

            .rotating-card-3 {
              animation-delay: -13.34s;
            }

            .rotating-card:hover {
              animation-play-state: paused;
            }

            @media (max-width: 1024px) {
              @keyframes rotate-orbit {
                from {
                  transform: translate(-50%, -50%) rotate(0deg) translateX(140px) rotate(0deg);
                }
                to {
                  transform: translate(-50%, -50%) rotate(360deg) translateX(140px) rotate(-360deg);
                }
              }
            }

            @media (max-width: 768px) {
              @keyframes rotate-orbit {
                from {
                  transform: translate(-50%, -50%) rotate(0deg) translateX(120px) rotate(0deg);
                }
                to {
                  transform: translate(-50%, -50%) rotate(360deg) translateX(120px) rotate(-360deg);
                }
              }
            }
          `}</style>

        </div>
      </div>
    </section>
  );
};

export default AIHRHero;
