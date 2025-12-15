
'use client'

import React from 'react';
import { Link } from '@/app/static/icons';

const GetInTouchSection = () => {
    return (
        <div className="space-y-6 md:space-y-8">
            {/* Badge */}
            <button className="group inline-flex items-center gap-2 md:gap-3 p-[2px] rounded-full  bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-gold)] hover:shadow-lg transition-all  duration-300 transform hover:scale-105">
                <span className="inline-flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2 md:py-3 rounded-full bg-white text-[var(--primary-navy)] font-semibold text-xs md:text-sm lg:text-base">
                    <svg width="24" height="24" className="md:w-8 md:h-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="32" height="32" rx="16" fill="#3b82f6" fillOpacity="0.1" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M17.6814 5.25C19.5192 5.24999 20.9748 5.24997 22.114 5.40314C23.2864 5.56076 24.2354 5.89288 24.9838 6.64124C25.7321 7.38961 26.0642 8.33856 26.2219 9.51098C26.375 10.6502 26.375 12.1058 26.375 13.9435V18.0564C26.375 19.8941 26.375 21.3498 26.2219 22.489C26.0642 23.6614 25.7321 24.6104 24.9838 25.3588C24.2354 26.1071 23.2864 26.4392 22.114 26.5969C20.9748 26.75 19.5192 26.75 17.6815 26.75H16.0686C14.2309 26.75 12.7752 26.75 11.636 26.5969C10.4636 26.4392 9.51461 26.1071 8.76624 25.3588C8.12977 24.7223 7.79438 23.9407 7.61135 23H6.625C6.07272 23 5.625 22.5523 5.625 22C5.625 21.4477 6.07272 21 6.625 21H7.40942C7.37498 20.1503 7.37499 19.174 7.375 18.0564V17H6.625C6.07272 17 5.625 16.5523 5.625 16C5.625 15.4477 6.07272 15 6.625 15H7.375V13.9436C7.37499 12.826 7.37498 11.8497 7.40942 11H6.625C6.07272 11 5.625 10.5523 5.625 10C5.625 9.44772 6.07272 9 6.625 9H7.61135C7.79438 8.05927 8.12977 7.27771 8.76624 6.64124C9.51461 5.89288 10.4636 5.56076 11.636 5.40314C12.7752 5.24997 14.2308 5.24999 16.0686 5.25H17.6814ZM14.6996 10.7751C15.0916 10.8561 15.3867 11.1164 15.5607 11.4286L15.9701 12.1632C16.1116 12.4169 16.2463 12.6585 16.3368 12.8746C16.4382 13.1167 16.5139 13.3925 16.4807 13.7108C16.4475 14.0292 16.3165 14.2834 16.1674 14.4993C16.0342 14.6921 15.8526 14.9007 15.6618 15.1198L14.8511 16.051C15.5503 17.1128 16.51 18.0729 17.5728 18.7727L18.504 17.962C18.723 17.7713 18.9317 17.5896 19.1245 17.4564C19.3404 17.3073 19.5946 17.1763 19.913 17.1431C20.2313 17.1099 20.5071 17.1856 20.7492 17.287C20.9653 17.3775 21.2068 17.5122 21.4606 17.6537L22.1952 18.0631C22.5074 18.2372 22.7677 18.5322 22.8487 18.9242C22.9309 19.3221 22.8046 19.7047 22.5657 19.9978C21.8605 20.863 20.7064 21.4421 19.4682 21.1923C18.7755 21.0526 18.0919 20.8186 17.2764 20.3509C15.6534 19.4201 14.2026 17.9685 13.2729 16.3474C12.8052 15.5319 12.5712 14.8483 12.4315 14.1556C12.1817 12.9173 12.7608 11.7633 13.626 11.0581C13.9191 10.8192 14.3017 10.6929 14.6996 10.7751Z" fill="#3b82f6" />
                    </svg>
                    Contact Us
                </span>
            </button>

            {/* Heading */}
            <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-[var(--primary-navy)] mb-4 md:mb-6 leading-tight">
                    Get In <span className="text-[var(--accent-blue)]">Touch</span>
                </h1>
                <p className="text-[var(--charcoal)] text-base md:text-lg">
                    Let&apos;s start a conversation that moves your business forward.
                </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-3 md:space-y-4">
                {/* Email */}
                <div className="p-[1px] rounded-2xl bg-gray-200 cursor-pointer group hover:bg-gradient-to-r hover:from-[var(--accent-blue)] hover:to-[var(--accent-gold)] transition-all">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-2 md:gap-4 p-3 md:p-4 rounded-xl bg-[var(--card-bg)] shadow-md">
                        <div className='flex flex-row gap-2 flex-1 min-w-0'>

                            <div className="flex items-center justify-center w-10 md:w-12 h-10 md:h-12 rounded-lg bg-blue-50 group-hover:bg-blue-100 transition-colors flex-shrink-0">
                                <svg width="32" height="32" className="md:w-10 md:h-10" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.5" y="0.5" width="39" height="39" rx="9.5" stroke="#d1d5db" />
                                    <path d="M25 11.5H15C12 11.5 10 13 10 16.5V23.5C10 27 12 28.5 15 28.5H25C28 28.5 30 27 30 23.5V16.5C30 13 28 11.5 25 11.5ZM25.47 17.59L22.34 20.09C21.68 20.62 20.84 20.88 20 20.88C19.16 20.88 18.31 20.62 17.66 20.09L14.53 17.59C14.21 17.33 14.16 16.85 14.41 16.53C14.67 16.21 15.14 16.15 15.46 16.41L18.59 18.91C19.35 19.52 20.64 19.52 21.4 18.91L24.53 16.41C24.85 16.15 25.33 16.2 25.58 16.53C25.84 16.85 25.79 17.33 25.47 17.59Z" fill="#3b82f6" />
                                </svg>

                            </div>
                            <div className='min-w-0'>
                                <p className='text-[var(--primary-navy)] font-bold text-base md:text-lg lg:text-xl'>
                                    Email
                                </p>
                                <p className="text-[var(--charcoal)] text-xs md:text-sm truncate">daffodil.rc@info.com</p>
                            </div>
                        </div>
                        <div className='flex-shrink-0'>
                            <Link />
                        </div>

                    </div>

                </div>


                {/* Phone */}
                <div className="p-[1px] rounded-2xl bg-gray-200 cursor-pointer group hover:bg-gradient-to-r hover:from-[var(--accent-blue)] hover:to-[var(--accent-gold)] transition-all">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-2 md:gap-4 p-3 md:p-4 rounded-xl bg-[var(--card-bg)] shadow-md">
                        <div className='flex flex-row gap-2 flex-1 min-w-0'>

                            <div className="flex items-center justify-center w-10 md:w-12 h-10 md:h-12 rounded-lg bg-blue-50 group-hover:bg-blue-100 transition-colors flex-shrink-0">
                                <svg width="32" height="32" className="md:w-10 md:h-10" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.5" y="0.5" width="39" height="39" rx="9.5" stroke="#d1d5db" />
                                    <path d="M19.05 22.95L17.2 24.8C16.81 25.19 16.19 25.19 15.79 24.81C15.68 24.7 15.57 24.6 15.46 24.49C14.43 23.45 13.5 22.36 12.67 21.22C11.85 20.08 11.19 18.94 10.71 17.81C10.24 16.67 10 15.58 10 14.54C10 13.86 10.12 13.21 10.36 12.61C10.6 12 10.98 11.44 11.51 10.94C12.15 10.31 12.85 10 13.59 10C13.87 10 14.15 10.06 14.4 10.18C14.66 10.3 14.89 10.48 15.07 10.74L17.39 14.01C17.57 14.26 17.7 14.49 17.79 14.71C17.88 14.92 17.93 15.13 17.93 15.32C17.93 15.56 17.86 15.8 17.72 16.03C17.59 16.26 17.4 16.5 17.16 16.74L16.4 17.53C16.29 17.64 16.24 17.77 16.24 17.93C16.24 18.01 16.25 18.08 16.27 18.16C16.3 18.24 16.33 18.3 16.35 18.36C16.53 18.69 16.84 19.12 17.28 19.64C17.73 20.16 18.21 20.69 18.73 21.22C18.83 21.32 18.94 21.42 19.04 21.52C19.44 21.91 19.45 22.55 19.05 22.95Z" fill="#3b82f6" />
                                    <path d="M29.9696 26.33C29.9696 26.61 29.9196 26.9 29.8196 27.18C29.7896 27.26 29.7596 27.34 29.7196 27.42C29.5496 27.78 29.3296 28.12 29.0396 28.44C28.5496 28.98 28.0096 29.37 27.3996 29.62C27.3896 29.62 27.3796 29.63 27.3696 29.63C26.7796 29.87 26.1396 30 25.4496 30C24.4296 30 23.3396 29.76 22.1896 29.27C21.0396 28.78 19.8896 28.12 18.7496 27.29C18.3596 27 17.9696 26.71 17.5996 26.4L20.8696 23.13C21.1496 23.34 21.3996 23.5 21.6096 23.61C21.6596 23.63 21.7196 23.66 21.7896 23.69C21.8696 23.72 21.9496 23.73 22.0396 23.73C22.2096 23.73 22.3396 23.67 22.4496 23.56L23.2096 22.81C23.4596 22.56 23.6996 22.37 23.9296 22.25C24.1596 22.11 24.3896 22.04 24.6396 22.04C24.8296 22.04 25.0296 22.08 25.2496 22.17C25.4696 22.26 25.6996 22.39 25.9496 22.56L29.2596 24.91C29.5196 25.09 29.6996 25.3 29.8096 25.55C29.9096 25.8 29.9696 26.05 29.9696 26.33Z" fill="#3b82f6" />
                                </svg>

                            </div>

                            <div className='min-w-0'>
                                <p className='text-[var(--primary-navy)] font-bold text-base md:text-lg lg:text-xl'>
                                    Call Us
                                </p>
                                <p className="text-[var(--primary-navy)] text-xs md:text-sm truncate">+880175555 5555</p>
                            </div>

                        </div>
                        <div className='flex-shrink-0'>
                            <Link />
                        </div>

                    </div>
                </div>

                {/* Location */}
                <div className="p-[1px] rounded-2xl bg-gray-200 cursor-pointer group hover:bg-gradient-to-r hover:from-[var(--accent-blue)] hover:to-[var(--accent-gold)] transition-all">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-2 md:gap-4 p-3 md:p-4 rounded-xl bg-[var(--card-bg)] shadow-md">
                        <div className='flex flex-row gap-2 flex-1 min-w-0'>

                            <div className="flex items-center justify-center w-10 md:w-12 h-10 md:h-12 rounded-lg bg-blue-50 group-hover:bg-blue-100 transition-colors flex-shrink-0">
                                <svg width="32" height="32" className="md:w-10 md:h-10" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.5" y="0.5" width="39" height="39" rx="9.5" stroke="#d1d5db" />
                                    <g clipPath="url(#clip0_515_149012)">
                                        <path d="M28.6201 16.45C27.5701 11.83 23.5401 9.75 20.0001 9.75C20.0001 9.75 20.0001 9.75 19.9901 9.75C16.4601 9.75 12.4201 11.82 11.3701 16.44C10.2001 21.6 13.3601 25.97 16.2201 28.72C17.2801 29.74 18.6401 30.25 20.0001 30.25C21.3601 30.25 22.7201 29.74 23.7701 28.72C26.6301 25.97 29.7901 21.61 28.6201 16.45ZM20.0001 21.46C18.2601 21.46 16.8501 20.05 16.8501 18.31C16.8501 16.57 18.2601 15.16 20.0001 15.16C21.7401 15.16 23.1501 16.57 23.1501 18.31C23.1501 20.05 21.7401 21.46 20.0001 21.46Z" fill="#3b82f6" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_515_149012">
                                            <rect width="24" height="24" fill="white" transform="translate(8 8)" />
                                        </clipPath>
                                    </defs>
                                </svg>

                            </div>

                            <div className='min-w-0'>
                                <p className='text-[var(--primary-navy)] font-bold text-base md:text-lg lg:text-xl'>
                                    Our Location
                                </p>
                                <p className="text-[var(--charcoal)] text-xs md:text-sm line-clamp-2">House No. 31, Road No. B-2, Block-L, Pallabi, Mirpur, DHaka</p>
                            </div>

                        </div>

                        <div className='flex-shrink-0'>
                            <Link />
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default GetInTouchSection;
