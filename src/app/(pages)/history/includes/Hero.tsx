
'use client';
import React from 'react';
import HistoryTopLeftIcon from '@/app/static/icons/HistoryTopLeftIcon';
import HistoryTopRightIcon from '@/app/static/icons/HistoryTopRightIcon';
import HistoryBottomLeftIcon from '@/app/static/icons/HistoryBottomLeftIcon';

const Hero = () => {
   return (
        <div className="relative  overflow-hidden">
            <div className="left-right absolute top-10 left-0 w-120 h-120 bg-[#161e16] rounded-full blur-3xl" />
            <div className="left-right absolute top-10 -right-20 w-160 h-120 bg-[#161e16] rounded-full blur-3xl" />
            <div className="absolute top-20 left-80 w-10 h-15 bg-[#8bf78b] rounded-full blur-2xl" />


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
                <div className=" absolute bottom-36 right-60 w-1 h-1 bg-[#336935] rounded-full animate-pulse" style={{ animationDelay: '1.2s', animationDuration: '1.5s' }}></div>
                <div className=" absolute top-1/2 right-24 w-1 h-1 bg-emerald-400 rounded-full animate-pulse" style={{ animationDelay: '0.9s', animationDuration: '1.5s' }}></div>
            </div>

            {/* Top Left Stat Box  */}
                <HistoryTopLeftIcon />

                 {/* Top Right Stat Box  */}
                <HistoryTopRightIcon />

                     {/* Bottom Left Stat Box  */}
                <HistoryBottomLeftIcon />


            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center py-20">
                 <div className="mb-6 md:mb-8">
                    <div className="relative inline-block">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#8a8f8b] to-[#066a0a] rounded-full" />
                        <p className="relative inline-flex items-center gap-2 md:gap-3 lg:gap-2 lg:w-32 lg:h-11 bg-gray-950 pl-1.5 md:pl-2 pr-3 md:pr-5 py-1.5 md:py-2 rounded-full text-white text-xs md:text-sm font-medium backdrop-blur-sm m-0.5">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="32" height="32" rx="16" fill="#C6FEC8" fill-opacity="0.32"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M17.509 7C17.7063 7.00237 17.8948 7.08243 18.0335 7.22283C18.1722 7.36322 18.25 7.55264 18.25 7.75V24.25C18.25 24.4472 18.1723 24.6365 18.0338 24.7769C17.8952 24.9173 17.707 24.9974 17.5098 25H9.25C9.05109 25 8.86032 24.921 8.71967 24.7803C8.57902 24.6397 8.5 24.4489 8.5 24.25V11.8007C8.49992 11.3388 8.64203 10.888 8.90704 10.5096C9.17204 10.1312 9.54709 9.84359 9.98125 9.68575L17.2435 7.045C17.323 7.0165 17.4047 7.0015 17.4865 7H17.4977H17.509ZM19.75 13.1485L22.1365 14.1707C22.5412 14.3443 22.8861 14.6328 23.1285 15.0005C23.3708 15.3682 23.5 15.7989 23.5 16.2393V24.25C23.5 24.4489 23.421 24.6397 23.2803 24.7803C23.1397 24.921 22.9489 25 22.75 25H19.6217C19.705 24.7652 19.75 24.5133 19.75 24.25V13.1485ZM14.5097 19.75C14.6082 19.7494 14.7056 19.7293 14.7964 19.691C14.8871 19.6528 14.9695 19.597 15.0387 19.5269C15.1078 19.4568 15.1626 19.3737 15.1997 19.2825C15.2367 19.1913 15.2555 19.0936 15.2549 18.9951C15.2542 18.8966 15.2342 18.7992 15.1959 18.7085C15.1576 18.6177 15.1019 18.5354 15.0318 18.4662C14.9617 18.397 14.8786 18.3423 14.7874 18.3052C14.6961 18.2681 14.5985 18.2494 14.5 18.25H12.25C12.0511 18.25 11.8603 18.329 11.7197 18.4697C11.579 18.6103 11.5 18.8011 11.5 19C11.5 19.1989 11.579 19.3897 11.7197 19.5303C11.8603 19.671 12.0511 19.75 12.25 19.75H14.5H14.5097ZM14.5097 16.75C14.7087 16.7487 14.8989 16.6684 15.0387 16.5269C15.1784 16.3853 15.2562 16.194 15.2549 15.9951C15.2536 15.7962 15.1733 15.606 15.0318 15.4662C14.8902 15.3265 14.6989 15.2487 14.5 15.25H12.25C12.0511 15.25 11.8603 15.329 11.7197 15.4697C11.579 15.6103 11.5 15.8011 11.5 16C11.5 16.1989 11.579 16.3897 11.7197 16.5303C11.8603 16.671 12.0511 16.75 12.25 16.75H14.5H14.5097ZM14.5097 13.75C14.7087 13.7487 14.8989 13.6684 15.0387 13.5269C15.1784 13.3853 15.2562 13.194 15.2549 12.9951C15.2536 12.7962 15.1733 12.606 15.0318 12.4662C14.8902 12.3265 14.6989 12.2487 14.5 12.25H12.25C12.0511 12.25 11.8603 12.329 11.7197 12.4697C11.579 12.6103 11.5 12.8011 11.5 13C11.5 13.1989 11.579 13.3897 11.7197 13.5303C11.8603 13.671 12.0511 13.75 12.25 13.75H14.5H14.5097Z" fill="#9DFFA1"/>
                                </svg>
                            About Us
                        </p>
                    </div>
                </div>      

                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-white mb-4 leading-tight text-center max-w-5xl"> Powering Tomorrow <br/> <span className="text-[#9dffa1]">Enterprises</span> Today </h1>

                <p className="text-[#bebec0] text-base sm:text-lg lg:text-md leading-relaxed mb-6 max-w-3xl mx-auto text-center"> DRC is a next-gen BPO powerhouse under the Daffodil Group, driving innovation and redefining the outsourcing landscape with a forward-thinking approach. </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    {/* Apply Now Button */}
                    <button className="group inline-flex items-center gap-2 md:gap-3 p-[2px] rounded-full bg-gradient-to-r from-[#dcdedd] to-[#3eb343] transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(74,222,128,0.3)] hover:shadow-[0_0_30px_rgba(74,222,128,0.6)]">
                        <span className="inline-flex items-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-3.5 rounded-full bg-gradient-to-t from-[#92eb95] via-[#9dffa1] to-[#c3ffc6] text-[#2d4c2e] font-semibold text-sm md:text-base">
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
            {/* Bottom Right Stat Box  */}
            
        </div>
    );
};

export default Hero;