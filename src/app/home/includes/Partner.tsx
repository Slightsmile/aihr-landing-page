
'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import partnerImg from '@/app/static/images/landing_page/partner.png';
import partnersLogoImg from '@/app/static/images/landing_page/partners_logo.png';

export default function Partner() {
  const router = useRouter();
  const handleLearnMoreClick = () => {
    router.push('/about');
  };
  return (
    <div className='py-10 md:py-10'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-1 relative overflow-hidden">

        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 mb-12 md:mb-20 relative z-10">
          {/* Left Content */}
          <div className="flex-1 w-full text-center lg:text-left">
            <div className="inline-block mb-3 sm:mb-4 p-0.5 bg-gradient-to-r  from-[#8a8f8b] to-[#066a0a] rounded-full ">
                <div className="px-4 sm:px-3 py-2 sm:py-1 bg-gray-950 rounded-full">

                  <span className="text-white text-xs sm:text-sm font-semibold flex items-center gap-2">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="32" height="32" rx="16" fill="#C6FEC8" fill-opacity="0.32"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M22.9725 9.34381L24.3738 9.02284C24.86 8.9115 25.3489 9.21819 25.4603 9.7044L27.2039 17.3176C27.3153 17.8037 27.0086 18.2927 26.5224 18.404L25.121 18.725C24.6349 18.8363 24.1459 18.5297 24.0345 18.0434L22.2909 10.4303C22.1795 9.94407 22.4862 9.45515 22.9725 9.34381ZM8.25432 9.34381L6.85297 9.02284C6.36676 8.9115 5.87784 9.21819 5.76649 9.7044L4.02284 17.3176C3.9115 17.8037 4.21819 18.2927 4.7044 18.404L6.10575 18.725C6.59192 18.8363 7.08089 18.5297 7.19223 18.0434L8.93588 10.4303C9.04723 9.94407 8.74054 9.45515 8.25432 9.34381ZM22.2906 18.4434L23.3265 17.9862L21.8581 11.5751L21.6476 11.6667C20.9736 11.9599 20.26 11.9134 19.6203 11.5561C19.1946 11.3182 18.8134 11.0946 18.4721 10.8944C17.0717 10.0728 16.3955 9.67619 15.4604 10.0258C14.8516 10.2534 14.1046 11.1381 13.2714 12.1248C12.6578 12.8514 11.9997 13.6308 11.2863 14.2762C11.8153 14.7967 12.353 14.9322 12.8939 14.8443C13.5614 14.7359 14.2673 14.3023 14.9749 13.8123C15.8988 13.1725 17.1302 13.2829 17.9249 14.0776L22.2906 18.4434ZM12.7554 11.6881C12.0848 12.4822 11.3596 13.341 10.5868 13.989C10.4358 14.1154 10.4249 14.3434 10.5616 14.4843C11.3399 15.4084 12.1611 15.6478 13.0024 15.5111C13.7995 15.3816 14.5832 14.9048 15.3587 14.3679C16.0171 13.9119 16.8798 13.9904 17.446 14.5565L21.7978 18.9083C22.1596 19.2701 22.1075 19.7542 21.7833 20.1202C21.4528 20.4342 20.9236 20.4275 20.6012 20.105L17.2481 16.7517C17.1844 16.6893 17.0986 16.6545 17.0093 16.6549C16.9201 16.6554 16.8346 16.691 16.7715 16.7541C16.7084 16.8172 16.6727 16.9027 16.6723 16.9919C16.6718 17.0812 16.7066 17.167 16.7691 17.2307C17.9333 18.3949 19.0975 19.559 20.2617 20.7232C20.5905 21.0519 20.59 21.5912 20.2615 21.9198L20.2621 21.9204C19.9336 22.2481 19.3932 22.2481 19.0651 21.9199L15.4581 18.3126C15.3943 18.2502 15.3085 18.2154 15.2193 18.2158C15.13 18.2163 15.0445 18.2519 14.9814 18.315C14.9183 18.3781 14.8827 18.4636 14.8822 18.5528C14.8818 18.6421 14.9166 18.7279 14.9791 18.7916L17.6547 21.4675C17.9711 21.7972 17.9658 22.3281 17.643 22.6517L17.6421 22.6513C17.3136 22.9798 16.7743 22.9801 16.4457 22.6515L13.5166 19.7223C13.4529 19.6598 13.367 19.625 13.2778 19.6255C13.1885 19.6259 13.1031 19.6616 13.04 19.7247C12.9769 19.7878 12.9412 19.8733 12.9408 19.9625C12.9403 20.0518 12.9751 20.1376 13.0376 20.2013L14.4031 21.5668C14.7228 21.897 14.718 22.4289 14.3933 22.7536L14.3939 22.7543C14.0653 23.0822 13.5249 23.0819 13.1967 22.7536L7.98775 17.6043L9.53901 10.8311H13.4911C13.2522 11.0998 13.0075 11.3896 12.7554 11.6881Z" fill="#9DFFA1"/>
                    </svg>
                    Partners
                  </span>

                </div>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-white mb-4 md:mb-8 leading-tight"> We <span className="text-[#9dffa1]">Build</span> While You Rest </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-6 md:mb-12 leading-relaxed">
                We offer a range of Call Answering Services on a 24x7 basis including Virtual 
                Receptionist Services, Information and Helplines, Product Order Lines and 
                Emergency Response.
            </p>

            <div className="p-0.5 bg-gradient-to-r from-[#dbdddc] to-[#39b63e] rounded-full inline-block mx-auto lg:mx-0">
              <button className="group inline-flex items-center gap-2 md:gap-3 p-[2px] rounded-full bg-gradient-to-r from-[#dcdedd] to-[#3eb343] hover:shadow-lg hover:shadow-green-400/50 transition-all duration-300 transform hover:scale-105 " onClick={handleLearnMoreClick}>
                  <span className="inline-flex items-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-3.5 rounded-full  bg-gradient-to-t from-[#92eb95] via-[#9dffa1] to-[#c3ffc6] text-[#2d4c2e] font-semibold text-sm md:text-base">
                      Learn More
                  </span>
              </button>
            </div>
          </div>

          <div className="flex-1 w-full relative  ">
              <div className="relative  overflow-hidden  ">
                  <Image src={partnerImg} alt="We Build While You Rest - Partners" />
              </div>
          </div>
        </div>

        <div className="relative z-10 mt-6 md:mt-10">
          <div className=" border rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 text-center backdrop-blur-md" style={{ borderColor: '#626463' }}>
          <div className="hidden md:inline-flex group absolute top-0 -right-10 w-64 h-64 bg-[#1a2a1c] rounded-full blur-3xl" />

          <div className="hidden md:inline-flex group absolute top-0 -left-10 w-64 h-64 bg-[#1a2a1c] rounded-full blur-3xl" />
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-white mb-3 md:mb-6"> Strategic <span className="text-[#9dffa1]">Partnerships</span></h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed"> We collaborate with top tech providers and cloud platforms like AWS, Azure, and Google Cloud to deliver innovative, future-ready solutions for our clients. </p>
          </div>
        </div>

        <div className='flex items-center justify-center mt-12 md:mt-20 relative z-10'>
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 text-center">Our <span className="text-[#9dffa1]">Partners</span></h3>
        </div>

        <div className='flex justify-center mt-8 md:mt-16 relative z-10 px-4'>
            <Image src={partnersLogoImg} alt="Our Partners Logos" width={1200} height={200} className="w-full max-w-6xl h-auto object-contain" />
        </div>

      </div>
    </div>
  );
}
