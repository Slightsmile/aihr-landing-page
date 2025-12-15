
'use client';

import { useRouter } from 'next/navigation';

import Image from 'next/image';
import { StaticImageData } from 'next/image';
import { Internet, Global, BrainBig } from '@/app/static/icons';
import { ReactNode } from 'react';

interface Card {
  id: number;
  title: string;
  description: string;
  image: StaticImageData | ReactNode;
}

const WhyChoose = () => {
  const router = useRouter();
  const handleLearnMoreClick = () => { router.push('/about'); };
  const cards: Card[] = [
    {
      id: 1,
      title: 'Human Brilliance AI Automation',
      description:
        'Blending human insight with AI to drive smarter decisions, faster outcomes, and seamless efficiency.',
      image: <BrainBig />,

    },
    {
      id: 2,
      title: 'All-in-One Solutions',
      description:
        'Contact Center, Back Office, SaaS, and Edu-Tech solutions all under one innovative roof.',
      image: <Internet />,

    },
    {
      id: 3,
      title: 'Global + Local Advantage',
      description:
        'Worldwide reach with local efficiency, competitive pricing, and consistently top-quality service delivery.',
      image: <Global />,

    },
  ];

  return (
    <section className="relative py-12 sm:py-16 md:py-20 px-4 md:px-8 lg:px-16 bg-[var(--light-bg)]">

      <div className="max-w-6xl mx-auto text-center mb-10 sm:mb-12 md:mb-16">

        <div className="inline-block mb-3 sm:mb-4 p-0.5 bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-gold)] rounded-full ">
          <div className="px-4 sm:px-3 py-2 sm:py-1 bg-white rounded-full">

            <span className="text-[var(--primary-navy)] text-xs sm:text-sm font-semibold flex items-center gap-2">
              <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="32" rx="16" fill="#3b82f6" fillOpacity="0.1" />
                <path d="M13.9706 9.57697L14.5728 11.2495C14.9033 12.1664 15.4319 12.9991 16.1211 13.6882C16.8102 14.3774 17.6429 14.906 18.5598 15.2365L20.2323 15.8387C20.2653 15.8508 20.2938 15.8728 20.314 15.9016C20.3341 15.9305 20.3449 15.9648 20.3449 16C20.3449 16.0351 20.3341 16.0695 20.314 16.0983C20.2938 16.1272 20.2653 16.1491 20.2323 16.1612L18.5598 16.7635C17.6429 17.0939 16.8102 17.6226 16.1211 18.3117C15.4319 19.0009 14.9033 19.8336 14.5728 20.7505L13.9706 22.423C13.9584 22.456 13.9365 22.4845 13.9076 22.5047C13.8788 22.5248 13.8445 22.5356 13.8093 22.5356C13.7741 22.5356 13.7398 22.5248 13.711 22.5047C13.6821 22.4845 13.6602 22.456 13.6481 22.423L13.0458 20.7505C12.7153 19.8336 12.1867 19.0009 11.4975 18.3117C10.8084 17.6226 9.97568 17.0939 9.0588 16.7635L7.3863 16.1612C7.35328 16.1491 7.32476 16.1272 7.30462 16.0983C7.28448 16.0695 7.27368 16.0351 7.27368 16C7.27368 15.9648 7.28448 15.9305 7.30462 15.9016C7.32476 15.8728 7.35328 15.8508 7.3863 15.8387L9.0588 15.2365C9.97568 14.906 10.8084 14.3774 11.4975 13.6882C12.1867 12.9991 12.7153 12.1664 13.0458 11.2495L13.6481 9.57697C13.6598 9.54361 13.6817 9.51473 13.7105 9.49429C13.7394 9.47386 13.7739 9.46289 13.8093 9.46289C13.8447 9.46289 13.8792 9.47386 13.9081 9.49429C13.9369 9.51473 13.9588 9.54361 13.9706 9.57697ZM21.4991 5.55772L21.8043 6.40447C21.9718 6.8687 22.2395 7.2903 22.5885 7.63927C22.9375 7.98824 23.3591 8.25599 23.8233 8.42347L24.6701 8.72872C24.6868 8.73483 24.7013 8.74595 24.7116 8.76058C24.7218 8.7752 24.7273 8.79262 24.7273 8.81047C24.7273 8.82833 24.7218 8.84575 24.7116 8.86037C24.7013 8.875 24.6868 8.88612 24.6701 8.89222L23.8233 9.19747C23.3591 9.36495 22.9375 9.63271 22.5885 9.98167C22.2395 10.3306 21.9718 10.7522 21.8043 11.2165L21.4991 12.0632C21.4929 12.08 21.4818 12.0945 21.4672 12.1047C21.4526 12.115 21.4352 12.1205 21.4173 12.1205C21.3994 12.1205 21.382 12.115 21.3674 12.1047C21.3528 12.0945 21.3417 12.08 21.3356 12.0632L21.0303 11.2165C20.8628 10.7522 20.5951 10.3306 20.2461 9.98167C19.8971 9.63271 19.4755 9.36495 19.0113 9.19747L18.1646 8.89222C18.1478 8.88612 18.1333 8.875 18.123 8.86037C18.1128 8.84575 18.1073 8.82833 18.1073 8.81047C18.1073 8.79262 18.1128 8.7752 18.123 8.76058C18.1333 8.74595 18.1478 8.73483 18.1646 8.72872L19.0113 8.42347C19.4755 8.25599 19.8971 7.98824 20.2461 7.63927C20.5951 7.2903 20.8628 6.8687 21.0303 6.40447L21.3356 5.55772C21.3417 5.54095 21.3528 5.52646 21.3674 5.51622C21.382 5.50598 21.3994 5.50049 21.4173 5.50049C21.4352 5.50049 21.4526 5.50598 21.4672 5.51622C21.4818 5.52646 21.4929 5.54095 21.4991 5.55772ZM21.4991 19.9375L21.8043 20.7842C21.9718 21.2485 22.2395 21.6701 22.5885 22.019C22.9375 22.368 23.3591 22.6357 23.8233 22.8032L24.6701 23.1085C24.6868 23.1146 24.7013 23.1257 24.7116 23.1403C24.7218 23.1549 24.7273 23.1724 24.7273 23.1902C24.7273 23.2081 24.7218 23.2255 24.7116 23.2401C24.7013 23.2547 24.6868 23.2659 24.6701 23.272L23.8233 23.5772C23.3591 23.7447 22.9375 24.0125 22.5885 24.3614C22.2395 24.7104 21.9718 25.132 21.8043 25.5962L21.4991 26.443C21.4929 26.4597 21.4818 26.4742 21.4672 26.4845C21.4526 26.4947 21.4352 26.5002 21.4173 26.5002C21.3994 26.5002 21.382 26.4947 21.3674 26.4845C21.3528 26.4742 21.3417 26.4597 21.3356 26.443L21.0303 25.5962C20.8628 25.132 20.5951 24.7104 20.2461 24.3614C19.8971 24.0125 19.4755 23.7447 19.0113 23.5772L18.1646 23.272C18.1478 23.2659 18.1333 23.2547 18.123 23.2401C18.1128 23.2255 18.1073 23.2081 18.1073 23.1902C18.1073 23.1724 18.1128 23.1549 18.123 23.1403C18.1333 23.1257 18.1478 23.1146 18.1646 23.1085L19.0113 22.8032C19.4755 22.6357 19.8971 22.368 20.2461 22.019C20.5951 21.6701 20.8628 21.2485 21.0303 20.7842L21.3356 19.9375C21.3633 19.861 21.4721 19.861 21.4991 19.9375Z" fill="#3b82f6" />
              </svg>
              Our Edge
            </span>
          </div>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--primary-navy)] mb-4 sm:mb-5 md:mb-6">Why <span className="text-[var(--accent-blue)]"> Choose </span>DRC</h2>
        <p className="text-base sm:text-lg md:text-xl text-[var(--charcoal)] max-w-3xl mx-auto px-2 "> Choosing DRC means partnering with an experienced, innovation driven leader offering hybrid excellence  and complete business solutions.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:h-140 px-4 sm:px-6 md:px-10">
        {cards.map((card) => (

          <div key={card.id} className="group bg-[var(--card-bg)] border border-gray-100 rounded-2xl sm:rounded-3xl md:rounded-4xl overflow-hidden shadow-xl" >
            <div className="relative h-64 sm:h-80 md:h-110 w-full overflow-hidden bg-white/50 flex items-center justify-center p-6 sm:p-8 md:p-10">

              {typeof card.image === 'object' && card.image && 'src' in card.image ? (

                <Image src={card.image as StaticImageData} alt={card.title} fill className="object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  {card.image as ReactNode}
                </div>
              )}
            </div>
            <div className="p-4 sm:p-5 md:p-6 bg-transparent ">
              <h3 className="text-xl sm:text-2xl font-bold text-[var(--primary-navy)] mb-2 sm:mb-3 "> {card.title} </h3>
              <p className="text-[var(--charcoal)] text-xs sm:text-sm ">{card.description} </p>
            </div>
          </div>

        ))}
      </div>

      <div className="flex justify-center mt-10 sm:mt-12 md:mt-16">
        <div className="p-px bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-gold)] rounded-full">

          <button className="group inline-flex items-center gap-2 md:gap-3 p-[2px] rounded-full bg-white hover:shadow-lg transition-all duration-300 transform hover:scale-105" onClick={handleLearnMoreClick}>
            <span className="inline-flex items-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-3.5 rounded-full bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-gold)] text-white font-semibold text-sm md:text-base hover:opacity-90">
              Learn More
            </span>
          </button>

        </div>
      </div>

    </section>
  );
}

export default WhyChoose;