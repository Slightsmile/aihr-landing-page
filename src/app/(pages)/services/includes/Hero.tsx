
'use client';
import React from 'react';

const Hero = () => {
   return (
        <div className="relative min-h-screen overflow-hidden">
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
                <div className="absolute bottom-36 right-60 w-1 h-1 bg-[#336935] rounded-full animate-pulse" style={{ animationDelay: '1.2s', animationDuration: '1.5s' }}></div>
                <div className="absolute top-1/2 right-24 w-1 h-1 bg-emerald-400 rounded-full animate-pulse" style={{ animationDelay: '0.9s', animationDuration: '1.5s' }}></div>
            </div>

            {/* Top Left Stat Box  */}
                <svg width="111" height="111" viewBox="0 0 111 111" fill="none" xmlns="http://www.w3.org/2000/svg"
                    className='absolute top-10 left-10
                     md:left-70 md:top-16 z-10
                      animate-bounce-slow'>
                        <defs>
                            <linearGradient id="borderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#A8FF9F" stopOpacity="0.8" />
                                <stop offset="50%" stopColor="#4F7E4F" stopOpacity="0.9" />
                                <stop offset="100%" stopColor="#A8FF9F" stopOpacity="0.8" />
                            </linearGradient>
                        </defs>
                        <g opacity="0.7">
                            <rect y="28.7383" width="86.4205" height="86.4205" rx="20" transform="rotate(-19.4231 0 28.7383)" 
                                fill="#4F7E4F" fillOpacity="0.2" 
                                stroke="url(#borderGradient)" strokeWidth="2"/>
                            <path d="M65.0233 58.6234L69.867 61.5127C70.3545 61.8046 70.7397 62.2404 70.9695 62.76C71.1993 63.2797 71.2624 63.8578 71.1503 64.4149C70.9327 65.5295 70.4885 66.5876 69.8454 67.5236C69.2023 68.4597 68.3738 69.2537 67.4114 69.8566C66.449 70.4595 65.373 70.8584 64.2502 71.0286C63.1273 71.1989 61.9815 71.1368 60.8836 70.8462C55.5319 69.3792 50.6541 66.5445 46.7299 62.6209C42.8057 58.6974 39.9702 53.8201 38.5023 48.4686C38.2117 47.3708 38.1496 46.2251 38.3197 45.1024C38.4898 43.9796 38.8886 42.9038 39.4913 41.9414C40.094 40.9789 40.8878 40.1505 41.8236 39.5073C42.7595 38.8641 43.8173 38.4198 44.9318 38.2019H44.9611C45.5206 38.0893 46.1013 38.1536 46.6226 38.3859C47.144 38.6181 47.5801 39.0068 47.8706 39.4981L50.738 44.3381C51.2243 45.1666 51.375 46.1499 51.1592 47.0861C50.9434 48.0223 50.3774 48.8404 49.5775 49.3724L46.5396 51.3982C48.69 56.5501 52.7798 60.6498 57.9265 62.8126L59.9706 59.7601C60.507 58.9596 61.3301 58.3954 62.2702 58.1839C63.2103 57.9724 64.1958 58.1297 65.0233 58.6234ZM70.3491 38.9994C70.2216 38.8717 70.0701 38.7704 69.9034 38.7012C69.7367 38.6321 69.558 38.5965 69.3775 38.5965C69.197 38.5965 69.0183 38.6321 68.8515 38.7012C68.6848 38.7704 68.5333 38.8717 68.4058 38.9994L61.5858 45.8176V43.0272C61.5858 42.6626 61.4409 42.3128 61.1831 42.055C60.9252 41.7971 60.5755 41.6522 60.2108 41.6522C59.8461 41.6522 59.4964 41.7971 59.2385 42.055C58.9807 42.3128 58.8358 42.6626 58.8358 43.0272V49.1377C58.8372 49.502 58.9826 49.8509 59.2401 50.1084C59.4977 50.366 59.8466 50.5113 60.2108 50.5127H66.3213C66.686 50.5127 67.0357 50.3679 67.2936 50.11C67.5514 49.8521 67.6963 49.5024 67.6963 49.1377C67.6963 48.7731 67.5514 48.4233 67.2936 48.1655C67.0357 47.9076 66.686 47.7627 66.3213 47.7627H63.531L70.3491 40.9427C70.4769 40.8152 70.5782 40.6637 70.6473 40.497C70.7164 40.3303 70.752 40.1516 70.752 39.9711C70.752 39.7906 70.7164 39.6119 70.6473 39.4451C70.5782 39.2784 70.4769 39.1269 70.3491 38.9994Z" fill="#A8FF9F"/>
                        </g>
                </svg>
                 {/* Top Right Stat Box  */}
                <svg width="111" height="111" viewBox="0 0 111 111" fill="none" xmlns="http://www.w3.org/2000/svg"
                    className='absolute top-20 right-20 md:right-60 md:top-50 z-10 animate-bounce-slow'>
                    <defs>
                        <linearGradient id="borderGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#A8FF9F" stopOpacity="0.8" />
                            <stop offset="50%" stopColor="#4F7E4F" stopOpacity="0.9" />
                            <stop offset="100%" stopColor="#A8FF9F" stopOpacity="0.8" />
                        </linearGradient>
                    </defs>
                    <g opacity="0.7">
                        <rect y="28.7383" width="86.4205" height="86.4205" rx="20" transform="rotate(-19.4231 0 28.7383)" 
                            fill="#4F7E4F" fillOpacity="0.2" 
                            stroke="url(#borderGradient2)" strokeWidth="2"/>
                        <path d="M57.6855 35.292C58.198 35.3505 58.7374 35.4857 59.2402 35.8477C59.7426 36.2094 60.0406 36.6765 60.2578 37.1426C60.4529 37.5615 61.4365 40.4961 61.4365 40.4961C61.6112 40.935 61.9171 41.3087 62.3115 41.5674C63.4062 42.2853 64.377 42.0752 64.377 42.0752C64.9831 41.9037 67.8265 41.1044 68.3135 41.0274C68.8551 40.9417 69.4478 40.9304 70.0605 41.1787C70.673 41.427 71.0898 41.8473 71.418 42.2852C71.418 42.2852 73.8703 46.4102 74.0557 46.8369C74.2621 47.312 74.4138 47.8483 74.3486 48.4668C74.2834 49.0856 74.0228 49.579 73.7217 50.001C73.451 50.3802 70.7783 53.3535 70.7783 53.3535C70.7677 53.3664 70.3018 53.9401 70.3018 55C70.3019 55.9101 70.7726 56.6378 70.7783 56.6465C71.1726 57.0834 73.4513 59.6201 73.7217 59.999C74.0228 60.421 74.2834 60.9145 74.3486 61.5332C74.4137 62.1517 74.2621 62.688 74.0557 63.1631L71.418 67.7139C71.0898 68.1518 70.6731 68.572 70.0605 68.8203C69.4478 69.0687 68.8551 69.0584 68.3135 68.9727C67.8288 68.896 64.412 67.9337 64.377 67.9238C63.8678 67.8136 63.0861 67.9246 62.3115 68.4326C61.9171 68.6913 61.4365 69.5039 61.4365 69.5039C61.4298 69.524 60.4523 72.44 60.2578 72.8574C60.0406 73.3235 59.7426 73.7906 59.2402 74.1524C58.7374 74.5143 58.198 74.6496 57.6855 74.708H52.5439C52.0314 74.6496 51.4922 74.5144 50.9893 74.1524C50.4866 73.7906 50.1879 73.3237 49.9707 72.8574C49.776 72.4394 48.7959 69.5155 48.792 69.5039C48.7903 69.5011 48.3116 68.6913 47.918 68.4326C47.1436 67.9247 46.3617 67.8137 45.8525 67.9238C45.8525 67.9238 42.4042 68.8952 41.916 68.9727C41.3742 69.0584 40.7809 69.0688 40.168 68.8203C39.5555 68.5719 39.1387 68.1518 38.8105 67.7139L36.1729 63.1631C35.9665 62.6881 35.8148 62.1517 35.8799 61.5332C35.9451 60.9145 36.2058 60.421 36.5068 59.999C36.7772 59.6201 39.0559 57.0834 39.4502 56.6465C39.4502 56.6465 39.9267 55.9156 39.9268 55C39.9268 53.9364 39.4576 53.3625 39.4502 53.3535C39.4502 53.3535 36.7772 50.3799 36.5068 50.001C36.2057 49.579 35.9451 49.0855 35.8799 48.4668C35.8148 47.8483 35.9665 47.312 36.1729 46.8369C36.3583 46.4102 38.8105 42.2852 38.8105 42.2852C39.1387 41.8473 39.5555 41.427 40.168 41.1787C40.7808 40.9303 41.3742 40.9416 41.916 41.0274C42.4042 41.1048 45.2477 41.9041 45.8525 42.0752C45.8674 42.0784 46.8308 42.2796 47.917 41.5674C48.3114 41.3087 48.6173 40.9349 48.792 40.4961C48.792 40.4961 49.7756 37.5615 49.9707 37.1426C50.1879 36.6764 50.4866 36.2094 50.9893 35.8477C51.4922 35.4857 52.0314 35.3504 52.5439 35.292H57.6855ZM51.334 48.125C50.1948 48.125 49.1826 48.8539 48.8223 49.9346L45.4453 60.0654C45.2054 60.7858 45.5951 61.5646 46.3154 61.8047C47.0358 62.0447 47.8146 61.655 48.0547 60.9346L48.9639 58.208H53.7031L54.6123 60.9346C54.8524 61.655 55.6312 62.0447 56.3516 61.8047C57.0719 61.5646 57.4616 60.7858 57.2217 60.0654L53.8447 49.9346C53.4845 48.854 52.473 48.1252 51.334 48.125ZM61.416 48.125C60.6568 48.1253 60.041 48.7408 60.041 49.5L60.041 60.5C60.041 61.2593 60.6568 61.8748 61.416 61.875C62.1754 61.875 62.791 61.2594 62.791 60.5L62.791 49.5C62.791 48.7406 62.1754 48.125 61.416 48.125ZM52.7871 55.458H49.8799L51.334 51.0977L52.7871 55.458Z" fill="#A8FF9F"/>
                    </g>
                </svg>

                     {/* Bottom Right Stat Box  */}
                <svg width="111" height="111" viewBox="0 0 111 111" fill="none" xmlns="http://www.w3.org/2000/svg"
                    className='absolute bottom-40 left-16 md:left-70 md:bottom-30 z-10 animate-bounce-slow'>
                    <defs>
                        <linearGradient id="borderGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#A8FF9F" stopOpacity="0.8" />
                            <stop offset="50%" stopColor="#4F7E4F" stopOpacity="0.9" />
                            <stop offset="100%" stopColor="#A8FF9F" stopOpacity="0.8" />
                        </linearGradient>
                    </defs>
                    <g opacity="0.7">
                        <rect y="28.7383" width="86.4205" height="86.4205" rx="20" transform="rotate(-19.4231 0 28.7383)" 
                            fill="#4F7E4F" fillOpacity="0.2" 
                            stroke="url(#borderGradient3)" strokeWidth="2"/>
                        <path d="M57.0005 38.6671C64.4973 38.6671 71.0898 43.707 71.6294 50.587C71.633 50.589 71.6366 50.5908 71.6401 50.5928C72.1001 50.851 72.4438 51.1973 72.6919 51.4815C72.8289 51.6385 73.0141 51.8741 73.1489 52.045C73.9848 53.0602 74.8395 54.1041 75.3413 54.8165C75.8595 55.5521 76.2523 56.2537 76.4692 57.0479C76.7893 58.2197 76.7893 59.4474 76.4692 60.6192C76.1703 61.7136 75.5679 62.6554 74.9673 63.4415C74.6036 63.9174 74.1624 64.4288 73.7739 64.879C73.5615 65.1252 73.2589 65.4818 73.0991 65.6758C72.6573 66.2149 72.2212 66.7471 71.6401 67.0733C71.4354 67.1882 71.2197 67.2797 70.9985 67.3526V67.7003C70.9984 71.4746 67.0037 74.0001 62.8735 74.0001H59.6235C58.7261 74.0001 57.9985 73.3285 57.9985 72.5001C57.9985 71.6716 58.7261 71.0001 59.6235 71.0001H62.8735C65.9229 71.0001 67.7484 69.2277 67.7485 67.7003V66.9561C67.5966 66.8888 67.4494 66.8242 67.313 66.7618C66.66 66.47 65.4294 65.9193 64.9604 64.5313C64.7899 64.0266 64.7912 63.4866 64.7925 62.9844V54.6817C64.7912 54.1796 64.7899 53.6396 64.9604 53.1348C65.4295 51.7473 66.6601 51.1971 67.313 50.9053C67.5084 50.8159 67.7241 50.7171 67.9478 50.6212C67.4226 46.174 62.9612 42.3332 57.0005 42.3331C51.0392 42.3331 46.5768 46.1745 46.0522 50.6221C46.2759 50.7181 46.4917 50.8159 46.687 50.9053C47.3399 51.197 48.5715 51.7471 49.0405 53.1348C49.2111 53.6396 49.2097 54.1796 49.2085 54.6817V62.9844C49.2097 63.4865 49.211 64.0266 49.0405 64.5313C48.5716 65.9193 47.34 66.47 46.687 66.7618C46.0217 67.0662 45.1219 67.4763 44.4663 67.5294C43.7379 67.5882 43.0007 67.4324 42.3608 67.0733C41.7797 66.7471 41.3428 66.215 40.9009 65.6758C40.741 65.4817 40.4385 65.1251 40.2261 64.879C39.8376 64.4289 39.3973 63.9173 39.0337 63.4415C38.433 62.6554 37.8307 61.7137 37.5317 60.6192C37.2116 59.4474 37.2117 58.2198 37.5317 57.0479C37.7487 56.2537 38.1415 55.5521 38.6597 54.8165C39.1615 54.1041 40.0162 53.0602 40.8521 52.045C40.9868 51.8741 41.1721 51.6385 41.3091 51.4815C41.5572 51.1973 41.901 50.8509 42.3608 50.5928C42.3638 50.5912 42.3667 50.5896 42.3696 50.588C42.9086 43.7074 49.5032 38.6671 57.0005 38.6671Z" fill="#A8FF9F"/>
                    </g>
                </svg>

            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center py-20">
                 <div className="mb-6 md:mb-8">
                    <div className="relative inline-block">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#8a8f8b] to-[#066a0a] rounded-full" />
                        <p
                        className="relative inline-flex items-center gap-2 md:gap-3 lg:gap-2 lg:w-70 lg:h-11 bg-gray-950
                            pl-1.5 md:pl-2 pr-3 md:pr-5 py-1.5 md:py-2 rounded-full text-white text-xs md:text-sm
                            font-medium backdrop-blur-sm m-0.5"
                        >
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

                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-white mb-4 leading-tight text-center max-w-5xl">
                    Comprehensive <span className="text-[#9dffa1]">BPO &</span>
                    <br />
                    Digital <span className="text-[#9dffa1]"> Solutions </span>
                </h1>

                <p className="text-[#bebec0] text-base sm:text-lg lg:text-md leading-relaxed mb-6 max-w-3xl mx-auto text-center">
                    From business process outsourcing to AI-driven automation, DRC delivers tailored solutions that streamline operations, reduce costs, and drive growth.
                </p>

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