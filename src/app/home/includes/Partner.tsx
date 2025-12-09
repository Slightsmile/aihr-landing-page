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
    <div className='py-10 md:py-10 bg-gray-950'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-1 relative overflow-hidden">

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
