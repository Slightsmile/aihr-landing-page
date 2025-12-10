'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { StackingCart, StackingSetting, StackingBackdropIcon } from '@/app/static/icons';
import Link from 'next/link';


interface CardData {
  id: string;
  title: string;
  description: string;
  color: string;
  icon?: React.ReactNode;
  buttonText?: string;
}

interface StackingCardsProps {
  cards?: CardData[];
}

const defaultCards: CardData[] = [
  {
    id: '1',
    title: 'Recruitment & Talent Acquisition',
    description: 'AI scans CVs, matches candidates to job descriptions, and analyzes video interviews to streamline hiring.',
    color: '#030712',
    buttonText: 'Explore Offers',
    icon: <span>🎯</span>,
  },
  {
    id: '2',
    title: 'Employee Onboarding Chatbot',
    description: 'AI provides personalized onboarding through chatbots, guiding new hires through paperwork, training, and compliance.',
    color: '#030712',
    buttonText: 'Explore Offers',
    icon: <span>🤝</span>,
  },
  {
    id: '3',
    title: 'Employee Engagement & Retention',
    description: 'AI predicts attrition risks and suggests interventions to retain top talent.',
    color: '#030712',
    buttonText: 'Explore Offers',
    icon: <span>💚</span>,
  },
  {
    id: '4',
    title: 'Performance Management',
    description: 'AI offers data-driven evaluations, detects burnout, and reduces bias in performance reviews.',
    color: '#030712',
    buttonText: 'Explore Offers',
    icon: <span>📊</span>,
  },
  {
    id: '5',
    title: 'Learning & Development (L&D)',
    description: 'AI personalizes training by identifying skill gaps and recommending adaptive learning modules.',
    color: '#030712',
    buttonText: 'Explore Offers',
    icon: <span>📚</span>,
  },
  {
    id: '6',
    title: 'Diversity, Equity & Inclusion (DEI)',
    description: 'AI ensures fairness by reducing bias in hiring, promotions, and job descriptions.',
    color: '#030712',
    buttonText: 'Explore Offers',
    icon: <span>🌈</span>,
  },
  {
    id: '7',
    title: 'HR Chatbots & Self-Service',
    description: 'AI-powered chatbots answer HR queries instantly, reducing support costs.',
    color: '#030712',
    buttonText: 'Explore Offers',
    icon: <span>💬</span>,
  },
  {
    id: '8',
    title: 'Workforce Planning & Forecasting',
    description: 'AI predicts workforce needs, helping HR align staffing with business strategy.',
    color: '#030712',
    buttonText: 'Explore Offers',
    icon: <span>🔮</span>,
  },
];

const StackingCards: React.FC<StackingCardsProps> = ({ cards = defaultCards }) => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  return (
    <div id="features" ref={container} className="relative bg-gray-950">
      {cards.map((card, i) => {
        const targetScale = 1 - (cards.length - i) * 0.05;
        // Calculate range dynamically to ensure consistent behavior for all cards
        const range = [i / cards.length, 1];

        return (
          <Card
            key={card.id}
            index={i}
            title={card.title}
            description={card.description}
            color={card.color}
            buttonText={card.buttonText}
            icon={card.icon}
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
  description: string;
  color: string;
  buttonText?: string;
  icon?: React.ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  progress: any;
  range: number[];
  targetScale: number;
}

const Card: React.FC<CardProps> = ({ index, title, description, color, buttonText, icon, progress, range, targetScale, }) => {

  const container = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start'],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.05, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className="h-screen flex items-center justify-center sticky top-0 ">

      <motion.div
        style={{
          backgroundColor: color, scale, top: `calc(-5vh + ${index * 25}px)`, transformOrigin: 'top',
        }}
        transition={{ duration: 0.5, ease: 'easeOut', }}
        className="relative flex items-center w-[95vw] md:w-[1400px] h-[500px] rounded-4xl p-12 shadow-2xl text-white overflow-hidden border-2 border-[#444c45]">

        <div className="absolute -top-10 -left-20 w-80 h-80 bg-[#202f22] rounded-full blur-3xl" />
        <div className="absolute -top-10 -right-50 w-160 h-160 bg-[#2f4930] rounded-full blur-3xl" />

        <div className="absolute inset-0 opacity-10 overflow-hidden">
          <div className="absolute top-10 right-20 w-40 h-40 rounded-full border border-white/20"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full border border-white/20"></div>
          <div className="absolute top-1/2 right-1/4 w-24 h-24 rounded-full border border-white/20"></div>
        </div>

        {/* Left Content */}
        <div className="w-1/2 relative z-10 flex flex-col gap-6">
          <div className="flex items-start gap-6">
            <div className="w-28 h-28 rounded-full  flex items-center justify-center  backdrop-blur-sm shrink-0 border-2 border-[#b8c9ba]">
              <span className="text-4xl">{icon}</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight pt-2">{title}</h2>
          </div>
          <p className="text-sm md:text-base leading-relaxed text-white/90 pr-4">{description}</p>

          <Link href="/pricing">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 mt-4 px-8 py-3 rounded-full transition-all w-fit text-sm md:text-base font-semibold"
              style={{ background: 'linear-gradient(135deg, #5e5e5e, #074a0a)', padding: '2px', borderRadius: '9999px', }}
            >
              <span className="flex items-center gap-3 px-6 py-2 rounded-full bg-gradient-to-t from-[#92eb95] via-[#9dffa1] to-[#c3ffc6] text-[#2d4c2e] font-semibold">
                {buttonText}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </motion.button>
          </Link>

        </div>

        {/* Right Decorative Icons */}
        <div className="w-1/2 relative z-0 flex items-center justify-center">
          <motion.div className="relative w-full h-full flex items-center justify-center" style={{ scale: imageScale }} >

            <StackingSetting />
            <StackingBackdropIcon />

          </motion.div>
        </div>
      </motion.div >
    </div >
  );
};

export default StackingCards;