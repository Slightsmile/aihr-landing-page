'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'motion/react';

interface CardData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  color: string;
  image: string;
}

const testimonialCards: CardData[] = [
  {
    id: '2',
    title: 'Digital Transformation Success at Fortune 500',
    subtitle: 'ASIA PACIFIC | FINANCE',
    description: 'Customer Success Story | 12 Oct 2025',
    color: '#ffffff',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
  },
  {
    id: '3',
    title: 'E-Commerce Platform Optimization',
    subtitle: 'NORTH AMERICA | RETAIL',
    description: 'Case Study | 10 Oct 2025',
    color: '#ffffff',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
  },
  {
    id: '4',
    title: 'Remagining Kelly Services IT Service Desk with DRC',
    subtitle: 'EUROPE | HEALTHCARE',
    description: 'Customer Testimonial | 08 Oct 2025',
    color: '#ffffff',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
  },
];

interface StackingCardsProps {
  cards?: CardData[];
}

const StackingCards: React.FC<StackingCardsProps> = ({ cards = testimonialCards }) => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  return (
    <div ref={container} className="relative bg-[var(--light-bg)]">
      {cards.map((card, i) => {
        const targetScale = 1 - (cards.length - i) * 0.05;
        const range = [i * 0.2, 1];

        return (
          <Card
            key={card.id}
            index={i}
            title={card.title}
            subtitle={card.subtitle}
            description={card.description}
            color={card.color}
            image={card.image}
            progress={scrollYProgress}
            range={range}
            targetScale={targetScale}
          />
        );
      })}
    </div>
  );
};

interface CardProps {
  index: number;
  title: string;
  subtitle: string;
  description: string;
  color: string;
  image: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  progress: any;
  range: number[];
  targetScale: number;
}

const Card: React.FC<CardProps> = ({ index, title, subtitle, description, color, image, progress, range, targetScale, }) => {
  const container = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start'],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.05, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className="h-screen flex items-center justify-center sticky top-0">
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-5vh + ${index * 25}px)`,
          transformOrigin: 'top',
        }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="relative flex flex-col w-[95vw] md:w-[670px] md:h-[420px] rounded-4xl shadow-xl text-[var(--primary-navy)] overflow-hidden border border-gray-100"
      >
        {/* Background Blurs */}
        <div className="absolute -top-10 -left-20 w-80 h-80 bg-blue-50 rounded-full blur-3xl opacity-50" />
        <div className="absolute -top-10 -right-50 w-160 h-160 bg-blue-50 rounded-full blur-3xl opacity-50" />

        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-10 overflow-hidden">
          <div className="absolute top-10 right-20 w-40 h-40 rounded-full border border-blue-200"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full border border-blue-200"></div>
          <div className="absolute top-1/2 right-1/4 w-24 h-24 rounded-full border border-blue-200"></div>
        </div>

        {/* Top Image Section */}
        <div className="relative z-0 w-full h-[250px] overflow-hidden px-5 mt-5 rounded-3xl">
          <motion.div
            className="relative w-full h-full flex items-center justify-center rounded-3xl overflow-hidden"
            style={{ scale: imageScale }}
          >
            <Image
              src={image}
              alt={title}
              fill
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          </motion.div>
        </div>

        {/* Bottom Content Section */}
        <div className="relative z-10 flex flex-col gap-3 p-8">
          <div>
            <p className="text-xs md:text-sm uppercase tracking-widest text-[var(--accent-blue)] font-semibold mb-2">
              {subtitle}
            </p>
            <h2 className="text-xl md:text-2xl font-bold text-[var(--primary-navy)] leading-tight mb-2 h-10">{title}</h2>
            <p className="text-xs md:text-sm text-[var(--charcoal)]">{description}</p>
          </div>

          {/* CTA Button */}

        </div>
      </motion.div>
    </div>
  );
};

const CustomerStore = () => {
  return (
    <div className='flex flex-col md:flex-row lg:flex-row
        items-center justify-between text-[var(--primary-navy)] px-4 mt-5 md:mt-1 md:px-20 lg:px-20'>
      {/* Left Section */}
      <section className='flex flex-row'>
        <div className=''>
          <div className="relative inline-block">
            {/* Gradient Border */}
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-gold)] rounded-full"></div>
            {/* Button Content */}
            <button type="button" className="relative inline-flex items-center gap-1 md:gap-3 lg:gap-2 bg-white pl-1 md:pl-1 pr-2 md:pr-5 py-1 md:py-1 rounded-full text-[var(--primary-navy)] text-xs md:text-sm font-medium m-0.5" >

              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="32" rx="16" fill="#E0F2FE" fillOpacity="1" />
                <path fillRule="evenodd" clipRule="evenodd" d="M22.9725 9.34381L24.3738 9.02284C24.86 8.9115 25.3489 9.21819 25.4603 9.7044L27.2039 17.3176C27.3153 17.8037 27.0086 18.2927 26.5224 18.404L25.121 18.725C24.6349 18.8363 24.1459 18.5297 24.0345 18.0434L22.2909 10.4303C22.1795 9.94407 22.4862 9.45515 22.9725 9.34381ZM8.25432 9.34381L6.85297 9.02284C6.36676 8.9115 5.87784 9.21819 5.76649 9.7044L4.02284 17.3176C3.9115 17.8037 4.21819 18.2927 4.7044 18.404L6.10575 18.725C6.59192 18.8363 7.08089 18.5297 7.19223 18.0434L8.93588 10.4303C9.04723 9.94407 8.74054 9.45515 8.25432 9.34381ZM22.2906 18.4434L23.3265 17.9862L21.8581 11.5751L21.6476 11.6667C20.9736 11.9599 20.26 11.9134 19.6203 11.5561C19.1946 11.3182 18.8134 11.0946 18.4721 10.8944C17.0717 10.0728 16.3955 9.67619 15.4604 10.0258C14.8516 10.2534 14.1046 11.1381 13.2714 12.1248C12.6578 12.8514 11.9997 13.6308 11.2863 14.2762C11.8153 14.7967 12.353 14.9322 12.8939 14.8443C13.5614 14.7359 14.2673 14.3023 14.9749 13.8123C15.8988 13.1725 17.1302 13.2829 17.9249 14.0776L22.2906 18.4434ZM12.7554 11.6881C12.0848 12.4822 11.3596 13.341 10.5868 13.989C10.4358 14.1154 10.4249 14.3434 10.5616 14.4843C11.3399 15.4084 12.1611 15.6478 13.0024 15.5111C13.7995 15.3816 14.5832 14.9048 15.3587 14.3679C16.0171 13.9119 16.8798 13.9904 17.446 14.5565L21.7978 18.9083C22.1596 19.2701 22.1075 19.7542 21.7833 20.1202C21.4528 20.4342 20.9236 20.4275 20.6012 20.105L17.2481 16.7517C17.1844 16.6893 17.0986 16.6545 17.0093 16.6549C16.9201 16.6554 16.8346 16.691 16.7715 16.7541C16.7084 16.8172 16.6727 16.9027 16.6723 16.9919C16.6718 17.0812 16.7066 17.167 16.7691 17.2307C17.9333 18.3949 19.0975 19.559 20.2617 20.7232C20.5905 21.0519 20.59 21.5912 20.2615 21.9198L20.2621 21.9204C19.9336 22.2481 19.3932 22.2481 19.0651 21.9199L15.4581 18.3126C15.3943 18.2502 15.3085 18.2154 15.2193 18.2158C15.13 18.2163 15.0445 18.2519 14.9814 18.315C14.9183 18.3781 14.8827 18.4636 14.8822 18.5528C14.8818 18.6421 14.9166 18.7279 14.9791 18.7916L17.6547 21.4675C17.9711 21.7972 17.9658 22.3281 17.643 22.6517L17.6421 22.6513C17.3136 22.9798 16.7743 22.9801 16.4457 22.6515L13.5166 19.7223C13.4529 19.6598 13.367 19.625 13.2778 19.6255C13.1885 19.6259 13.1031 19.6616 13.04 19.7247C12.9769 19.7878 12.9412 19.8733 12.9408 19.9625C12.9403 20.0518 12.9751 20.1376 13.0376 20.2013L14.4031 21.5668C14.7228 21.897 14.718 22.4289 14.3933 22.7536L14.3939 22.7543C14.0653 23.0822 13.5249 23.0819 13.1967 22.7536L7.98775 17.6043L9.53901 10.8311H13.4911C13.2522 11.0998 13.0075 11.3896 12.7554 11.6881Z" fill="#3B82F6" />
              </svg>
              Industries
            </button>
          </div>
          <p className='text-[var(--primary-navy)] text-2xl lg:text-5xl font-bold mt-4'>Stories of <span className='bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-gold)] bg-clip-text text-transparent'>Impact</span></p>
          <p className='text-[var(--charcoal)] mt-4 text-sm md:text-base lg:text-lg'>
            Leading organizations worldwide have transformed operations, optimized
            performance, and achieved growth through DRC&apos;s digital strategies, innovative
            solutions, and expert guidance.
          </p>
          <div className="flex justify-left mt-10 sm:mt-12 md:mt-16">
            <div className="p-px bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-gold)] rounded-full">

              <button className="group inline-flex items-center gap-2 md:gap-3 p-[2px] rounded-full bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-gold)] hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <span className="inline-flex items-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-3.5 rounded-full bg-white text-[var(--primary-navy)] font-semibold text-sm md:text-base hover:cursor-pointer group-hover:bg-opacity-95 text-white">
                  Learn More
                </span>
              </button>

            </div>
          </div>
        </div>

      </section>
      {/* Right Section */}
      <section className="w-full">
        <StackingCards cards={testimonialCards} />
      </section>
    </div>
  );
};

export default CustomerStore;