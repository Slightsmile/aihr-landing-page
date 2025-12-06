"use client";

import { useRouter } from 'next/navigation';
import { HumanCentricBpo, DataDrivenInsights, DigitalAutomationSaas, TopArrow, BottomLeftArrow, BottomRightArrow } from '@/app/static/icons';

const Hero = () => {
  const router = useRouter();
  const handleExploreClick = () => {
    router.push('/services');
  };
  return (
    <section className="min-h-screen flex flex-col md:flex-col lg:flex-row justify-between items-center py-10 pt-0 relative overflow-hidden">
      {/* Background blur elements */}
      <div className="animate-pulse absolute bottom-0 right-0 w-96 h-96 bg-[#141e14] rounded-full blur-3xl" />
      <div className="animate-pulse absolute bottom-0 left-0 w-96 h-96 bg-[#161e16] rounded-full blur-3xl" />
      <div className="animate-pulse absolute top-10 left-0 w-96 h-96 bg-[#161e16] rounded-full blur-3xl" />
      <div className="animate-pulse absolute top-0 right-120 w-96 h-106 bg-[#1b251b] rounded-full blur-3xl" />
      <div className="animate-pulse absolute top-10 left-0 w-96 h-96 bg-green-500/5 rounded-full blur-3xl" />

      {/* Main content section */}
      <div className="max-w-4xl relative z-10 px-6 md:px-12 lg:px-20">
        {/* Badge section */}
        <div className="mb-6 md:mb-8">
          <div className="relative inline-block">

            <div className="absolute inset-0 bg-gradient-to-r from-[#8a8f8b] to-[#066a0a] rounded-full" />
                  <p className="relative inline-flex items-center gap-2 md:gap-3 lg:gap-2 lg:w-70 lg:h-11 bg-gray-950 pl-1.5 md:pl-2 pr-3 md:pr-5 py-1.5 md:py-2 rounded-full text-white text-xs md:text-sm font-medium backdrop-blur-sm m-0.5" >

                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="32" height="32" rx="16" fill="#C6FEC8" fillOpacity="0.32"/>
                      <path d="M16 26L14 20H6L8 26H16ZM16 26H20H16Z" fill="#9DFFA1"/>
                      <path d="M16 26L14 20H6L8 26H16ZM16 26H20" stroke="#9DFFA1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M16 17V16.5C16 14.6144 16 13.6716 15.4142 13.0858C14.8284 12.5 13.8856 12.5 12 12.5C10.1144 12.5 9.17157 12.5 8.58579 13.0858C8 13.6716 8 14.6144 8 16.5V17" fill="#9DFFA1"/>
                      <path d="M16 17V16.5C16 14.6144 16 13.6716 15.4142 13.0858C14.8284 12.5 13.8856 12.5 12 12.5C10.1144 12.5 9.17157 12.5 8.58579 13.0858C8 13.6716 8 14.6144 8 16.5V17" stroke="#9DFFA1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M23 17C23 18.1046 22.1046 19 21 19C19.8954 19 19 18.1046 19 17C19 15.8954 19.8954 15 21 15C22.1046 15 23 15.8954 23 17Z" fill="#9DFFA1" stroke="#9DFFA1" strokeWidth="1.5"/>
                      <path d="M14 8C14 9.10457 13.1046 10 12 10C10.8954 10 10 9.10457 10 8C10 6.89543 10.8954 6 12 6C13.1046 6 14 6.89543 14 8Z" fill="#9DFFA1" stroke="#9DFFA1" strokeWidth="1.5"/>
                      <path d="M18 21.5H24C25.1046 21.5 26 22.3954 26 23.5V24C26 25.1046 25.1046 26 24 26H23" fill="#9DFFA1"/>
                      <path d="M18 21.5H24C25.1046 21.5 26 22.3954 26 23.5V24C26 25.1046 25.1046 26 24 26H23" stroke="#9DFFA1" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>

                  Leading Next-Gen BPO Provider
                </p>
          </div>

        </div>              

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-[#ffffff] mb-6 md:mb-4 leading-tight"> Redefining <span className="text-[#9dffa1]">Next-Gen</span> {' '}<br /> BPO & Digital Solutions</h1>

        <p className="text-sm md:text-base lg:text-md text-[#bebec0] mb-8 md:mb-12 max-w-2xl leading-relaxed">
          DRC combines human-centric BPO, digital automation, and AI analytics to deliver scalable,
          cost-effective solutions. We help businesses streamline operations, drive growth, and stay ahead in a
          hyper-competitive landscape.
        </p>

        <button className="group inline-flex items-center gap-2 md:gap-3 p-[2px] rounded-full bg-gradient-to-r from-[#dcdedd] to-[#3eb343] hover:shadow-lg hover:shadow-green-400/50 transition-all duration-300 transform hover:scale-105" onClick={handleExploreClick} >

          <span className="inline-flex items-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-3.5 rounded-full  bg-gradient-to-t from-[#92eb95] via-[#9dffa1] to-[#c3ffc6] text-[#2d4c2e] font-semibold text-sm md:text-base hover:cursor-pointer">
            Explore Solutions
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z" stroke="#2D4C2E" strokeWidth="1.5"/>
                <path d="M12.4014 8.29796L15.3213 7.32465C16.2075 7.02924 16.6507 6.88153 16.8846 7.11544C17.1185 7.34935 16.9708 7.79247 16.6753 8.67871L15.702 11.5986C15.1986 13.1088 14.9469 13.8639 14.4054 14.4054C13.8639 14.9469 13.1088 15.1986 11.5986 15.702L8.67871 16.6753C7.79247 16.9708 7.34935 17.1185 7.11544 16.8846C6.88153 16.6507 7.02924 16.2075 7.32465 15.3213L8.29796 12.4014C8.80136 10.8912 9.05306 10.1361 9.59457 9.59457C10.1361 9.05306 10.8912 8.80136 12.4014 8.29796Z" stroke="#2D4C2E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12.0001 12L11.9937 12.0064" stroke="#2D4C2E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>

        </button>

      </div>

      <div className="flex-1 relative w-full h-full flex items-center justify-center mt-8 lg:mt-0 px-6 lg:px-0">
        <div className="relative w-full max-w-[360px] md:max-w-[400px] lg:max-w-[580px] aspect-square">

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

          {/* Human-Centric Card */}
          <div className="absolute top-[15%] md:top-[18%] left-1 lg:left-1 bg-gradient-to-br from-[#142a14] to-[#353f35] border-3 border-[#353f35] rounded-2xl p-3 md:p-4 flex flex-col items-center justify-center text-center transition-all duration-300 transform hover:scale-105 w-[120px] h-[130px] md:w-[140px] md:h-[150px] lg:w-[164.41px] lg:h-[171.17px]">
            <div className="mb-2 md:mb-3 flex items-center justify-center w-20 h-10 mt-4 sm:w-16 sm:h-16 md:w-24 md:h-24 lg:w-35 lg:h-20 lg:mt-10 mx-auto">
              <HumanCentricBpo />
            </div>
            <p className='bg-gradient-to-r from-[#fdfdfd] to-[#999999] bg-clip-text text-transparent px-4 py-4  font-semibold text-xs md:text-[12px] text-[8px] relative z-10'> Human-Centric <br /> BPO Service </p>
          </div>

          <div className="absolute right-1/2 transform translate-x-1/2 lg:right-72 lg:top-6 top-10">
              <div className="w-20 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 xl:w-40 xl:h-40">
                <TopArrow />
              </div>
          </div>



          <div className='absolute right-1/2 transform translate-x-1/2 lg:right-78 lg:top-75 -left-25 bottom-22'>
            <div className="w-16 h-16 sm:w-10 sm:h-10 md:w-16 md:h-16 lg:w-24 lg:h-24 xl:w-32 xl:h-32">
              <BottomLeftArrow />
            </div>
            
          </div>

          <div className="absolute right-20  transform translate-x-1/2 lg:right-7 lg:top-82 left-60 bottom-23">
            <div className="w-16 h-16 sm:w-10 sm:h-10 md:w-16 md:h-16 lg:w-24 lg:h-24 xl:w-32 xl:h-32">
              <BottomRightArrow />
            </div>
          </div>


          {/* Data-Driven Card */}
          <div className="absolute top-[15%] md:top-[18%] right-1 lg:right-1 bg-gradient-to-br from-[#142a14] to-[#353f35] border-3 border-[#353f35] rounded-2xl p-3 md:p-4 flex flex-col items-center justify-center text-center transition-all duration-300 transform hover:scale-105 w-[120px] h-[130px] md:w-[140px] md:h-[150px] lg:w-[164.41px] lg:h-[171.17px]">
              <div className="mb-2 md:mb-3 flex items-center justify-center w-20 h-10 mt-4 sm:w-16 sm:h-16 md:w-24 md:h-24 lg:w-35 lg:h-20 lg:mt-10 mx-auto">
                <DataDrivenInsights />
              </div>
              <p className='bg-gradient-to-r from-[#fdfdfd] to-[#999999] bg-clip-text text-transparent px-4 py-4  font-semibold text-xs md:text-[11px] text-[8px] relative z-10'>
                  Data-Driven  Insights
              </p>
          </div>

          <div className="absolute bottom-[8%] md:bottom-[10%] left-1/2 -translate-x-1/2 bg-gradient-to-br from-[#142a14] to-[#353f35] border-3 border-[#353f35] rounded-2xl p-3 md:p-4 flex flex-col items-center justify-center text-center transition-all duration-300 hover:scale-105 w-[120px] h-[130px] md:w-[140px] md:h-[150px] lg:w-[164.41px] lg:h-[171.17px]">
              <div className="mb-2 md:mb-3 flex items-center justify-center w-20 h-10 mt-4 sm:w-16 sm:h-16 md:w-24 md:h-24 lg:w-35 lg:h-20 lg:mt-10 mx-auto">
                <DigitalAutomationSaas />
              </div>
              <p className='bg-gradient-to-r from-[#fdfdfd] to-[#999999] bg-clip-text text-transparent px-4 py-4 font-semibold text-xs md:text-[11px] text-[8px] -mt-1 relative z-10'>
                  Digital Automation & SaaS
              </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
