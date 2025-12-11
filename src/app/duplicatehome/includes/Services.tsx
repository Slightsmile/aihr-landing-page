'use client';
import React from 'react'
import Image from 'next/image';
import { FaGlobe } from 'react-icons/fa'
import technicalSupportImg from '@/app/static/images/landing_page/techinal_support.png';
import phoneImg from '@/app/static/images/landing_page/phone.png';
import frame6Img from '@/app/static/images/landing_page/Frame 6.png';
import frame7Img from '@/app/static/images/landing_page/Frame 7.png';
import deskImg from '@/app/static/images/landing_page/desk.png';
import awardImg from '@/app/static/images/landing_page/award.png';
import awardSmImg from '@/app/static/images/landing_page/award_sm.png';


export default function Services() {
    return (
        <section id="services" className='px-4 md:px-8 lg:px-35 relative py-8 md:py-12 bg-gray-950 scroll-mt-20'>
            <div className="animate-pulse absolute -top-20 right-0 w-96 h-96 md:w-96 md:h-96 bg-[#141e14] rounded-full blur-3xl"></div>
            {/* header section */}
            <div className='relative flex flex-col items-center justify-center text-center'>

                <div className='relative inline-flex items-center gap-3 md:gap-8 rounded-full mb-2 bg-gradient-to-r from-[#8a8f8b] to-[#066a0a] p-0.5'>
                    <div className='flex items-center gap-3 md:gap-4 px-2 py-0.5 rounded-full bg-gray-950'>
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="32" height="32" rx="16" fill="#C6FEC8" fillOpacity="0.32" />
                            <path d="M24 7.04169H19C18.1945 7.04169 17.5416 7.69461 17.5416 8.50002V13.5C17.5416 14.3054 18.1945 14.9584 19 14.9584H24C24.8054 14.9584 25.4583 14.3054 25.4583 13.5V8.50002C25.4583 7.69461 24.8054 7.04169 24 7.04169Z" fill="#9DFFA1" />
                            <path d="M25.4442 19.9692L22.5308 17.0559C22.2571 16.7832 21.8864 16.6301 21.5 16.6301C21.1136 16.6301 20.743 16.7832 20.4692 17.0559L17.5558 19.9692C17.283 20.2429 17.1298 20.6136 17.1298 21C17.1298 21.3865 17.283 21.7572 17.5558 22.0309L20.4692 24.9442C20.7429 25.2171 21.1136 25.3703 21.5 25.3703C21.8865 25.3703 22.2572 25.2171 22.5308 24.9442L25.4442 22.0309C25.7172 21.7573 25.8706 21.3866 25.8706 21C25.8706 20.6135 25.7172 20.2428 25.4442 19.9692Z" fill="#9DFFA1" />
                            <path d="M14 7.04169H8.99996C8.19454 7.04169 7.54163 7.69461 7.54163 8.50002V13.5C7.54163 14.3054 8.19454 14.9584 8.99996 14.9584H14C14.8054 14.9584 15.4583 14.3054 15.4583 13.5V8.50002C15.4583 7.69461 14.8054 7.04169 14 7.04169Z" fill="#9DFFA1" />
                            <path d="M14 17.0417H8.99996C8.19454 17.0417 7.54163 17.6946 7.54163 18.5V23.5C7.54163 24.3054 8.19454 24.9584 8.99996 24.9584H14C14.8054 24.9584 15.4583 24.3054 15.4583 23.5V18.5C15.4583 17.6946 14.8054 17.0417 14 17.0417Z" fill="#9DFFA1" />
                        </svg>
                        <p className='text-white font-semibold text-base md:text-md mr-2'> Services </p>
                    </div>
                </div>

                <div className='text-white mb-2'>
                    <h1 className='text-2xl md:text-4xl lg:text-5xl font-bold'>
                        <span>Services </span>
                        <span className='text-[#9dffa1]'>Portfolio</span>
                    </h1>
                </div>
                <div className='text-gray-300 mt-4'>

                </div>

            </div>
            {/* card section */}
            <div className='flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 text-white mt-6 md:mt-10'>
                {/* left card */}
                <div className='flex-1 min-h-[280px] md:h-80 bg-gradient-to-br from-green-500/10  to-transparent border-2 border-[#646464] rounded-xl p-4 md:p-6 flex flex-col justify-between relative overflow-hidden'>
                    {/* Gradient shadow/glow effect */}
                    <div className='absolute bottom-16 right-0 left-100 w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56  lg:w-64 lg:h-64 bg-[#19281a] rounded-full blur-3xl'></div>
                    {/* Phone image in background */}

                    <div className='absolute bottom-24 right-6 w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-56 lg:h-50 opacity-15 pointer-events-none'>
                        <Image src={phoneImg} alt="Phone" fill className='object-contain object-bottom-right' />
                    </div>

                    <div className='relative z-10'>
                        <h3 className='text-xl md:text-2xl lg:text-xl  text-[#dcdcdc] mb-2 md:mb-3'>Contact Center Excellence</h3>
                        <p className='text-lg md:text-xl lg:text-3xl font-bold text-[#dcdcdc] mb-4 md:mb-8'>Built for the Future</p>
                    </div>

                    <p className='text-[#dcdcdc] text-sm md:text-base leading-relaxed relative z-10'>Our services are the voice of your brand, delivering exceptional customer experiences through inbound/outbound support</p>
                </div>

                {/* right card */}
                <div className='flex-1 min-h-[280px] md:h-80 bg-gradient-to-br from-green-500/10 to-transparent border-2 border-[#646464] rounded-xl p-4 md:p-6 flex flex-col justify-between relative  overflow-hidden'>
                    {/* Green glow/shadow at bottom left */}
                    <div className='absolute bottom-0 top-16 left-10 w-48 h-48 md:w-64 md:h-64 lg:w-100 lg:h-100 bg-[#182519] rounded-full blur-3xl pointer-events-none'></div>

                    {/* Decorative globe logos in background */}
                    {/* Small globe - bottom left */}
                    <div className='absolute -bottom-1 -left-2 w-16 h-16 md:w-44 md:h-28 opacity-100 pointer-events-none'>
                        <Image
                            src={frame6Img}
                            alt="Globe decoration"
                            fill
                            className='object-contain'
                        />
                    </div>
                    {/* Large globe - bottom right, extends beyond card */}
                    <div className='absolute -bottom-12 -right-12 md:-bottom-22 md:-right-0 w-34 h-34 md:w-80 md:h-80 lg:w-40 lg:h-76 opacity-90 pointer-events-none'>
                        <Image
                            src={frame7Img}
                            alt="Globe decoration"
                            fill
                            className='object-contain'
                        />
                    </div>

                    <div className='flex items-start justify-between relative z-10 '>

                        <div>
                            <h3 className='text-xl md:text-2xl lg:text-3xl font-normal text-[#dcdcdc] mb-2'>Digital Engagement &</h3>
                            <p className='text-lg md:text-xl lg:text-2xl font-bold text-[#dcdcdc]'>Omnichannel</p>
                        </div>

                        <div className='w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-green-500 flex items-center justify-center opacity-20'>
                            <div className='w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-green-500 flex items-center justify-center opacity-70'>
                                <FaGlobe className='text-green-500 text-base md:text-lg opacity-100' />
                            </div>
                        </div>

                    </div>
                    <p className='text-[#dcdcdc] text-sm md:text-base leading-relaxed lg:bottom-23 relative z-10'>

                        Our omnichannel solutions integrate email, chat, social media, SMS, and voice,
                        delivering a unified customer experience with
                        <span className='text-gray-100 font-semibold'>
                            AI chatbots, sentiment analysis, & predictive engagement.
                        </span>
                    </p>

                </div>
            </div>

            <div className='flex flex-col md:flex-row items-stretch justify-between gap-4 text-white mt-4'>
                {/* left card */}
                <div className='flex-1 bg-gradient-to-br from-green-500/5 to-transparent rounded-xl flex flex-col gap-4 relative overflow-hidden min-h-[440px] md:min-h-[500px]'>
                    {/* Back Office Operations Card - 60% */}
                    <div className='h-auto md:h-[55%]  border-2 border-[#646464] rounded-xl p-4 md:p-6 flex flex-col relative overflow-hidden'>
                        <div className="absolute bottom-0 -right-30 w-64 h-64 md:w-96 md:h-96 bg-[#19281a] rounded-full blur-3xl pointer-events-none"></div>

                        {/* Desk icon in top-right corner */}
                        <div className='absolute top-0 right-2 w-12 h-12 md:w-16 md:h-12 opacity-80 pointer-events-none'>
                            <Image
                                src={deskImg}
                                alt="Desk icon"
                                fill
                                className='object-contain'
                            />
                        </div>

                        <p className='text-xl text-[#dcdcdc] md:text-3xl font-bold mb-3 md:mb-4 relative z-10'>Back Office Operations</p>
                        <p className='text-[#dcdcdc] text-sm md:text-base leading-relaxed relative z-10'> Focus on your core business while we handle the rest. From data entry and document processing to accounting, HR administration, and supply chain support, our back-office services streamline your operations with accuracy, speed, and cost efficiency. </p>

                        <div className='absolute bottom-6 left-6 w-12 h-12 md:w-16 md:h-12 opacity-80 pointer-events-none'>
                            <Image
                                src={deskImg}
                                alt="Desk icon"
                                fill
                                className='object-contain'
                            />
                        </div>
                        <div className='absolute bottom-1 right-16 w-12 h-12 md:w-30 md:h-30 opacity-100  pointer-events-none'>
                            <Image
                                src={deskImg}
                                alt="Desk icon"
                                fill
                                className='object-contain'
                            />
                        </div>
                    </div>

                    {/* Edu-Tech Solutions Card - 40% */}
                    <div className='h-auto md:h-[calc(45%-1rem)]  border-2 border-[#646464] rounded-xl p-4 md:p-6 flex flex-col relative overflow-hidden'>
                        <div className="absolute top-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-[#19281a] rounded-full blur-3xl pointer-events-none"></div>


                        {/* Large award icon in top-right corner */}
                        <div className='absolute -top-4 left-30 md:-top-6 md:left-30 w-20 h-20 sm:w-24
                     sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 opacity-90 pointer-events-none z-0'>
                            <Image src={awardImg} alt="Award" fill className='object-contain' />
                        </div>

                        {/* Small award icon in bottom-left corner */}
                        <div className='absolute -bottom-1 -right-2 md:bottom-2 md:left-132 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 opacity-90 pointer-events-none z-0'>
                            <Image src={awardSmImg} alt="Award Small" fill className='object-contain' />
                        </div>

                        <p className='text-xl md:text-2xl font-semibold relative z-10 '>Edu-Tech</p>
                        <p className='text-2xl md:text-3xl font-bold mb-3 md:mb-4 relative z-10 font-[#dcdcdc]'>Solutions</p>
                        <p className='text-gray-300 text-sm md:text-base leading-relaxed relative z-10'> Transform education delivery with our specialized BPO services for the ed-tech sector. </p>

                    </div>
                </div>
                {/* right technical card */}
                <div className='-mt-20 md:mt-0 flex-1  border-2 border-[#646464] rounded-xl  flex flex-col justify-between items-center relative overflow-hidden min-h-[440px] md:min-h-[500px]'>

                    <div className="absolute bottom-0 -right-50 w-64 h-64 md:w-96 md:h-96 bg-[#19281a] rounded-full blur-3xl pointer-events-none"></div>
                    <div className="relative z-10 w-full flex flex-col justify-between h-full p-4 md:p-6">
                        <div className="absolute bottom-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-green-500/10 rounded-full blur-3xl"></div>

                        <p className='text-xl text-[#dcdcdc] md:text-2xl font-semibold text-left w-full'> Technical Support Services </p>

                        <div className='flex justify-center my-4 flex-1 items-center'>
                            <Image
                                src={technicalSupportImg}
                                alt="Technical Support Services"
                                width={500}
                                height={200}
                                className='w-full max-w-[300px] md:max-w-[500px] h-auto'
                            />
                        </div>

                        <div className='text-center text-gray-200'>
                            <p className='text-sm md:text-base'> Expert Level 1-3 Helpdesk, Remote Troubleshooting, <br className='hidden md:block' /> Software Support, And Network Monitoring </p>
                            <p className='text-lg md:text-2xl font-bold bg-gradient-to-r from-[#fdfdfd] to-[#868f87] bg-clip-text text-transparent mt-2'> Minimal Downtime And Maximum <br className='hidden md:block' /> IT Productivity.</p>
                        </div>

                    </div>
                </div>
            </div>

        </section>
    )
}
