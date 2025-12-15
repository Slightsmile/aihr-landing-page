'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import partnerImg from '@/app/static/images/landing_page/partner.png';
import partnersLogoImg from '@/app/static/images/landing_page/partners_logo.png';

export default function AIHRPartner() {
    const router = useRouter();
    const handleLearnMoreClick = () => {
        router.push('/about');
    };

    const opportunities = [
        {
            title: "Corporate Partnerships",
            items: [
                "Research collaboration",
                "Talent pipeline development",
                "Infrastructure sponsorship",
                "Technology transfer"
            ],
            buttonText: "Become a Partner"
        },
        {
            title: "Individual Donations",
            items: [
                "Scholarship funds",
                "Research grants",
                "Infrastructure development",
                "Endowment opportunities"
            ],
            buttonText: "Make a Donation"
        },
        {
            title: "Institutional Collaboration",
            items: [
                "Joint program development",
                "Faculty exchange",
                "Capacity building",
                "Policy research"
            ],
            buttonText: "Collaborate"
        }
    ];

    return (
        <div className='py-16 md:py-24 bg-[var(--light-bg)]'>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative overflow-hidden">

                {/* Partnership Opportunities Section */}
                <div className="mb-20">
                    <div className='flex flex-col items-center justify-center relative z-10 text-center mb-12'>
                        <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--primary-navy)] mb-4">
                            Partnership <span className="text-[var(--accent-blue)]">Opportunities</span>
                        </h3>
                        <p className="text-gray-600 text-lg max-w-2xl">
                            Join us in shaping the future of education through strategic collaboration.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                        {opportunities.map((opp, index) => (
                            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:border-[var(--accent-gold)] transition-all duration-300 flex flex-col group">
                                <h4 className="text-2xl font-bold text-[var(--primary-navy)] mb-6 text-center">{opp.title}</h4>
                                <ul className="space-y-4 mb-8 flex-grow">
                                    {opp.items.map((item, idx) => (
                                        <li key={idx} className="flex items-start">
                                            <svg className="w-6 h-6 text-[var(--accent-blue)] mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                            </svg>
                                            <span className="text-gray-700">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <button className="w-full py-3 px-6 rounded-full border-2 border-[var(--primary-navy)] text-[var(--primary-navy)] font-semibold hover:bg-[var(--primary-navy)] hover:text-white transition-all duration-300">
                                    {opp.buttonText}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Existing Partners Logo Section */}
                <div className='flex items-center justify-center mt-12 md:mt-16 relative z-10'>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--primary-navy)] mb-4 md:mb-6 text-center">Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-gold)]">Partners</span></h3>
                </div>

                <div className='flex justify-center mt-8 relative z-10 px-4'>
                    <Image src={partnersLogoImg} alt="Our Partners Logos" width={1200} height={200} className="w-full max-w-6xl h-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300" />
                </div>

            </div>
        </div>
    );
}
