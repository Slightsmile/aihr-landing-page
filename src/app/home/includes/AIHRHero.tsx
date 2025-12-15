"use client";

import { useRouter } from 'next/navigation';
import { useRef, useState, useEffect, useCallback } from 'react';
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
  const [isDesktop, setIsDesktop] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(false);
  const [hasUserScrolled, setHasUserScrolled] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const autoScrollIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const resumeTimerRef = useRef<NodeJS.Timeout | null>(null);
  const userScrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const initialDelayTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    checkIsDesktop();
    window.addEventListener('resize', checkIsDesktop);
    return () => window.removeEventListener('resize', checkIsDesktop);
  }, []);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Initial load animation
  useEffect(() => {
    if (!prefersReducedMotion) {
      const timer = setTimeout(() => {
        setIsInitialLoad(false);
      }, featureCards.length * 100 + 600);

      return () => clearTimeout(timer);
    } else {
      setIsInitialLoad(false);
    }
  }, [prefersReducedMotion]);

  // Auto-scroll functionality
  const scrollToCard = useCallback((index: number) => {
    if (!container.current) return;

    const cardHeight = container.current.scrollHeight / featureCards.length;
    const targetScroll = cardHeight * index;

    container.current.scrollTo({
      top: targetScroll,
      behavior: 'smooth'
    });

    setCurrentCardIndex(index);
  }, []);

  useEffect(() => {
    if (!isDesktop || prefersReducedMotion || hasUserScrolled || isInitialLoad) return;

    // Clear any existing timers
    if (autoScrollIntervalRef.current) {
      clearInterval(autoScrollIntervalRef.current);
    }
    if (initialDelayTimerRef.current) {
      clearTimeout(initialDelayTimerRef.current);
    }

    // Start auto-scroll after initial delay
    initialDelayTimerRef.current = setTimeout(() => {
      setIsAutoScrolling(true);
      let currentIndex = 0;

      autoScrollIntervalRef.current = setInterval(() => {
        currentIndex++;

        if (currentIndex >= featureCards.length) {
          if (autoScrollIntervalRef.current) {
            clearInterval(autoScrollIntervalRef.current);
          }
          setIsAutoScrolling(false);
          return;
        }

        scrollToCard(currentIndex);
      }, 4000); // 4 seconds pause on each card
    }, 1000); // 1 second delay before starting

    return () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
      }
      if (initialDelayTimerRef.current) {
        clearTimeout(initialDelayTimerRef.current);
      }
    };
  }, [isDesktop, isInitialLoad, hasUserScrolled, prefersReducedMotion, scrollToCard]);

  // Handle manual scroll
  useEffect(() => {
    if (!isDesktop || !container.current) return;

    const handleScroll = () => {
      // Only set hasUserScrolled if auto-scroll is not active
      if (!isAutoScrolling) {
        setHasUserScrolled(true);
      }

      // Clear existing timers
      if (resumeTimerRef.current) {
        clearTimeout(resumeTimerRef.current);
      }
      if (userScrollTimeoutRef.current) {
        clearTimeout(userScrollTimeoutRef.current);
      }

      // Resume auto-scroll after 3 seconds of inactivity
      userScrollTimeoutRef.current = setTimeout(() => {
        setHasUserScrolled(false);
      }, 3000);
    };

    const containerElement = container.current;
    containerElement.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      containerElement.removeEventListener('scroll', handleScroll);
      if (userScrollTimeoutRef.current) {
        clearTimeout(userScrollTimeoutRef.current);
      }
      if (resumeTimerRef.current) {
        clearTimeout(resumeTimerRef.current);
      }
    };
  }, [isDesktop, isAutoScrolling]);

  // Scroll for Desktop (Independent Container)
  const { scrollYProgress: containerScrollProgress } = useScroll({
    container: container,
    offset: ['start start', 'end end'],
  });

  // Scroll for Mobile (Window Scroll)
  const { scrollYProgress: windowScrollProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  return (
    <section className="flex flex-col md:flex-row relative bg-[var(--light-bg)] md:h-screen md:overflow-hidden">

      {/* Background blur elements */}
      <div className="animate-pulse fixed bottom-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl pointer-events-none z-0 mix-blend-multiply opacity-70" />
      <div className="animate-pulse fixed bottom-0 left-0 w-96 h-96 bg-yellow-100 rounded-full blur-3xl pointer-events-none z-0 mix-blend-multiply opacity-70" />
      <div className="animate-pulse fixed top-10 left-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl pointer-events-none z-0 mix-blend-multiply opacity-70" />
      <div className="animate-pulse fixed top-0 right-120 w-96 h-106 bg-amber-50 rounded-full blur-3xl pointer-events-none z-0 mix-blend-multiply opacity-70" />

      {/* Left Side - Hero Content */}
      <div className="w-full md:w-1/2 flex items-center justify-center px-6 md:px-12 lg:px-20 py-12 md:py-0 min-h-screen md:h-full relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[var(--primary-navy)] mb-6 md:mb-4 leading-tight">
            Transforming <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-gold)]">Human Resources</span>{' '}<br /> with AI Intelligence
          </h1>

          <p className="text-sm md:text-base lg:text-md text-[var(--charcoal)] mb-8 md:mb-12 max-w-2xl leading-relaxed font-medium">
            AIHR is a next-generation Human Resource Technology provider focused on transforming how organizations attract, develop, and retain talent. Powered by advanced AI, Machine Learning, and automation, AIHR makes HR faster, smarter, and more strategic.
          </p>

          <button className="group inline-flex items-center gap-2 md:gap-3 p-[2px] rounded-full bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-gold)] hover:shadow-lg hover:shadow-blue-200/50 transition-all duration-300 transform hover:scale-105" onClick={handleExploreClick}>
            <span className="inline-flex items-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-3.5 rounded-full bg-[var(--card-bg)] text-[var(--primary-navy)] font-bold text-sm md:text-base hover:cursor-pointer transition-colors">
              View Pricing
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z" stroke="var(--accent-blue)" strokeWidth="1.5" />
                <path d="M12.4014 8.29796L15.3213 7.32465C16.2075 7.02924 16.6507 6.88153 16.8846 7.11544C17.1185 7.34935 16.9708 7.79247 16.6753 8.67871L15.702 11.5986C15.1986 13.1088 14.9469 13.8639 14.4054 14.4054C13.8639 14.9469 13.1088 15.1986 11.5986 15.702L8.67871 16.6753C7.79247 16.9708 7.34935 17.1185 7.11544 16.8846C6.88153 16.6507 7.02924 16.2075 7.32465 15.3213L8.29796 12.4014C8.80136 10.8912 9.05306 10.1361 9.59457 9.59457C10.1361 9.05306 10.8912 8.80136 12.4014 8.29796Z" stroke="var(--accent-gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12.0001 12L11.9937 12.0064" stroke="var(--accent-blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </button>
        </div>
      </div>

      {/* Right Side - Independent Scrollable Stacking Cards Container */}
      <div
        ref={container}
        className="w-full md:w-1/2 relative z-10 md:overflow-y-auto md:h-full no-scrollbar"
      >
        <div className="relative">
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
                progress={isDesktop ? containerScrollProgress : windowScrollProgress}
                range={range}
                targetScale={targetScale}
                containerRef={container}
                isDesktop={isDesktop}
                isInitialLoad={isInitialLoad}
                currentCardIndex={currentCardIndex}
                prefersReducedMotion={prefersReducedMotion}
              />
            );
          })}
        </div>
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
  containerRef: React.RefObject<HTMLDivElement | null>;
  isDesktop: boolean;
  isInitialLoad: boolean;
  currentCardIndex: number;
  prefersReducedMotion: boolean;
}

const StackingCard: React.FC<StackingCardProps> = ({
  index,
  title,
  description,
  icon,
  buttonText,
  progress,
  range,
  targetScale,
  containerRef,
  isDesktop,
  isInitialLoad,
  currentCardIndex,
  prefersReducedMotion
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    container: isDesktop ? containerRef : undefined,
    offset: ['start end', 'start start'],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.05, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  // Initial load animation variants
  const getInitialAnimation = () => {
    if (prefersReducedMotion) {
      return {
        initial: { opacity: 1, scale: 1, y: 0 },
        animate: { opacity: 1, scale: 1, y: 0 }
      };
    }

    return {
      initial: {
        opacity: 0,
        scale: 0.8,
        y: 100
      },
      animate: {
        opacity: 1,
        scale: 1,
        y: 0
      },
      transition: {
        delay: index * 0.1,
        duration: 0.6,
        ease: [0.34, 1.56, 0.64, 1] as const // Spring-like easing
      }
    };
  };

  // Active card styling
  const isActive = currentCardIndex === index;
  const isPrevious = currentCardIndex > index;

  const getCardOpacity = () => {
    return 1;
  };

  const getCardBlur = () => {
    if (prefersReducedMotion || !isDesktop) return 0;
    if (isActive) return 0;
    if (isPrevious) return 2;
    return 0;
  };

  return (
    <motion.div
      ref={cardRef}
      className="h-auto md:h-screen flex items-center justify-center relative md:sticky top-0 px-4 md:px-12 py-10 md:py-0"
      {...getInitialAnimation()}
    >
      <motion.div
        style={{
          scale: isDesktop ? scale : 1,
          top: `calc(-5vh + ${index * 25}px)`,
          transformOrigin: 'top',
          opacity: getCardOpacity(),
          filter: `blur(${getCardBlur()}px)`,
          willChange: 'transform, opacity, filter'
        }}
        transition={{
          duration: 0.5,
          ease: 'easeOut'
        }}
        className="relative w-full max-w-[650px] h-[350px] md:h-[400px] rounded-4xl p-8 md:p-12 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] border border-gray-200/50 bg-[var(--card-bg)] text-[var(--primary-navy)] overflow-hidden"
      >
        {/* Background decorative elements */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-50 rounded-full blur-3xl opacity-80" />
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-amber-50 rounded-full blur-3xl opacity-80" />

        <div className="absolute inset-0 opacity-100 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[var(--accent-gold)] to-transparent opacity-90"></div>
          <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[var(--accent-blue)] to-transparent opacity-90"></div>
        </div>

        {/* Card Content */}
        <motion.div
          className="relative z-10 h-full flex flex-col justify-between"
          style={{ scale: imageScale }}
        >
          <div>
            <div className="flex items-start gap-4 mb-4">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center backdrop-blur-sm shrink-0 border border-gray-100 bg-white shadow-lg">
                <span className="text-3xl md:text-4xl filter drop-shadow-sm">{icon}</span>
              </div>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold leading-tight pt-1 md:pt-2 text-[var(--primary-navy)]">{title}</h2>
            </div>
            <p className="text-sm md:text-base leading-relaxed text-[var(--charcoal)] mb-4 font-medium">{description}</p>
          </div>

          <Link href="/pricing">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full transition-all w-fit text-sm md:text-base font-semibold group"
              style={{ background: 'linear-gradient(135deg, var(--accent-blue), var(--accent-gold))', padding: '2px', borderRadius: '9999px' }}
            >
              <span className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-[var(--primary-navy)] font-bold group-hover:bg-opacity-95 transition-all">
                {buttonText}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="var(--accent-blue)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default AIHRHero;
