
'use client';

import { useRouter } from 'next/navigation';

import Image from 'next/image';
import { StaticImageData } from 'next/image';
import {  AboutUs,UnveilingDrc,DataDrivenInsightsBig,DigitalAutomationSaasBig,BrainBig } from '@/app/static/icons';
import { ReactNode } from 'react';

interface Card {
  id: number;
  title: string;
  description: string;
  image: StaticImageData | ReactNode; 
}

const About = () => {
  const router = useRouter();
  const handleLearnMoreClick = () => {
    router.push('/about');
  };
  const cards: Card[] = [
    {
        id: 1,
        title: 'Human-Centric BPO Services',
        description: 'Contact centers, back-office operations, and technical support tailored to your business needs.',
        image: <BrainBig />,
      
    },
    {
        id: 2,
        title: 'Data-Driven Insights',
        description: 'Real-time analytics and reporting that turn raw data into actionable intelligence.',
        image: <DataDrivenInsightsBig />,
      
    },
    {
        id: 3,
        title: 'Digital Automation & SaaS',
        description: 'Proprietary tools like Smart CRMs, Predictive Dialers, and AI-powered Quality Assurance systems.',
        image: <DigitalAutomationSaasBig />,
      },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 md:px-8 lg:px-16 bg-gray-950">
      {/* Header */}
      <div className="max-w-6xl mx-auto text-center mb-10 sm:mb-12 md:mb-16">
        
          <div className="inline-block mb-3 sm:mb-4 p-0.5 bg-gradient-to-r  from-[#8a8f8b] to-[#066a0a] rounded-full ">
                <div className="px-4 sm:px-3 py-2 sm:py-1 bg-gray-950 rounded-full">
                    <span className="text-white text-xs sm:text-sm font-semibold flex items-center gap-2">
                      <AboutUs />
                      About Us
                    </span>
                </div>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-5 md:mb-6">  Who  <span className="text-[#9dffa1]"> We </span>  Are</h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-2">
              Part of the Daffodil Group, DRC brings over two decades of innovation
              delivering global, tech-driven, and cost-efficient business solutions
              from Bangladesh.
          </p>
      </div>

      
      <div className="text-center mb-10 sm:mb-12 md:mb-16 ">
          <p className="text-lg sm:text-xl md:text-2xl text-white font-semibold px-2 flex flex-row justify-center items-center gap-3"> Unveiling DRC: The Heart of <UnveilingDrc /> Next-Gen Excellence </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:h-140 px-4 sm:px-6 md:px-10">
        {cards.map((card) => (
            <div key={card.id}  className="group bg-gradient-to-b from-[#243125] via-[#131513] to-[#121212] border border-[#2d4a2d]/30 rounded-2xl sm:rounded-3xl md:rounded-4xl overflow-hidden " >

              <div className="relative h-64 sm:h-80 md:h-110 w-full overflow-hidden bg-gradient-to-b from-[#2d4a2d]/50 via-[#1a2b1a]/30 to-transparent flex items-center justify-center p-6 sm:p-8 md:p-10">
                  {typeof card.image === 'object' && card.image && 'src' in card.image ? (
                    <Image  src={card.image as StaticImageData}  alt={card.title} fill className="object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      {card.image as ReactNode}
                    </div>
                  )}
              </div>

              <div className="p-4 sm:p-5 md:p-6 bg-transparent">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3"> {card.title} </h3>
                  <p className="text-gray-300 text-xs sm:text-sm ">{card.description} </p>
              </div>

            </div>
        ))}
      </div>
      
      <div className="flex justify-center mt-10 sm:mt-12 md:mt-16">
        <div className="p-px bg-gradient-to-r from-white to-green-500 rounded-full">
          <button className="group inline-flex items-center gap-2 md:gap-3 p-[2px] rounded-full bg-gradient-to-r from-[#dcdedd] to-[#3eb343] hover:shadow-lg hover:shadow-green-400/50 transition-all duration-300 transform hover:scale-105" onClick={handleLearnMoreClick}>
            <span className="inline-flex items-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-3.5 rounded-full  bg-gradient-to-t from-[#92eb95] via-[#9dffa1] to-[#c3ffc6] text-[#2d4c2e] font-semibold text-sm md:text-base hover:cursor-pointer">
              Learn More
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default About;