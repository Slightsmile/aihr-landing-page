'use client';
import React from 'react';
import {  Switch } from '@/app/static/icons';

const Service = () => {
    return (
         <div className="relative min-h-screen overflow-hidden">
            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center py-20">
            <div className="mb-6 md:mb-8">
                <div className="relative inline-block">
                {/* Gradient Border */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#8a8f8b] to-[#066a0a] rounded-full"></div>
                {/* Button */}
                <button
                    type="button"
                    className="relative inline-flex items-center gap-2 md:gap-3 lg:gap-2 bg-gray-950
                            pl-1.5 md:pl-2 pr-3 md:pr-5 py-1.5 md:py-2 rounded-full text-white text-xs
                            md:text-sm font-medium backdrop-blur-sm m-0.5">
                    <svg
                        width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="32" height="32" rx="16" fill="#C6FEC8" fillOpacity="0.32" />
                        <g clipPath="url(#clip0_520_16780)"> <path fillRule="evenodd" clipRule="evenodd" d="M25.0523 17.6817V16.5719C25.0523 14.2969 24.1602 12.1516 22.5402 10.5317C20.9203 8.91182 18.7754 8.02002 16.5 8.02002C14.2246 8.02002 12.0796 8.91182 10.4598 10.5317C8.83988 12.1517 7.9477 14.297 7.9477 16.5719V17.6817C7.49983 18.0034 7.13496 18.4271 6.88323 18.9177C6.6315 19.4083 6.50013 19.9518 6.5 20.5032C6.50111 21.3709 6.82619 22.2069 7.41155 22.8475C7.9969 23.488 8.80035 23.8869 9.66445 23.966V17.0402C9.28751 17.074 8.91867 17.1695 8.57266 17.3228V16.654H10.0379C10.1189 16.6539 10.1967 16.6225 10.255 16.5662C10.3133 16.51 10.3475 16.4334 10.3504 16.3524C10.4668 13.0806 13.2257 10.4183 16.5 10.4183C19.7743 10.4183 22.5332 13.0806 22.6495 16.3524C22.6525 16.4334 22.6867 16.51 22.7449 16.5663C22.8032 16.6225 22.881 16.6539 22.962 16.654H24.4273V17.3228C24.0813 17.1695 23.7125 17.074 23.3356 17.0402V23.966C24.0417 23.9026 24.7116 23.6247 25.2553 23.1696C25.7989 22.7146 26.1904 22.1042 26.3773 21.4203C26.5641 20.7364 26.5373 20.0117 26.3005 19.3434C26.0636 18.6752 25.6281 18.0954 25.0523 17.6817ZM22.6534 17.0262V23.9802H21.5273C21.4445 23.9802 21.365 23.9473 21.3064 23.8886C21.2478 23.83 21.2148 23.7506 21.2148 23.6677V17.3388C21.2148 17.2559 21.2478 17.1764 21.3064 17.1178C21.365 17.0592 21.4445 17.0263 21.5273 17.0263L22.6534 17.0262ZM10.3464 23.9802V17.0262H11.4727C11.5137 17.0262 11.5543 17.0343 11.5922 17.05C11.6302 17.0657 11.6646 17.0887 11.6936 17.1178C11.7226 17.1468 11.7457 17.1812 11.7614 17.2191C11.7771 17.2571 11.7852 17.2977 11.7852 17.3387V23.6676C11.7852 23.7505 11.7522 23.83 11.6936 23.8886C11.635 23.9472 11.5555 23.9801 11.4727 23.9801L10.3464 23.9802ZM7.125 20.5032C7.1247 19.7536 7.42035 19.0343 7.94766 18.5016V22.5047C7.42026 21.9721 7.12459 21.2527 7.125 20.5032ZM25.875 20.5032C25.8754 21.2527 25.5797 21.9721 25.0523 22.5047V18.5016C25.5796 19.0343 25.8753 19.7536 25.875 20.5032Z" fill="#9DFFA1" /> </g>
                        <defs> <clipPath id="clip0_520_16780"> <rect width="20" height="20" fill="white" transform="translate(6.5 6)" /> </clipPath> </defs>
                    </svg>
                    Services
                </button>
                </div>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold text-white mb-4 leading-tight text-center max-w-5xl">
                <span className="text-[#9dffa1]">Services</span>
            </h1>
            </div>

            {/* Service Buttons Row */}
            <div className="relative z-10 w-full mt-16 mb-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-10">
                    <div className="flex flex-wrap justify-center gap-3 lg:gap-4">
                        {/* CX Excellence */}
                        <div className="relative inline-block p-[1.5px] rounded-full bg-gradient-to-r from-[#2c2c2c] to-[#1f4320]">
                            <button
                                type="button"
                                className="relative inline-flex items-center justify-center px-7 py-3 text-lg font-semibold text-white rounded-full bg-gradient-to-r from-[#0c0c0c] to-[#222e23] backdrop-blur-sm transition-all duration-300 hover:from-[#4a9a48] hover:to-[#2d6b2d]">
                                CX Excellence
                            </button>
                        </div>

                        {/* Smart Back Office */}
                        <div className="relative inline-block p-[1.5px] rounded-full bg-gradient-to-r from-[#2c2c2c] to-[#1f4320]">
                            <button
                                type="button"
                                className="relative inline-flex items-center justify-center px-8 py-3 text-lg font-semibold text-white rounded-full bg-gradient-to-r from-[#0c0c0c] to-[#222e23] backdrop-blur-sm transition-all duration-300 hover:from-[#4a9a48] hover:to-[#2d6b2d]">
                                Smart Back Office
                            </button>
                        </div>

                        {/* Technical Support */}
                        <div className="relative inline-block p-[1.5px] rounded-full bg-gradient-to-r from-[#2c2c2c] to-[#1f4320]">
                            <button
                                type="button"
                                className="relative inline-flex items-center justify-center px-8 py-3 text-lg font-semibold text-white rounded-full bg-gradient-to-r from-[#0c0c0c] to-[#222e23] backdrop-blur-sm transition-all duration-300 hover:from-[#4a9a48] hover:to-[#2d6b2d]">
                                Technical Support
                            </button>
                        </div>

                        {/* Edu-Tech */}
                        <div className="relative inline-block p-[1.5px] rounded-full bg-gradient-to-r from-[#2c2c2c] to-[#1f4320]">
                            <button
                                type="button"
                                className="relative inline-flex items-center justify-center px-7 py-3 text-lg font-semibold text-white rounded-full bg-gradient-to-r from-[#0c0c0c] to-[#222e23] backdrop-blur-sm transition-all duration-300 hover:from-[#4a9a48] hover:to-[#2d6b2d]">
                                Edu-Tech
                            </button>
                        </div>

                        {/* Engage Digitally */}
                        <div className="relative inline-block p-[1.5px] rounded-full bg-gradient-to-r from-[#2c2c2c] to-[#1f4320]">
                            <button
                                type="button"
                                className="relative inline-flex items-center justify-center px-8 py-3 text-lg font-semibold text-white rounded-full bg-gradient-to-r from-[#0c0c0c] to-[#222e23] backdrop-blur-sm transition-all duration-300 hover:from-[#4a9a48] hover:to-[#2d6b2d]">
                                Engage Digitally
                            </button>
                        </div>

                        {/* AI Call Automation */}
                        <div className="relative inline-block p-[1.5px] rounded-full bg-gradient-to-r from-[#2c2c2c] to-[#1f4320]">
                            <button
                                type="button"
                                className="relative inline-flex items-center justify-center px-8 py-3 text-lg font-semibold text-white rounded-full bg-gradient-to-r from-[#0c0c0c] to-[#222e23] backdrop-blur-sm transition-all duration-300 hover:from-[#4a9a48] hover:to-[#2d6b2d]">
                                AI Call Automation
                            </button>
                        </div>

                        {/* SaaS & AI */}
                        <div className="relative inline-block p-[1.5px] rounded-full bg-gradient-to-r from-[#2c2c2c] to-[#1f4320]">
                            <button
                                type="button"
                                className="relative inline-flex items-center justify-center px-7 py-3 text-lg font-semibold text-white rounded-full bg-gradient-to-r from-[#0c0c0c] to-[#222e23] backdrop-blur-sm transition-all duration-300 hover:from-[#4a9a48] hover:to-[#2d6b2d]">
                                SaaS & AI
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Service Cards Section */}
            <div className="relative z-10 w-full mt-20 mb-16 px-10">
                <div className="container mx-auto px-4 sm:px-6 lg:px-10">
                    <div className="space-y-4">
                        {/* Inbound Services Card */}
                        <div className="relative inline-block w-full p-[1.5px] rounded-3xl bg-gradient-to-r from-[#848483] to-[#3e5c3e]">
                            <div className="relative flex items-center justify-between px-8 py-10 rounded-[calc(1.5rem-1.5px)] bg-gray-950 transition-all duration-300">
                                <div className="flex items-center gap-4">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center h-full w-full rounded-full ">
                                            <svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M45.5312 36.616L52.3564 40.6874C53.0434 41.0987 53.5861 41.7127 53.9099 42.445C54.2337 43.1772 54.3227 43.9919 54.1647 44.7768C53.858 46.3474 53.2322 47.8383 52.326 49.1573C51.4198 50.4762 50.2524 51.5951 48.8963 52.4446C47.5401 53.2942 46.024 53.8563 44.4418 54.0961C42.8596 54.336 41.2451 54.2485 39.698 53.8391C32.1569 51.7719 25.2837 47.7776 19.7542 42.2489C14.2246 36.7203 10.2292 29.8477 8.16071 22.307C7.75129 20.7601 7.66372 19.1457 7.90343 17.5637C8.14314 15.9816 8.70502 14.4656 9.55429 13.1095C10.4036 11.7534 11.5221 10.586 12.8408 9.67968C14.1594 8.77332 15.6501 8.14728 17.2205 7.84029H17.2618C18.0502 7.68167 18.8684 7.77226 19.603 8.09952C20.3376 8.42678 20.9522 8.97449 21.3615 9.66671L25.4019 16.4867C26.0872 17.6542 26.2995 19.0398 25.9955 20.3589C25.6914 21.6781 24.8939 22.8308 23.7666 23.5805L19.486 26.4351C22.5161 33.6946 28.279 39.4714 35.5311 42.519L38.4115 38.2177C39.1674 37.0897 40.3272 36.2947 41.6519 35.9967C42.9766 35.6987 44.3651 35.9204 45.5312 36.616ZM53.0358 8.96404C52.8561 8.78408 52.6427 8.6413 52.4077 8.54389C52.1728 8.44648 51.921 8.39634 51.6666 8.39634C51.4123 8.39634 51.1605 8.44648 50.9255 8.54389C50.6906 8.6413 50.4772 8.78408 50.2975 8.96404L40.6875 18.5715V14.6396C40.6875 14.1258 40.4833 13.633 40.12 13.2696C39.7566 12.9063 39.2638 12.7021 38.75 12.7021C38.2361 12.7021 37.7433 12.9063 37.3799 13.2696C37.0166 13.633 36.8125 14.1258 36.8125 14.6396V23.2499C36.8145 23.7631 37.0193 24.2547 37.3822 24.6176C37.7451 24.9806 38.2367 25.1853 38.75 25.1874H47.3602C47.8741 25.1874 48.3669 24.9832 48.7302 24.6199C49.0936 24.2565 49.2977 23.7637 49.2977 23.2499C49.2977 22.736 49.0936 22.2432 48.7302 21.8799C48.3669 21.5165 47.8741 21.3124 47.3602 21.3124H43.4284L53.0358 11.7024C53.2158 11.5227 53.3585 11.3092 53.4559 11.0743C53.5534 10.8394 53.6035 10.5875 53.6035 10.3332C53.6035 10.0789 53.5534 9.82705 53.4559 9.59211C53.3585 9.35718 53.2158 9.14375 53.0358 8.96404Z" fill="#A8FF9F"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <h3 className="text-lg md:text-xl font-semibold text-white">Inbound Services</h3>
                                </div>


                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-19 w-19 border-1 border-[#353535] border-opacity-100 rounded-3xl">   
                                        <Switch/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Outbound Campaigns Card */}
                        <div className="relative inline-block w-full p-[1.5px] rounded-3xl bg-gradient-to-r from-[#848483] to-[#3e5c3e]">
                            <div className="relative flex items-center justify-between px-8 py-10 rounded-[calc(1.5rem-1.5px)] bg-gray-950 transition-all duration-300">
                                <div className="flex items-center gap-4">
                                    <div className="flex-shrink-0">
                                         <div className="flex items-center justify-center h-full w-full rounded-full">
                                            <svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M52.9204 9.07973C47.0653 3.22461 39.2804 0 31 0C22.7196 0 14.9347 3.22461 9.07961 9.07973C3.22448 14.9349 0 22.7196 0 31C0 39.2804 3.22448 47.0653 9.07961 52.9203C14.9347 58.7753 22.7196 62 31 62C39.2804 62 47.0653 58.7754 52.9204 52.9203C58.7755 47.0651 62 39.2804 62 31C62 22.7196 58.7755 14.9347 52.9204 9.07973ZM31 55.9153C17.2616 55.9153 6.08472 44.7383 6.08472 31C6.08472 30.9775 6.08545 30.9552 6.08557 30.9329C6.08557 30.9272 6.08472 30.9218 6.08472 30.9161C6.08472 30.9065 6.08593 30.8973 6.08617 30.8879C6.1466 17.3141 17.1161 6.27072 30.6614 6.08908C30.6898 6.08775 30.7179 6.08484 30.7465 6.08484C30.7637 6.08484 30.7805 6.0869 30.7975 6.08738C30.8651 6.0869 30.9324 6.08484 31.0001 6.08484C44.7386 6.08484 55.9154 17.2618 55.9154 31.0001C55.9154 44.7384 44.7384 55.9153 31 55.9153Z" fill="#9FC8FF"/>
                                                <path d="M49.9253 32.4966C48.9122 32.4966 48.0909 31.6754 48.0909 30.6623C48.0909 29.6492 48.9122 28.828 49.9253 28.828H52.1363C51.0978 18.6469 42.8409 10.5703 32.5807 9.81201V11.7368C32.5807 12.7499 31.7594 13.5711 30.7463 13.5711C29.7333 13.5711 28.912 12.7499 28.912 11.7368V9.85585C18.8036 10.8464 10.7517 18.9502 9.8407 29.0814H11.8208C12.8339 29.0814 13.6552 29.9027 13.6552 30.9157C13.6552 31.9288 12.8339 32.7501 11.8208 32.7501H9.82568C10.6691 43.0444 18.8824 51.2829 29.1656 52.1665V49.8411C29.1656 48.8281 29.9868 48.0068 30.9999 48.0068C32.013 48.0068 32.8342 48.8281 32.8342 49.8411V52.1665C43.2015 51.2756 51.4649 42.9088 52.1931 32.4966H49.9253ZM38.4254 26.1685L32.2971 32.2969C32.1267 32.4673 31.9245 32.6024 31.702 32.6946C31.4794 32.7868 31.2409 32.8343 31 32.8343C30.7591 32.8343 30.5206 32.7868 30.298 32.6946C30.0755 32.6024 29.8733 32.4673 29.703 32.2969L19.0355 21.6294C18.3191 20.9132 18.3191 19.7518 19.0355 19.0354C19.7517 18.319 20.9131 18.319 21.6295 19.0354L31.0001 28.4058L35.8315 23.5744C36.5478 22.858 37.7092 22.858 38.4256 23.5744C39.1418 24.2907 39.1418 25.4522 38.4254 26.1685Z" fill="#9FC8FF"/>
                                            </svg>


                                        </div>
                                    </div>
                                    <h3 className="text-lg md:text-xl font-semibold text-white">Outbound Campaigns</h3>
                                </div>
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-19 w-19 border-1 border-[#353535] border-opacity-100 rounded-3xl">   
                                        <Switch/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Telemarketing Solutions Card */}
                        <div className="relative inline-block w-full p-[1.5px] rounded-3xl bg-gradient-to-r from-[#848483] to-[#3e5c3e]">
                            <div className="relative flex items-center justify-between px-8 py-10 rounded-[calc(1.5rem-1.5px)] bg-gray-950 transition-all duration-300">
                                <div className="flex items-center gap-4">
                                    <div className="flex-shrink-0">
                                         <div className="flex items-center justify-center h-full w-full rounded-full
                                         ">
                                            <svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <mask id="mask0_520_16857" maskUnits="userSpaceOnUse" x="0" y="0" width="62" height="62">
                                                <path d="M0 0H62V62H0V0Z" fill="white"/>
                                                </mask>
                                                <g mask="url(#mask0_520_16857)">
                                                <path d="M18.0835 14.2082C18.0835 10.7825 19.4444 7.49705 21.8667 5.07471C24.289 2.65236 27.5745 1.2915 31.0002 1.2915C34.4259 1.2915 37.7113 2.65236 40.1336 5.07471C42.556 7.49705 43.9168 10.7825 43.9168 14.2082V28.4165C43.9168 31.8422 42.556 35.1276 40.1336 37.55C37.7113 39.9723 34.4259 41.3332 31.0002 41.3332C27.5745 41.3332 24.289 39.9723 21.8667 37.55C19.4444 35.1276 18.0835 31.8422 18.0835 28.4165V14.2082Z" fill="#FF9FD5"/>
                                                <path d="M31.0157 46.5H30.9847C27.3846 46.4968 23.8674 45.4197 20.883 43.4063C17.8986 41.3929 15.5827 38.5349 14.2318 35.198C13.9717 34.5674 13.4728 34.0652 12.8439 33.8011C12.215 33.537 11.5071 33.5323 10.8748 33.7881C10.2425 34.0439 9.73699 34.5394 9.46861 35.1665C9.20024 35.7936 9.19077 36.5014 9.44227 37.1355C11.0159 41.0204 13.6097 44.4083 16.9495 46.941C20.2894 49.4738 24.2514 51.0574 28.4168 51.5246V59.4167C28.4168 60.1018 28.689 60.7589 29.1735 61.2434C29.658 61.7279 30.315 62 31.0002 62C31.6853 62 32.3424 61.7279 32.8269 61.2434C33.3113 60.7589 33.5835 60.1018 33.5835 59.4167V51.5246C37.7495 51.0578 41.712 49.4744 45.0523 46.9416C48.3927 44.4089 50.9868 41.0208 52.5607 37.1355C52.8122 36.5014 52.8027 35.7936 52.5343 35.1665C52.266 34.5394 51.7605 34.0439 51.1281 33.7881C50.4958 33.5323 49.788 33.537 49.1591 33.8011C48.5302 34.0652 48.0313 34.5674 47.7712 35.198C46.4203 38.5355 44.1042 41.394 41.1192 43.4074C38.1342 45.4209 34.6162 46.4977 31.0157 46.5Z" fill="#FF9FD5"/>
                                                </g>
                                            </svg>


                                        </div>
                                    </div>
                                    <h3 className="text-lg md:text-xl font-semibold text-white">Telemarketing Solutions</h3>
                                </div>
                               <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-19 w-19 border-1 border-[#353535] border-opacity-100 rounded-3xl">   
                                        <Switch/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Digital Queue Management Card */}
                        <div className="relative inline-block w-full p-[1.5px] rounded-3xl bg-gradient-to-r from-[#848483] to-[#3e5c3e]">
                            <div className="relative flex items-center justify-between px-8 py-10 rounded-[calc(1.5rem-1.5px)] bg-gray-950 transition-all duration-300">
                                <div className="flex items-center gap-4">
                                    <div className="flex-shrink-0">
                                         <div className="flex items-center justify-center h-full w-full rounded-full">
                                            <svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M50.2975 10.4108C50.6592 10.775 50.8659 11.2684 50.8659 11.7799V21.6741C50.8659 22.188 50.6617 22.6808 50.2984 23.0441C49.935 23.4075 49.4422 23.6116 48.9284 23.6116C48.4145 23.6116 47.9217 23.4075 47.5584 23.0441C47.195 22.6808 46.9909 22.188 46.9909 21.6741V16.4558L38.8275 24.6191C38.6487 24.8041 38.4349 24.9516 38.1984 25.053C37.962 25.1544 37.7077 25.2077 37.4505 25.2099C37.1932 25.212 36.9381 25.1628 36.7001 25.0653C36.462 24.9678 36.2457 24.8238 36.0639 24.6418C35.8821 24.4598 35.7383 24.2434 35.641 24.0052C35.5437 23.7671 35.4948 23.5119 35.4972 23.2547C35.4995 22.9974 35.5531 22.7432 35.6547 22.5069C35.7564 22.2705 35.9041 22.0568 36.0892 21.8782L44.25 13.7148H39.0342C38.5204 13.7148 38.0275 13.5107 37.6642 13.1474C37.3008 12.784 37.0967 12.2912 37.0967 11.7773C37.0967 11.2635 37.3008 10.7707 37.6642 10.4073C38.0275 10.044 38.5204 9.83984 39.0342 9.83984H48.9232C49.4369 9.8403 49.9294 10.0447 50.2924 10.4082L50.2975 10.4108Z" fill="#FFEC9F"/>
                                                <path d="M12.9166 25.4715C17.8762 36.272 26.6888 44.8321 37.6288 49.4759L39.3854 50.2586C41.3307 51.1249 43.5194 51.2767 45.5657 50.6874C47.612 50.0981 49.3846 48.8054 50.5713 47.0372L52.8678 43.6169C53.2272 43.0805 53.3727 42.4289 53.2757 41.7906C53.1786 41.1523 52.846 40.5734 52.3434 40.1681L44.5624 33.8906C44.2914 33.6721 43.9791 33.5107 43.6442 33.4159C43.3092 33.3212 42.9586 33.2951 42.6133 33.3393C42.268 33.3834 41.9353 33.4969 41.6349 33.6729C41.3346 33.8489 41.073 34.0837 40.8657 34.3634L38.458 37.6106C32.2777 34.5582 27.2751 29.5548 24.2238 23.3739L27.4685 20.9662C27.7481 20.7589 27.983 20.4973 28.159 20.1969C28.335 19.8966 28.4484 19.5638 28.4926 19.2186C28.5368 18.8733 28.5107 18.5226 28.4159 18.1877C28.3212 17.8528 28.1597 17.5404 27.9413 17.2694L21.6638 9.48844C21.2584 8.98586 20.6796 8.65328 20.0413 8.55622C19.4029 8.45916 18.7514 8.60465 18.215 8.96402L14.7714 11.2735C12.9925 12.4665 11.6949 14.2521 11.1097 16.3125C10.5245 18.3728 10.6897 20.574 11.5758 22.5239L12.9166 25.4715Z" fill="#FFEC9F"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <h3 className="text-lg md:text-xl font-semibold text-white">Digital Queue Management</h3>
                                </div>
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-19 w-19 border-1 border-[#353535] border-opacity-100 rounded-3xl">   
                                        <Switch/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Service;