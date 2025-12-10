"use client";

import { useRouter } from 'next/navigation';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import Link from 'next/link';

interface CardData {
  id: string;
  title: string;
  description: string;
  icon: string;
  buttonText: string;
}

const featureCards: CardData[] = [
  {
    id: '1',
    title: 'Recruitment & Talent Acquisition',
    description: 'AI scans CVs, matches candidates to job descriptions, and analyzes video interviews to streamline hiring.',
    icon: '🎯',
    buttonText: 'Explore Offers',
  },
  {
    id: '2',
    title: 'Employee Onboarding Chatbot',
    description: 'AI provides personalized onboarding through chatbots, guiding new hires through paperwork, training, and compliance.',
    icon: '🤝',
    buttonText: 'Explore Offers',
  },
  {
    id: '3',
    title: 'Employee Engagement & Retention',
    description: 'AI predicts attrition risks and suggests interventions to retain top talent.',
    icon: '💚',
    buttonText: 'Explore Offers',
  },
  {
    id: '4',
    title: 'Performance Management',
    description: 'AI offers data-driven evaluations, detects burnout, and reduces bias in performance reviews.',
    icon: '📊',
    buttonText: 'Explore Offers',
  },
  {
    id: '5',
    title: 'Learning & Development (L&D)',
    description: 'AI personalizes training by identifying skill gaps and recommending adaptive learning modules.',
    icon: '📚',
    buttonText: 'Explore Offers',
  },
  {
    id: '6',
    title: 'Diversity, Equity & Inclusion (DEI)',
    description: 'AI ensures fairness by reducing bias in hiring, promotions, and job descriptions.',
    icon: '🌈',
    buttonText: 'Explore Offers',
  },
  {
    id: '7',
    title: 'HR Chatbots & Self-Service',
    description: 'AI-powered chatbots answer HR queries instantly, reducing support costs.',
    icon: '💬',
    buttonText: 'Explore Offers',
  },
  {
    id: '8',
    title: 'Workforce Planning & Forecasting',
    description: 'AI predicts workforce needs, helping HR align staffing with business strategy.',
    icon: '🔮',
    buttonText: 'Explore Offers',
  },
];

const AIHRHero = () => {
  const router = useRouter();
  const handleExploreClick = () => {
    router.push('/pricing');
  };

  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  return (
    <section className="min-h-screen flex flex-col md:flex-row relative bg-gray-950">
      {/* Background blur elements */}
      <div className="animate-pulse fixed bottom-0 right-0 w-96 h-96 bg-[#141e14] rounded-full blur-3xl pointer-events-none z-0" />
      <div className="animate-pulse fixed bottom-0 left-0 w-96 h-96 bg-[#161e16] rounded-full blur-3xl pointer-events-none z-0" />
      <div className="animate-pulse fixed top-10 left-0 w-96 h-96 bg-[#161e16] rounded-full blur-3xl pointer-events-none z-0" />
      <div className="animate-pulse fixed top-0 right-120 w-96 h-106 bg-[#1b251b] rounded-full blur-3xl pointer-events-none z-0" />
      <div className="animate-pulse fixed top-10 left-0 w-96 h-96 bg-green-500/5 rounded-full blur-3xl pointer-events-none z-0" />

      {/* Left Side - Hero Content */}
      <div className="w-full md:w-1/2 flex items-center px-6 md:px-12 lg:px-20 py-20 md:py-0 md:min-h-screen relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-[#ffffff] mb-6 md:mb-4 leading-tight">
            Transforming <span className="text-[#9dffa1]">Human Resources</span>{' '}<br /> with AI Intelligence
          </h1>

          <p className="text-sm md:text-base lg:text-md text-[#bebec0] mb-8 md:mb-12 max-w-2xl leading-relaxed">
            AIHR is a next-generation Human Resource Technology provider focused on transforming how organizations attract, develop, and retain talent. Powered by advanced AI, Machine Learning, and automation, AIHR makes HR faster, smarter, and more strategic.
          </p>

          <button className="group inline-flex items-center gap-2 md:gap-3 p-[2px] rounded-full bg-gradient-to-r from-[#dcdedd] to-[#3eb343] hover:shadow-lg hover:shadow-green-400/50 transition-all duration-300 transform hover:scale-105" onClick={handleExploreClick}>
            <span className="inline-flex items-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-3.5 rounded-full bg-gradient-to-t from-[#92eb95] via-[#9dffa1] to-[#c3ffc6] text-[#2d4c2e] font-semibold text-sm md:text-base hover:cursor-pointer">
              View Pricing
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z" stroke="#2D4C2E" strokeWidth="1.5" />
                <path d="M12.4014 8.29796L15.3213 7.32465C16.2075 7.02924 16.6507 6.88153 16.8846 7.11544C17.1185 7.34935 16.9708 7.79247 16.6753 8.67871L15.702 11.5986C15.1986 13.1088 14.9469 13.8639 14.4054 14.4054C13.8639 14.9469 13.1088 15.1986 11.5986 15.702L8.67871 16.6753C7.79247 16.9708 7.34935 17.1185 7.11544 16.8846C6.88153 16.6507 7.02924 16.2075 7.32465 15.3213L8.29796 12.4014C8.80136 10.8912 9.05306 10.1361 9.59457 9.59457C10.1361 9.05306 10.8912 8.80136 12.4014 8.29796Z" stroke="#2D4C2E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12.0001 12L11.9937 12.0064" stroke="#2D4C2E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </button>
        </div>
      </div>

      {/* Right Side - Independent Scrollable Stacking Cards Container */}
      <div
        ref={container}
        className="w-full md:w-1/2 md:h-screen md:overflow-y-auto relative z-10 scrollbar-hide"
        style={{
          scrollbarWidth: 'none', /* Firefox */
          msOverflowStyle: 'none', /* IE and Edge */
        }}
      >
        {featureCards.map((card, i) => {
          const targetScale = 1 - (featureCards.length - i) * 0.05;
          const range = [i / featureCards.length, 1];

          return (
            <StackingCard
              key={card.id}
              index={i}
              title={card.title}
              description={card.description}
              icon={card.icon}
              buttonText={card.buttonText}
              progress={scrollYProgress}
              range={range}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </section>
  );
};

interface StackingCardProps {
  index: number;
  title: string;
  description: string;
  icon: string;
  buttonText: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  progress: any;
  range: number[];
  targetScale: number;
}

const StackingCard: React.FC<StackingCardProps> = ({ index, title, description, icon, buttonText, progress, range, targetScale }) => {
  const container = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start'],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.05, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className="h-screen flex items-center justify-center sticky top-0 px-6 md:px-12">
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${index * 25}px)`,
          transformOrigin: 'top',
        }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="relative w-full max-w-[600px] h-[320px] md:h-[350px] rounded-3xl p-6 md:p-8 shadow-2xl text-white overflow-hidden border-2 border-[#444c45] bg-gradient-to-br from-[#0a1f0a] to-[#030712]"
      >
        {/* Background decorative elements */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#2f4930] rounded-full blur-3xl opacity-50" />
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#202f22] rounded-full blur-3xl opacity-50" />

        <div className="absolute inset-0 opacity-10 overflow-hidden">
          <div className="absolute top-10 right-10 w-24 h-24 rounded-full border border-white/20"></div>
          <div className="absolute bottom-10 left-10 w-20 h-20 rounded-full border border-white/20"></div>
        </div>

        {/* Card Content */}
        <motion.div
          className="relative z-10 h-full flex flex-col justify-between"
          style={{ scale: imageScale }}
        >
          <div>
            <div className="flex items-start gap-4 mb-3">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center backdrop-blur-sm shrink-0 border-2 border-[#b8c9ba]">
                <span className="text-2xl md:text-3xl">{icon}</span>
              </div>
              <h2 className="text-lg md:text-xl lg:text-2xl font-bold leading-tight pt-1">{title}</h2>
            </div>
            <p className="text-xs md:text-sm leading-relaxed text-white/90 mb-4">{description}</p>
          </div>

          <Link href="/pricing">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full transition-all w-fit text-xs md:text-sm font-semibold"
              style={{ background: 'linear-gradient(135deg, #5e5e5e, #074a0a)', padding: '2px', borderRadius: '9999px' }}
            >
              <span className="flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-t from-[#92eb95] via-[#9dffa1] to-[#c3ffc6] text-[#2d4c2e] font-semibold">
                {buttonText}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AIHRHero;

